"use client";

import { useState } from "react";
import { FaFileDownload, FaGithub, FaLinkedin, FaCheck } from "react-icons/fa";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "asrafulmdasif@gmail.com";

  const handleCopyEmail = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }
    } catch {
      // Fallback
    }
  };

  return (
    <section className="cq-container relative bg-black text-white border-t border-[#222222] pt-24 pb-16 px-[3%]" id="contact">
      <div className="container mx-auto max-w-7xl">

        {/* Kicker */}
        <div className="font-utility text-sm md:text-base font-medium tracking-[0.08em] text-[#949494] uppercase font-mono mb-10">
          // Contact.
        </div>

        {/* Oversized Editorial Display Heading */}
        <h2 className="font-display font-medium text-[clamp(42px,9cqw,120px)] leading-[0.88] tracking-[-0.045em] mb-16 md:mb-20 m-0">
          <span className="block text-white">LET’S MAKE</span>
          <span className="block text-[#FF630F]">SOMETHING MATTER.</span>
        </h2>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 pb-20 border-b border-[#222222]">

          {/* Left Column: Mission & Tags */}
          <div className="space-y-6 max-w-xl">
            <p className="font-body text-lg md:text-xl text-[#B8B8B8] leading-[1.5]">
              Have a full-stack platform, web application, or complex digital product in mind? Tell me what you’re building and where you want to take it.
            </p>
            <div className="font-utility text-xs md:text-sm text-[#949494] font-mono tracking-wider pt-2">
              Next.js Architectures / Distributed Backends / Relational Schemas / Mentorship
            </div>
            <div className="pt-4 flex flex-wrap gap-3">
              <a
                href="/my_cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="pill-btn text-sm"
              >
                <FaFileDownload className="w-3.5 h-3.5 text-black" />
                Download CV / Resume ↗
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Email Box & Socials */}
          <div className="flex flex-col gap-8 justify-start">
            <div className="p-6 md:p-8 rounded-lg border border-[#282828] bg-[#0E0E12] space-y-4">
              <span className="font-utility text-xs uppercase tracking-widest text-[#949494] block font-mono">
                Direct Communication
              </span>
              <div>
                <a
                  href={`mailto:${email}`}
                  className="font-display text-2xl md:text-3xl text-white hover:text-[#FF630F] transition-colors break-all"
                >
                  {email}
                </a>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#444444] bg-[#181818] font-utility text-xs text-[#E0E0E0] hover:border-[#FF630F] hover:text-[#FF630F] transition-all cursor-pointer"
                >
                  {copied ? (
                    <>
                      <FaCheck className="w-3 h-3 text-[#22C55E]" />
                      <span className="text-[#22C55E]">Email copied to clipboard!</span>
                    </>
                  ) : (
                    <span>Copy email address</span>
                  )}
                </button>
              </div>
            </div>

            {/* Verified Social Channels */}
            <div className="flex items-center gap-6 font-utility text-sm">
              <span className="text-xs font-mono uppercase tracking-wider text-[#666666]">
                Channels:
              </span>
              <a
                href="https://github.com/Asif259"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#AAAAAA] hover:text-white transition-colors flex items-center gap-1.5"
              >
                <FaGithub className="w-4 h-4 text-[#FF630F]" />
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/ashraful-asif"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#AAAAAA] hover:text-white transition-colors flex items-center gap-1.5"
              >
                <FaLinkedin className="w-4 h-4 text-[#FF630F]" />
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
