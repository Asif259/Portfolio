"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFileDownload, FaLinkedin } from "react-icons/fa";

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
      {/* Deep dark base */}
      <div className="absolute inset-0" style={{ backgroundColor: "#121212" }} />

      {/* Technical grid background */}
      <div
        className="absolute inset-0 bg-grid"
        style={{ opacity: 1 }}
      />

      {/* Orange radial glow from top */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(255,106,0,0.12) 0%, transparent 65%)",
        }}
      />

      {/* Side accent glow left */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-80 h-80 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,106,0,0.1) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Floating blobs — orange tinted */}
      <div
        className="absolute top-24 left-10 w-64 h-64 rounded-full animate-float pointer-events-none"
        style={{
          background: "rgba(255,106,0,0.06)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute top-40 right-10 w-56 h-56 rounded-full animate-float pointer-events-none"
        style={{
          background: "rgba(255,106,0,0.04)",
          filter: "blur(50px)",
          animationDelay: "2s",
        }}
      />
      <div
        className="absolute -bottom-8 left-1/2 w-72 h-72 rounded-full animate-float pointer-events-none"
        style={{
          background: "rgba(255,106,0,0.03)",
          filter: "blur(70px)",
          animationDelay: "4s",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text side */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-semibold mb-6 border"
              style={{
                backgroundColor: "rgba(255,106,0,0.08)",
                borderColor: "rgba(255,106,0,0.25)",
                color: "#fb923c",
              }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: "#FF6A00", boxShadow: "0 0 6px #FF6A00" }}
              />
              Available for work
            </div>

            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight"
              style={{ color: "#f1f5f9" }}
            >
              Moh. Asraful
              <br />
              <span style={{
                background: "linear-gradient(135deg, #FF6A00 0%, #fb923c 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
                WebkitTextFillColor: "transparent",
              }}>Hasan Asif</span>
            </h1>

            <div className="flex items-center justify-center lg:justify-start mb-8 min-h-[60px]">
              <h2
                className="inline font-semibold text-xl sm:text-2xl lg:text-3xl"
                style={{ color: "#94a3b8" }}
              >
                I&apos;m a{" "}
                <span
                  className="font-bold"
                  style={{
                    color: "#FF6A00",
                    textShadow: "0 0 20px rgba(255,106,0,0.5)",
                  }}
                >
                  {currentText}
                </span>
                <span className="typed-cursor animate-pulse">|</span>
              </h2>
            </div>

            <p
              className="text-base lg:text-lg mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              style={{ color: "#94a3b8" }}
            >
              Passionate full-stack developer creating beautiful, responsive, and
              user-friendly web experiences with modern technologies.
            </p>

            {/* Tech stack chips */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-10">
              {["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs font-mono font-medium border"
                    style={{
                      backgroundColor: "rgba(255,106,0,0.06)",
                      borderColor: "rgba(255,106,0,0.18)",
                      color: "#94a3b8",
                    }}
                  >
                    {tech}
                  </span>
                )
              )}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="/my_cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn flex items-center gap-2"
                style={{
                  background: "linear-gradient(135deg, #FF6A00 0%, #ea580c 100%)",
                  color: "#fff",
                  boxShadow: "0 0 15px rgba(255,106,0,0.35)",
                }}
              >
                <FaFileDownload className="w-4 h-4" />
                View CV
              </a>
              <Link
                href="https://www.linkedin.com/in/ashraful-asif"
                target="_blank"
                rel="noopener noreferrer"
                className="btn flex items-center gap-2"
                style={{
                  background: "rgba(255,106,0,0.1)",
                  border: "1px solid rgba(255,106,0,0.3)",
                  color: "#fff",
                }}
              >
                <FaLinkedin className="w-4 h-4" />
                LinkedIn
              </Link>
            </div>
          </div>

          {/* Image side - Circular Profile */}
          <div className="order-first lg:order-last flex justify-center">
            <div className="relative">
              {/* Outer glow ring */}
              <div
                className="absolute -inset-4 rounded-full opacity-40 animate-pulse-slow"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent 0%, rgba(255,106,0,0.5) 25%, transparent 50%, rgba(255,106,0,0.3) 75%, transparent 100%)",
                  filter: "blur(20px)",
                }}
              />
              
              {/* Main circular image container */}
              <div
                className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden"
                style={{
                  border: "3px solid rgba(255,106,0,0.3)",
                  boxShadow: "0 0 40px rgba(255,106,0,0.2), 0 0 80px rgba(255,106,0,0.1), inset 0 0 40px rgba(0,0,0,0.3)",
                }}
              >
                <Image
                  src="/img/asif4.jpg"
                  alt="Photo of Moh. Asraful Hasan Asif, Full Stack Developer"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 384px"
                />
              </div>

              {/* Floating stat badge - Projects */}
              <div
                className="absolute -bottom-2 -left-4 sm:-left-8 px-4 py-3 rounded-xl backdrop-blur-md border"
                style={{
                  backgroundColor: "rgba(30,30,30,0.95)",
                  borderColor: "rgba(255,106,0,0.25)",
                  boxShadow: "0 0 20px rgba(255,106,0,0.15)",
                }}
              >
                <div
                  className="text-xl font-bold"
                  style={{ color: "#FF6A00" }}
                >
                  10+
                </div>
                <div className="text-xs" style={{ color: "#94a3b8" }}>
                  Projects
                </div>
              </div>

              {/* Floating stat badge - Experience */}
              <div
                className="absolute -top-2 -right-4 sm:-right-8 px-4 py-3 rounded-xl backdrop-blur-md border"
                style={{
                  backgroundColor: "rgba(30,30,30,0.95)",
                  borderColor: "rgba(255,106,0,0.25)",
                  boxShadow: "0 0 20px rgba(255,106,0,0.15)",
                }}
              >
                <div
                  className="text-xl font-bold"
                  style={{ color: "#FF6A00" }}
                >
                  2+
                </div>
                <div className="text-xs" style={{ color: "#94a3b8" }}>
                  Yrs Exp
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, #121212)",
        }}
      />
    </div>
  );
}
