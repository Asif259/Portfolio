"use client";

import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import FadeIn from "./FadeIn";

export default function Footer() {
  return (
    <div
      className="relative overflow-hidden border-t"
      style={{
        backgroundColor: "#121212",
        borderTopColor: "rgba(20,184,166,0.12)",
      }}
    >
      {/* Subtle top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 100% at 50% 0%, rgba(20,184,166,0.07) 0%, transparent 100%)",
        }}
      />

      <div className="relative z-10 container mx-auto text-center py-10 px-4 lg:px-20">
        <FadeIn direction="up" delay={0.1}>
          {/* Logo */}
          <div className="mb-6">
            <span className="text-xl font-extrabold tracking-tight">
              <span style={{
                background: "linear-gradient(135deg, #14b8a6 0%, #2dd4bf 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
                WebkitTextFillColor: "transparent",
              }}>Port</span>
              <span style={{ color: "#f1f5f9" }}>folio</span>
            </span>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          {/* Social links */}
          <div className="flex justify-center mb-6 gap-4">
            {[
              {
                href: "https://twitter.com/Ashrafu15345745",
                icon: FaTwitter,
                label: "Twitter",
              },
              {
                href: "https://www.facebook.com/ashraful.asif260/",
                icon: FaFacebookF,
                label: "Facebook",
              },
              {
                href: "https://www.linkedin.com/in/ashrafulasif",
                icon: FaLinkedinIn,
                label: "LinkedIn",
              },
              { href: "#", icon: FaInstagram, label: "Instagram" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                className="btn-social border transition-all duration-300"
                target={href !== "#" ? "_blank" : undefined}
                rel={href !== "#" ? "noopener noreferrer" : undefined}
                href={href}
                aria-label={label}
                style={{
                  backgroundColor: "rgba(20,184,166,0.08)",
                  borderColor: "rgba(20,184,166,0.2)",
                  color: "#94a3b8",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.backgroundColor = "rgba(20,184,166,0.15)";
                  el.style.borderColor = "rgba(20,184,166,0.5)";
                  el.style.color = "#14b8a6";
                  el.style.boxShadow = "0 0 15px rgba(20,184,166,0.25)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.backgroundColor = "rgba(20,184,166,0.08)";
                  el.style.borderColor = "rgba(20,184,166,0.2)";
                  el.style.color = "#94a3b8";
                  el.style.boxShadow = "none";
                }}
              >
                <Icon />
              </a>
            ))}
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.3}>
          {/* Nav links */}
          <div className="flex justify-center mb-6 flex-wrap gap-4 text-sm">
            {["Privacy", "Terms", "FAQs", "Help"].map((link, i, arr) => (
              <span key={link} className="flex items-center gap-4">
                <a
                  href="#"
                  className="transition-colors duration-200"
                  style={{ color: "rgba(148,163,184,0.7)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "#14b8a6";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "rgba(148,163,184,0.7)";
                  }}
                >
                  {link}
                </a>
                {i < arr.length - 1 && (
                  <span style={{ color: "rgba(20,184,166,0.2)" }}>|</span>
                )}
              </span>
            ))}
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.4}>
          {/* Divider */}
          <div
            className="w-full h-px mb-6"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(20,184,166,0.2), transparent)",
            }}
          />

          <p className="text-sm" style={{ color: "rgba(148,163,184,0.5)" }}>
            &copy; {new Date().getFullYear()} All Rights Reserved. Made with{" "}
            <span style={{ color: "#14b8a6" }}>♥</span> by Moh. Asraful Hasan Asif
          </p>
        </FadeIn>
      </div>
    </div>
  );
}
