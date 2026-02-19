"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { portfolioProjects } from "@/data/portfolio";
import FadeIn, { StaggerContainer, StaggerItem } from "./FadeIn";

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
      className="py-12 relative overflow-hidden"
      id="portfolio"
      style={{ backgroundColor: "#1E1E1E" }}
    >
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />

      {/* Top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-64 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 100% at 50% 0%, rgba(20,184,166,0.08) 0%, transparent 100%)",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 lg:px-20">
        <FadeIn direction="up" delay={0.1}>
          <div className="section-header">
            <h1 className="section-header-bg">Gallery</h1>
            <h1 className="section-header-text">My Portfolio</h1>
          </div>
        </FadeIn>

        {/* Filter buttons */}
        <FadeIn direction="up" delay={0.2}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {["*", "Frontend Development", "Backend Development"].map(
              (filter) => (
                <button
                  key={filter}
                  className="px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 border"
                  style={
                    activeFilter === filter
                      ? {
                          background:
                            "linear-gradient(135deg, #14b8a6, #0d9488)",
                          color: "#fff",
                          borderColor: "transparent",
                          boxShadow: "0 0 20px rgba(20,184,166,0.4)",
                        }
                      : {
                          backgroundColor: "transparent",
                          color: "#94a3b8",
                          borderColor: "rgba(20,184,166,0.2)",
                        }
                  }
                  onMouseEnter={(e) => {
                    if (activeFilter !== filter) {
                      (e.currentTarget as HTMLButtonElement).style.borderColor =
                        "rgba(20,184,166,0.5)";
                      (e.currentTarget as HTMLButtonElement).style.color =
                        "#14b8a6";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeFilter !== filter) {
                      (e.currentTarget as HTMLButtonElement).style.borderColor =
                        "rgba(20,184,166,0.2)";
                      (e.currentTarget as HTMLButtonElement).style.color =
                        "#94a3b8";
                    }
                  }}
                  onClick={() => setActiveFilter(filter)}
                >
                  {getCategoryLabel(filter)}
                </button>
              )
            )}
          </div>
        </FadeIn>

        {/* Project grid */}
        <FadeIn direction="up" delay={0.3}>
          <StaggerContainer delayBetween={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <StaggerItem key={item.id}>
                  <Link
                    href={`/projects/${item.id}`}
                    className="portfolio-item group block"
                  >
                    <div
                      className="relative overflow-hidden rounded-2xl border transition-all duration-300 group-hover:border-opacity-60"
                      style={{
                        border: "1px solid rgba(20,184,166,0.12)",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLDivElement).style.borderColor =
                          "rgba(20,184,166,0.4)";
                        (e.currentTarget as HTMLDivElement).style.boxShadow =
                          "0 0 30px rgba(20,184,166,0.15)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLDivElement).style.borderColor =
                          "rgba(20,184,166,0.12)";
                        (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                      }}
                    >
                      <Image
                        src={item.coverImage}
                        alt={item.name}
                        width={400}
                        height={300}
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="portfolio-overlay p-6">
                        <div className="text-center">
                          <h3
                            className="font-bold text-xl mb-2"
                            style={{ color: "#f1f5f9" }}
                          >
                            {item.name}
                          </h3>
                          <p
                            className="text-sm mb-4 line-clamp-2"
                            style={{ color: "rgba(241,245,249,0.75)" }}
                          >
                            {item.description}
                          </p>
                          <span
                            className="inline-block px-3 py-1 rounded-full text-xs font-semibold border"
                            style={{
                              backgroundColor: "rgba(20,184,166,0.15)",
                              borderColor: "rgba(20,184,166,0.4)",
                              color: "#2dd4bf",
                            }}
                          >
                            {item.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </FadeIn>
      </div>
    </div>
  );
}
