"use client";

import Link from "next/link";

export default function About() {
  const infoItems = [
    { label: "Name", value: "Moh. Asraful Hasan Asif" },
    { label: "Birthday", value: "14 November 2002" },
    { label: "Degree", value: "Bachelors" },
    { label: "Experience", value: "2 Years" },
    { label: "Phone", value: "+8801853376599" },
    { label: "Email", value: "ashrafulasif260@gmail.com" },
    {
      label: "Address",
      value: "House #254, Road-9, Block-C, Bashundhara, Dhaka",
    },
  ];

  return (
    <div className="py-12 bg-white" id="about">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="section-header">
          <h1 className="section-header-bg">About</h1>
          <h1 className="section-header-text">About Me</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary rounded-3xl transform rotate-3 opacity-10"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900 aspect-[5/6] flex items-center justify-center">
              {/* Video placeholder - will be replaced with actual video */}
              <div className="text-center p-8">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-white ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-white/80 text-lg font-semibold">
                  Video Portfolio
                </p>
                <p className="text-white/60 text-sm mt-2">Coming Soon</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/30 to-transparent"></div>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <span className="inline-block px-4 py-2 bg-gradient-primary text-white rounded-full text-sm font-semibold mb-4">
                Full-Stack Developer
              </span>
              <h3 className="text-3xl font-bold mb-6 gradient-text">
                Crafting Digital Experiences
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                I'm a full-stack developer building scalable, user-centric
                products end to end — from modern, responsive UIs to secure
                APIs, databases, and cloud deployment.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {infoItems.map((item, index) => (
                <div key={index} className="card card-hover">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 w-2 h-2 rounded-full bg-gradient-primary"></div>
                    <div>
                      <h6 className="font-bold text-gray-900 mb-1">
                        {item.label}
                      </h6>
                      <p className="text-gray-600">{item.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="https://www.facebook.com/ashraful.asif260"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                💼 Hire Me
              </Link>
              <a href="#" className="btn btn-outline-primary">
                📚 Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
