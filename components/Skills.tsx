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
  Tools: [
    { name: "Git & GitHub", percentage: 92 },
  ],
  All: []
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
      className="py-24 bg-gradient-to-br from-gray-50 to-purple-50/30"
      id="skill"
    >
      <div className="container mx-auto px-4 lg:px-20">
        <div className="section-header">
          <h1 className="section-header-bg">Skills</h1>
          <h1 className="section-header-text">My Skills</h1>
        </div>
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
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
              className={`px-4 py-2 rounded-full border text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? "bg-primary-500 text-white border-primary-500"
                  : "bg-white text-gray-700 border-gray-200 hover:border-primary-300"
              }`}
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
    <div className="card card-hover group">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h6 className="font-bold text-gray-900 text-lg">{skill.name}</h6>
          <p className="text-xs text-gray-500">Proficiency</p>
        </div>
        <span className="px-3 py-1 bg-primary-500 text-white rounded-full text-sm font-bold">
          {skill.percentage}%
        </span>
      </div>
      <div className="h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner">
        <div
          ref={progressRef}
          className="h-full rounded-full bg-primary-500 transition-all duration-1000 ease-out shadow-lg"
          style={{ width: "0%" }}
        />
      </div>
    </div>
  );
}
