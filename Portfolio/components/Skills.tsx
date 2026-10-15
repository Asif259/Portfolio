"use client";

import { useState } from "react";

interface CapabilityItem {
  id: string;
  title: string;
  scope: string;
  description: string;
  deliverables: string;
  techTags: string[];
}

const capabilitiesData: CapabilityItem[] = [
  {
    id: "01",
    title: "Frontend & Next.js Architecture",
    scope: "React // Next.js App Router // TypeScript // Tailwind CSS // State Systems",
    description:
      "High-performance user interfaces crafted with strict type safety, responsive design token architectures, and fluid micro-interactions. Emphasizes clean component separation, hydration optimization, and accessible interactions.",
    deliverables: "Design systems, App Router layouts, client/server components, Zustand stores, TanStack queries.",
    techTags: ["Next.js 14", "React", "TypeScript", "Tailwind CSS", "Zustand", "TanStack Query", "Framer Motion"],
  },
  {
    id: "02",
    title: "Backend Services & Robust APIs",
    scope: "NestJS // Node.js // Express // REST APIs // Authentication Pipelines",
    description:
      "Resilient server-side services structured with enterprise modular architecture, dependency injection, strict DTO validation, and secure authentication layers (JWT, role-based guards, rate limiting, and CORS protection).",
    deliverables: "REST API endpoints, auth guards, custom middleware, Swagger/OpenAPI docs, service controllers.",
    techTags: ["NestJS", "Node.js", "Express", "REST APIs", "JWT", "Zod", "Passport.js"],
  },
  {
    id: "03",
    title: "Data Modeling & Cloud Infrastructure",
    scope: "PostgreSQL // Prisma ORM // MongoDB // Supabase // Cloud Deployment",
    description:
      "Relational and document database design prioritizing ACID guarantees, relational integrity, query indexing, and automated migration pipelines. Seamless deployment workflows on Vercel and containerized environments.",
    deliverables: "Prisma schema models, SQL migrations, database indexing, file upload pipelines, serverless functions.",
    techTags: ["PostgreSQL", "Prisma ORM", "MongoDB", "Supabase", "Convex", "Vercel", "Docker"],
  },
  {
    id: "04",
    title: "Technical Instruction & Code Mentorship",
    scope: "Curriculum Design // Architectural Audits // Algorithmic Thinking",
    description:
      "Instructed 100+ aspiring software engineers at Creative IT Institute. Proven ability to break down complex architectural patterns, run rigorous code reviews, and guide students from fundamentals to production applications.",
    deliverables: "Technical training curriculum, code review guidelines, live pair-programming, architectural mentorship.",
    techTags: ["Coding Education", "Code Review", "Data Structures", "System Design", "Agile Workflows"],
  },
];

export default function Skills() {
  const [expandedId, setExpandedId] = useState<string | null>("01");

  const toggleAccordion = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="cq-container relative bg-black text-white border-t border-[#222222] py-20 lg:py-28" id="skill">
      <div className="container mx-auto px-[3%] max-w-7xl flex flex-col justify-between min-h-[680px]">
        
        {/* Capabilities Top Header */}
        <div className="flex flex-col md:flex-row items-start md:items-start justify-between gap-6 mb-16 md:mb-20">
          <h2 className="font-display font-medium text-[clamp(32px,6.5cqw,88px)] leading-[1.0] tracking-[-0.045em] m-0">
            <span className="block text-white">THOUGHTFUL SYSTEMS.</span>
            <span className="block text-[#FF630F]">DISTINCTIVE OUTCOMES.</span>
          </h2>
          <div className="font-utility text-sm md:text-base font-medium tracking-[0.08em] text-[#949494] uppercase font-mono shrink-0">
            // CAPABILITIES &amp; STACK.
          </div>
        </div>

        {/* Capabilities Accordion Table */}
        <div className="flex flex-col border-t border-[#222222]">
          {capabilitiesData.map((cap) => {
            const isExpanded = expandedId === cap.id;
            return (
              <div key={cap.id} className="border-b border-[#222222]">
                {/* Row Trigger Button */}
                <button
                  onClick={() => toggleAccordion(cap.id)}
                  className="w-full grid grid-cols-[36px_minmax(0,1.2fr)_auto] md:grid-cols-[48px_minmax(0,1.2fr)_minmax(0,1.6fr)_140px] items-center gap-4 py-6 md:py-8 text-left cursor-pointer group"
                  aria-expanded={isExpanded}
                  aria-controls={`capability-panel-${cap.id}`}
                  aria-label={`Explore ${cap.title} details`}
                >
                  {/* Number Index */}
                  <span className="font-utility text-sm md:text-base text-[#777777] font-mono group-hover:text-[#FF630F] transition-colors">
                    {cap.id}
                  </span>

                  {/* Title */}
                  <span className="font-display text-lg md:text-2xl font-medium text-white tracking-[-0.02em] group-hover:text-[#FF630F] transition-colors">
                    {cap.title}
                  </span>

                  {/* Scope summary (Desktop) */}
                  <span className="hidden md:block font-utility text-sm text-[#AAAAAA] truncate pr-4">
                    {cap.scope}
                  </span>

                  {/* Explore Pill Button */}
                  <span
                    className={`justify-self-end inline-flex items-center justify-center px-4 py-2 rounded-full border text-xs md:text-sm font-utility font-medium transition-all duration-200 select-none ${
                      isExpanded
                        ? "bg-[#FF630F] border-[#FF630F] text-black"
                        : "bg-transparent border-[#FF630F] text-[#FF630F] group-hover:bg-[#FF630F] group-hover:text-black"
                    }`}
                  >
                    {isExpanded ? "Close −" : "Explore +"}
                  </span>
                </button>

                {/* Expandable Disclosure Panel */}
                {isExpanded && (
                  <div
                    id={`capability-panel-${cap.id}`}
                    className="pb-8 pl-0 md:pl-16 max-w-4xl space-y-4 animate-fadeIn"
                  >
                    <p className="font-body text-base md:text-lg leading-[1.55] text-[#B8B8B8]">
                      {cap.description}
                    </p>
                    <p className="font-utility text-xs md:text-sm text-[#949494]">
                      <strong className="text-white font-medium">Deliverables &amp; Focus:</strong>{" "}
                      {cap.deliverables}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {cap.techTags.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded bg-[#161616] border border-[#333333] font-mono text-xs text-[#E0E0E0]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer Footnotes */}
        <div className="mt-14 pt-6 border-t border-[#222222] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-utility text-xs md:text-sm text-[#777777]">
          <span>From focused components to full-stack platform architectures.</span>
          <span className="font-mono text-[#949494]">Independent engineer / Systems approach</span>
        </div>

      </div>
    </section>
  );
}
