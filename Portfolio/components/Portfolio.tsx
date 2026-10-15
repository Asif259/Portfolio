"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PortfolioProject, portfolioProjects as fallbackProjects } from "@/data/portfolio";
import { FaExternalLinkAlt, FaGithub, FaTimes } from "react-icons/fa";

interface PortfolioProps {
  initialProjects?: PortfolioProject[];
}

export default function Portfolio({ initialProjects }: PortfolioProps) {
  const projects =
    initialProjects && initialProjects.length > 0
      ? initialProjects
      : fallbackProjects;

  // Identify BariVara as the flagship lead project (id 8 or fallback to first)
  const leadProject = projects.find((p) => p.id === 8) || projects[0];

  // Selected work items (take 6 distinct projects)
  const workProjects = projects.filter((p) => p.id !== leadProject.id).slice(0, 6);

  // Selected Project for Modal Dialog
  const [activeModalProject, setActiveModalProject] = useState<PortfolioProject | null>(null);

  // 3D Tilt for Lead Featured Card
  const featuredRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const featuredSec = featuredRef.current;
    const card = cardRef.current;
    const cursor = document.getElementById("custom-cursor");

    if (!featuredSec || !card) return;

    const onPointerMove = (e: PointerEvent) => {
      if (
        window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
        window.matchMedia("(pointer: coarse)").matches
      ) {
        return;
      }

      const rect = featuredSec.getBoundingClientRect();
      const normX = (e.clientX - rect.left) / rect.width;
      const normY = (e.clientY - rect.top) / rect.height;

      const rotX = (normY - 0.5) * -18;
      const rotY = (normX - 0.5) * 22;
      card.style.transform = `translateX(-50%) scale(1.02) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    };

    const onPointerLeave = () => {
      card.style.transform = "translateX(-50%) scale(1.02) rotateX(0deg) rotateY(0deg)";
      if (cursor) cursor.classList.remove("is-card-hover");
    };

    const onCardEnter = () => {
      if (cursor) cursor.classList.add("is-card-hover");
    };

    const onCardLeave = () => {
      if (cursor) cursor.classList.remove("is-card-hover");
    };

    featuredSec.addEventListener("pointermove", onPointerMove);
    featuredSec.addEventListener("pointerleave", onPointerLeave);
    card.addEventListener("pointerenter", onCardEnter);
    card.addEventListener("pointerleave", onCardLeave);

    return () => {
      featuredSec.removeEventListener("pointermove", onPointerMove);
      featuredSec.removeEventListener("pointerleave", onPointerLeave);
      card.removeEventListener("pointerenter", onCardEnter);
      card.removeEventListener("pointerleave", onCardLeave);
    };
  }, []);

  // Modal keydown close listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveModalProject(null);
      }
    };

    if (activeModalProject) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeModalProject]);

  return (
    <div id="portfolio" className="relative w-full bg-black text-white">
      {/* ==========================================================================
           SECTION 6: FEATURED PROJECT SPOTLIGHT (BariVara)
           ========================================================================== */}
      <section
        ref={featuredRef}
        id="featured"
        className="cq-container relative bg-black border-t border-[#222222] min-h-[940px] pt-12 pb-24 px-[3%] overflow-hidden"
        style={{ perspective: "850px" }}
        aria-labelledby="featured-kicker"
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between mb-16 md:mb-20">
          <div id="featured-kicker" className="font-utility text-sm md:text-base font-medium text-[#949494]">
            // Featured Product
          </div>
          <div className="font-utility text-xs md:text-sm font-medium tracking-[0.1em] text-[#949494] uppercase font-mono">
            FLAGSHIP FULL-STACK PLATFORM // 2024–2026
          </div>
        </div>

        {/* Huge Centered Title */}
        <div className="text-center select-none mb-12">
          <h2 className="font-display font-medium text-[clamp(44px,12.5cqw,170px)] leading-[0.85] tracking-[-0.04em] text-white m-0">
            <span className="block">
              BARIVARA <span className="text-[clamp(16px,2.8cqw,34px)] align-super ml-2 text-[#B8B8B8] font-normal">[01]</span>
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E0E0E0] to-[#888888]">
              PLATFORM
            </span>
          </h2>
        </div>

        {/* Fine Technical Grid Band Behind Card */}
        <div
          className="absolute top-[590px] left-0 right-0 h-[88px] border-t border-b border-[#2A2A2A] pointer-events-none z-[1] flex items-end px-[3%] pb-2"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to right, #222222 0, #222222 1px, transparent 1px, transparent 6.25%)",
          }}
          aria-hidden="true"
        >
          <span className="font-utility text-[11px] tracking-[0.18em] text-[#777777] uppercase font-mono">
            01 / ARCHITECTURE FOR RENTAL COMMERCE &amp; MULTI-TENANT HOUSING
          </span>
        </div>

        {/* 3D Perspective Card (Center) */}
        <div
          ref={cardRef}
          onClick={() => setActiveModalProject(leadProject)}
          className="absolute top-[390px] md:top-[380px] left-1/2 w-[310px] sm:w-[350px] md:w-[420px] aspect-[4/3] z-10 cursor-pointer transition-transform duration-200 ease-out"
          style={{
            transform: "translateX(-50%) scale(1.02)",
            transformStyle: "preserve-3d",
          }}
          role="button"
          tabIndex={0}
          aria-label={`View ${leadProject.name} case study`}
        >
          <div className="relative w-full h-full rounded-lg overflow-hidden border border-[#333333] bg-[#0E0E12] shadow-[0_30px_60px_rgba(0,0,0,0.85)] group">
            <Image
              src={leadProject.coverImage}
              alt={leadProject.name}
              fill
              priority
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 350px, 420px"
            />
            {/* Dark gradient sheen */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

            {/* Center Circular Arrow Icon */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/75 border border-white/40 flex items-center justify-center transition-all group-hover:bg-[#FF630F] group-hover:border-[#FF630F] group-hover:scale-110"
              aria-hidden="true"
            >
              <svg
                className="w-5 h-5 stroke-white group-hover:stroke-black transition-colors"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </div>
          </div>
        </div>

        {/* Featured Info & CTA */}
        <div className="relative mt-[340px] md:mt-[350px] text-center flex flex-col items-center gap-4 z-10">
          <div className="font-utility text-lg md:text-xl font-medium text-white tracking-[0.02em]">
            {leadProject.name} — Full-Stack Housing &amp; Rental Ecosystem
          </div>
          <div className="font-utility text-xs md:text-sm text-[#949494] tracking-[0.05em]">
            Next.js 14 / TypeScript / NestJS / PostgreSQL / Prisma / Tailwind CSS
          </div>
          <div className="pt-2 flex items-center gap-3">
            <button
              onClick={() => setActiveModalProject(leadProject)}
              className="pill-btn text-sm"
            >
              View case study ↗
            </button>
            <Link
              href={`/projects/${leadProject.id}`}
              className="pill-btn-outline text-sm"
            >
              Full project details →
            </Link>
          </div>
        </div>
      </section>

      {/* ==========================================================================
           SECTION 7: SELECTED WORK INDEX TABLE (#work)
           ========================================================================== */}
      <section
        id="work"
        className="cq-container relative min-h-[760px] py-20 px-[4%] border-t border-[#222222]"
        style={{
          background:
            "linear-gradient(180deg, #000000 0%, #000000 48%, #1E120A 80%, #2A170B 100%)",
        }}
        aria-labelledby="work-kicker"
      >
        {/* Work Header */}
        <div className="flex items-center justify-between mb-10">
          <div id="work-kicker" className="font-utility text-sm md:text-base font-medium text-[#949494]">
            // Selected Work
          </div>
          <div className="font-utility text-xs md:text-sm font-medium tracking-[0.08em] text-[#949494] uppercase font-mono">
            {workProjects.length + 1} PRODUCTION-GRADE SYSTEMS / 2024–2026
          </div>
        </div>

        {/* Table Column Header */}
        <div
          className="hidden md:grid grid-cols-[48px_minmax(0,1.4fr)_minmax(0,1fr)_90px_48px] gap-4 py-3 px-4 font-utility text-xs font-semibold text-[#949494] uppercase tracking-[0.08em] border-b border-[#333333]"
          aria-hidden="true"
        >
          <span>#</span>
          <span>Project</span>
          <span>Discipline / Stack</span>
          <span>Year</span>
          <span className="text-right">Action</span>
        </div>

        {/* Work Rows */}
        <div className="flex flex-col">
          {workProjects.map((proj, idx) => {
            const indexStr = String(idx + 2).padStart(2, "0");
            return (
              <div
                key={proj.id}
                onClick={() => setActiveModalProject(proj)}
                className="work-row group relative grid grid-cols-[36px_minmax(0,1fr)_40px] md:grid-cols-[48px_minmax(0,1.4fr)_minmax(0,1fr)_90px_48px] items-center gap-3 md:gap-4 py-5 md:py-6 px-3 md:px-4 min-h-[76px] bg-black/60 border-b border-white/10 hover:border-white/25 cursor-pointer transition-colors"
                role="button"
                tabIndex={0}
                aria-label={`View ${proj.name} case study`}
              >
                {/* Difference wipe backdrop on hover */}
                <div className="work-row-wipe" />

                {/* Index */}
                <span className="font-utility text-xs md:text-sm text-[#777777] z-[2] font-mono">
                  {indexStr}
                </span>

                {/* Title */}
                <div className="flex flex-col z-[2]">
                  <span className="font-display text-lg md:text-2xl font-medium text-white tracking-[-0.02em] group-hover:text-[#FF630F] md:group-hover:text-white transition-colors">
                    {proj.name}
                  </span>
                  <span className="md:hidden font-utility text-xs text-[#888888] mt-0.5">
                    {proj.category}
                  </span>
                </div>

                {/* Discipline / Stack (Desktop) */}
                <span className="hidden md:block font-utility text-xs md:text-sm text-[#AAAAAA] z-[2] truncate">
                  {proj.category}
                </span>

                {/* Year (Desktop) */}
                <span className="hidden md:block font-utility text-xs md:text-sm text-[#777777] font-mono z-[2]">
                  {proj.date || "2025"}
                </span>

                {/* Arrow */}
                <span className="font-utility text-lg md:text-xl text-white text-right z-[2] group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#FF630F] transition-all">
                  ↗
                </span>

                {/* 180px Hover Preview Floating Thumbnail (Desktop only) */}
                <div
                  className="hidden lg:block absolute top-1/2 left-[58%] -translate-y-1/2 w-[180px] h-[130px] rounded-md overflow-hidden border border-[#444444] shadow-[0_20px_40px_rgba(0,0,0,0.8)] pointer-events-none z-20 opacity-0 blur-sm scale-95 group-hover:opacity-100 group-hover:blur-0 group-hover:scale-100 transition-all duration-300 ease-out bg-[#14161D]"
                  aria-hidden="true"
                >
                  <Image
                    src={proj.coverImage}
                    alt={proj.name}
                    fill
                    className="object-cover object-top"
                    sizes="180px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Work CTA Banner */}
        <div className="mt-20 pt-10 border-t border-[#333333] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <h3 className="font-display font-medium text-[clamp(24px,4.5cqw,52px)] text-white tracking-[-0.04em] m-0">
            HAVE A SYSTEM IN MIND?
          </h3>
          <a
            href="#contact"
            className="pill-btn shadow-lg"
          >
            Start a conversation ↗
          </a>
        </div>
      </section>

      {/* ==========================================================================
           MODAL DIALOG (Case Study) matching Portfolio-v2
           ========================================================================== */}
      {activeModalProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
          onClick={() => setActiveModalProject(null)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[90vh] bg-[#101010] text-[#F3F1EB] border border-[#333333] rounded-lg overflow-y-auto shadow-[0_30px_80px_rgba(0,0,0,0.95)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Sticky Header Bar */}
            <div className="sticky top-0 bg-[#101010]/95 backdrop-blur-md border-b border-[#222222] px-6 py-4 flex items-center justify-between z-20">
              <span className="font-utility text-xs tracking-[0.12em] uppercase text-[#949494] font-mono">
                {activeModalProject.category} // CASE STUDY
              </span>
              <button
                onClick={() => setActiveModalProject(null)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#444444] text-xs font-utility font-medium text-white hover:bg-[#FF630F] hover:border-[#FF630F] hover:text-black transition-colors"
                aria-label="Close case study dialog"
              >
                <FaTimes className="w-3 h-3" />
                Close
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-10 space-y-8">
              {/* Title & Summary */}
              <div className="space-y-3">
                <h3
                  id="modal-project-title"
                  className="font-display font-medium text-3xl sm:text-4xl md:text-5xl text-white tracking-[-0.04em]"
                >
                  {activeModalProject.name}
                </h3>
                <p className="font-body text-base sm:text-lg text-[#B8B8B8] leading-relaxed">
                  {activeModalProject.description}
                </p>
              </div>

              {/* Artwork / Preview Image */}
              <div className="relative aspect-video w-full rounded-md overflow-hidden border border-[#282828] bg-[#080808]">
                <Image
                  src={activeModalProject.coverImage}
                  alt={activeModalProject.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 896px"
                />
              </div>

              {/* Metadata Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-t border-b border-[#282828] font-utility">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#949494] block">Type</span>
                  <span className="text-sm font-medium text-white">{activeModalProject.category}</span>
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#949494] block">Year</span>
                  <span className="text-sm font-medium text-white font-mono">{activeModalProject.date || "2025"}</span>
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#949494] block">Role</span>
                  <span className="text-sm font-medium text-white">Full-Stack Lead</span>
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#949494] block">Verification</span>
                  <span className="text-sm font-medium text-[#22C55E]">Production Tested</span>
                </div>
              </div>

              {/* Problem / Solution Narrative */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h4 className="font-utility text-xs font-semibold uppercase tracking-wider text-[#949494]">
                    The Challenge
                  </h4>
                  <p className="font-body text-sm sm:text-base text-[#D0D0D0] leading-relaxed">
                    {activeModalProject.challenges && activeModalProject.challenges.length > 0
                      ? typeof activeModalProject.challenges[0] === "string"
                        ? (activeModalProject.challenges as string[]).join(". ")
                        : (activeModalProject.challenges[0] as { title?: string; description?: string }).description ||
                          (activeModalProject.challenges[0] as { title?: string; description?: string }).title
                      : "Architecting a high-throughput, low-latency workflow that remains intuitive for end-users while strictly enforcing authentication, data consistency, and edge safety."}
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-utility text-xs font-semibold uppercase tracking-wider text-[#949494]">
                    The Approach &amp; Solution
                  </h4>
                  <p className="font-body text-sm sm:text-base text-[#D0D0D0] leading-relaxed">
                    {activeModalProject.solution ||
                      "Designed a clean separation of concerns: declarative Next.js frontends, strictly validated DTOs, indexed relational databases, and automated deployment pipelines."}
                  </p>
                </div>
              </div>

              {/* Technologies Applied */}
              <div className="space-y-2">
                <h4 className="font-utility text-xs font-semibold uppercase tracking-wider text-[#949494]">
                  Technologies &amp; Deliverables
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.technologies?.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded bg-[#1C1C1C] border border-[#333333] font-mono text-xs text-[#E0E0E0]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions Footer */}
              <div className="pt-4 flex flex-wrap items-center gap-3 border-t border-[#222222]">
                {activeModalProject.liveUrl && (
                  <a
                    href={activeModalProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pill-btn text-sm"
                  >
                    Launch Live System ↗
                  </a>
                )}
                {activeModalProject.githubUrl && (
                  <a
                    href={
                      Array.isArray(activeModalProject.githubUrl)
                        ? activeModalProject.githubUrl[0]
                        : activeModalProject.githubUrl
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pill-btn-outline text-sm"
                  >
                    <FaGithub className="w-3.5 h-3.5" />
                    Source Code
                  </a>
                )}
                <Link
                  href={`/projects/${activeModalProject.id}`}
                  className="font-utility text-xs font-semibold uppercase tracking-wider text-[#949494] hover:text-[#FF630F] ml-auto transition-colors"
                >
                  View full case study page →
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
