"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { FaCode, FaServer, FaDatabase, FaCloud, FaTools, FaStar } from "react-icons/fa";

interface Skill {
  name: string;
  percentage: number;
  icon?: React.ReactNode;
}

type SkillCategory =
  | "All"
  | "Frontend"
  | "Backend"
  | "Databases"
  | "DevOps"
  | "Tools";

const categoryToSkills: Record<SkillCategory, Skill[]> = {
  Frontend: [
    { name: "TypeScript", percentage: 90 },
    { name: "React / Next.js", percentage: 92 },
    { name: "Tailwind CSS", percentage: 90 },
  ],
  Backend: [
    { name: "Node.js / Express", percentage: 88 },
    { name: "Nest.js", percentage: 84 },
  ],
  Databases: [
    { name: "PostgreSQL", percentage: 85 },
    { name: "MongoDB", percentage: 82 },
  ],
  DevOps: [
    { name: "Docker", percentage: 80 },
    { name: "CI/CD (GitHub Actions)", percentage: 78 },
  ],
  Tools: [{ name: "Git & GitHub", percentage: 92 }],
  All: [],
};

const categoryIcons: Record<SkillCategory, React.ReactNode> = {
  All: <FaStar className="w-4 h-4" />,
  Frontend: <FaCode className="w-4 h-4" />,
  Backend: <FaServer className="w-4 h-4" />,
  Databases: <FaDatabase className="w-4 h-4" />,
  DevOps: <FaCloud className="w-4 h-4" />,
  Tools: <FaTools className="w-4 h-4" />,
};

export default function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [activeCategory, setActiveCategory] = useState<SkillCategory>("All");
  const allSkills: Skill[] = Array.from(
    new Map(
      (Object.values(categoryToSkills).flat() as Skill[]).map((s) => [
        s.name,
        s,
      ])
    ).values()
  );
  const skills =
    activeCategory === "All" ? allSkills : categoryToSkills[activeCategory];

  return (
    <div
      className="py-20 lg:py-28 relative overflow-hidden"
      id="skill"
      style={{ backgroundColor: "#030014" }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />
      <div
        className="absolute top-1/2 left-0 w-96 h-96 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute top-1/2 right-0 w-80 h-80 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(244, 114, 182, 0.06) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 lg:px-20">
        {/* Section Header */}
        <div className="section-header mb-16">
          <span className="section-label">Skills</span>
          <h2 className="section-title">My Expertise</h2>
          <p className="section-subtitle">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {(
            [
              "All",
              "Frontend",
              "Backend",
              "Databases",
              "DevOps",
              "Tools",
            ] as SkillCategory[]
          ).map((cat) => (
            <button
              key={cat}
              type="button"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 border"
              style={
                activeCategory === cat
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
                if (activeCategory !== cat) {
                  (e.currentTarget as HTMLButtonElement).style.borderColor =
                    "rgba(139, 92, 246, 0.4)";
                  (e.currentTarget as HTMLButtonElement).style.color = "#a78bfa";
                }
              }}
              onMouseLeave={(e) => {
                if (activeCategory !== cat) {
                  (e.currentTarget as HTMLButtonElement).style.borderColor =
                    "rgba(139, 92, 246, 0.15)";
                  (e.currentTarget as HTMLButtonElement).style.color = "#94a3b8";
                }
              }}
              onClick={() => setActiveCategory(cat)}
            >
              {categoryIcons[cat]}
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          ref={ref}
        >
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              inView={inView}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function SkillCard({
  skill,
  inView,
  delay,
}: {
  skill: Skill;
  inView: boolean;
  delay: number;
}) {
  const progressRef = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (inView && !shown && progressRef.current) {
      const t = setTimeout(() => {
        if (progressRef.current) {
          progressRef.current.style.width = `${skill.percentage}%`;
        }
        setShown(true);
      }, delay);
      return () => clearTimeout(t);
    }
  }, [inView, shown, skill.percentage, delay]);

  return (
    <div className="group p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 cursor-default">
      <div className="flex items-start justify-between mb-5">
        <div>
          <h6
            className="font-bold text-lg mb-1"
            style={{ color: "#f1f5f9" }}
          >
            {skill.name}
          </h6>
          <p className="text-xs font-mono" style={{ color: "#64748b" }}>
            Proficiency Level
          </p>
        </div>
        <span
          className="px-3 py-1.5 rounded-lg text-sm font-bold tabular-nums"
          style={{
            background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%)",
            color: "#fff",
            boxShadow: "0 0 15px rgba(139, 92, 246, 0.3)",
          }}
        >
          {skill.percentage}%
        </span>
      </div>

      {/* Track */}
      <div
        className="h-2 rounded-full overflow-hidden"
        style={{ backgroundColor: "rgba(139, 92, 246, 0.1)" }}
      >
        <div
          ref={progressRef}
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: "0%",
            background: "linear-gradient(90deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%)",
            boxShadow: "0 0 10px rgba(139, 92, 246, 0.5)",
          }}
        />
      </div>
    </div>
  );
}