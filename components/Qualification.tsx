"use client";

export default function Qualification() {
  return (
    <div
      className="py-12 relative overflow-hidden"
      id="qualification"
      style={{ backgroundColor: "#121212" }}
    >
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid-sm opacity-50 pointer-events-none" />

      {/* Side glow */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,106,0,0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 lg:px-20">
        <div className="section-header">
          <h1 className="section-header-bg">Quality</h1>
          <h1 className="section-header-text">Education &amp; Experience</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education */}
          <div
            className="rounded-2xl p-6 border"
            style={{
              backgroundColor: "#1E1E1E",
              borderColor: "rgba(255,106,0,0.12)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
            }}
          >
            <h3 className="text-2xl font-bold mb-6" style={{
              background: "linear-gradient(135deg, #FF6A00 0%, #fb923c 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              WebkitTextFillColor: "transparent",
            }}>
              My Education
            </h3>
            <div
              className="pl-8 pt-2 ml-2 space-y-8"
              style={{ borderLeft: "2px solid rgba(255,106,0,0.35)" }}
            >
              <TimelineItem
                title="School"
                subtitle="Saheen Academy School &amp; College, Feni"
                period="Passed"
                description=""
              />
              <TimelineItem
                title="College"
                subtitle="Feni National College"
                period="2018 - 2020"
              />
              <TimelineItem
                title="Bachelor of Science"
                subtitle="American International University-Bangladesh"
                period="2022 - running"
                description="Relevant Courses: Algorithms, Data Structure, Object Oriented Analysis &amp; Design, Software Engineering, Operating Systems, Compiler Design, Advanced Web Technologies, Machine Learning, Artificial Intelligence, Data Science, Network Security"
              />
            </div>
          </div>

          {/* Experience */}
          <div
            className="rounded-2xl p-6 border"
            style={{
              backgroundColor: "#1E1E1E",
              borderColor: "rgba(255,106,0,0.12)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
            }}
          >
            <h3 className="text-2xl font-bold mb-6" style={{
              background: "linear-gradient(135deg, #FF6A00 0%, #fb923c 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              WebkitTextFillColor: "transparent",
            }}>
              My Experience
            </h3>
            <div
              className="pl-8 pt-2 ml-2 space-y-8"
              style={{ borderLeft: "2px solid rgba(255,106,0,0.35)" }}
            >
              <TimelineItem
                title="Frontend Developer"
                subtitle="Codinzy"
                period="August 2025 – Present"
                description="Developed interactive and responsive web applications using React.js and Next.js. Collaborated with UI/UX designers to implement modern, dynamic interfaces. Assisted in curriculum design for coding education modules. Conducted testing, optimized performance, and ensured high code quality."
              />
              <TimelineItem
                title="Coding Instructor"
                subtitle="Codingal"
                period="May 2024 – September 2025"
                description="Taught web development, game design, and logic building to students aged 8–18. Delivered personalized lessons in JavaScript, Python, and block-based coding. Guided project-based learning and fostered creativity in coding. Maintained excellent student engagement and course completion rates."
              />
              <TimelineItem
                title="Freelance Frontend Developer"
                subtitle="Upwork"
                period="July 2022 – Present"
                description="Designed responsive websites for global clients. Developed modular and optimized frontend components using React.js. Improved website performance and accessibility across multiple devices."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TimelineItem({
  title,
  subtitle,
  period,
  description,
}: {
  title: string;
  subtitle: string;
  period: string;
  description?: string;
}) {
  return (
    <div className="relative">
      {/* Orange dot */}
      <div
        className="absolute -left-[45px] top-2 w-5 h-5 rounded-full border-2"
        style={{
          backgroundColor: "#121212",
          borderColor: "#FF6A00",
          boxShadow: "0 0 10px rgba(255,106,0,0.5)",
        }}
      />
      <h5 className="font-bold mb-1" style={{ color: "#f1f5f9" }}>
        {title}
      </h5>
      <p className="mb-2 text-sm" style={{ color: "#94a3b8" }}>
        <span style={{ color: "#fb923c" }}>{subtitle}</span>
        <span className="mx-2 opacity-40">|</span>
        <small style={{ color: "#94a3b8" }}>{period}</small>
      </p>
      {description && (
        <p className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>
          {description}
        </p>
      )}
    </div>
  );
}
