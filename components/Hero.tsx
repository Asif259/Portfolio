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
      <div className="absolute inset-0" style={{ backgroundColor: "#0B0B0F" }} />

      {/* Technical grid background */}
      <div
        className="absolute inset-0 bg-grid"
        style={{ opacity: 1 }}
      />

      {/* Emerald radial glow from top */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(16,185,129,0.14) 0%, transparent 65%)",
        }}
      />

      {/* Side accent glow left */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-80 h-80 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Floating blobs — emerald tinted */}
      <div
        className="absolute top-24 left-10 w-64 h-64 rounded-full animate-float pointer-events-none"
        style={{
          background: "rgba(16,185,129,0.07)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute top-40 right-10 w-56 h-56 rounded-full animate-float pointer-events-none"
        style={{
          background: "rgba(16,185,129,0.05)",
          filter: "blur(50px)",
          animationDelay: "2s",
        }}
      />
      <div
        className="absolute -bottom-8 left-1/2 w-72 h-72 rounded-full animate-float pointer-events-none"
        style={{
          background: "rgba(16,185,129,0.04)",
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
                backgroundColor: "rgba(16,185,129,0.08)",
                borderColor: "rgba(16,185,129,0.25)",
                color: "#34d399",
              }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: "#10b981", boxShadow: "0 0 6px #10b981" }}
              />
              Available for work
            </div>

            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight"
              style={{ color: "#f1f5f9" }}
            >
              Moh. Asraful
              <br />
              <span className="gradient-text">Hasan Asif</span>
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
                    color: "#10b981",
                    textShadow: "0 0 20px rgba(16,185,129,0.5)",
                  }}
                >
                  {currentText}
                </span>
                <span className="typed-cursor animate-pulse">|</span>
              </h2>
            </div>

            <p
              className="text-base lg:text-lg mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              style={{ color: "#64748b" }}
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
                      backgroundColor: "rgba(16,185,129,0.06)",
                      borderColor: "rgba(16,185,129,0.18)",
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
                className="btn btn-primary flex items-center gap-2"
              >
                <FaFileDownload className="w-4 h-4" />
                View CV
              </a>
              <Link
                href="https://www.linkedin.com/in/ashraful-asif"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-glass flex items-center gap-2"
              >
                <FaLinkedin className="w-4 h-4" />
                LinkedIn
              </Link>
            </div>
          </div>

          {/* Image side */}
          <div className="order-first lg:order-last flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Rotating glow ring */}
              <div
                className="absolute -inset-4 rounded-3xl opacity-30 animate-pulse-slow"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent 0%, rgba(16,185,129,0.6) 25%, transparent 50%, rgba(16,185,129,0.3) 75%, transparent 100%)",
                  filter: "blur(16px)",
                }}
              />
              {/* Emerald corner glow top-right */}
              <div
                className="absolute -top-6 -right-6 w-40 h-40 rounded-full pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(16,185,129,0.35) 0%, transparent 70%)",
                  filter: "blur(24px)",
                }}
              />
              {/* Emerald corner glow bottom-left */}
              <div
                className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(16,185,129,0.2) 0%, transparent 70%)",
                  filter: "blur(20px)",
                }}
              />

              {/* Image frame */}
              <div
                className="relative rounded-3xl overflow-hidden"
                style={{
                  border: "2px solid rgba(16,185,129,0.25)",
                  boxShadow:
                    "0 0 40px rgba(16,185,129,0.15), 0 20px 60px rgba(0,0,0,0.6)",
                }}
              >
                <Image
                  src="/img/asif4.jpg"
                  alt="Ashraful Asif"
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
                {/* Overlay tint */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent 60%, rgba(11,11,15,0.4) 100%)",
                  }}
                />
              </div>

              {/* Floating stat badge */}
              <div
                className="absolute -bottom-4 -left-4 px-4 py-3 rounded-xl backdrop-blur-md border"
                style={{
                  backgroundColor: "rgba(19,19,26,0.9)",
                  borderColor: "rgba(16,185,129,0.25)",
                  boxShadow: "0 0 20px rgba(16,185,129,0.15)",
                }}
              >
                <div
                  className="text-xl font-bold"
                  style={{ color: "#10b981" }}
                >
                  10+
                </div>
                <div className="text-xs" style={{ color: "#64748b" }}>
                  Projects
                </div>
              </div>

              <div
                className="absolute -top-4 -right-4 px-4 py-3 rounded-xl backdrop-blur-md border"
                style={{
                  backgroundColor: "rgba(19,19,26,0.9)",
                  borderColor: "rgba(16,185,129,0.25)",
                  boxShadow: "0 0 20px rgba(16,185,129,0.15)",
                }}
              >
                <div
                  className="text-xl font-bold"
                  style={{ color: "#10b981" }}
                >
                  2+
                </div>
                <div className="text-xs" style={{ color: "#64748b" }}>
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
            "linear-gradient(to bottom, transparent, #0B0B0F)",
        }}
      />
    </div>
  );
}
