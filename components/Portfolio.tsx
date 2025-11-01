"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { portfolioProjects } from "@/data/portfolio";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<string>("*");

  const filteredItems =
    activeFilter === "*"
      ? portfolioProjects
      : portfolioProjects.filter((item) => item.category === activeFilter);

  const getCategoryLabel = (filter: string) => {
    switch (filter) {
      case "Frontend Development":
        return "Frontend Development";
      case "Backend Development":
        return "Backend Development";
      default:
        return "All";
    }
  };

  return (
    <>
      <div className="py-24 bg-white" id="portfolio">
        <div className="container mx-auto px-4 lg:px-20">
          <div className="section-header">
            <h1 className="section-header-bg">Gallery</h1>
            <h1 className="section-header-text">My Portfolio</h1>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {["*", "Frontend Development", "Backend Development"].map(
              (filter) => (
                <button
                  className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300`}
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                >
                  {getCategoryLabel(filter)}
                </button>
              )
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <Link
                key={item.id}
                href={`/projects/${item.id}`}
                className="portfolio-item group block"
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    src={item.coverImage}
                    alt={item.name}
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover"
                  />
                  <div className="portfolio-overlay p-6">
                    <div className="text-center">
                      <h3 className="text-white font-bold text-xl mb-2">
                        {item.name}
                      </h3>
                      <p className="text-white/90 text-sm mb-3 line-clamp-2">
                        {item.description}
                      </p>
                      <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-semibold">
                        {item.category}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
