"use client";

import Link from "next/link";
import Image from "next/image";
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
  FaCode,
  FaServer,
  FaMobile,
  FaTools,
} from "react-icons/fa";

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
      value: "Bashundhara, Dhaka",
    },
  ];

  const skillCategories = [
    { name: "Frontend", value: "React, Next.js, TypeScript", icon: FaCode, color: "#818cf8" },
    { name: "Backend", value: "Node.js, Express, MongoDB", icon: FaServer, color: "#a78bfa" },
    { name: "Mobile", value: "React Native, Expo", icon: FaMobile, color: "#c084fc" },
    { name: "Tools", value: "Git, Docker, AWS", icon: FaTools, color: "#f472b6" },
  ];

  return (
    <div
      className="py-20 lg:py-28 relative overflow-hidden"
      id="about"
      style={{ backgroundColor: "#0a0518" }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-sm opacity-40 pointer-events-none" />
      <div
        className="absolute top-0 left-0 w-full h-64 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 100% at 50% 0%, rgba(139, 92, 246, 0.08) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(244, 114, 182, 0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="section-header mb-16">
          <span className="section-label">About Me</span>
          <h2 className="section-title">Passionate Developer</h2>
          <p className="section-subtitle">
            Building digital experiences that make a difference
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Image & Video */}
          <div className="space-y-8">
            {/* Video Section */}
            <div className="relative group">
              <div
                className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(168, 85, 247, 0.2), rgba(244, 114, 182, 0.3))",
                  filter: "blur(15px)",
                }}
              />
              <div
                className="relative rounded-2xl overflow-hidden border"
                style={{
                  backgroundColor: "#0f0728",
                  borderColor: "rgba(139, 92, 246, 0.15)",
                }}
              >
                <video
                  src="/video-portfolio.mp4"
                  controls
                  className="w-full h-auto rounded-2xl"
                  poster="/video-thumbnail.png"
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "10+", label: "Projects Completed" },
                { value: "2+", label: "Years Experience" },
                { value: "5+", label: "Technologies" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:border-opacity-40"
                  style={{
                    backgroundColor: "rgba(139, 92, 246, 0.05)",
                    borderColor: "rgba(139, 92, 246, 0.15)",
                  }}
                >
                  <div
                    className="text-2xl lg:text-3xl font-bold mb-1"
                    style={{
                      background: "linear-gradient(135deg, #f1f5f9 0%, #a78bfa 100%)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs" style={{ color: "#64748b" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            {/* Bio */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span
                  className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold border backdrop-blur-sm"
                  style={{
                    backgroundColor: "rgba(139, 92, 246, 0.1)",
                    borderColor: "rgba(139, 92, 246, 0.25)",
                    color: "#c4b5fd",
                  }}
                >
                  Full-Stack Developer
                </span>
              </div>
              <p className="text-base leading-relaxed" style={{ color: "#94a3b8" }}>
                I&apos;m a passionate full-stack developer with 2 years of experience
                building scalable, user-centric applications. I specialize in
                creating modern, responsive UIs, secure backend APIs, and
                cloud-deployed solutions that deliver exceptional user experiences.
              </p>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {infoItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-xl border transition-all duration-300 group backdrop-blur-sm"
                    style={{
                      backgroundColor: "rgba(139, 92, 246, 0.03)",
                      borderColor: "rgba(139, 92, 246, 0.1)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor =
                        "rgba(139, 92, 246, 0.3)";
                      (e.currentTarget as HTMLDivElement).style.backgroundColor =
                        "rgba(139, 92, 246, 0.08)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor =
                        "rgba(139, 92, 246, 0.1)";
                      (e.currentTarget as HTMLDivElement).style.backgroundColor =
                        "rgba(139, 92, 246, 0.03)";
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{
                        backgroundColor: "rgba(139, 92, 246, 0.1)",
                        color: "#a78bfa",
                      }}
                    >
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h6
                        className="font-semibold text-sm mb-0.5"
                        style={{ color: "#f1f5f9" }}
                      >
                        {item.label}
                      </h6>
                      <p
                        className="text-xs truncate"
                        style={{ color: "#64748b" }}
                      >
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="https://www.linkedin.com/in/ashraful-asif"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary flex items-center gap-2"
              >
                <FaBriefcase className="w-4 h-4" />
                Hire Me
              </Link>
              <a
                href="#portfolio"
                className="btn btn-outline-primary flex items-center gap-2"
              >
                <FaBook className="w-4 h-4" />
                View Portfolio
              </a>
            </div>
          </div>
        </div>

        {/* Skills Preview */}
        <div className="mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skillCategories.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div
                  key={index}
                  className="group p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 text-center"
                  style={{
                    backgroundColor: "rgba(139, 92, 246, 0.03)",
                    borderColor: "rgba(139, 92, 246, 0.1)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor =
                      "rgba(139, 92, 246, 0.3)";
                    (e.currentTarget as HTMLDivElement).style.transform =
                      "translateY(-4px)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow =
                      "0 12px 40px rgba(139, 92, 246, 0.1)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor =
                      "rgba(139, 92, 246, 0.1)";
                    (e.currentTarget as HTMLDivElement).style.transform =
                      "translateY(0)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: `${skill.color}15`,
                      color: skill.color,
                    }}
                  >
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h4
                    className="font-semibold mb-1 text-sm"
                    style={{ color: "#f1f5f9" }}
                  >
                    {skill.name}
                  </h4>
                  <p className="text-xs" style={{ color: "#64748b" }}>
                    {skill.value}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}