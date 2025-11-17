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
    <div className="py-16 bg-white" id="about">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-2">
            About Me
          </h2>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Crafting Digital Experiences
          </h1>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Video Section */}
          <div className="space-y-6">
            {/* Intro */}
            <div className="space-y-4">
              <span className="inline-flex items-center px-4 py-2 bg-primary-500/10 text-primary-700 rounded-full text-sm font-semibold border border-primary-200">
                Full-Stack Developer
              </span>
              <p className="text-gray-600 text-lg leading-relaxed">
                I'm a passionate full-stack developer with 2 years of experience
                building scalable, user-centric applications. I specialize in
                creating modern, responsive UIs, secure backend APIs, and
                cloud-deployed solutions that deliver exceptional user
                experiences.
              </p>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-primary rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-sm"></div>
              <div className="relative rounded-xl overflow-hidden shadow-lg aspect-video bg-gray-100">
                <video
                  src="/video-portfolio.mp4"
                  controls
                  className="w-full h-full object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-300"
                  poster="/video-thumbnail.png"
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
                {/* Play overlay */}
                <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <div className="w-0 h-0 border-l-[12px] border-l-primary-600 border-y-[8px] border-y-transparent ml-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            {/* Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {infoItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100 hover:border-primary-200 transition-colors duration-200"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary-500/10 text-primary-600 flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h6 className="font-semibold text-gray-900 text-sm mb-1">
                        {item.label}
                      </h6>
                      <p className="text-gray-600 text-sm break-words leading-tight">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              <div className="text-center p-3 bg-primary-500/5 rounded-lg border border-primary-100">
                <div className="text-2xl font-bold text-primary-600">10+</div>
                <div className="text-xs text-gray-600 mt-1">Projects</div>
              </div>
              <div className="text-center p-3 bg-primary-500/5 rounded-lg border border-primary-100">
                <div className="text-2xl font-bold text-primary-600">2+</div>
                <div className="text-xs text-gray-600 mt-1">Years</div>
              </div>
              <div className="text-center p-3 bg-primary-500/5 rounded-lg border border-primary-100">
                <div className="text-2xl font-bold text-primary-600">5+</div>
                <div className="text-xs text-gray-600 mt-1">Technologies</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-4">
              <Link
                href="https://www.linkedin.com/in/ashraful-asif"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-600 transition-colors duration-200 shadow-sm hover:shadow-md"
              >
                <FaBriefcase className="w-4 h-4" />
                Hire Me
              </Link>
              <a
                href="#portfolio"
                className="flex items-center gap-2 px-6 py-3 bg-white text-primary-600 rounded-lg font-semibold border border-primary-200 hover:border-primary-300 transition-colors duration-200 shadow-sm hover:shadow-md"
              >
                <FaBook className="w-4 h-4" />
                View Portfolio
              </a>
            </div>
          </div>
        </div>

        {/* Skills Preview */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: "Frontend", value: "React, Next.js, TypeScript" },
            { name: "Backend", value: "Node.js, Express, MongoDB" },
            { name: "Mobile", value: "React Native, Expo" },
            { name: "Tools", value: "Git, Docker, AWS" },
          ].map((skill, index) => (
            <div
              key={index}
              className="text-center p-4 bg-gray-50 rounded-lg border border-gray-100"
            >
              <h4 className="font-semibold text-gray-900 mb-2">{skill.name}</h4>
              <p className="text-sm text-gray-600">{skill.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
