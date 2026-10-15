"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaFileDownload } from "react-icons/fa";

export default function Navbar({ solid = false }: { solid?: boolean }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 160);

      const sections = [
        "home",
        "about",
        "portfolio",
        "skill",
        "qualification",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    if (window.location.pathname !== "/") {
      return; // normal link behavior if on subpage
    }
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const scrolled = solid || isScrolled;

  const navLinks = [
    { id: "about", label: "Approach" },
    { id: "portfolio", label: "Work" },
    { id: "skill", label: "Capabilities" },
    { id: "qualification", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md border-b border-[#222222] py-3.5 translate-y-0 opacity-100 pointer-events-auto"
          : "opacity-0 -translate-y-4 pointer-events-none py-5"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-12 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Brand Wordmark */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 text-base md:text-lg font-bold tracking-tight text-[#F3F1EB] transition-colors"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF630F] group-hover:scale-125 transition-transform" />
            <span className="font-mono text-xs text-[#A0A1A6] font-normal uppercase tracking-wider">
              dev /
            </span>
            <span className="font-bold">Ashraful Asif</span>
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            className="lg:hidden p-2 text-[#A0A1A6] hover:text-[#F3F1EB] transition-colors rounded-lg border border-transparent hover:border-[#1E2028]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenuAlt3 className="w-6 h-6" />
            )}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`/#${link.id}`}
                onClick={(e) => handleSmoothScroll(e, link.id)}
                className={`px-3.5 py-1.5 text-sm font-medium rounded-md transition-all duration-200 relative ${
                  activeSection === link.id
                    ? "text-[#F3F1EB] bg-[#14161D]"
                    : "text-[#A0A1A6] hover:text-[#F3F1EB] hover:bg-[#14161D]/50"
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#FF630F] rounded-full" />
                )}
              </a>
            ))}

            <div className="h-4 w-px bg-[#1E2028] mx-2" />

            <a
              href="/my_cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-mono font-medium rounded-lg border border-[#1E2028] bg-[#14161D] text-[#F3F1EB] hover:border-[#FF630F]/40 hover:text-[#FF630F] transition-all flex items-center gap-1.5"
            >
              <FaFileDownload className="w-3 h-3 text-[#FF630F]" />
              CV.pdf
            </a>

            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "contact")}
              className="ml-2 px-4 py-2 text-xs font-semibold rounded-lg bg-[#FF630F] text-[#0B0C0F] hover:bg-[#FF7728] transition-all shadow-sm"
            >
              Let&apos;s Talk
            </a>
          </nav>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 rounded-xl bg-[#14161D] border border-[#1E2028] shadow-2xl space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`/#${link.id}`}
                onClick={(e) => handleSmoothScroll(e, link.id)}
                className={`block px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeSection === link.id
                    ? "text-[#F3F1EB] bg-[#1A1D26]"
                    : "text-[#A0A1A6] hover:text-[#F3F1EB]"
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-[#1E2028] flex flex-col gap-2">
              <a
                href="/my_cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 text-xs font-mono rounded-lg border border-[#1E2028] text-[#F3F1EB] flex items-center justify-center gap-2"
              >
                <FaFileDownload className="w-3.5 h-3.5 text-[#FF630F]" />
                Download CV
              </a>
              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, "contact")}
                className="px-3.5 py-2 text-xs font-semibold text-center rounded-lg bg-[#FF630F] text-[#0B0C0F]"
              >
                Get In Touch
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
