"use client";

import { useState, FormEvent } from "react";
import { FaPaperPlane, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
    if (success) setSuccess(false);
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Please enter your name";
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.subject.trim()) newErrors.subject = "Please enter a subject";
    if (!formData.message.trim()) newErrors.message = "Please enter your message";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setErrors({
        submit:
          "Sorry, it seems our mail server is not responding. Please try again later!",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyle = {
    backgroundColor: "rgba(139, 92, 246, 0.05)",
    borderColor: "rgba(139, 92, 246, 0.15)",
    color: "#f1f5f9",
    outline: "none",
  };

  const inputFocusStyle = {
    borderColor: "rgba(139, 92, 246, 0.5)",
    boxShadow: "0 0 0 3px rgba(139, 92, 246, 0.1)",
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "ashrafulasif260@gmail.com",
      href: "mailto:ashrafulasif260@gmail.com",
    },
    {
      icon: FaPhone,
      label: "Phone",
      value: "+8801853376599",
      href: "tel:+8801853376599",
    },
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: "Bashundhara, Dhaka, Bangladesh",
      href: null,
    },
  ];

  return (
    <div
      className="py-20 lg:py-28 relative overflow-hidden"
      id="contact"
      style={{ backgroundColor: "#030014" }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-64 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 100% at 50% 0%, rgba(139, 92, 246, 0.1) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-full h-64 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 100% at 50% 100%, rgba(168, 85, 247, 0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 lg:px-20">
        {/* Section Header */}
        <div className="section-header mb-16">
          <span className="section-label">Contact</span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have a project in mind? Let&apos;s work together
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: "#f1f5f9" }}
              >
                Let&apos;s create something{" "}
                <span className="gradient-text">amazing</span> together
              </h3>
              <p style={{ color: "#64748b" }}>
                I&apos;m always open to discussing new projects, creative ideas, or
                opportunities to be part of your visions.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                const content = (
                  <div
                    className="flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300"
                    style={{
                      backgroundColor: "rgba(139, 92, 246, 0.03)",
                      borderColor: "rgba(139, 92, 246, 0.1)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor =
                        "rgba(139, 92, 246, 0.3)";
                      (e.currentTarget as HTMLDivElement).style.backgroundColor =
                        "rgba(139, 92, 246, 0.06)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor =
                        "rgba(139, 92, 246, 0.1)";
                      (e.currentTarget as HTMLDivElement).style.backgroundColor =
                        "rgba(139, 92, 246, 0.03)";
                    }}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: "linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(168, 85, 247, 0.1) 100%)",
                        color: "#a78bfa",
                      }}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs mb-0.5" style={{ color: "#64748b" }}>
                        {info.label}
                      </p>
                      <p className="font-medium text-sm" style={{ color: "#f1f5f9" }}>
                        {info.value}
                      </p>
                    </div>
                  </div>
                );

                return info.href ? (
                  <a key={index} href={info.href} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={index}>{content}</div>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div
              className="p-6 md:p-8 rounded-3xl border backdrop-blur-sm"
              style={{
                backgroundColor: "rgba(139, 92, 246, 0.02)",
                borderColor: "rgba(139, 92, 246, 0.1)",
              }}
            >
              {success && (
                <div
                  className="mb-6 p-4 rounded-xl border text-sm"
                  style={{
                    backgroundColor: "rgba(139, 92, 246, 0.08)",
                    borderColor: "rgba(139, 92, 246, 0.3)",
                    color: "#c4b5fd",
                  }}
                >
                  <strong>Message sent successfully!</strong> I&apos;ll get back to you soon.
                </div>
              )}
              {errors.submit && (
                <div
                  className="mb-6 p-4 rounded-xl border text-sm"
                  style={{
                    backgroundColor: "rgba(239, 68, 68, 0.08)",
                    borderColor: "rgba(239, 68, 68, 0.3)",
                    color: "#f87171",
                  }}
                >
                  {errors.submit}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: "#94a3b8" }}>
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl border transition-all duration-200"
                      style={inputStyle}
                      onFocus={(e) =>
                        Object.assign(e.currentTarget.style, inputFocusStyle)
                      }
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor =
                          "rgba(139, 92, 246, 0.15)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    />
                    {errors.name && (
                      <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: "#94a3b8" }}>
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl border transition-all duration-200"
                      style={inputStyle}
                      onFocus={(e) =>
                        Object.assign(e.currentTarget.style, inputFocusStyle)
                      }
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor =
                          "rgba(139, 92, 246, 0.15)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: "#94a3b8" }}>
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    className="w-full px-4 py-3 rounded-xl border transition-all duration-200"
                    style={inputStyle}
                    onFocus={(e) =>
                      Object.assign(e.currentTarget.style, inputFocusStyle)
                    }
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor =
                        "rgba(139, 92, 246, 0.15)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                  {errors.subject && (
                    <p className="text-red-400 text-xs mt-1">{errors.subject}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: "#94a3b8" }}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 rounded-xl border transition-all duration-200 resize-none"
                    style={inputStyle}
                    onFocus={(e) =>
                      Object.assign(e.currentTarget.style, inputFocusStyle)
                    }
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor =
                        "rgba(139, 92, 246, 0.15)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                  {errors.message && (
                    <p className="text-red-400 text-xs mt-1">{errors.message}</p>
                  )}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary w-full sm:w-auto flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}