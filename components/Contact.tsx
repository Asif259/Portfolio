"use client";

import { useState, FormEvent } from "react";

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
    backgroundColor: "#1A1A24",
    borderColor: "rgba(16,185,129,0.15)",
    color: "#f1f5f9",
    outline: "none",
  };

  const inputFocusStyle = {
    borderColor: "rgba(16,185,129,0.5)",
    boxShadow: "0 0 0 3px rgba(16,185,129,0.08)",
  };

  return (
    <div
      className="py-12 relative overflow-hidden"
      id="contact"
      style={{ backgroundColor: "#13131A" }}
    >
      {/* Grid */}
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />

      {/* Bottom glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-64 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 100% at 50% 100%, rgba(16,185,129,0.08) 0%, transparent 100%)",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 lg:px-20">
        <div className="section-header">
          <h1 className="section-header-bg">Contact</h1>
          <h1 className="section-header-text">Contact Me</h1>
        </div>

        {/* Big CTA headline */}
        <div className="text-center mb-10">
          <p
            className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight"
            style={{ color: "rgba(16,185,129,0.12)", letterSpacing: "0.02em" }}
          >
            GET IN TOUCH
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-2xl">
            <div
              className="text-center rounded-2xl p-8 md:p-12 border"
              style={{
                backgroundColor: "#0B0B0F",
                borderColor: "rgba(16,185,129,0.15)",
                boxShadow:
                  "0 4px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(16,185,129,0.05)",
              }}
            >
              {success && (
                <div
                  className="mb-6 p-4 rounded-lg border text-sm"
                  style={{
                    backgroundColor: "rgba(16,185,129,0.08)",
                    borderColor: "rgba(16,185,129,0.3)",
                    color: "#34d399",
                  }}
                >
                  <strong>Your message has been sent.</strong> I&apos;ll get back to you soon!
                </div>
              )}
              {errors.submit && (
                <div
                  className="mb-6 p-4 rounded-lg border text-sm"
                  style={{
                    backgroundColor: "rgba(239,68,68,0.08)",
                    borderColor: "rgba(239,68,68,0.3)",
                    color: "#f87171",
                  }}
                >
                  {errors.submit}
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-full border transition-all duration-200"
                      style={inputStyle}
                      onFocus={(e) =>
                        Object.assign(e.currentTarget.style, inputFocusStyle)
                      }
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor =
                          "rgba(16,185,129,0.15)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    />
                    {errors.name && (
                      <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      className="w-full px-4 py-3 rounded-full border transition-all duration-200"
                      style={inputStyle}
                      onFocus={(e) =>
                        Object.assign(e.currentTarget.style, inputFocusStyle)
                      }
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor =
                          "rgba(16,185,129,0.15)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>
                <div>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="w-full px-4 py-3 rounded-full border transition-all duration-200"
                    style={inputStyle}
                    onFocus={(e) =>
                      Object.assign(e.currentTarget.style, inputFocusStyle)
                    }
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor =
                        "rgba(16,185,129,0.15)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                  {errors.subject && (
                    <p className="text-red-400 text-xs mt-1">{errors.subject}</p>
                  )}
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Message"
                    className="w-full px-4 py-3 rounded-3xl border transition-all duration-200 resize-none"
                    style={inputStyle}
                    onFocus={(e) =>
                      Object.assign(e.currentTarget.style, inputFocusStyle)
                    }
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor =
                        "rgba(16,185,129,0.15)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                  {errors.message && (
                    <p className="text-red-400 text-xs mt-1">{errors.message}</p>
                  )}
                </div>
                <div className="text-center pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed min-w-[180px]"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
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
