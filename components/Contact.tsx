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

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Please enter a subject";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API call - replace with actual API endpoint
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // In a real app, you would make an API call here:
      // const response = await fetch('/api/contact', { ... })

      setSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setErrors({
        submit:
          "Sorry, it seems our mail server is not responding. Please try again later!",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="py-12 bg-gradient-to-br from-gray-50 to-purple-50/30"
      id="contact"
    >
      <div className="container mx-auto px-4 lg:px-20">
        <div className="section-header">
          <h1 className="section-header-bg">Contact</h1>
          <h1 className="section-header-text">Contact Me</h1>
        </div>
        <div className="flex justify-center">
          <div className="w-full max-w-2xl">
            <div className="contact-form text-center card p-8 md:p-12">
              {success && (
                <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  <strong>Your message has been sent.</strong>
                </div>
              )}
              {errors.submit && (
                <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                  {errors.submit}
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1 text-left">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1 text-left">
                        {errors.email}
                      </p>
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
                    className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1 text-left">
                      {errors.subject}
                    </p>
                  )}
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Message"
                    className="w-full px-4 py-3 rounded-3xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1 text-left">
                      {errors.message}
                    </p>
                  )}
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-outline-primary disabled:opacity-50 disabled:cursor-not-allowed"
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
