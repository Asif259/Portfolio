"use client";

import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

export default function Qualification() {
  const experiences = [
    {
      role: "Frontend Developer",
      organization: "Codinzy",
      period: "August 2025 – Present",
      type: "Full-Time",
      responsibilities: [
        "Developing interactive and responsive web applications using React and Next.js.",
        "Collaborating with product teams on modern, high-performance user interfaces.",
        "Contributing to coding education curriculum design and instructional resources.",
        "Testing, optimizing client-side performance, and maintaining code quality.",
      ],
    },
    {
      role: "Coding Instructor",
      organization: "Codingal",
      period: "May 2024 – September 2025",
      type: "Instruction",
      responsibilities: [
        "Teaching web development, game design, logic building, JavaScript, Python, and block-based coding.",
        "Delivering personalized 1:1 and small group coding lessons for students aged 8 to 18.",
        "Guiding project-based practical learning and hands-on portfolio development.",
      ],
    },
    {
      role: "Freelance Frontend Developer",
      organization: "Upwork",
      period: "July 2022 – Present",
      type: "Independent",
      responsibilities: [
        "Designing and building responsive, accessible client websites.",
        "Developing modular and reusable UI components in React and modern CSS.",
        "Auditing and enhancing website usability, accessibility, and mobile performance.",
      ],
    },
  ];

  const education = [
    {
      degree: "B.Sc. in Computer Science & Engineering",
      institution: "American International University-Bangladesh (AIUB)",
      period: "2022 – Present (In Progress)",
      details:
        "Algorithms, Data Structures, Object-Oriented Analysis & Design, Software Engineering, Operating Systems, Database Systems, Artificial Intelligence.",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Feni National College",
      period: "2018 – 2020",
      details: "Science division curriculum focusing on mathematics and physics.",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Shaheen Academy School & College, Feni",
      period: "Completed",
      details: "Secondary education with a foundation in science.",
    },
  ];

  return (
    <section
      className="cq-container relative bg-black text-white border-t border-[#222222] py-20 lg:py-28 px-[3%]"
      id="qualification"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14">
          <div className="font-utility text-sm md:text-base font-medium tracking-[0.08em] text-[#949494] uppercase font-mono mb-4">
            // Career &amp; Academic Timeline
          </div>
          <h2 className="font-display font-medium text-3xl md:text-5xl text-white tracking-[-0.03em] m-0">
            Experience &amp; Education
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Professional Experience (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2.5 pb-3 border-b border-[#222222]">
              <FaBriefcase className="w-3.5 h-3.5 text-[#FF630F]" />
              <h3 className="font-display text-lg font-medium text-white tracking-tight m-0">
                Professional Experience
              </h3>
            </div>

            <div className="space-y-4">
              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-lg border border-[#222222] bg-[#0E0E12] hover:border-[#333333] transition-colors space-y-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h4 className="font-display text-lg font-medium text-white m-0">
                      {exp.role}{" "}
                      <span className="text-[#FF630F] font-normal">@ {exp.organization}</span>
                    </h4>
                    <span className="font-utility text-xs text-[#888888] font-mono">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-1.5 pt-1">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li
                        key={rIdx}
                        className="font-body text-xs sm:text-sm text-[#A0A1A6] flex items-start gap-2 leading-relaxed"
                      >
                        <span className="text-[#FF630F] mt-1 shrink-0 text-[10px]">■</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Background (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2.5 pb-3 border-b border-[#222222]">
              <FaGraduationCap className="w-4 h-4 text-[#FF630F]" />
              <h3 className="font-display text-lg font-medium text-white tracking-tight m-0">
                Academic Background
              </h3>
            </div>

            <div className="space-y-4">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-lg border border-[#222222] bg-[#0E0E12] hover:border-[#333333] transition-colors space-y-2"
                >
                  <div className="flex flex-col gap-1">
                    <h4 className="font-display text-base font-medium text-white m-0">
                      {edu.degree}
                    </h4>
                    <p className="font-utility text-xs text-[#FF630F]">
                      {edu.institution}
                    </p>
                    <span className="font-utility text-[11px] text-[#949494] font-mono">
                      {edu.period}
                    </span>
                  </div>
                  <p className="font-body text-xs text-[#949494] leading-relaxed pt-1">
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
