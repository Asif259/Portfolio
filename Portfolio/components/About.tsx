"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";

export default function About() {
  const [isRevealed, setIsRevealed] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
        }
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const disciplines = [
    "Full-Stack Engineering",
    "Frontend Architecture",
    "Backend & APIs",
    "Database Modeling",
    "Technical Instruction",
  ];

  return (
    <section className="cq-container relative bg-black text-white border-t border-[#222222] py-20 lg:py-28" id="about">
      <div ref={containerRef} className="container mx-auto px-[3%] max-w-7xl flex flex-col justify-between min-h-[720px]">
        
        {/* Section Kicker */}
        <div className="font-utility text-sm md:text-base font-medium tracking-[0.08em] text-[#949494] uppercase mb-12">
          // Engineering Approach
        </div>

        {/* Massive Editorial Typographic Statement */}
        <div className="relative cursor-default select-none my-auto">
          <div className="font-display font-medium text-[clamp(28px,6.2cqw,88px)] leading-[1.02] tracking-[-0.04em] text-white flex flex-col gap-1 md:gap-2">
            {[
              "Rooted in systems, driven by performance,",
              "Ashraful Asif crafts web applications and",
              "digital products that bring structure to",
              "complex workflows through modern architecture",
              "and clean, resilient code.",
            ].map((line, idx) => (
              <div key={idx} className="overflow-hidden block">
                <span
                  className={`block transition-all duration-700 ease-out ${
                    isRevealed
                      ? "translate-y-0 opacity-100"
                      : "translate-y-[110%] opacity-0"
                  }`}
                  style={{ transitionDelay: `${idx * 120}ms` }}
                >
                  {line}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Metadata Bottom Row */}
        <div className="mt-16 md:mt-24 pt-10 border-t border-[#222222] flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <div className="max-w-[540px] space-y-3">
            <p className="font-body text-base md:text-lg leading-[1.55] text-[#AAAAAA]">
              I bridge intuitive user experiences with solid backend architectures. Working across Next.js, React, TypeScript, NestJS, and PostgreSQL, I prioritize clean interfaces, strict typing, and reliable software delivery.
            </p>
            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-utility font-semibold text-[#FF630F] hover:text-white transition-colors"
              >
                Start a conversation ↗
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-3 items-start md:items-end">
            <span className="font-utility text-xs font-semibold tracking-[0.14em] uppercase text-[#949494]">
              CORE DISCIPLINES
            </span>
            <div className="flex flex-wrap gap-2 md:justify-end">
              {disciplines.map((item) => (
                <span
                  key={item}
                  className="inline-block border border-[#444444] rounded-full px-3.5 py-1.5 font-utility text-xs text-[#B8B8B8] hover:border-[#FF630F] hover:text-white transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
