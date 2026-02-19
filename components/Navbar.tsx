"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { HiSparkles } from "react-icons/hi";

export default function Navbar({ solid = false }: { solid?: boolean }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

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
          ? "backdrop-blur-2xl border-b"
          : "bg-transparent"
      }`}
      style={
        scrolled
          ? {
              backgroundColor: "rgba(3, 0, 20, 0.85)",
              borderBottomColor: "rgba(139, 92, 246, 0.1)",
            }
          : {}
      }
    >
      <div className="container mx-auto px-4 lg:px-20">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
              style={{
                background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%)",
                boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)",
              }}
            >
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <span className="text-xl font-bold tracking-tight hidden sm:block">
              <span className="gradient-text">Ashraful</span>
              <span style={{ color: "#f1f5f9" }}>Asif</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {[
              { id: "home", label: "Home" },
              { id: "about", label: "About" },
              { id: "qualification", label: "Experience" },
              { id: "skill", label: "Skills" },
              { id: "portfolio", label: "Portfolio" },
              { id: "testimonial", label: "Reviews" },
              { id: "contact", label: "Contact" },
            ].map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => handleSmoothScroll(e, section.id)}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                  activeSection === section.id
                    ? "text-white"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {section.label}
                {activeSection === section.id && (
                  <span
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                    style={{
                      background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                      boxShadow: "0 0 10px rgba(139, 92, 246, 0.8)",
                    }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/ashrafulasif"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary flex items-center gap-2 text-sm"
            >
              <HiSparkles className="w-4 h-4" />
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-slate-300 hover:text-white transition-colors rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            style={{
              backgroundColor: isMobileMenuOpen ? "rgba(139, 92, 246, 0.1)" : "transparent",
            }}
          >
            {isMobileMenuOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenuAlt3 className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div
          className="border-t backdrop-blur-2xl px-4 py-6"
          style={{
            backgroundColor: "rgba(3, 0, 20, 0.95)",
            borderColor: "rgba(139, 92, 246, 0.1)",
          }}
        >
          <div className="flex flex-col gap-2">
            {[
              { id: "home", label: "Home" },
              { id: "about", label: "About" },
              { id: "qualification", label: "Experience" },
              { id: "skill", label: "Skills" },
              { id: "portfolio", label: "Portfolio" },
              { id: "testimonial", label: "Reviews" },
              { id: "contact", label: "Contact" },
            ].map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => handleSmoothScroll(e, section.id)}
                className={`px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300 ${
                  activeSection === section.id
                    ? "text-white"
                    : "text-slate-400 hover:text-white"
                }`}
                style={
                  activeSection === section.id
                    ? {
                        background: "linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(168, 85, 247, 0.1) 100%)",
                        borderLeft: "3px solid #8b5cf6",
                      }
                    : {}
                }
              >
                {section.label}
              </a>
            ))}
            <a
              href="https://www.linkedin.com/in/ashrafulasif"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary flex items-center justify-center gap-2 mt-4"
            >
              <HiSparkles className="w-4 h-4" />
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}