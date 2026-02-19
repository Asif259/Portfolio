"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFileDownload, FaLinkedin, FaGithub, FaArrowDown } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

export default function Hero() {
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  const texts = [
    "Full Stack Web Developer",
    "Front End Developer",
    "Coding Instructor",
    "Freelancer",
  ];

  useEffect(() => {
    const typeSpeed = 100;
    const deleteSpeed = 50;
    const pauseTime = 2000;

    const timer = setTimeout(
      () => {
        const current = texts[textIndex];

        if (!isDeleting) {
          if (currentText.length < current.length) {
            setCurrentText(current.substring(0, currentText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), pauseTime);
          }
        } else {
          if (currentText.length > 0) {
            setCurrentText(current.substring(0, currentText.length - 1));
          } else {
            setIsDeleting(false);
            setTextIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? deleteSpeed : typeSpeed
    );

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, textIndex, texts]);

  return (
    <div
      className="relative w-full min-h-screen flex items-center pt-20 pb-12 overflow-hidden"
      id="home"
    >
      {/* Deep cosmic background */}
      <div className="absolute inset-0" style={{ backgroundColor: "#030014" }} />

      {/* Aurora gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, rgba(139, 92, 246, 0.08) 0%, rgba(168, 85, 247, 0.04) 50%, rgba(244, 114, 182, 0.06) 100%)",
        }}
      />

      {/* Technical grid background */}
      <div className="absolute inset-0 bg-grid opacity-60" />

      {/* Noise texture overlay */}
      <div className="absolute inset-0 bg-noise pointer-events-none" />

      {/* Main glow from top center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 100% 60% at 50% -10%, rgba(139, 92, 246, 0.2) 0%, transparent 60%)",
        }}
      />

      {/* Floating orbs */}
      <div
        className="absolute top-20 left-10 w-96 h-96 rounded-full animate-float pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(168, 85, 247, 0.08) 40%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute top-40 right-20 w-72 h-72 rounded-full animate-float pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(244, 114, 182, 0.12) 0%, rgba(168, 85, 247, 0.06) 40%, transparent 70%)",
          filter: "blur(50px)",
          animationDelay: "2s",
        }}
      />
      <div
        className="absolute -bottom-20 left-1/3 w-80 h-80 rounded-full animate-float pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 60%)",
          filter: "blur(60px)",
          animationDelay: "4s",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Text side */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-semibold mb-6 border backdrop-blur-md"
              style={{
                backgroundColor: "rgba(139, 92, 246, 0.1)",
                borderColor: "rgba(139, 92, 246, 0.3)",
                color: "#c4b5fd",
              }}
            >
              <HiSparkles className="w-4 h-4" style={{ color: "#a78bfa" }} />
              <span>Available for new opportunities</span>
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-4 leading-tight tracking-tight"
              style={{ color: "#f1f5f9" }}
            >
              Hi, I&apos;m{" "}
              <span className="gradient-text-vibrant">Ashraful Asif</span>
            </h1>

            <div className="flex items-center justify-center lg:justify-start mb-6 min-h-[50px]">
              <h2
                className="inline font-medium text-lg sm:text-xl lg:text-2xl"
                style={{ color: "#94a3b8" }}
              >
                <span className="text-white">I build </span>
                <span
                  className="font-semibold"
                  style={{
                    color: "#a78bfa",
                    textShadow: "0 0 20px rgba(167, 139, 250, 0.5)",
                  }}
                >
                  {currentText}
                </span>
                <span className="typed-cursor animate-pulse">|</span>
              </h2>
            </div>

            <p
              className="text-base lg:text-lg mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              style={{ color: "#64748b" }}
            >
              Crafting exceptional digital experiences with modern technologies.
              Passionate about clean code, innovative solutions, and bringing ideas to life.
            </p>

            {/* Tech stack pills */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8">
              {["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium border backdrop-blur-sm transition-all duration-300 hover:border-opacity-50"
                    style={{
                      backgroundColor: "rgba(139, 92, 246, 0.06)",
                      borderColor: "rgba(139, 92, 246, 0.2)",
                      color: "#a78bfa",
                    }}
                  >
                    {tech}
                  </span>
                )
              )}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
              <a
                href="/my_cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <FaFileDownload className="w-4 h-4" />
                Download CV
              </a>
              <Link
                href="https://www.linkedin.com/in/ashraful-asif"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-glass flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <FaLinkedin className="w-4 h-4" />
                LinkedIn
              </Link>
              <Link
                href="https://github.com/Asif259"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <FaGithub className="w-4 h-4" />
                GitHub
              </Link>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-center lg:justify-start gap-8">
              {[
                { value: "10+", label: "Projects" },
                { value: "2+", label: "Years Exp" },
                { value: "5+", label: "Technologies" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div
                    className="text-2xl lg:text-3xl font-bold"
                    style={{
                      background: "linear-gradient(135deg, #f1f5f9 0%, #a78bfa 100%)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs uppercase tracking-wider" style={{ color: "#64748b" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image side */}
          <div className="lg:col-span-5 order-first lg:order-last flex justify-center">
            <div className="relative w-full max-w-sm lg:max-w-md">
              {/* Animated gradient ring */}
              <div
                className="absolute -inset-2 rounded-3xl opacity-60 animate-gradient"
                style={{
                  background: "conic-gradient(from 0deg, #6366f1, #8b5cf6, #a855f7, #f472b6, #a855f7, #8b5cf6, #6366f1)",
                  filter: "blur(20px)",
                  backgroundSize: "200% 200%",
                }}
              />

              {/* Inner glow */}
              <div
                className="absolute -inset-1 rounded-3xl"
                style={{
                  background: "linear-gradient(135deg, rgba(139, 92, 246, 0.3) 0%, rgba(168, 85, 247, 0.2) 50%, rgba(244, 114, 182, 0.3) 100%)",
                  filter: "blur(10px)",
                }}
              />

              {/* Image frame */}
              <div
                className="relative rounded-3xl overflow-hidden backdrop-blur-sm"
                style={{
                  border: "2px solid rgba(139, 92, 246, 0.3)",
                  boxShadow: "0 0 40px rgba(139, 92, 246, 0.2), 0 20px 60px rgba(0,0,0,0.6)",
                }}
              >
                <Image
                  src="/img/asif4.jpg"
                  alt="Ashraful Asif"
                  width={450}
                  height={550}
                  className="w-full h-auto object-cover"
                  priority
                />
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "linear-gradient(to bottom, transparent 50%, rgba(3, 0, 20, 0.6) 100%)",
                  }}
                />
              </div>

              {/* Floating elements */}
              <div
                className="absolute -bottom-4 -left-4 px-4 py-3 rounded-2xl backdrop-blur-xl border animate-float"
                style={{
                  backgroundColor: "rgba(15, 10, 40, 0.8)",
                  borderColor: "rgba(139, 92, 246, 0.3)",
                  boxShadow: "0 0 25px rgba(139, 92, 246, 0.2)",
                  animationDelay: "0.5s",
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs font-medium" style={{ color: "#94a3b8" }}>Open to Work</span>
                </div>
              </div>

              <div
                className="absolute -top-3 -right-3 px-4 py-2 rounded-2xl backdrop-blur-xl border"
                style={{
                  backgroundColor: "rgba(15, 10, 40, 0.8)",
                  borderColor: "rgba(139, 92, 246, 0.3)",
                  boxShadow: "0 0 20px rgba(139, 92, 246, 0.15)",
                }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">💻</span>
                  <span className="text-xs font-medium" style={{ color: "#c4b5fd" }}>Developer</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs font-mono" style={{ color: "#64748b" }}>Scroll</span>
          <FaArrowDown className="w-4 h-4" style={{ color: "#a78bfa" }} />
        </div>
      </div>
    </div>
  );
}