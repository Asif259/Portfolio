"use client";

import { useEffect, useRef } from "react";

interface HeroWebGLCanvasProps {
  imageSrc?: string;
  containerId?: string;
}

export default function HeroWebGLCanvas({
  imageSrc = "/hero.webp",
  containerId = "hero-section",
}: HeroWebGLCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const staticRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const staticBg = staticRef.current;
    if (!canvas) return;

    const hero = document.getElementById(containerId);
    if (!hero) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;

    // Fallback if reduced motion or coarse pointer on small screens
    if (prefersReducedMotion || (window.innerWidth < 768 && isCoarse)) {
      return;
    }

    const gl =
      canvas.getContext("webgl", { alpha: true, antialias: false }) ||
      (canvas.getContext("experimental-webgl", {
        alpha: true,
        antialias: false,
      }) as WebGLRenderingContext | null);

    if (!gl) {
      console.warn("WebGL not supported, using CSS portrait fallback.");
      return;
    }

    // Capture non-null WebGL context and canvas element for closures
    const ctx: WebGLRenderingContext = gl;
    const canvasEl: HTMLCanvasElement = canvas;

    // Determine supported float precision in fragment shader
    const precisionFormat = ctx.getShaderPrecisionFormat(
      ctx.FRAGMENT_SHADER,
      ctx.HIGH_FLOAT
    );
    const fsPrecision =
      precisionFormat && precisionFormat.precision > 0 ? "highp" : "mediump";

    const vsSource = `
      attribute vec2 position;
      varying vec2 vUv;
      void main(){
        vUv = position * 0.5 + 0.5;
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    const fsSource = `
      precision ${fsPrecision} float;
      varying vec2 vUv;
      uniform sampler2D image;
      uniform vec2 resolution, imageSize, mouse, trail[9];
      uniform float strength, time;

      vec2 coverUv(vec2 uv){
        float rs = resolution.x / resolution.y;
        float ims = imageSize.x / imageSize.y;
        // Scale down cover image view by 10% (zoom out factor 1.111 = 1.0 / 0.90)
        vec2 scale = (rs < ims ? vec2(rs / ims, 1.0) : vec2(1.0, ims / rs)) * 1.111;
        // Anchor at eye-level (0.5, 0.42) so the face remains harmoniously positioned
        return (uv - vec2(0.5, 0.42)) * scale + vec2(0.5, 0.42);
      }

      void main(){
        vec2 uv = vUv;
        vec2 aspect = vec2(resolution.x / resolution.y, 1.0);
        vec2 delta = (uv - mouse) * aspect;
        float dist = length(delta);
        float radius = 0.47;
        float falloff = (1.0 - smoothstep(0.0, radius, dist)) * strength;
        vec2 dir = delta / (dist + 0.0001);
        vec2 tangent = vec2(-dir.y, dir.x);
        float wave = sin(dist * 38.0 - time * 2.15) * falloff;
        float secondary = sin(dist * 19.0 + time * 0.7) * falloff;
        vec2 displacement = dir * (wave * 0.00525 + falloff * 0.004);
        displacement += tangent * secondary * 0.001875;
        vec2 sampleUv = coverUv(uv + displacement);
        float aberration = (falloff * 0.0016 + abs(wave) * 0.0012);
        vec2 rgbShift = dir * aberration;
        float r = texture2D(image, sampleUv + rgbShift).r;
        float g = texture2D(image, sampleUv).g;
        float b = texture2D(image, sampleUv - rgbShift).b;
        vec3 color = vec3(r, g, b);
        vec3 orange = vec3(1.0, 0.22, 0.025);
        float glow = falloff * (0.10 + 0.08 * (sin(dist * 28.0 - time * 1.5) * 0.5 + 0.5));
        float trailGlow = 0.0;
        for(int i = 0; i < 9; i++){
          vec2 trailDelta = (uv - trail[i]) * aspect;
          float trailDistance = length(trailDelta);
          float age = 1.0 - float(i) / 9.0;
          float halo = exp(-trailDistance * trailDistance * 145.0);
          float core = exp(-trailDistance * trailDistance * 420.0);
          float shimmer = 0.82 + 0.18 * sin(time * 2.0 - float(i) * 0.72);
          trailGlow += (halo * 0.48 + core * 0.28) * age * age * shimmer;
        }
        float headProtection = smoothstep(0.035, 0.105, dist);
        trailGlow = min(trailGlow, 1.35) * strength * headProtection;
        vec3 trailOrange = vec3(1.0, 0.31, 0.045);
        vec3 trailGold = vec3(1.0, 0.58, 0.20);
        color += orange * glow;
        color += trailOrange * trailGlow * 0.46;
        color += trailGold * pow(trailGlow, 1.65) * 0.11;
        gl_FragColor = vec4(color, 1.0);
      }
    `;

    function createShader(type: number, source: string) {
      const shader = ctx.createShader(type);
      if (!shader) return null;
      ctx.shaderSource(shader, source);
      ctx.compileShader(shader);
      if (!ctx.getShaderParameter(shader, ctx.COMPILE_STATUS)) {
        console.warn("Shader compile error: ", ctx.getShaderInfoLog(shader));
        ctx.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vs = createShader(ctx.VERTEX_SHADER, vsSource);
    const fs = createShader(ctx.FRAGMENT_SHADER, fsSource);
    if (!vs || !fs) return;

    const program = ctx.createProgram();
    if (!program) return;
    ctx.attachShader(program, vs);
    ctx.attachShader(program, fs);
    ctx.linkProgram(program);
    if (!ctx.getProgramParameter(program, ctx.LINK_STATUS)) {
      console.warn("Shader link error: ", ctx.getProgramInfoLog(program));
      return;
    }
    ctx.useProgram(program);

    // Quad geometry (2 triangles covering clip space)
    const quadVertices = new Float32Array([
      -1.0, -1.0, 1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0,
    ]);
    const vbo = ctx.createBuffer();
    ctx.bindBuffer(ctx.ARRAY_BUFFER, vbo);
    ctx.bufferData(ctx.ARRAY_BUFFER, quadVertices, ctx.STATIC_DRAW);

    const aPosition = ctx.getAttribLocation(program, "position");
    ctx.enableVertexAttribArray(aPosition);
    ctx.vertexAttribPointer(aPosition, 2, ctx.FLOAT, false, 0, 0);

    // Uniform locations
    const uResolution = ctx.getUniformLocation(program, "resolution");
    const uImageSize = ctx.getUniformLocation(program, "imageSize");
    const uMouse = ctx.getUniformLocation(program, "mouse");
    const uTrail = ctx.getUniformLocation(program, "trail");
    const uStrength = ctx.getUniformLocation(program, "strength");
    const uTime = ctx.getUniformLocation(program, "time");
    const uImage = ctx.getUniformLocation(program, "image");

    // Texture configuration
    const texture = ctx.createTexture();
    ctx.activeTexture(ctx.TEXTURE0);
    ctx.bindTexture(ctx.TEXTURE_2D, texture);
    ctx.pixelStorei(ctx.UNPACK_FLIP_Y_WEBGL, true);
    ctx.texParameteri(ctx.TEXTURE_2D, ctx.TEXTURE_WRAP_S, ctx.CLAMP_TO_EDGE);
    ctx.texParameteri(ctx.TEXTURE_2D, ctx.TEXTURE_WRAP_T, ctx.CLAMP_TO_EDGE);
    ctx.texParameteri(ctx.TEXTURE_2D, ctx.TEXTURE_MIN_FILTER, ctx.LINEAR);
    ctx.texParameteri(ctx.TEXTURE_2D, ctx.TEXTURE_MAG_FILTER, ctx.LINEAR);

    let isTextureReady = false;
    let targetMouse = { x: 0.5, y: 0.5 };
    let smoothMouse = { x: 0.5, y: 0.5 };
    const trails = Array.from({ length: 9 }, () => ({ x: 0.5, y: 0.5 }));
    let strength = 0.0;
    let isInteracting = false;
    const startTime = performance.now();
    let isRunning = false;
    let rafId: number | null = null;
    let destroyed = false;

    // Face zoom & scroll parallax state
    let isFaceHovered = false;
    let faceScale = 1.0;
    let targetFaceScale = 1.0;
    let parallaxProgress = 0;

    function resize() {
      if (!hero || !canvasEl) return;
      const rect = hero.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2.0);
      canvasEl.width = Math.round(rect.width * dpr);
      canvasEl.height = Math.round(rect.height * dpr);
      ctx.viewport(0, 0, canvasEl.width, canvasEl.height);
    }
    window.addEventListener("resize", resize, { passive: true });
    resize();

    const portraitImg = new Image();
    portraitImg.crossOrigin = "anonymous";
    portraitImg.onload = () => {
      if (destroyed) return;
      ctx.bindTexture(ctx.TEXTURE_2D, texture);
      ctx.texImage2D(
        ctx.TEXTURE_2D,
        0,
        ctx.RGBA,
        ctx.RGBA,
        ctx.UNSIGNED_BYTE,
        portraitImg
      );
      isTextureReady = true;

      // Render initial frame and smoothly fade in WebGL canvas
      draw(performance.now());
      canvasEl.style.opacity = "1";
    };
    portraitImg.src = imageSrc;

    function updateBackdropTransforms() {
      faceScale += (targetFaceScale - faceScale) * 0.1;
      const totalScale = (1 + parallaxProgress * 0.18) * faceScale;
      const translateY = parallaxProgress * -6;
      const transformStr = `translate3d(0, ${translateY}%, 0) scale(${totalScale})`;
      if (staticBg) staticBg.style.transform = transformStr;
      if (canvasEl) canvasEl.style.transform = transformStr;

      if (Math.abs(targetFaceScale - faceScale) > 0.001) {
        requestAnimationFrame(updateBackdropTransforms);
      }
    }

    function draw(now: number) {
      if (!isTextureReady || destroyed) return;
      const elapsed = (now - startTime) * 0.001;

      // Pointer smoothing factor: 0.075
      smoothMouse.x += (targetMouse.x - smoothMouse.x) * 0.075;
      smoothMouse.y += (targetMouse.y - smoothMouse.y) * 0.075;

      // Interaction strength smoothing
      if (isInteracting) {
        strength += (1.0 - strength) * 0.07;
      } else {
        strength += (0.0 - strength) * 0.028;
        if (strength < 0.001) strength = 0.0;
      }

      // 9-point trailing chain: point i follows predecessor with 0.19 - i * 0.009
      trails[0].x += (smoothMouse.x - trails[0].x) * 0.19;
      trails[0].y += (smoothMouse.y - trails[0].y) * 0.19;
      for (let i = 1; i < 9; i++) {
        const factor = 0.19 - i * 0.009;
        trails[i].x += (trails[i - 1].x - trails[i].x) * factor;
        trails[i].y += (trails[i - 1].y - trails[i].y) * factor;
      }

      // Flatten trail coordinates with Y flipped into WebGL coordinate space
      const trailArray = new Float32Array(18);
      for (let i = 0; i < 9; i++) {
        trailArray[i * 2] = trails[i].x;
        trailArray[i * 2 + 1] = 1.0 - trails[i].y;
      }

      ctx.uniform2f(uResolution, canvasEl.width, canvasEl.height);
      ctx.uniform2f(
        uImageSize,
        portraitImg.naturalWidth || 2752,
        portraitImg.naturalHeight || 1536
      );
      ctx.uniform2f(uMouse, smoothMouse.x, 1.0 - smoothMouse.y);
      ctx.uniform2fv(uTrail, trailArray);
      ctx.uniform1f(uStrength, strength);
      ctx.uniform1f(uTime, elapsed);
      ctx.uniform1i(uImage, 0);

      ctx.drawArrays(ctx.TRIANGLES, 0, 6);

      if (strength > 0 || isInteracting) {
        rafId = requestAnimationFrame(draw);
      } else {
        isRunning = false;
      }
    }

    function kick() {
      if (!isRunning && isTextureReady && !destroyed) {
        isRunning = true;
        rafId = requestAnimationFrame(draw);
      }
    }

    const onPointerEnter = (e: PointerEvent) => {
      isInteracting = true;
      const rect = hero.getBoundingClientRect();
      targetMouse.x = (e.clientX - rect.left) / rect.width;
      targetMouse.y = (e.clientY - rect.top) / rect.height;
      kick();
    };

    const onPointerMove = (e: PointerEvent) => {
      isInteracting = true;
      const rect = hero.getBoundingClientRect();
      targetMouse.x = (e.clientX - rect.left) / rect.width;
      targetMouse.y = (e.clientY - rect.top) / rect.height;

      // Check active portrait face hover area (normalized center-right)
      const isTargetInteractive = Boolean(
        (e.target as HTMLElement)?.closest(
          "a, button, [role='button'], input, select, dialog, nav"
        )
      );

      if (isTargetInteractive) {
        if (isFaceHovered) {
          isFaceHovered = false;
          targetFaceScale = 1.0;
          requestAnimationFrame(updateBackdropTransforms);
        }
      } else {
        const onFace =
          targetMouse.x >= 0.35 &&
          targetMouse.x <= 0.82 &&
          targetMouse.y >= 0.08 &&
          targetMouse.y <= 0.88;

        if (onFace !== isFaceHovered) {
          isFaceHovered = onFace;
          targetFaceScale = isFaceHovered ? 1.03 : 1.0;
          requestAnimationFrame(updateBackdropTransforms);
        }
      }

      kick();
    };

    const onPointerLeave = () => {
      isInteracting = false;
      if (isFaceHovered) {
        isFaceHovered = false;
        targetFaceScale = 1.0;
        requestAnimationFrame(updateBackdropTransforms);
      }
    };

    const onScroll = () => {
      if (prefersReducedMotion) return;
      const rect = hero.getBoundingClientRect();
      parallaxProgress = Math.min(Math.max(-rect.top / rect.height, 0), 1);
      updateBackdropTransforms();
    };

    const onVisibilityChange = () => {
      if (document.hidden) {
        isInteracting = false;
        isRunning = false;
        if (rafId) cancelAnimationFrame(rafId);
      }
    };

    hero.addEventListener("pointerenter", onPointerEnter, { passive: true });
    hero.addEventListener("pointermove", onPointerMove, { passive: true });
    hero.addEventListener("pointerleave", onPointerLeave, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      destroyed = true;
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
      hero.removeEventListener("pointerenter", onPointerEnter);
      hero.removeEventListener("pointermove", onPointerMove);
      hero.removeEventListener("pointerleave", onPointerLeave);
      document.removeEventListener("visibilitychange", onVisibilityChange);

      ctx.deleteProgram(program);
      ctx.deleteShader(vs);
      ctx.deleteShader(fs);
      ctx.deleteTexture(texture);
      ctx.deleteBuffer(vbo);
    };
  }, [imageSrc, containerId]);

  return (
    <div className="hero-bg-wrapper" id="hero-bg-wrapper">
      <div
        ref={staticRef}
        id="hero-portrait-static"
        className="hero-portrait-static"
        style={{ backgroundImage: `url('${imageSrc}')` }}
      />
      <canvas
        ref={canvasRef}
        id="hero-webgl-canvas"
        className="hero-webgl-canvas"
        aria-hidden="true"
      />
      <div className="hero-overlay" aria-hidden="true" />
    </div>
  );
}
