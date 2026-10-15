"use client";

import { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    // Only activate for fine pointer (mouse/trackpad) and not reduced motion
    if (
      typeof window === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      window.matchMedia("(pointer: coarse)").matches
    ) {
      return;
    }

    const cursor = document.getElementById("custom-cursor");
    if (!cursor) return;

    let mouseX = -100;
    let mouseY = -100;
    let rafId: number | null = null;
    let isVisible = false;

    const render = () => {
      cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      rafId = null;
    };

    const onPointerMove = (e: PointerEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) {
        isVisible = true;
        cursor.style.opacity = "1";
      }
      if (!rafId) {
        rafId = requestAnimationFrame(render);
      }
    };

    const onPointerLeave = () => {
      isVisible = false;
      cursor.style.opacity = "0";
    };

    const onPointerEnter = () => {
      isVisible = true;
      cursor.style.opacity = "1";
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("pointerleave", onPointerLeave);
    document.addEventListener("pointerenter", onPointerEnter);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerleave", onPointerLeave);
      document.removeEventListener("pointerenter", onPointerEnter);
    };
  }, []);

  return (
    <div
      id="custom-cursor"
      className="custom-cursor"
      aria-hidden="true"
    />
  );
}
