"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

interface Skill {
  name: string;
  percentage: number;
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

export default function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.5,
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
      className="py-12 relative overflow-hidden"
      id="skill"
      style={{ backgroundColor: "#13131A" }}
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />

      {/* Glow accents */}
      <div
        className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 lg:px-20">
        <div className="section-header">
          <h1 className="section-header-bg">Skills</h1>
          <h1 className="section-header-text">My Skills</h1>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
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
              className="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 border"
              style={
                activeCategory === cat
                  ? {
                    background:
                      "linear-gradient(135deg, #10b981, #059669)",
                    color: "#fff",
                    borderColor: "transparent",
                    boxShadow: "0 0 15px rgba(16,185,129,0.35)",
                  }
                  : {
                    backgroundColor: "transparent",
                    color: "#94a3b8",
                    borderColor: "rgba(16,185,129,0.2)",
                  }
              }
              onMouseEnter={(e) => {
                if (activeCategory !== cat) {
                  (e.currentTarget as HTMLButtonElement).style.borderColor =
                    "rgba(16,185,129,0.5)";
                  (e.currentTarget as HTMLButtonElement).style.color = "#10b981";
                }
              }}
              onMouseLeave={(e) => {
                if (activeCategory !== cat) {
                  (e.currentTarget as HTMLButtonElement).style.borderColor =
                    "rgba(16,185,129,0.2)";
                  (e.currentTarget as HTMLButtonElement).style.color = "#94a3b8";
                }
              }}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
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
    <div className="card card-hover group cursor-default">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h6
            className="font-bold text-lg mb-0.5"
            style={{ color: "#f1f5f9" }}
          >
            {skill.name}
          </h6>
          <p className="text-xs font-mono" style={{ color: "#64748b" }}>
            Proficiency
          </p>
        </div>
        <span
          className="px-3 py-1 rounded-full text-sm font-bold tabular-nums"
          style={{
            background: "linear-gradient(135deg, #10b981, #059669)",
            color: "#fff",
            boxShadow: "0 0 10px rgba(16,185,129,0.3)",
          }}
        >
          {skill.percentage}%
        </span>
      </div>

      {/* Track */}
      <div
        className="h-2 rounded-full overflow-hidden"
        style={{ backgroundColor: "rgba(16,185,129,0.1)" }}
      >
        <div
          ref={progressRef}
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: "0%",
            background: "linear-gradient(90deg, #10b981, #34d399)",
            boxShadow: "0 0 8px rgba(16,185,129,0.5)",
          }}
        />
      </div>
    </div>
  );
}
