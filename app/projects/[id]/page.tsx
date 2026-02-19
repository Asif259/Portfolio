"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  getProjectById,
  PortfolioProject,
  portfolioProjects,
  FeatureSection,
  Challenge,
} from "@/data/portfolio";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  FaChevronLeft,
  FaExternalLinkAlt,
  FaCheck,
  FaGithub,
  FaClock,
  FaUsers,
  FaTools,
} from "react-icons/fa";

export default function ProjectDetailPage() {
  const params = useParams();
  const id = parseInt(params.id as string);
  const project = getProjectById(id);

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

  if (!project) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: "#0B0B0F" }}
      >
        <div className="text-center">
          <h1
            className="text-4xl font-bold mb-4"
            style={{ color: "#f1f5f9" }}
          >
            Project Not Found
          </h1>
          <Link href="/#portfolio" className="btn btn-primary">
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  const cardStyle = {
    backgroundColor: "#13131A",
    border: "1px solid rgba(249,115,22,0.12)",
    boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
  };

  return (
    <main
      className="min-h-screen relative"
      style={{ backgroundColor: "#0B0B0F" }}
    >
      {/* Subtle grid background */}
      <div className="fixed inset-0 bg-grid-sm opacity-30 pointer-events-none z-0" />

      <Navbar solid />

      <div className="relative z-10 pt-20 pb-8">
        {/* Back Button */}
        <div className="container mx-auto px-4 lg:px-6 mb-6">
          <Link
            href="/#portfolio"
            className="flex items-center gap-2 transition-colors group text-sm font-medium"
            style={{ color: "#64748b" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "#f97316";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "#64748b";
            }}
          >
            <FaChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Go Back
          </Link>
        </div>

        {/* Hero Section */}
        <div className="container mx-auto px-4 lg:px-6 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
            {/* Project Image */}
            <div className="order-2 lg:order-1">
              <div
                className="rounded-xl p-3 sticky top-20"
                style={cardStyle}
              >
                <Image
                  src={project.coverImage}
                  alt={project.name}
                  width={800}
                  height={600}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="w-full h-auto object-contain rounded-lg"
                  priority
                />
              </div>
            </div>

            {/* Project Info */}
            <div className="order-1 lg:order-2 space-y-4">
              {/* Breadcrumb */}
              <nav className="text-xs mb-2" style={{ color: "#64748b" }}>
                <ol className="flex items-center gap-1.5 flex-wrap">
                  <li>
                    <Link
                      href="/"
                      className="hover:text-primary-400 transition-colors"
                    >
                      Home
                    </Link>
                  </li>
                  <li style={{ color: "rgba(249,115,22,0.4)" }}>/</li>
                  <li>
                    <Link
                      href="/#portfolio"
                      className="hover:text-primary-400 transition-colors"
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li style={{ color: "rgba(249,115,22,0.4)" }}>/</li>
                  <li style={{ color: "#94a3b8" }}>{project.name}</li>
                </ol>
              </nav>

              <div className="space-y-3">
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-semibold border"
                  style={{
                    backgroundColor: "rgba(249,115,22,0.08)",
                    borderColor: "rgba(249,115,22,0.25)",
                    color: "#fb923c",
                  }}
                >
                  {project.category}
                </span>
                <h1
                  className="text-2xl lg:text-3xl font-bold leading-tight"
                  style={{ color: "#f1f5f9" }}
                >
                  {project.name}
                </h1>
                <p className="leading-relaxed" style={{ color: "#94a3b8" }}>
                  {project.description}
                </p>
              </div>

              {/* Quick Info Cards */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                {[
                  {
                    icon: FaClock,
                    label: "Timeline",
                    value: new Date(project.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                    }),
                  },
                  { icon: FaUsers, label: "Role", value: project.role },
                  {
                    icon: FaTools,
                    label: "Stack",
                    value: project.technologies[0],
                  },
                ].map(({ icon: Icon, label, value }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 p-3 rounded-lg border"
                    style={cardStyle}
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{
                        backgroundColor: "rgba(249,115,22,0.1)",
                        color: "#f97316",
                      }}
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <div className="min-w-0">
                      <p
                        className="text-xs truncate"
                        style={{ color: "#64748b" }}
                      >
                        {label}
                      </p>
                      <p
                        className="font-semibold text-sm truncate"
                        style={{ color: "#f1f5f9" }}
                      >
                        {value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              {(project.liveUrl || project.githubUrl) && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary flex items-center gap-2 text-sm"
                    >
                      <FaExternalLinkAlt className="w-3.5 h-3.5" />
                      Live Demo
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
                          className="btn btn-outline-primary flex items-center gap-2 text-sm"
                        >
                          <FaGithub className="w-3.5 h-3.5" />
                          {project.githubUrl && project.githubUrl.length > 1
                            ? `Code ${index + 1}`
                            : "View Code"}
                        </a>
                      ))}
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Tabs Panel */}
              <div className="rounded-xl p-6" style={cardStyle}>
                {/* Tab Navigation */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {[
                    { id: "overview", label: "Overview" },
                    { id: "solution", label: "Solution" },
                    { id: "challenges", label: "Challenges" },
                  ].map((t) => (
                    <button
                      key={t.id}
                      className="px-4 py-2 rounded-lg border text-sm font-medium transition-all duration-200"
                      style={
                        activeTab === (t.id as "overview" | "solution" | "challenges")
                          ? {
                              background:
                                "linear-gradient(135deg, #f97316, #ea580c)",
                              color: "#fff",
                              borderColor: "transparent",
                              boxShadow: "0 0 12px rgba(249,115,22,0.3)",
                            }
                          : {
                              backgroundColor: "transparent",
                              color: "#94a3b8",
                              borderColor: "rgba(249,115,22,0.15)",
                            }
                      }
                      onClick={() =>
                        setActiveTab(
                          t.id as "overview" | "solution" | "challenges"
                        )
                      }
                    >
                      {t.label}
                    </button>
                  ))}
                </div>

                <div className="space-y-4">
                  {activeTab === "overview" && (
                    <>
                      <h2
                        className="text-xl font-bold"
                        style={{ color: "#f1f5f9" }}
                      >
                        Project Overview
                      </h2>
                      <p
                        className="leading-relaxed"
                        style={{ color: "#94a3b8" }}
                      >
                        {project.longDescription}
                      </p>
                    </>
                  )}
                  {activeTab === "solution" && (
                    <>
                      <h2
                        className="text-xl font-bold"
                        style={{ color: "#f1f5f9" }}
                      >
                        Solution & Approach
                      </h2>
                      <p
                        className="leading-relaxed"
                        style={{ color: "#94a3b8" }}
                      >
                        {project.solution}
                      </p>
                    </>
                  )}
                  {activeTab === "challenges" && (
                    <>
                      <h2
                        className="text-xl font-bold"
                        style={{ color: "#f1f5f9" }}
                      >
                        Challenges Faced
                      </h2>
                      {Array.isArray(project.challenges) &&
                      project.challenges.length > 0 &&
                      typeof project.challenges[0] === "object" &&
                      "title" in project.challenges[0] ? (
                        <ul className="space-y-3">
                          {(project.challenges as Challenge[]).map(
                            (challenge, index) => (
                              <li
                                key={index}
                                className="flex items-start gap-3"
                              >
                                <span
                                  className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0"
                                  style={{
                                    backgroundColor: "#f97316",
                                    boxShadow:
                                      "0 0 6px rgba(249,115,22,0.5)",
                                  }}
                                />
                                <div className="flex-1">
                                  <span
                                    className="font-semibold block mb-1 text-sm"
                                    style={{ color: "#f1f5f9" }}
                                  >
                                    {challenge.title}
                                  </span>
                                  <span
                                    className="text-sm"
                                    style={{ color: "#94a3b8" }}
                                  >
                                    {challenge.description}
                                  </span>
                                </div>
                              </li>
                            )
                          )}
                        </ul>
                      ) : (
                        <ul className="space-y-2">
                          {(project.challenges as string[]).map(
                            (challenge, index) => (
                              <li
                                key={index}
                                className="flex items-start gap-3"
                              >
                                <span
                                  className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0"
                                  style={{
                                    backgroundColor: "#f97316",
                                  }}
                                />
                                <span
                                  className="text-sm"
                                  style={{ color: "#94a3b8" }}
                                >
                                  {challenge}
                                </span>
                              </li>
                            )
                          )}
                        </ul>
                      )}
                    </>
                  )}
                </div>
              </div>

              {/* Gallery */}
              {project.images && project.images.length > 0 && (
                <div className="rounded-xl p-6" style={cardStyle}>
                  <h2
                    className="text-xl font-bold mb-4"
                    style={{ color: "#f1f5f9" }}
                  >
                    Project Gallery
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {project.images.map((img, idx) => (
                      <button
                        key={idx}
                        type="button"
                        className="group relative rounded-lg overflow-hidden cursor-zoom-in transition-all duration-300 border"
                        style={{
                          backgroundColor: "#0B0B0F",
                          borderColor: "rgba(249,115,22,0.1)",
                          padding: "8px",
                        }}
                        onMouseEnter={(e) => {
                          (
                            e.currentTarget as HTMLButtonElement
                          ).style.borderColor = "rgba(249,115,22,0.35)";
                        }}
                        onMouseLeave={(e) => {
                          (
                            e.currentTarget as HTMLButtonElement
                          ).style.borderColor = "rgba(249,115,22,0.1)";
                        }}
                        onClick={() => {
                          setActiveIndex(idx);
                          setLightboxImage(img);
                        }}
                      >
                        <Image
                          src={img}
                          alt={`${project.name} image ${idx + 1}`}
                          width={400}
                          height={300}
                          sizes="(max-width: 1024px) 100vw, 33vw"
                          className="w-full h-auto object-contain rounded transition-transform duration-300 group-hover:scale-105"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Features */}
              <div className="rounded-xl p-6" style={cardStyle}>
                <h2
                  className="text-xl font-bold mb-4"
                  style={{ color: "#f1f5f9" }}
                >
                  Key Features
                </h2>
                {Array.isArray(project.features) &&
                project.features.length > 0 &&
                typeof project.features[0] === "object" &&
                "title" in project.features[0] ? (
                  <div className="space-y-6">
                    {(project.features as FeatureSection[]).map(
                      (section, sectionIndex) => (
                        <div key={sectionIndex}>
                          <h3
                            className="text-lg font-semibold mb-3"
                            style={{ color: "#fb923c" }}
                          >
                            {section.title}
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {section.items.map((item, itemIndex) => (
                              <div
                                key={itemIndex}
                                className="flex items-start gap-3 p-3 rounded-lg border"
                                style={{
                                  backgroundColor: "rgba(249,115,22,0.04)",
                                  borderColor: "rgba(249,115,22,0.12)",
                                }}
                              >
                                <div
                                  className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                                  style={{
                                    background:
                                      "linear-gradient(135deg, #f97316, #ea580c)",
                                  }}
                                >
                                  <FaCheck
                                    className="w-3 h-3"
                                    style={{ color: "#fff" }}
                                  />
                                </div>
                                <div className="flex-1">
                                  <span
                                    className="font-medium block mb-1 text-sm"
                                    style={{ color: "#f1f5f9" }}
                                  >
                                    {item.name}
                                  </span>
                                  <span
                                    className="text-xs"
                                    style={{ color: "#64748b" }}
                                  >
                                    {item.description}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )
                    )}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {(project.features as string[]).map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-3 rounded-lg border"
                        style={{
                          backgroundColor: "rgba(249,115,22,0.04)",
                          borderColor: "rgba(249,115,22,0.12)",
                        }}
                      >
                        <div
                          className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{
                            background:
                              "linear-gradient(135deg, #f97316, #ea580c)",
                          }}
                        >
                          <FaCheck
                            className="w-3 h-3"
                            style={{ color: "#fff" }}
                          />
                        </div>
                        <span
                          className="font-medium text-sm"
                          style={{ color: "#f1f5f9" }}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-4 lg:sticky lg:top-20 h-max">
              {/* Project Info */}
              <div className="rounded-xl p-5" style={cardStyle}>
                <h3
                  className="text-lg font-bold mb-4"
                  style={{ color: "#f1f5f9" }}
                >
                  Project Information
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs mb-1" style={{ color: "#64748b" }}>
                      Date
                    </p>
                    <p
                      className="font-semibold text-sm"
                      style={{ color: "#f1f5f9" }}
                    >
                      {new Date(project.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs mb-1" style={{ color: "#64748b" }}>
                      Role
                    </p>
                    <p
                      className="font-semibold text-sm"
                      style={{ color: "#f1f5f9" }}
                    >
                      {project.role}
                    </p>
                  </div>
                  {project.client && (
                    <div>
                      <p className="text-xs mb-1" style={{ color: "#64748b" }}>
                        Client
                      </p>
                      <p
                        className="font-semibold text-sm"
                        style={{ color: "#f1f5f9" }}
                      >
                        {project.client}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Technologies */}
              <div className="rounded-xl p-5" style={cardStyle}>
                <h3
                  className="text-lg font-bold mb-4"
                  style={{ color: "#f1f5f9" }}
                >
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium border"
                      style={{
                        backgroundColor: "rgba(249,115,22,0.08)",
                        borderColor: "rgba(249,115,22,0.2)",
                        color: "#fb923c",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Related Projects */}
          <div className="mb-8">
            <h2
              className="text-xl font-bold mb-4"
              style={{ color: "#f1f5f9" }}
            >
              Related Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {portfolioProjects
                .filter(
                  (p) => p.id !== project.id && p.category === project.category
                )
                .slice(0, 3)
                .map((p) => (
                  <Link
                    key={p.id}
                    href={`/projects/${p.id}`}
                    className="group block rounded-xl overflow-hidden transition-all duration-300 border"
                    style={{
                      backgroundColor: "#13131A",
                      borderColor: "rgba(249,115,22,0.12)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor =
                        "rgba(249,115,22,0.35)";
                      (
                        e.currentTarget as HTMLAnchorElement
                      ).style.boxShadow = "0 0 20px rgba(249,115,22,0.1)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor =
                        "rgba(249,115,22,0.12)";
                      (
                        e.currentTarget as HTMLAnchorElement
                      ).style.boxShadow = "none";
                    }}
                  >
                    <div className="p-2">
                      <Image
                        src={p.coverImage}
                        alt={p.name}
                        width={400}
                        height={250}
                        className="w-full h-auto object-cover rounded-lg"
                      />
                    </div>
                    <div className="px-3 pb-3">
                      <h3
                        className="mt-1 font-semibold text-sm transition-colors duration-200"
                        style={{ color: "#f1f5f9" }}
                      >
                        {p.name}
                      </h3>
                      <p
                        className="text-xs line-clamp-2 mt-1"
                        style={{ color: "#64748b" }}
                      >
                        {p.description}
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>

          {/* View All */}
          <div className="flex justify-center">
            <Link href="/#portfolio" className="btn btn-primary">
              View All Projects
            </Link>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(11,11,15,0.95)" }}
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="max-w-4xl w-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightboxImage}
              alt="Preview"
              width={1200}
              height={800}
              sizes="90vw"
              className="w-full h-full object-contain rounded-xl"
              style={{
                border: "1px solid rgba(249,115,22,0.2)",
              }}
            />
            <div className="flex justify-between mt-4 gap-2">
              {[
                {
                  label: "← Previous",
                  action: () => {
                    if (!project?.images) return;
                    const next =
                      (activeIndex - 1 + project.images.length) %
                      project.images.length;
                    setActiveIndex(next);
                    setLightboxImage(project.images[next]);
                  },
                },
                {
                  label: "✕ Close",
                  action: () => setLightboxImage(null),
                },
                {
                  label: "Next →",
                  action: () => {
                    if (!project?.images) return;
                    const next = (activeIndex + 1) % project.images.length;
                    setActiveIndex(next);
                    setLightboxImage(project.images[next]);
                  },
                },
              ].map(({ label, action }) => (
                <button
                  key={label}
                  className="btn flex-1 border font-medium text-sm transition-all duration-200"
                  style={{
                    backgroundColor: "rgba(249,115,22,0.08)",
                    borderColor: "rgba(249,115,22,0.2)",
                    color: "#94a3b8",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                      "rgba(249,115,22,0.15)";
                    (e.currentTarget as HTMLButtonElement).style.borderColor =
                      "rgba(249,115,22,0.4)";
                    (e.currentTarget as HTMLButtonElement).style.color =
                      "#f97316";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                      "rgba(249,115,22,0.08)";
                    (e.currentTarget as HTMLButtonElement).style.borderColor =
                      "rgba(249,115,22,0.2)";
                    (e.currentTarget as HTMLButtonElement).style.color =
                      "#94a3b8";
                  }}
                  onClick={action}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
