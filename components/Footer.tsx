"use client";

import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaHeart,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      href: "https://github.com/Asif259",
      icon: FaGithub,
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/ashrafulasif",
      icon: FaLinkedinIn,
      label: "LinkedIn",
    },
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
      href: "#",
      icon: FaInstagram,
      label: "Instagram",
    },
  ];

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer
      className="relative overflow-hidden border-t"
      style={{
        backgroundColor: "#030014",
        borderTopColor: "rgba(139, 92, 246, 0.1)",
      }}
    >
      {/* Background elements */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 100% at 50% 0%, rgba(139, 92, 246, 0.08) 0%, transparent 100%)",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 lg:px-20">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%)",
                    boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)",
                  }}
                >
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <span className="text-xl font-bold tracking-tight">
                  <span className="gradient-text">Ashraful</span>
                  <span style={{ color: "#f1f5f9" }}> Asif</span>
                </span>
              </div>
              <p
                className="text-sm mb-6 max-w-md"
                style={{ color: "#64748b" }}
              >
                Full-stack developer passionate about creating beautiful, functional,
                and user-friendly web experiences. Let&apos;s build something amazing together.
              </p>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 border"
                    target={href !== "#" ? "_blank" : undefined}
                    rel={href !== "#" ? "noopener noreferrer" : undefined}
                    href={href}
                    aria-label={label}
                    style={{
                      backgroundColor: "rgba(139, 92, 246, 0.05)",
                      borderColor: "rgba(139, 92, 246, 0.15)",
                      color: "#94a3b8",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.backgroundColor = "rgba(139, 92, 246, 0.15)";
                      el.style.borderColor = "rgba(139, 92, 246, 0.4)";
                      el.style.color = "#a78bfa";
                      el.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.backgroundColor = "rgba(139, 92, 246, 0.05)";
                      el.style.borderColor = "rgba(139, 92, 246, 0.15)";
                      el.style.color = "#94a3b8";
                      el.style.transform = "translateY(0)";
                    }}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4
                className="font-semibold mb-4"
                style={{ color: "#f1f5f9" }}
              >
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm transition-colors duration-200 hover:text-purple-400"
                      style={{ color: "#64748b" }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4
                className="font-semibold mb-4"
                style={{ color: "#f1f5f9" }}
              >
                Contact
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:ashrafulasif260@gmail.com"
                    className="text-sm transition-colors duration-200 hover:text-purple-400"
                    style={{ color: "#64748b" }}
                  >
                    ashrafulasif260@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+8801853376599"
                    className="text-sm transition-colors duration-200 hover:text-purple-400"
                    style={{ color: "#64748b" }}
                  >
                    +8801853376599
                  </a>
                </li>
                <li>
                  <span
                    className="text-sm"
                    style={{ color: "#64748b" }}
                  >
                    Bashundhara, Dhaka
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="py-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{
            borderTopColor: "rgba(139, 92, 246, 0.1)",
          }}
        >
          <p className="text-sm" style={{ color: "#64748b" }}>
            &copy; {new Date().getFullYear()} Ashraful Asif. All rights reserved.
          </p>

          <p className="text-sm flex items-center gap-1" style={{ color: "#64748b" }}>
            Made with{" "}
            <FaHeart className="w-3.5 h-3.5" style={{ color: "#f472b6" }} />{" "}
            using Next.js & Tailwind CSS
          </p>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 border z-40 hover:scale-110"
        style={{
          background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
          borderColor: "transparent",
          boxShadow: "0 0 20px rgba(139, 92, 246, 0.4)",
        }}
        aria-label="Scroll to top"
      >
        <FaArrowUp className="w-5 h-5 text-white" />
      </button>
    </footer>
  );
}