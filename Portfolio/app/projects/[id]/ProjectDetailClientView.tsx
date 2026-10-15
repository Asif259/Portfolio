"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  PortfolioProject,
  FeatureSection,
  Challenge,
} from "@/data/portfolio";
import Navbar from "@/components/Navbar";
import {
  FaChevronLeft,
  FaExternalLinkAlt,
  FaCheck,
  FaGithub,
  FaClock,
  FaUsers,
  FaTools,
} from "react-icons/fa";
import { HiArrowNarrowRight } from "react-icons/hi";

interface ProjectDetailClientViewProps {
  project: PortfolioProject;
  relatedProjects: PortfolioProject[];
}

export default function ProjectDetailClientView({
  project,
  relatedProjects,
}: ProjectDetailClientViewProps) {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<
    "overview" | "solution" | "challenges"
  >("overview");

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!lightboxImage || !project?.images) return;
      if (e.key === "Escape") setLightboxImage(null);
      if (e.key === "ArrowLeft") {
        const next =
          (activeIndex - 1 + project.images.length) % project.images.length;
        setActiveIndex(next);
        setLightboxImage(project.images[next]);
      }
      if (e.key === "ArrowRight") {
        const next = (activeIndex + 1) % project.images.length;
        setActiveIndex(next);
        setLightboxImage(project.images[next]);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxImage, activeIndex, project]);

  return (
    <main className="min-h-screen relative bg-[#0B0C0F] text-[#F3F1EB]">
      {/* Subtle grid background */}
      <div className="fixed inset-0 bg-grid opacity-25 pointer-events-none z-0" />

      <Navbar solid />

      <div className="relative z-10 pt-24 pb-16">
        {/* Back navigation & breadcrumbs */}
        <div className="container mx-auto px-4 lg:px-12 max-w-7xl mb-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <Link
              href="/#portfolio"
              className="inline-flex items-center gap-2 text-xs font-mono text-[#A0A1A6] hover:text-[#FF630F] transition-colors py-1.5 px-3 rounded-lg border border-[#1E2028] bg-[#14161D]"
            >
              <FaChevronLeft className="w-3 h-3" />
              <span>Back to all projects</span>
            </Link>

            <nav className="text-xs font-mono text-[#666872]">
              <ol className="flex items-center gap-1.5">
                <li>
                  <Link href="/" className="hover:text-[#F3F1EB] transition-colors">
                    Home
                  </Link>
                </li>
                <li>/</li>
                <li>
                  <Link href="/#portfolio" className="hover:text-[#F3F1EB] transition-colors">
                    Work
                  </Link>
                </li>
                <li>/</li>
                <li className="text-[#A0A1A6] truncate max-w-[200px]">{project.name}</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Project Hero Header */}
        <div className="container mx-auto px-4 lg:px-12 max-w-7xl mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Project Image Preview (7 cols) */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-[#1E2028] bg-[#14161D] p-3 overflow-hidden shadow-2xl">
                <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-[#0B0C0F]">
                  <Image
                    src={project.coverImage}
                    alt={project.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Project Info & CTAs (5 cols) */}
            <div className="lg:col-span-5 space-y-5">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-[#FF630F]/10 border border-[#FF630F]/20 text-[#FF630F]">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-[#666872]">•</span>
                  <span className="text-xs font-mono text-[#A0A1A6]">{project.date}</span>
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F3F1EB] tracking-tight leading-tight">
                  {project.name}
                </h1>

                <p className="text-sm text-[#A0A1A6] leading-relaxed pt-1">
                  {project.description}
                </p>
              </div>

              {/* Quick Info Grid */}
              <div className="grid grid-cols-3 gap-2.5 pt-1">
                <div className="p-3 rounded-lg border border-[#1E2028] bg-[#14161D]">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#666872] mb-1">
                    <FaClock className="w-3 h-3 text-[#FF630F]" />
                    <span>Timeline</span>
                  </div>
                  <p className="text-xs font-semibold text-[#F3F1EB] truncate">
                    {isNaN(new Date(project.date).getTime())
                      ? project.date
                      : new Date(project.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                        })}
                  </p>
                </div>

                <div className="p-3 rounded-lg border border-[#1E2028] bg-[#14161D]">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#666872] mb-1">
                    <FaUsers className="w-3 h-3 text-[#FF630F]" />
                    <span>Role</span>
                  </div>
                  <p className="text-xs font-semibold text-[#F3F1EB] truncate">
                    {project.role}
                  </p>
                </div>

                <div className="p-3 rounded-lg border border-[#1E2028] bg-[#14161D]">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#666872] mb-1">
                    <FaTools className="w-3 h-3 text-[#FF630F]" />
                    <span>Primary</span>
                  </div>
                  <p className="text-xs font-semibold text-[#F3F1EB] truncate">
                    {project.technologies[0] || "Custom Stack"}
                  </p>
                </div>
              </div>

              {/* Live and Code Action Buttons */}
              <div className="flex flex-wrap items-center gap-2.5 pt-2">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <FaExternalLinkAlt className="w-3.5 h-3.5" />
                    Visit Live Demo
                  </a>
                )}

                {project.githubUrl && project.githubUrl.length > 0 && (
                  <>
                    {project.githubUrl.map((url, index) => (
                      <a
                        key={index}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-primary"
                      >
                        <FaGithub className="w-3.5 h-3.5" />
                        {project.githubUrl && project.githubUrl.length > 1
                          ? `Source (${index === 0 ? "Frontend" : "Backend"})`
                          : "View Source"}
                      </a>
                    ))}
                  </>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* Detailed Case Study Sections */}
        <div className="container mx-auto px-4 lg:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            
            {/* Main Narrative & Deep Breakdown (8 cols) */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Tabbed Narrative Panel */}
              <div className="rounded-2xl border border-[#1E2028] bg-[#14161D] p-6 sm:p-8">
                {/* Tab Navigation */}
                <div className="flex items-center gap-2 border-b border-[#1E2028] pb-4 mb-6">
                  {[
                    { id: "overview", label: "Overview" },
                    { id: "solution", label: "Technical Solution" },
                    { id: "challenges", label: "Engineering Challenges" },
                  ].map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 border ${
                        activeTab === t.id
                          ? "bg-[#FF630F] text-[#0B0C0F] border-[#FF630F] font-semibold"
                          : "bg-[#0B0C0F] text-[#A0A1A6] border-[#1E2028] hover:text-[#F3F1EB] hover:border-[#2E3342]"
                      }`}
                      onClick={() =>
                        setActiveTab(t.id as "overview" | "solution" | "challenges")
                      }
                    >
                      {t.label}
                    </button>
                  ))}
                </div>

                <div className="space-y-4">
                  {activeTab === "overview" && (
                    <div className="space-y-3">
                      <h2 className="text-xl font-bold text-[#F3F1EB]">
                        Problem Domain &amp; Architecture
                      </h2>
                      <p className="text-sm text-[#A0A1A6] leading-relaxed whitespace-pre-line">
                        {project.longDescription}
                      </p>
                    </div>
                  )}

                  {activeTab === "solution" && (
                    <div className="space-y-3">
                      <h2 className="text-xl font-bold text-[#F3F1EB]">
                        Architectural Strategy &amp; Implementation
                      </h2>
                      <p className="text-sm text-[#A0A1A6] leading-relaxed whitespace-pre-line">
                        {project.solution}
                      </p>
                    </div>
                  )}

                  {activeTab === "challenges" && (
                    <div className="space-y-4">
                      <h2 className="text-xl font-bold text-[#F3F1EB]">
                        Key Technical Hurdles
                      </h2>
                      {Array.isArray(project.challenges) &&
                      project.challenges.length > 0 &&
                      typeof project.challenges[0] === "object" &&
                      "title" in project.challenges[0] ? (
                        <div className="space-y-3">
                          {(project.challenges as Challenge[]).map(
                            (challenge, index) => (
                              <div
                                key={index}
                                className="p-4 rounded-xl border border-[#1E2028] bg-[#0B0C0F] space-y-1"
                              >
                                <div className="flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF630F]" />
                                  <h3 className="font-semibold text-sm text-[#F3F1EB]">
                                    {challenge.title}
                                  </h3>
                                </div>
                                <p className="text-xs text-[#A0A1A6] pl-3.5 leading-relaxed">
                                  {challenge.description}
                                </p>
                              </div>
                            )
                          )}
                        </div>
                      ) : (
                        <ul className="space-y-2">
                          {(project.challenges as string[]).map((c, i) => (
                            <li
                              key={i}
                              className="text-xs text-[#A0A1A6] flex items-start gap-2"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#FF630F] mt-1.5 flex-shrink-0" />
                              <span>{c}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Gallery Screenshots */}
              {project.images && project.images.length > 0 && (
                <div className="rounded-2xl border border-[#1E2028] bg-[#14161D] p-6 sm:p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-[#F3F1EB]">
                      Application Screenshots
                    </h2>
                    <span className="text-xs font-mono text-[#666872]">
                      Click to expand
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.images.map((img, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => {
                          setActiveIndex(idx);
                          setLightboxImage(img);
                        }}
                        className="group relative rounded-xl overflow-hidden border border-[#1E2028] bg-[#0B0C0F] text-left hover:border-[#2E3342] transition-colors"
                      >
                        <div className="relative aspect-video w-full overflow-hidden">
                          <Image
                            src={img}
                            alt={`${project.name} view ${idx + 1}`}
                            fill
                            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 40vw"
                          />
                        </div>
                        <div className="p-2.5 bg-[#14161D] border-t border-[#1E2028] flex items-center justify-between text-[11px] font-mono text-[#A0A1A6]">
                          <span>View {idx + 1}</span>
                          <span className="text-[#FF630F]">Inspect ↗</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Features */}
              <div className="rounded-2xl border border-[#1E2028] bg-[#14161D] p-6 sm:p-8">
                <h2 className="text-xl font-bold text-[#F3F1EB] mb-6">
                  Key Capabilities &amp; Features
                </h2>

                {Array.isArray(project.features) &&
                project.features.length > 0 &&
                typeof project.features[0] === "object" &&
                "title" in project.features[0] ? (
                  <div className="space-y-6">
                    {(project.features as FeatureSection[]).map(
                      (section, sIdx) => (
                        <div key={sIdx} className="space-y-3">
                          <h3 className="text-sm font-mono uppercase tracking-wider text-[#FF630F]">
                            {section.title}
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {section.items.map((it, itIdx) => (
                              <div
                                key={itIdx}
                                className="p-3.5 rounded-lg border border-[#1E2028] bg-[#0B0C0F] flex items-start gap-2.5"
                              >
                                <div className="w-4 h-4 rounded-full bg-[#FF630F]/10 border border-[#FF630F]/30 flex items-center justify-center text-[#FF630F] flex-shrink-0 mt-0.5">
                                  <FaCheck className="w-2.5 h-2.5" />
                                </div>
                                <div>
                                  <p className="text-xs font-semibold text-[#F3F1EB]">
                                    {it.name}
                                  </p>
                                  {it.description && (
                                    <p className="text-[11px] text-[#A0A1A6] mt-0.5 leading-relaxed">
                                      {it.description}
                                    </p>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )
                    )}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                    {(project.features as string[]).map((f, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-lg border border-[#1E2028] bg-[#0B0C0F] flex items-center gap-2.5 text-xs text-[#A0A1A6]"
                      >
                        <FaCheck className="w-3 h-3 text-[#FF630F] flex-shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar Metadata (4 cols) */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24 h-max">
              <div className="p-6 rounded-2xl border border-[#1E2028] bg-[#14161D] space-y-5">
                <h3 className="text-base font-bold text-[#F3F1EB] tracking-tight pb-3 border-b border-[#1E2028]">
                  Project Specifications
                </h3>

                <div className="space-y-3.5 text-xs">
                  <div>
                    <span className="text-mono text-[#666872] block mb-0.5">Category</span>
                    <span className="font-semibold text-[#F3F1EB]">{project.category}</span>
                  </div>

                  <div>
                    <span className="text-mono text-[#666872] block mb-0.5">Role</span>
                    <span className="font-semibold text-[#F3F1EB]">{project.role}</span>
                  </div>

                  {project.client && (
                    <div>
                      <span className="text-mono text-[#666872] block mb-0.5">Client / Context</span>
                      <span className="font-semibold text-[#F3F1EB]">{project.client}</span>
                    </div>
                  )}

                  <div>
                    <span className="text-mono text-[#666872] block mb-0.5">Completed Date</span>
                    <span className="font-semibold text-[#F3F1EB]">{project.date}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#1E2028]">
                  <p className="text-xs font-mono text-[#666872] mb-2.5">Technologies Used</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded text-[11px] font-mono border border-[#1E2028] bg-[#0B0C0F] text-[#A0A1A6]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Related Projects */}
              {relatedProjects && relatedProjects.length > 0 && (
                <div className="p-6 rounded-2xl border border-[#1E2028] bg-[#14161D] space-y-4">
                  <h3 className="text-sm font-bold text-[#F3F1EB]">
                    Related Projects
                  </h3>
                  <div className="space-y-3">
                    {relatedProjects.map((rel) => (
                      <Link
                        key={rel.id}
                        href={`/projects/${rel.id}`}
                        className="block p-2.5 rounded-xl border border-[#1E2028] bg-[#0B0C0F] hover:border-[#2E3342] transition-colors group"
                      >
                        <p className="text-xs font-bold text-[#F3F1EB] group-hover:text-[#FF630F] transition-colors truncate">
                          {rel.name}
                        </p>
                        <p className="text-[11px] text-[#A0A1A6] truncate mt-0.5">
                          {rel.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>

        {/* Lightbox Modal */}
        {lightboxImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B0C0F]/90 backdrop-blur-md"
            onClick={() => setLightboxImage(null)}
          >
            <div
              className="max-w-5xl w-full max-h-[90vh] bg-[#14161D] p-3 rounded-2xl border border-[#1E2028]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[16/10] w-full max-h-[75vh] rounded-xl overflow-hidden bg-[#0B0C0F]">
                <Image
                  src={lightboxImage}
                  alt="Expanded screenshot preview"
                  fill
                  sizes="90vw"
                  className="object-contain"
                />
              </div>

              <div className="flex items-center justify-between mt-3 gap-2">
                <button
                  type="button"
                  onClick={() => {
                    if (!project?.images) return;
                    const next =
                      (activeIndex - 1 + project.images.length) %
                      project.images.length;
                    setActiveIndex(next);
                    setLightboxImage(project.images[next]);
                  }}
                  className="px-4 py-2 rounded-lg border border-[#1E2028] bg-[#0B0C0F] text-xs font-mono text-[#A0A1A6] hover:text-[#F3F1EB]"
                >
                  ← Prev
                </button>

                <button
                  type="button"
                  onClick={() => setLightboxImage(null)}
                  className="px-4 py-2 rounded-lg bg-[#FF630F] text-[#0B0C0F] text-xs font-bold"
                >
                  Close (Esc)
                </button>

                <button
                  type="button"
                  onClick={() => {
                    if (!project?.images) return;
                    const next = (activeIndex + 1) % project.images.length;
                    setActiveIndex(next);
                    setLightboxImage(project.images[next]);
                  }}
                  className="px-4 py-2 rounded-lg border border-[#1E2028] bg-[#0B0C0F] text-xs font-mono text-[#A0A1A6] hover:text-[#F3F1EB]"
                >
                  Next →
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
