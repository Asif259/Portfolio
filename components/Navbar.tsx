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

      // Update active section based on scroll position
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

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        solid || isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-xl border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-20">
        <div className="flex items-center justify-between py-2 lg:py-3">
          <Link href="/" className="text-xl font-extrabold">
            <span className="gradient-text">Port</span>
            <span
              className={`${
                solid || isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              folio
            </span>
          </Link>

          <button
            className="lg:hidden p-2"
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
            } lg:flex lg:items-center lg:space-x-1 absolute lg:static top-full left-0 right-0 bg-white lg:bg-transparent shadow-lg lg:shadow-none p-4 lg:p-0`}
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
                  className={`px-3 py-1.5 lg:py-2 text-sm font-semibold transition-all duration-300 relative ${
                    activeSection === section
                      ? "text-primary-600"
                      : "text-gray-700 hover:text-primary-600"
                  } ${
                    activeSection === section
                      ? "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gradient-primary"
                      : ""
                  }
                    ${solid || isScrolled ? "text-grey-700" : "text-white"}
                  `}
                >
                  {section === "qualification"
                    ? "Quality"
                    : section === "skill"
                    ? "Skill"
                    : section === "testimonial"
                    ? "Review"
                    : section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              ))}
              <a
                href="https://www.linkedin.com/in/ashrafulasif"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:block btn btn-primary ml-2"
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
