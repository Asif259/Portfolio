"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  HiOutlineServer, 
  HiOutlineLightningBolt, 
  HiOutlineDatabase, 
  HiOutlineAcademicCap,
  HiCheckCircle,
  HiArrowNarrowRight
} from "react-icons/hi";

interface Pillar {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  badge: string;
  icon: typeof HiOutlineServer;
  description: string;
  invariants: string[];
  techStack: string[];
  metricLabel: string;
  metricValue: string;
}

const PILLARS: Pillar[] = [
  {
    id: "architecture",
    index: "01",
    title: "System Architecture",
    subtitle: "Modular boundaries & deterministic state",
    badge: "DOMAINS & BOUNDARIES",
    icon: HiOutlineServer,
    description:
      "I architect web applications by decoupling business logic from UI rendering and persistence. Every service, module, and state boundary is governed by strict TypeScript contracts, preventing leaky abstractions and ensuring effortless long-term maintainability.",
    invariants: [
      "Strict separation of concerns (UI components, domain services, data access layers)",
      "Centralized schema validation using Zod and Prisma for compile-time safety",
      "Predictable client-server data synchronization without ghost states",
      "Modular folder structures engineered for team scaling and feature isolation",
    ],
    techStack: ["Next.js 14", "TypeScript", "NestJS", "Docker", "Design Patterns"],
    metricLabel: "Architectural Integrity",
    metricValue: "100% Type-Safe",
  },
  {
    id: "performance",
    index: "02",
    title: "Performance & Web Vitals",
    subtitle: "Sub-second TTFB & hardware-accelerated 60fps UX",
    badge: "HIGH-THROUGHPUT UX",
    icon: HiOutlineLightningBolt,
    description:
      "Performance is an engineering constraint, not a final polish task. From zero-CLS self-hosted typography pipelines and edge streaming to WebGL canvas culling and GPU-composited animations, I ensure every millisecond serves user retention.",
    invariants: [
      "Self-hosted .woff2 font preloading and zero Cumulative Layout Shift (CLS)",
      "IntersectionObserver WebGL throttling to eliminate background GPU drain",
      "React Server Components (RSC) and streaming HTML for rapid First Contentful Paint",
      "Aggressive image format modernizations (AVIF/WebP) with CDN caching",
    ],
    techStack: ["Edge Streaming", "WebGL / GLSL", "Local Fonts", "Core Web Vitals", "Brotli"],
    metricLabel: "Target TTFB & INP",
    metricValue: "< 50ms Response",
  },
  {
    id: "backend",
    index: "03",
    title: "Resilient Backends & Data",
    subtitle: "ACID compliance, idempotency & scalable APIs",
    badge: "PERSISTENCE & SECURITY",
    icon: HiOutlineDatabase,
    description:
      "I build backends that preserve data integrity under heavy concurrency. From normalized PostgreSQL schemas with atomic transactions to role-based access controls and resilient REST/GraphQL APIs, every endpoint is hardened for production.",
    invariants: [
      "Relational schema normalization with foreign key cascading and indexing",
      "Atomic database transactions preventing race conditions in financial/booking flows",
      "Secure stateless authentication with JWT, refresh rotation, and RBAC policies",
      "Connection pooling, query tuning, and serverless database branching with Neon",
    ],
    techStack: ["PostgreSQL", "Prisma ORM", "Neon DB", "Redis", "REST / tRPC"],
    metricLabel: "Concurrency Target",
    metricValue: "99.9% Data Safety",
  },
  {
    id: "mentorship",
    index: "04",
    title: "Code Craft & Mentorship",
    subtitle: "Pragmatic testing, clean code & team velocity",
    badge: "ENGINEERING CULTURE",
    icon: HiOutlineAcademicCap,
    description:
      "Writing clean, readable code is only half the craft; communicating technical concepts and elevating teammates completes it. As a full-stack engineer and coding instructor, I combine rigorous test coverage with active pedagogy.",
    invariants: [
      "Pragmatic testing pyramid focusing on high-value integration and unit tests",
      "Automated CI/CD workflows running strict linting, type-checks, and builds",
      "Self-documenting code with clear domain nomenclature over speculative complexity",
      "Over 100+ students and aspiring developers mentored in modern web stacks",
    ],
    techStack: ["Vitest / Jest", "GitHub Actions", "CI / CD", "Technical Pedagogy", "Clean Code"],
    metricLabel: "Developers Mentored",
    metricValue: "100+ Students",
  },
];

export default function About() {
  const [activeTab, setActiveTab] = useState<string>("architecture");
  const currentPillar = PILLARS.find((p) => p.id === activeTab) || PILLARS[0];

  return (
    <section
      id="about"
      className="cq-container relative bg-black text-white border-t border-[#222222] py-20 lg:py-28 overflow-hidden"
      aria-labelledby="approach-kicker"
    >
      {/* Subtle architectural ambient background glow */}
      <div 
        className="absolute top-1/4 -left-32 w-96 h-96 bg-[#FF630F]/5 rounded-full blur-[140px] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-10 right-0 w-80 h-80 bg-[#FF630F]/4 rounded-full blur-[120px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="container mx-auto px-[4%] max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#222222]">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span id="approach-kicker" className="font-utility text-xs md:text-sm font-semibold tracking-[0.14em] text-[#FF630F] uppercase font-mono">
                // Engineering Approach
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF630F] animate-pulse" aria-hidden="true" />
              <span className="font-mono text-xs text-[#949494] uppercase tracking-[0.08em] hidden sm:inline">
                4 Architectural Pillars
              </span>
            </div>
            
            <h2 className="font-display font-medium text-[clamp(28px,5cqw,58px)] leading-[1.05] tracking-[-0.04em] text-white">
              Engineered for speed, structured for scale.
            </h2>
          </div>

          <p className="font-body text-sm md:text-base text-[#AAAAAA] max-w-md leading-relaxed">
            I approach software engineering with a systems mindset: combining high-performance frontends with decoupled, resilient backends and clean, maintainable architecture.
          </p>
        </div>

        {/* Interactive Engineering Console Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Pillar Selector Cards (Left Column / Top on mobile) */}
          <div 
            className="lg:col-span-5 flex flex-col gap-3" 
            role="tablist" 
            aria-label="Engineering Approach Pillars"
          >
            {PILLARS.map((pillar) => {
              const isSelected = activeTab === pillar.id;
              const IconComponent = pillar.icon;

              return (
                <button
                  key={pillar.id}
                  id={`tab-${pillar.id}`}
                  role="tab"
                  aria-selected={isSelected}
                  aria-controls={`panel-${pillar.id}`}
                  tabIndex={isSelected ? 0 : -1}
                  onClick={() => setActiveTab(pillar.id)}
                  className={`group text-left p-5 rounded-lg border transition-all duration-300 relative overflow-hidden ${
                    isSelected
                      ? "bg-[#14161D] border-[#FF630F] shadow-[0_0_24px_rgba(255,99,15,0.15)]"
                      : "bg-[#0B0C0F]/80 border-[#222222] hover:border-[#444444] hover:bg-[#101217]"
                  }`}
                >
                  {/* Subtle active left accent line */}
                  <div 
                    className={`absolute left-0 top-0 bottom-0 w-1 bg-[#FF630F] transition-all duration-300 ${
                      isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-40"
                    }`} 
                  />

                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className={`font-mono text-xs font-semibold px-2 py-0.5 rounded border transition-colors ${
                        isSelected 
                          ? "bg-[#FF630F]/15 text-[#FF630F] border-[#FF630F]/40" 
                          : "bg-white/5 text-[#A0A1A6] border-white/10 group-hover:text-white"
                      }`}>
                        {pillar.index}
                      </span>
                      <h3 className={`font-display text-lg md:text-xl font-medium tracking-[-0.02em] transition-colors ${
                        isSelected ? "text-white" : "text-[#CCCCCC] group-hover:text-white"
                      }`}>
                        {pillar.title}
                      </h3>
                    </div>

                    <IconComponent className={`text-xl transition-colors shrink-0 ${
                      isSelected ? "text-[#FF630F]" : "text-[#555555] group-hover:text-[#949494]"
                    }`} />
                  </div>

                  <p className="mt-2 text-xs md:text-sm text-[#888888] font-body line-clamp-1 pl-9">
                    {pillar.subtitle}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Active Pillar Blueprint Detail Console (Right Column) */}
          <div 
            id={`panel-${currentPillar.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${currentPillar.id}`}
            className="lg:col-span-7 bg-[#0B0C0F] border border-[#222222] rounded-xl p-6 md:p-8 relative flex flex-col justify-between min-h-[480px] shadow-[0_10px_40px_rgba(0,0,0,0.6)]"
          >
            {/* Terminal Window Header Bar */}
            <div className="flex items-center justify-between border-b border-[#222222] pb-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#333333]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#333333]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#333333]" />
                <span className="ml-2 font-mono text-xs text-[#949494] uppercase tracking-wider">
                  SPEC: {currentPillar.id.toUpperCase()}_BLUEPRINT.MD
                </span>
              </div>

              <div className="flex items-center gap-2 font-mono text-xs text-[#FF630F] bg-[#FF630F]/10 border border-[#FF630F]/20 px-2.5 py-1 rounded">
                <span>{currentPillar.badge}</span>
              </div>
            </div>

            {/* Narrative & Description */}
            <div className="space-y-6">
              <div>
                <h4 className="font-display text-2xl md:text-3xl font-medium text-white tracking-[-0.03em] mb-2">
                  {currentPillar.title}
                </h4>
                <p className="font-utility text-xs md:text-sm text-[#FF630F] font-mono tracking-wide">
                  // {currentPillar.subtitle}
                </p>
              </div>

              <p className="font-body text-sm md:text-base text-[#CCCCCC] leading-relaxed">
                {currentPillar.description}
              </p>

              {/* Architectural Invariants Checklist */}
              <div className="pt-2">
                <div className="font-utility text-xs font-semibold text-[#949494] uppercase tracking-[0.12em] mb-3 font-mono">
                  ARCHITECTURAL INVARIANTS:
                </div>
                <div className="grid grid-cols-1 gap-2.5">
                  {currentPillar.invariants.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-[#14161D]/60 border border-white/5 rounded-md p-3">
                      <HiCheckCircle className="text-[#FF630F] text-base shrink-0 mt-0.5" />
                      <span className="font-body text-xs md:text-sm text-[#DDDDDD] leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Bar: Tech Stack Badges & Metric Scoreboard */}
            <div className="mt-8 pt-6 border-t border-[#222222] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="block font-mono text-[10px] text-[#949494] uppercase tracking-[0.1em] mb-2">
                  CORE TOOLS &amp; PROTOCOLS
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {currentPillar.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs px-2.5 py-1 rounded bg-[#181B24] border border-[#2E3342] text-[#B8B8B8] hover:text-white hover:border-[#FF630F] transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="sm:text-right border-t sm:border-t-0 sm:border-l border-[#222222] pt-3 sm:pt-0 sm:pl-6 shrink-0">
                <span className="block font-mono text-[10px] text-[#949494] uppercase tracking-[0.1em]">
                  {currentPillar.metricLabel}
                </span>
                <span className="font-display text-lg md:text-xl font-medium text-[#FF630F]">
                  {currentPillar.metricValue}
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Contextual CTA Links */}
        <div className="mt-16 pt-8 border-t border-[#222222] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-utility text-xs md:text-sm text-[#888888]">
            Need a production system built with this architectural rigor?
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#work"
              className="font-utility text-xs md:text-sm font-semibold text-white hover:text-[#FF630F] transition-colors flex items-center gap-1.5"
            >
              <span>See production projects</span>
              <HiArrowNarrowRight className="text-sm" />
            </a>
            <span className="text-[#333333]">•</span>
            <a
              href="#contact"
              className="font-utility text-xs md:text-sm font-semibold text-[#FF630F] hover:text-white transition-colors"
            >
              Start an engineering conversation ↗
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
