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
      className="relative w-full min-h-screen flex items-center pt-20 pb-12 overflow-hidden max-w-8xl mx-auto"
      id="home"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-hero animate-gradient"></div>
      <div className="absolute inset-0 bg-[url('/img/asif4.jpg')] opacity-10 mix-blend-overlay"></div>

      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
      <div
        className="absolute top-40 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute -bottom-8 left-1/2 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"
        style={{ animationDelay: "4s" }}
      ></div>

      <div className="relative z-10 container mx-auto px-4 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-4 leading-tight">
              Moh. Asraful
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 via-pink-200 to-purple-200">
                Hasan Asif
              </span>
            </h1>
            <div className="flex items-center justify-center lg:justify-start mb-8 min-h-[80px]">
              <h2 className="inline font-semibold text-white text-2xl sm:text-3xl lg:text-4xl">
                I'm a{" "}
                <span className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-200 font-bold">
                  {currentText}
                </span>
                <span className="typed-cursor text-primary-300 animate-pulse">
                  |
                </span>
              </h2>
            </div>
            <p className="text-white/90 text-lg mb-8 max-w-xl">
              Passionate front-end developer creating beautiful, responsive, and
              user-friendly web experiences.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="/my_cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-white flex items-center gap-2"
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
          <div className="order-first lg:order-last flex justify-center">
            <div className="relative w-full max-w-lg">
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl transform rotate-6 opacity-20 animate-pulse-slow"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/30 backdrop-blur-sm">
                <Image
                  src="/img/asif4.jpg"
                  alt="Ashraful Asif"
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent-400 rounded-full blur-2xl opacity-60"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-pink-500 rounded-full blur-2xl opacity-40"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
