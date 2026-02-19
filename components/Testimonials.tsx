"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import FadeIn from "./FadeIn";

import "swiper/css";
import "swiper/css/pagination";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      '"One customer, well taken care of, could be more valuable than $10,000 worth of advertising."',
    name: "James Barnes",
    role: "Manager",
    image: "/img/testimonial-1.jpg",
  },
  {
    quote:
      '"Excellent, working with web designer express was great. Thanks to their knowledge and determination our website looks great and functions really good. I am recommend anyone that is looking for a custom website to give them a call and speak to Gus, he will guide you to the right direction."',
    name: "Leonardo Arteaga",
    role: "Project manager",
    image: "/img/testimonial-2.jpg",
  },
  {
    quote:
      '"Overall very pleased with Morales and Gustavo and his friendliness with us. He did everything we asked in a timely matter. I will definitely be recommending him to other companies. Thanks for such good work."',
    name: "Heather Bailey",
    role: "Chief marketing officer (CMO)",
    image: "/img/testimonial-3.jpg",
  },
];

export default function Testimonials() {
  return (
    <div
      className="py-12 relative overflow-hidden"
      id="testimonial"
      style={{ backgroundColor: "#121212" }}
    >
      {/* Grid */}
      <div className="absolute inset-0 bg-grid-sm opacity-50 pointer-events-none" />

      {/* Center glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-64 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(20,184,166,0.06) 0%, transparent 70%)",
          filter: "blur(30px)",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 lg:px-20">
        <FadeIn direction="up" delay={0.1}>
          <div className="section-header">
            <h1 className="section-header-bg">Review</h1>
            <h1 className="section-header-text">Clients Say</h1>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <div className="flex justify-center">
            <div className="w-full max-w-4xl">
              <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{
                  clickable: true,
                  bulletClass: "swiper-pagination-bullet",
                  bulletActiveClass: "swiper-pagination-bullet-active",
                }}
                className="testimonial-carousel pb-10"
              >
                {testimonials.map((testimonial, index) => (
                  <SwiperSlide key={index}>
                    <div
                      className="text-center rounded-2xl p-8 md:p-12 my-5 border transition-all duration-300"
                      style={{
                        backgroundColor: "#1E1E1E",
                        borderColor: "rgba(20,184,166,0.12)",
                        boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
                      }}
                    >
                      {/* Quote icon */}
                      <div
                        className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-6"
                        style={{
                          background:
                            "linear-gradient(135deg, #14b8a6, #0d9488)",
                          boxShadow: "0 0 20px rgba(20,184,166,0.35)",
                        }}
                      >
                        <FaQuoteLeft className="text-white text-xl" />
                      </div>

                      {/* Stars */}
                      <div className="flex justify-center gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            className="w-4 h-4"
                            style={{ color: "#14b8a6" }}
                          />
                        ))}
                      </div>

                      <h4
                        className="font-light mb-8 text-base md:text-lg leading-relaxed"
                        style={{ color: "#94a3b8" }}
                      >
                        {testimonial.quote}
                      </h4>

                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={80}
                        height={80}
                        className="rounded-full mx-auto mb-4"
                        style={{
                          border: "2px solid rgba(20,184,166,0.4)",
                          boxShadow: "0 0 15px rgba(20,184,166,0.2)",
                        }}
                      />
                      <h5
                        className="font-bold text-lg mb-1"
                        style={{ color: "#f1f5f9" }}
                      >
                        {testimonial.name}
                      </h5>
                      <span
                        className="text-sm"
                        style={{ color: "#14b8a6" }}
                      >
                        {testimonial.role}
                      </span>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
