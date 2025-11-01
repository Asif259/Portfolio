"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

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
    <div className="py-24 bg-white" id="testimonial">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="section-header">
          <h1 className="section-header-bg">Review</h1>
          <h1 className="section-header-text">Clients Say</h1>
        </div>
        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                bulletClass: "swiper-pagination-bullet !bg-gray-300",
                bulletActiveClass:
                  "swiper-pagination-bullet-active !bg-primary",
              }}
              className="testimonial-carousel"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="text-center card p-8 md:p-12 my-5 border-2 border-gray-100 hover:border-primary-200 transition-colors">
                    <div className="inline-block p-4 bg-gradient-primary rounded-full mb-6">
                      <FaQuoteLeft className="text-white text-2xl" />
                    </div>
                    <h4 className="font-light mb-6 text-lg md:text-xl">
                      {testimonial.quote}
                    </h4>
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={80}
                      height={80}
                      className="rounded-full mx-auto mb-3"
                    />
                    <h5 className="font-bold text-lg">{testimonial.name}</h5>
                    <span className="text-gray-600">{testimonial.role}</span>
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
