"use client";

import { FaGraduationCap, FaBriefcase, FaCalendar, FaMapMarkerAlt } from "react-icons/fa";

export default function Qualification() {
  return (
    <div
      className="py-20 lg:py-28 relative overflow-hidden"
      id="qualification"
      style={{ backgroundColor: "#0a0518" }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-sm opacity-40 pointer-events-none" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-64 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 100% at 50% 0%, rgba(139, 92, 246, 0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 lg:px-20">
        {/* Section Header */}
        <div className="section-header mb-16">
          <span className="section-label">Qualification</span>
          <h2 className="section-title">Education & Experience</h2>
          <p className="section-subtitle">
            My journey of learning and professional growth
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Education */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(168, 85, 247, 0.1) 100%)",
                  border: "1px solid rgba(139, 92, 246, 0.2)",
                }}
              >
                <FaGraduationCap className="w-5 h-5" style={{ color: "#a78bfa" }} />
              </div>
              <h3 className="text-2xl font-bold gradient-text">Education</h3>
            </div>

            <div className="space-y-6">
              <TimelineItem
                icon={<FaGraduationCap className="w-3.5 h-3.5" />}
                title="Bachelor of Science"
                subtitle="American International University-Bangladesh"
                period="2022 - Present"
                description="Relevant Courses: Algorithms, Data Structure, Object Oriented Analysis & Design, Software Engineering, Operating Systems, Machine Learning, AI, Data Science, Network Security"
              />
              <TimelineItem
                icon={<FaGraduationCap className="w-3.5 h-3.5" />}
                title="Higher Secondary"
                subtitle="Feni National College"
                period="2018 - 2020"
              />
              <TimelineItem
                icon={<FaGraduationCap className="w-3.5 h-3.5" />}
                title="Secondary School"
                subtitle="Saheen Academy School & College, Feni"
                period="Completed"
              />
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, rgba(244, 114, 182, 0.2) 0%, rgba(168, 85, 247, 0.1) 100%)",
                  border: "1px solid rgba(244, 114, 182, 0.2)",
                }}
              >
                <FaBriefcase className="w-5 h-5" style={{ color: "#f472b6" }} />
              </div>
              <h3 className="text-2xl font-bold gradient-text-vibrant">Experience</h3>
            </div>

            <div className="space-y-6">
              <TimelineItem
                icon={<FaBriefcase className="w-3.5 h-3.5" />}
                title="Frontend Developer"
                subtitle="Codinzy"
                period="Aug 2025 – Present"
                description="Developed interactive and responsive web applications using React.js and Next.js. Collaborated with UI/UX designers to implement modern, dynamic interfaces."
                isPink
              />
              <TimelineItem
                icon={<FaBriefcase className="w-3.5 h-3.5" />}
                title="Coding Instructor"
                subtitle="Codingal"
                period="May 2024 – Sep 2025"
                description="Taught web development, game design, and logic building to students aged 8–18. Delivered personalized lessons in JavaScript, Python, and block-based coding."
                isPink
              />
              <TimelineItem
                icon={<FaBriefcase className="w-3.5 h-3.5" />}
                title="Freelance Developer"
                subtitle="Upwork"
                period="July 2022 – Present"
                description="Designed responsive websites for global clients. Developed modular and optimized frontend components using React.js."
                isPink
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TimelineItem({
  icon,
  title,
  subtitle,
  period,
  description,
  isPink = false,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  period: string;
  description?: string;
  isPink?: boolean;
}) {
  const accentColor = isPink ? "#f472b6" : "#a78bfa";
  const accentColorLight = isPink ? "#f9a8d4" : "#c4b5fd";

  return (
    <div
      className="relative pl-8 group"
      style={{
        borderLeft: `2px solid rgba(${isPink ? "244, 114, 182" : "139, 92, 246"}, 0.2)`,
        marginLeft: "6px",
      }}
    >
      {/* Timeline dot */}
      <div
        className="absolute -left-[9px] top-0 w-4 h-4 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-125"
        style={{
          backgroundColor: "#0a0518",
          border: `2px solid ${accentColor}`,
          boxShadow: `0 0 10px ${accentColor}40`,
        }}
      >
        <div
          className="w-1.5 h-1.5 rounded-full"
          style={{ backgroundColor: accentColor }}
        />
      </div>

      {/* Content card */}
      <div
        className="p-5 rounded-2xl border transition-all duration-300 mb-6"
        style={{
          backgroundColor: "rgba(139, 92, 246, 0.03)",
          borderColor: "rgba(139, 92, 246, 0.1)",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.borderColor = `${accentColor}40`;
          (e.currentTarget as HTMLDivElement).style.backgroundColor = `rgba(${isPink ? "244, 114, 182" : "139, 92, 246"}, 0.06)`;
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(139, 92, 246, 0.1)";
          (e.currentTarget as HTMLDivElement).style.backgroundColor = "rgba(139, 92, 246, 0.03)";
        }}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-2">
          <h5 className="font-bold text-base" style={{ color: "#f1f5f9" }}>
            {title}
          </h5>
          <span
            className="px-2 py-1 rounded-md text-xs font-medium whitespace-nowrap"
            style={{
              backgroundColor: `${accentColor}15`,
              color: accentColorLight,
            }}
          >
            {period}
          </span>
        </div>

        {/* Subtitle */}
        <p className="text-sm mb-2 flex items-center gap-2" style={{ color: accentColor }}>
          <FaMapMarkerAlt className="w-3 h-3" />
          {subtitle}
        </p>

        {/* Description */}
        {description && (
          <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>
            {description}
          </p>
        )}
      </div>
    </div>
  );
}