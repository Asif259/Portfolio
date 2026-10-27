"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFileDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import HeroWebGLCanvas from "./HeroWebGLCanvas";

export default function Hero() {
  const [timeStr, setTimeStr] = useState("00:00:00");
  const [offsetStr, setOffsetStr] = useState("GMT+06:00 // LOCAL");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateClock = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      setTimeStr(`${hours}:${minutes}:${seconds}`);

      const offsetMinutes = -now.getTimezoneOffset();
      const sign = offsetMinutes >= 0 ? "+" : "-";
      const offH = String(Math.floor(Math.abs(offsetMinutes) / 60)).padStart(2, "0");
      const offM = String(Math.abs(offsetMinutes) % 60).padStart(2, "0");
      setOffsetStr(`GMT${sign}${offH}:${offM} // LOCAL`);
    };

    updateClock();
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      id="hero-section"
      className="cq-container relative w-full h-[920px] min-h-[850px] lg:h-[980px] overflow-hidden bg-black text-white contain-paint"
    >
      {/* Background Hero WebGL Cursor Canvas & Portrait Layer */}
      <HeroWebGLCanvas imageSrc="/hero.webp" containerId="hero-section" />

      {/* Subtle Ambient cybernetic grid and orange atmospheric glow */}
      <div className="absolute inset-0 z-[2] pointer-events-none select-none overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
        <div
          className="absolute -top-32 right-1/4 w-[600px] h-[500px] opacity-25 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 30%, rgba(255, 99, 15, 0.45) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      {/* Hero Top Bar Navigation (Z-index 20) */}
      <nav
        className="absolute top-7 left-[3%] right-[3%] z-20 flex items-center justify-between pointer-events-auto"
        aria-label="Hero navigation"
      >
        {/* Live Visitor Local Clock (Left) */}
        <div className="flex flex-col gap-0.5 font-mono" aria-label="Visitor local time">
          <span className="text-[10px] tracking-[0.14em] uppercase text-[#949494]">
            {offsetStr}
          </span>
          <span className="text-sm md:text-base font-medium text-white tracking-[0.04em] tabular-nums">
            {timeStr}
          </span>
        </div>

        {/* Center Soundwave / Frequency Menu Trigger */}
        <button
          onClick={() => scrollToSection("about")}
          className="group flex flex-col items-center justify-center gap-1.5 py-2 px-3 text-white transition-colors hover:text-[#FF630F]"
        >
          <div className="flex items-end gap-[3px] h-3.5" aria-hidden="true">
            <span className="w-[3px] h-1 bg-white rounded-[1px] group-hover:bg-[#FF630F] transition-all group-hover:h-3" />
            <span className="w-[3px] h-2 bg-white rounded-[1px] group-hover:bg-[#FF630F] transition-all group-hover:h-3.5" />
            <span className="w-[3px] h-3.5 bg-white rounded-[1px] group-hover:bg-[#FF630F] transition-all group-hover:h-2" />
            <span className="w-[3px] h-1.5 bg-white rounded-[1px] group-hover:bg-[#FF630F] transition-all group-hover:h-2.5" />
            <span className="w-[3px] h-2.5 bg-white rounded-[1px] group-hover:bg-[#FF630F] transition-all group-hover:h-3.5" />
            <span className="w-[3px] h-2 bg-white rounded-[1px] group-hover:bg-[#FF630F] transition-all group-hover:h-1.5" />
            <span className="w-[3px] h-1 bg-white rounded-[1px] group-hover:bg-[#FF630F] transition-all group-hover:h-3" />
          </div>
          <span className="font-utility text-[11px] font-semibold tracking-[0.12em] uppercase text-[#AAAAAA] group-hover:text-[#FF630F] transition-colors">
            ENGINEER // ASIF
          </span>
        </button>

        {/* Let's Talk CTA (Right) */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="pill-btn text-sm md:text-base shadow-lg shadow-black/40"
          >
            Let’s talk ↗
          </a>
        </div>
      </nav>

      {/* Main Foreground Typography & Layout (Z-index 10) */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Monogram Display Title Row (clamp scaling) */}
        <div className="absolute top-[135px] md:top-[150px] left-[3%] right-[3%] flex items-baseline justify-between gap-[3%] whitespace-nowrap select-none overflow-visible">
          {/* Display Name Left: Asraful */}
          <div
            className="font-display font-medium text-[clamp(36px,11cqw,180px)] leading-[0.727] tracking-[-0.06em] text-white flex shrink-0"
            aria-hidden="true"
          >
            <span
              className={`letter-span ${mounted ? "letter-animating" : ""}`}
              style={{ animationDelay: "80ms" }}
            >
              A
            </span>
            <span
              className={`letter-span ${mounted ? "letter-animating" : ""}`}
              style={{ animationDelay: "140ms" }}
            >
              s
            </span>
            <span
              className={`letter-span ${mounted ? "letter-animating" : ""}`}
              style={{ animationDelay: "200ms" }}
            >
              r
            </span>
            <span
              className={`letter-span ${mounted ? "letter-animating" : ""}`}
              style={{ animationDelay: "260ms" }}
            >
              a
            </span>
            <span
              className={`letter-span ${mounted ? "letter-animating" : ""}`}
              style={{ animationDelay: "320ms" }}
            >
              f
            </span>
            <span
              className={`letter-span ${mounted ? "letter-animating" : ""}`}
              style={{ animationDelay: "380ms" }}
            >
              u
            </span>
            <span
              className={`letter-span ${mounted ? "letter-animating" : ""}`}
              style={{ animationDelay: "440ms" }}
            >
              l
            </span>
          </div>

          {/* Accessible H1 Heading Right: Asif */}
          <h1 className="m-0 p-0 font-display text-[clamp(36px,11cqw,180px)] leading-[0.727] tracking-[-0.06em] text-white inline-flex items-baseline overflow-visible">
            <span className="sr-only">Asraful Asif — Full-Stack Developer</span>
            <span className="inline-flex items-baseline relative overflow-visible" aria-hidden="true">
              <span className="font-medium inline-flex">
                <span
                  className={`letter-span ${mounted ? "letter-animating" : ""}`}
                  style={{ animationDelay: "500ms" }}
                >
                  A
                </span>
                <span
                  className={`letter-span ${mounted ? "letter-animating" : ""}`}
                  style={{ animationDelay: "560ms" }}
                >
                  s
                </span>
                <span
                  className={`letter-span ${mounted ? "letter-animating" : ""}`}
                  style={{ animationDelay: "620ms" }}
                >
                  i
                </span>
                <span
                  className={`letter-span ${mounted ? "letter-animating" : ""}`}
                  style={{ animationDelay: "680ms" }}
                >
                  f
                </span>
              </span>
            </span>
          </h1>
        </div>

        {/* Subtitle Tier */}
        <div className="absolute top-[calc(135px+clamp(36px,11cqw,180px)*0.727+36px)] md:top-[calc(150px+clamp(36px,11cqw,180px)*0.727+36px)] left-[3%] right-[3%] flex items-center justify-between gap-4 font-utility text-[11px] md:text-[13px] font-semibold tracking-[0.1em] uppercase text-[#AAAAAA]">
          <div className="truncate">
            FULL-STACK DEVELOPER &amp; SOFTWARE ENGINEER
          </div>
          <div className="hidden sm:block text-[#949494] shrink-0 font-mono">
            [ PORTFOLIO // SELECTED WORK ]
          </div>
        </div>

        {/* Bouncing Down-Arrow Link: Positioned ~70% across title container */}
        <div className="absolute top-[calc(135px+clamp(36px,11cqw,180px)*0.727+100px)] md:top-[calc(150px+clamp(36px,11cqw,180px)*0.727+110px)] left-[calc(3%+0.70*(100%-6%))] -translate-x-1/2 pointer-events-auto z-20">
          <button
            onClick={() => scrollToSection("about")}
            className="hero-scroll-btn bounce-active flex items-center justify-center w-[50px] h-[50px] md:w-[54px] md:h-[54px] rounded-full border border-white/60 bg-black/40 hover:bg-[#FF630F] hover:border-[#FF630F] transition-all cursor-pointer group shadow-xl"
            aria-label="Scroll down to engineering approach"
          >
            <svg
              className="w-6 h-6 stroke-white group-hover:stroke-black transition-colors"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <polyline points="19 12 12 19 5 12"></polyline>
            </svg>
          </button>
        </div>

        {/* Lower Hero Left Block */}
        <div className="absolute bottom-9 md:bottom-12 left-[3%] max-w-[460px] flex flex-col gap-2 font-utility text-sm md:text-base leading-[1.4] pointer-events-auto">
          <p className="text-white font-medium">
            • Web applications, distributed systems, full-stack architectures.
          </p>
          <p className="text-[#949494]">
            • Next.js, React, TypeScript, NestJS, PostgreSQL &amp; Cloud.
          </p>
          {/* Quick interactive links */}
          <div className="flex items-center gap-3 pt-2">
            <a
              href="/my_cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#333333] bg-[#14161D]/80 text-xs font-mono text-white hover:border-[#FF630F] hover:text-[#FF630F] transition-all"
            >
              <FaFileDownload className="w-3 h-3 text-[#FF630F]" />
              CV / Resume
            </a>
            <a
              href="https://github.com/Asif259"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#333333] bg-[#14161D]/80 text-xs font-mono text-white hover:border-[#FF630F] hover:text-[#FF630F] transition-all"
            >
              <FaGithub className="w-3.5 h-3.5" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ashraful-asif"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#333333] bg-[#14161D]/80 text-xs font-mono text-white hover:border-[#FF630F] hover:text-[#FF630F] transition-all"
            >
              <FaLinkedin className="w-3.5 h-3.5 text-[#FF630F]" />
              LinkedIn
            </a>
          </div>
        </div>

        {/* Lower Hero Right CTA */}
        <div className="absolute bottom-9 md:bottom-12 right-[3%] pointer-events-auto">
          <a
            href="#portfolio"
            className="pill-btn shadow-xl shadow-black/60"
          >
            Explore work ↘
          </a>
        </div>

        {/* Vertical Edge Label (Desktop only) */}
        <div
          className="hidden xl:block absolute top-1/2 right-[1.5%] -translate-y-1/2 rotate-90 origin-center font-utility text-[10px] tracking-[0.26em] uppercase text-[#949494] whitespace-nowrap pointer-events-none select-none"
          aria-hidden="true"
        >
          FULL-STACK SYSTEMS / CRAFT &amp; RELIABILITY — 001
        </div>
      </div>
    </header>
  );
}
