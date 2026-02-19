"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

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
      '"Excellent, working with web designer express was great. Thanks to their knowledge and determination our website looks great and functions really good. I am recommend anyone that is looking for a custom website to give them a call."',
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
      className="py-20 lg:py-28 relative overflow-hidden"
      id="testimonial"
      style={{ backgroundColor: "#0a0518" }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-sm opacity-40 pointer-events-none" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(139, 92, 246, 0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 lg:px-20">
        {/* Section Header */}
        <div className="section-header mb-16">
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">What Clients Say</h2>
          <p className="section-subtitle">
            Feedback from people I&apos;ve had the pleasure to work with
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              pagination={{
                clickable: true,
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active",
              }}
              className="testimonial-carousel pb-12"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="relative p-8 md:p-12 rounded-3xl border backdrop-blur-sm transition-all duration-300"
                    style={{
                      backgroundColor: "rgba(139, 92, 246, 0.03)",
                      borderColor: "rgba(139, 92, 246, 0.1)",
                    }}
                  >
                    {/* Quote icon */}
                    <div
                      className="absolute -top-5 left-8 w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{
                        background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%)",
                        boxShadow: "0 0 30px rgba(139, 92, 246, 0.4)",
                      }}
                    >
                      <FaQuoteLeft className="text-white text-lg" />
                    </div>

                    {/* Stars */}
                    <div className="flex justify-center gap-1.5 mb-6 mt-4">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className="w-5 h-5"
                          style={{ color: "#f472b6" }}
                        />
                      ))}
                    </div>

                    <h4
                      className="font-light mb-8 text-base md:text-lg leading-relaxed text-center"
                      style={{ color: "#94a3b8" }}
                    >
                      {testimonial.quote}
                    </h4>

                    <div className="flex flex-col items-center">
                      <div
                        className="relative mb-4"
                      >
                        <div
                          className="absolute -inset-1 rounded-full opacity-60"
                          style={{
                            background: "linear-gradient(135deg, #6366f1, #8b5cf6, #f472b6)",
                            filter: "blur(8px)",
                          }}
                        />
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={72}
                          height={72}
                          className="relative rounded-full object-cover"
                          style={{
                            border: "3px solid rgba(139, 92, 246, 0.3)",
                          }}
                        />
                      </div>
                      <h5
                        className="font-bold text-lg mb-1"
                        style={{ color: "#f1f5f9" }}
                      >
                        {testimonial.name}
                      </h5>
                      <span
                        className="text-sm"
                        style={{ color: "#a78bfa" }}
                      >
                        {testimonial.role}
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}