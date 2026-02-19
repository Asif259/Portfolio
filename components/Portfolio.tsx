"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { portfolioProjects } from "@/data/portfolio";
import { FaExternalLinkAlt, FaCode } from "react-icons/fa";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<string>("*");

  const filteredItems =
    activeFilter === "*"
      ? portfolioProjects
      : portfolioProjects.filter((item) => item.category === activeFilter);

  const getCategoryLabel = (filter: string) => {
    switch (filter) {
      case "Frontend Development":
        return "Frontend";
      case "Backend Development":
        return "Backend";
      default:
        return "All";
    }
  };

  return (
    <div
      className="py-20 lg:py-28 relative overflow-hidden"
      id="portfolio"
      style={{ backgroundColor: "#030014" }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-64 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 100% at 50% 0%, rgba(139, 92, 246, 0.1) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(168, 85, 247, 0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 lg:px-20">
        {/* Section Header */}
        <div className="section-header mb-16">
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A selection of my recent work and personal projects
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {["*", "Frontend Development", "Backend Development"].map(
            (filter) => (
              <button
                key={filter}
                className="px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 border"
                style={
                  activeFilter === filter
                    ? {
                        background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%)",
                        color: "#fff",
                        borderColor: "transparent",
                        boxShadow: "0 0 20px rgba(139, 92, 246, 0.4)",
                      }
                    : {
                        backgroundColor: "rgba(139, 92, 246, 0.05)",
                        color: "#94a3b8",
                        borderColor: "rgba(139, 92, 246, 0.15)",
                      }
                }
                onMouseEnter={(e) => {
                  if (activeFilter !== filter) {
                    (e.currentTarget as HTMLButtonElement).style.borderColor =
                      "rgba(139, 92, 246, 0.4)";
                    (e.currentTarget as HTMLButtonElement).style.color = "#a78bfa";
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeFilter !== filter) {
                    (e.currentTarget as HTMLButtonElement).style.borderColor =
                      "rgba(139, 92, 246, 0.15)";
                    (e.currentTarget as HTMLButtonElement).style.color = "#94a3b8";
                  }
                }}
                onClick={() => setActiveFilter(filter)}
              >
                {getCategoryLabel(filter)}
              </button>
            )
          )}
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <Link
              key={item.id}
              href={`/projects/${item.id}`}
              className="group block"
            >
              <div
                className="relative overflow-hidden rounded-2xl border transition-all duration-500"
                style={{
                  border: "1px solid rgba(139, 92, 246, 0.1)",
                  backgroundColor: "rgba(139, 92, 246, 0.02)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    "rgba(139, 92, 246, 0.3)";
                  (e.currentTarget as HTMLDivElement).style.transform =
                    "translateY(-8px)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 20px 40px rgba(139, 92, 246, 0.15)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    "rgba(139, 92, 246, 0.1)";
                  (e.currentTarget as HTMLDivElement).style.transform =
                    "translateY(0)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
              >
                {/* Image container */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={item.coverImage}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: "linear-gradient(to top, rgba(3, 0, 20, 0.95) 0%, rgba(3, 0, 20, 0.5) 50%, transparent 100%)",
                    }}
                  />

                  {/* Quick action button */}
                  <div
                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{
                        background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                        boxShadow: "0 0 20px rgba(139, 92, 246, 0.4)",
                      }}
                    >
                      <FaExternalLinkAlt className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3
                      className="font-bold text-lg transition-colors duration-300 group-hover:text-purple-400"
                      style={{ color: "#f1f5f9" }}
                    >
                      {item.name}
                    </h3>
                    <span
                      className="px-2.5 py-1 rounded-lg text-xs font-medium whitespace-nowrap"
                      style={{
                        backgroundColor: "rgba(139, 92, 246, 0.1)",
                        color: "#c4b5fd",
                        border: "1px solid rgba(139, 92, 246, 0.2)",
                      }}
                    >
                      {item.category === "Frontend Development"
                        ? "Frontend"
                        : item.category === "Backend Development"
                        ? "Backend"
                        : "Full Stack"}
                    </span>
                  </div>

                  <p
                    className="text-sm mb-4 line-clamp-2"
                    style={{ color: "#64748b" }}
                  >
                    {item.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {item.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 rounded-md text-xs font-mono"
                        style={{
                          backgroundColor: "rgba(139, 92, 246, 0.08)",
                          color: "#a78bfa",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                    {item.technologies.length > 3 && (
                      <span
                        className="px-2 py-1 rounded-md text-xs"
                        style={{ color: "#64748b" }}
                      >
                        +{item.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}