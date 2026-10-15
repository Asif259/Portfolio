"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-black text-white border-t border-[#222222] py-12 px-[3%] overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[#222222]">

          {/* Identity & Wordmark */}
          <div className="space-y-1">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-display text-lg font-medium tracking-tight text-white"
            >
              <span className="w-2 h-2 rounded-full bg-[#FF630F]" />
              <span>Ashraful Asif</span>
            </Link>
            <p className="font-utility text-xs text-[#888888]">
              Full-Stack Software Engineer &amp; Coding Instructor // AIUB CSE
            </p>
          </div>

          {/* Quick Navigation Anchors */}
          <nav className="flex flex-wrap items-center gap-6 font-utility text-xs tracking-wider uppercase text-[#888888]">
            <a href="#about" className="hover:text-white transition-colors">
              Approach
            </a>
            <a href="#featured" className="hover:text-white transition-colors">
              Featured
            </a>
            <a href="#work" className="hover:text-white transition-colors">
              Selected Work
            </a>
            <a href="#skill" className="hover:text-white transition-colors">
              Capabilities
            </a>
            <a href="#qualification" className="hover:text-white transition-colors">
              Experience
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </nav>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="font-utility text-xs font-semibold tracking-wider uppercase text-[#FF630F] hover:text-white transition-colors cursor-pointer"
          >
            Back to top ↑
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-utility text-[#666666] gap-3">
          <p>© {currentYear} Ashraful Asif. Crafted with precision &amp; Next.js.</p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Asif259"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FF630F] transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ashraful-asif"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FF630F] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:asrafulmdasif@gmail.com"
              className="hover:text-[#FF630F] transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
