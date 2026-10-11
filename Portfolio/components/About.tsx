"use client";

import Link from "next/link";
import {
  FaBriefcase,
  FaBook,
  FaUser,
  FaCalendar,
  FaGraduationCap,
  FaAward,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import FadeIn, { StaggerContainer, StaggerItem } from "./FadeIn";

export default function About() {
  const infoItems = [
    { icon: FaUser, label: "Name", value: "Moh. Asraful Hasan Asif" },
    { icon: FaCalendar, label: "Birthday", value: "14 November 2002" },
    { icon: FaGraduationCap, label: "Degree", value: "Bachelors" },
    { icon: FaAward, label: "Experience", value: "2 Years" },
    { icon: FaPhone, label: "Phone", value: "+8801853376599" },
    { icon: FaEnvelope, label: "Email", value: "ashrafulasif260@gmail.com" },
    {
      icon: FaMapMarkerAlt,
      label: "Address",
      value: "House #254, Road-9, Block-C, Bashundhara, Dhaka",
    },
  ];

  return (
    <div
      className="py-16 relative overflow-hidden"
      id="about"
      style={{ backgroundColor: "#121212" }}
    >
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-grid-sm opacity-60 pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <FadeIn direction="up" delay={0.1}>
          <div className="text-center mb-12">
            <span
              className="inline-block text-xs font-mono font-semibold uppercase tracking-widest px-4 py-2 rounded-full border mb-4"
              style={{
                color: "#14b8a6",
                borderColor: "rgba(20,184,166,0.3)",
                backgroundColor: "rgba(20,184,166,0.06)",
              }}
            >
              About Me
            </span>
            <h1
              className="text-3xl lg:text-4xl font-bold mb-4"
              style={{ color: "#f1f5f9" }}
            >
              Crafting Digital Experiences
            </h1>
            <div
              className="w-20 h-0.5 mx-auto rounded-full"
              style={{
                background: "linear-gradient(90deg, #14b8a6, #0d9488)",
                boxShadow: "0 0 10px rgba(20,184,166,0.5)",
              }}
            />
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Intro Section */}
          <FadeIn direction="left" delay={0.2} className="space-y-6">
            <div className="space-y-4">
              <span
                className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold border"
                style={{
                  backgroundColor: "rgba(20,184,166,0.08)",
                  borderColor: "rgba(20,184,166,0.25)",
                  color: "#2dd4bf",
                }}
              >
                Full-Stack Developer
              </span>
              <p className="text-base leading-relaxed" style={{ color: "#94a3b8" }}>
                I&apos;m a passionate full-stack developer with 2 years of experience
                building scalable, user-centric applications. I specialize in
                creating modern, responsive UIs, secure backend APIs, and
                cloud-deployed solutions that deliver exceptional user experiences.
              </p>
            </div>

            {/* Info Grid - First 4 items */}
            <StaggerContainer delayBetween={0.05}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {infoItems.slice(0, 4).map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <StaggerItem key={index}>
                      <div
                        className="flex items-start gap-3 p-3 rounded-lg border transition-all duration-200 group"
                        style={{
                          backgroundColor: "#1E1E1E",
                          borderColor: "rgba(20,184,166,0.1)",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLDivElement).style.borderColor =
                            "rgba(20,184,166,0.3)";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLDivElement).style.borderColor =
                            "rgba(20,184,166,0.1)";
                        }}
                      >
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{
                            backgroundColor: "rgba(20,184,166,0.1)",
                            color: "#14b8a6",
                          }}
                        >
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h6
                            className="font-semibold text-sm mb-1"
                            style={{ color: "#f1f5f9" }}
                          >
                            {item.label}
                          </h6>
                          <p
                            className="text-sm break-words leading-tight"
                            style={{ color: "#94a3b8" }}
                          >
                            {item.value}
                          </p>
                        </div>
                      </div>
                    </StaggerItem>
                  );
                })}
              </div>
            </StaggerContainer>
          </FadeIn>

          {/* Content Section */}
          <FadeIn direction="right" delay={0.3} className="space-y-6">
            {/* Info Grid - Last 3 items */}
            <StaggerContainer delayBetween={0.05}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {infoItems.slice(4).map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <StaggerItem key={index}>
                      <div
                        className="flex items-start gap-3 p-3 rounded-lg border transition-all duration-200 group"
                        style={{
                          backgroundColor: "#1E1E1E",
                          borderColor: "rgba(20,184,166,0.1)",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLDivElement).style.borderColor =
                            "rgba(20,184,166,0.3)";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLDivElement).style.borderColor =
                            "rgba(20,184,166,0.1)";
                        }}
                      >
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{
                            backgroundColor: "rgba(20,184,166,0.1)",
                            color: "#14b8a6",
                          }}
                        >
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h6
                            className="font-semibold text-sm mb-1"
                            style={{ color: "#f1f5f9" }}
                          >
                            {item.label}
                          </h6>
                          <p
                            className="text-sm break-words leading-tight"
                            style={{ color: "#94a3b8" }}
                          >
                            {item.value}
                          </p>
                        </div>
                      </div>
                    </StaggerItem>
                  );
                })}
              </div>
            </StaggerContainer>

            {/* Stats */}
            <FadeIn direction="up" delay={0.4}>
              <div className="grid grid-cols-3 gap-4 pt-2">
                {[
                  { value: "10+", label: "Projects" },
                  { value: "2+", label: "Years" },
                  { value: "5+", label: "Technologies" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="text-center p-3 rounded-lg border"
                    style={{
                      backgroundColor: "rgba(20,184,166,0.05)",
                      borderColor: "rgba(20,184,166,0.15)",
                    }}
                  >
                    <div
                      className="text-2xl font-bold"
                      style={{
                        color: "#14b8a6",
                        textShadow: "0 0 15px rgba(20,184,166,0.4)",
                      }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-xs mt-1" style={{ color: "#94a3b8" }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Action Buttons */}
            <FadeIn direction="up" delay={0.5}>
              <div className="flex flex-wrap gap-3 pt-4">
                <Link
                  href="https://www.linkedin.com/in/ashraful-asif"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn flex items-center gap-2"
                  style={{
                    background: "linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)",
                    color: "#fff",
                    boxShadow: "0 0 15px rgba(20,184,166,0.35)",
                  }}
                >
                  <FaBriefcase className="w-4 h-4" />
                  Hire Me
                </Link>
                <a
                  href="#portfolio"
                  className="btn flex items-center gap-2 border font-semibold text-sm"
                  style={{
                    backgroundColor: "transparent",
                    borderColor: "rgba(20,184,166,0.25)",
                    color: "#94a3b8",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      "rgba(20,184,166,0.5)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "#14b8a6";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      "rgba(20,184,166,0.25)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "#94a3b8";
                  }}
                >
                  <FaBook className="w-4 h-4" />
                  View Portfolio
                </a>
              </div>
            </FadeIn>
          </FadeIn>
        </div>

        {/* Skills Preview */}
        <FadeIn direction="up" delay={0.4}>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Frontend", value: "React, Next.js, TypeScript" },
              { name: "Backend", value: "Node.js, Express, MongoDB" },
              { name: "Mobile", value: "React Native, Expo" },
              { name: "Tools", value: "Git, Docker, AWS" },
            ].map((skill, index) => (
              <div
                key={index}
                className="text-center p-4 rounded-lg border transition-all duration-200"
                style={{
                  backgroundColor: "#1E1E1E",
                  borderColor: "rgba(20,184,166,0.1)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    "rgba(20,184,166,0.3)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 0 15px rgba(20,184,166,0.08)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    "rgba(20,184,166,0.1)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
              >
                <h4
                  className="font-semibold mb-2 text-sm"
                  style={{ color: "#f1f5f9" }}
                >
                  {skill.name}
                </h4>
                <p className="text-xs" style={{ color: "#94a3b8" }}>
                  {skill.value}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
