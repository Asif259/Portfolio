"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar({ solid = false }: { solid?: boolean }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);

      const sections = [
        "home",
        "about",
        "qualification",
        "skill",
        "portfolio",
        "testimonial",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl border-b"
          : "bg-transparent"
      }`}
      style={
        scrolled
          ? {
              backgroundColor: "rgba(11,11,15,0.92)",
              borderBottomColor: "rgba(249,115,22,0.15)",
            }
          : {}
      }
    >
      <div className="container mx-auto px-4 lg:px-20">
        <div className="flex items-center justify-between py-2 lg:py-3">
          <Link href="/" className="text-xl font-extrabold tracking-tight">
            <span className="gradient-text">Port</span>
            <span className="text-slate-100">folio</span>
          </Link>

          <button
            className="lg:hidden p-2 text-slate-300 hover:text-primary-400 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenuAlt3 className="w-6 h-6" />
            )}
          </button>

          <div
            className={`${
              isMobileMenuOpen ? "block" : "hidden"
            } lg:flex lg:items-center lg:space-x-1 absolute lg:static top-full left-0 right-0 lg:bg-transparent shadow-lg lg:shadow-none p-4 lg:p-0 border-b lg:border-none`}
            style={
              isMobileMenuOpen
                ? {
                    backgroundColor: "rgba(11,11,15,0.97)",
                    borderBottomColor: "rgba(249,115,22,0.15)",
                  }
                : {}
            }
          >
            <nav className="flex flex-col lg:flex-row lg:items-center lg:space-x-1 space-y-2 lg:space-y-0">
              {[
                "home",
                "about",
                "qualification",
                "skill",
                "portfolio",
                "testimonial",
                "contact",
              ].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  onClick={(e) => handleSmoothScroll(e, section)}
                  className={`px-3 py-1.5 lg:py-2 text-sm font-semibold transition-all duration-300 relative group ${
                    activeSection === section
                      ? "text-primary-400"
                      : "text-slate-400 hover:text-primary-400"
                  }`}
                >
                  {section === "qualification"
                    ? "Quality"
                    : section === "skill"
                    ? "Skill"
                    : section === "testimonial"
                    ? "Review"
                    : section.charAt(0).toUpperCase() + section.slice(1)}
                  {activeSection === section && (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                      style={{
                        background: "linear-gradient(90deg, #f97316, #ea580c)",
                        boxShadow: "0 0 8px rgba(249,115,22,0.6)",
                      }}
                    />
                  )}
                  {activeSection !== section && (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                      style={{
                        background: "rgba(249,115,22,0.4)",
                      }}
                    />
                  )}
                </a>
              ))}
              <a
                href="https://www.linkedin.com/in/ashrafulasif"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:block btn btn-primary ml-2 text-sm"
              >
                Hire Me
              </a>
            </nav>
          </div>
        </div>
      </div>
    </nav>
  );
}
