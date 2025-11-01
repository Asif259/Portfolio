"use client";

export default function Qualification() {
  return (
    <div
      className="py-10 bg-gradient-to-br from-gray-50 to-purple-50/30"
      id="qualification"
    >
      <div className="container mx-auto px-4 lg:px-20">
        <div className="section-header">
          <h1 className="section-header-bg">Quality</h1>
          <h1 className="section-header-text">Education & Experience</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="card">
            <h3 className="text-2xl font-bold mb-6 gradient-text">
              My Education
            </h3>
            <div className="border-l-4 border-primary-500 pl-8 pt-2 ml-2 space-y-8">
              <TimelineItem
                title="School"
                subtitle="Saheen Academy School & College, Feni"
                period="Passed"
                description=""
              />
              <TimelineItem
                title="College"
                subtitle="Feni National Collge"
                period="2018 - 2020"
              />
              <TimelineItem
                title="Bachelor of Science"
                subtitle="American International University-Bangladesh"
                period="2022 - running"
                description="Relevant Courses: Algorithms, Data Structure, Object Oriented Analysis & Design, Software Engineering, Operating Systems, Compiler Design, Advanced Web Technologies, Machine Learning, Artificial Intelligence, Data Science, Network Security"
              />
            </div>
          </div>
          <div className="card">
            <h3 className="text-2xl font-bold mb-6 gradient-text">
              My Experience
            </h3>
            <div className="border-l-4 border-primary-500 pl-8 pt-2 ml-2 space-y-8">
              <TimelineItem
                title="Coding Instructor"
                subtitle="Codingal"
                period="2024 - running"
                description="Worked as a coding instructor at Codingal, a platform for teaching coding to children. I have taught various programming languages to children from different countries. I have taught various programming languages to children from different countries."
              />
              <TimelineItem
                title="Web Developer"
                subtitle="Fiverr"
                period="2023 - running"
                description="Developed and maintained websites for clients using React, Next.js, Node.js, Express, and MongoDB. Collaborated with clients to understand their needs and develop solutions that meet their requirements. Provided technical support and troubleshooting for clients."
              />
              <TimelineItem
                title="Web Developer"
                subtitle="Upwork"
                period="2023 - running"
                description="Worked as a freelancer on Upwork, a platform for finding and hiring freelancers. I have worked on various projects for clients from different countries. I have worked on various projects for clients from different countries."
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
      <div className="absolute -left-[45px] top-2 w-6 h-6 rounded-full bg-gradient-primary border-4 border-white shadow-lg"></div>
      <h5 className="font-bold mb-1">{title}</h5>
      <p className="mb-2">
        <strong>{subtitle}</strong> | <small>{period}</small>
      </p>
      {description && <p className="text-gray-600">{description}</p>}
    </div>
  );
}
