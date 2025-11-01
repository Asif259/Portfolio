"use client";

import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  getProjectById,
  PortfolioProject,
  portfolioProjects,
  FeatureSection,
  Challenge,
} from "@/data/portfolio";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  FaChevronLeft,
  FaExternalLinkAlt,
  FaCheck,
  FaGithub,
  FaClock,
  FaUsers,
  FaTools,
} from "react-icons/fa";

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = parseInt(params.id as string);
  const project = getProjectById(id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/#portfolio" className="btn btn-primary">
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<
    "overview" | "solution" | "challenges"
  >("overview");

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!lightboxImage || !project?.images) return;
      if (e.key === "Escape") setLightboxImage(null);
      if (e.key === "ArrowLeft") {
        const next =
          (activeIndex - 1 + project.images.length) % project.images.length;
        setActiveIndex(next);
        setLightboxImage(project.images[next]);
      }
      if (e.key === "ArrowRight") {
        const next = (activeIndex + 1) % project.images.length;
        setActiveIndex(next);
        setLightboxImage(project.images[next]);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxImage, activeIndex, project]);

  return (
    <main className="relative min-h-screen bg-white">
      <Navbar solid />
      <div className="pt-24 pb-12">
        {/* Back Button */}
        <div className="container mx-auto px-4 lg:px-20 mb-8">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors mb-6"
          >
            <FaChevronLeft className="w-5 h-5" />
            <span className="font-semibold">Back to Portfolio</span>
          </button>
        </div>

        {/* Hero Image (image only) */}
        <div className="container mx-auto px-4 lg:px-20 mb-8">
          <div className="bg-white rounded-3xl shadow-2xl p-4">
            <Image
              src={project.coverImage}
              alt={project.name}
              width={1600}
              height={900}
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="w-full h-auto object-contain rounded-2xl"
              priority
            />
          </div>
        </div>

        {/* Title and summary below hero */}
        <div className="container mx-auto px-4 lg:px-20 mb-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-3">
            <ol className="flex items-center gap-2 flex-wrap">
              <li>
                <Link href="/" className="hover:text-primary-600">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/#portfolio" className="hover:text-primary-600">
                  Portfolio
                </Link>
              </li>
              <li>/</li>
              <li className="text-gray-700 font-medium">{project.name}</li>
            </ol>
          </nav>

          <div className="flex flex-col gap-3">
            <span className="inline-block px-4 py-2 bg-gray-100 rounded-full text-sm font-semibold w-max border border-gray-200">
              {project.category}
            </span>
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-900">
              {project.name}
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl">
              {project.description}
            </p>
          </div>
        </div>

        {/* Project Details */}
        <div className="container mx-auto px-4 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="card flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary-500/10 text-primary-600 flex items-center justify-center">
                    <FaClock />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Timeline</p>
                    <p className="font-semibold text-gray-900">
                      {new Date(project.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                      })}
                    </p>
                  </div>
                </div>
                <div className="card flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary-500/10 text-primary-600 flex items-center justify-center">
                    <FaUsers />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Role</p>
                    <p className="font-semibold text-gray-900">
                      {project.role}
                    </p>
                  </div>
                </div>
                <div className="card flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary-500/10 text-primary-600 flex items-center justify-center">
                    <FaTools />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Stack</p>
                    <p className="font-semibold text-gray-900">
                      {project.technologies[0]}
                    </p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex flex-wrap gap-2 mb-6 justify-center">
                  {[
                    { id: "overview", label: "Overview" },
                    { id: "solution", label: "Solution" },
                    { id: "challenges", label: "Challenges" },
                  ].map((t) => (
                    <button
                      key={t.id}
                      className={`px-4 py-2 rounded-full border text-sm font-semibold transition-all ${
                        activeTab === (t.id as any)
                          ? "bg-primary-500 text-white border-primary-500"
                          : "bg-white text-gray-700 border-gray-200 hover:border-primary-300"
                      }`}
                      onClick={() => setActiveTab(t.id as any)}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>

                {activeTab === "overview" && (
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-primary-700">
                      Project Overview
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {project.longDescription}
                    </p>
                  </div>
                )}
                {activeTab === "solution" && (
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-primary-700">
                      Solution & Approach
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                )}
                {activeTab === "challenges" && (
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-primary-700">
                      Challenges Faced
                    </h2>
                    {Array.isArray(project.challenges) &&
                    project.challenges.length > 0 &&
                    typeof project.challenges[0] === "object" &&
                    "title" in project.challenges[0] ? (
                      // Structured challenges with title and description
                      <ul className="space-y-4">
                        {(project.challenges as Challenge[]).map(
                          (challenge, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <span className="mt-1 w-2 h-2 rounded-full bg-primary-500 flex-shrink-0"></span>
                              <div className="flex-1">
                                <span className="text-gray-900 font-semibold block mb-1">
                                  {challenge.title}
                                </span>
                                <span className="text-gray-600">
                                  {challenge.description}
                                </span>
                              </div>
                            </li>
                          )
                        )}
                      </ul>
                    ) : (
                      // Legacy string array challenges
                      <ul className="space-y-3">
                        {(project.challenges as string[]).map(
                          (challenge, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <span className="mt-1 w-2 h-2 rounded-full bg-primary-500 flex-shrink-0"></span>
                              <span className="text-gray-700">{challenge}</span>
                            </li>
                          )
                        )}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6 lg:sticky lg:top-24 h-max">
              {/* Project Info */}
              <div className="card">
                <h3 className="text-xl font-bold mb-4 text-primary-700">
                  Project Information
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Date</p>
                    <p className="font-semibold text-gray-900">
                      {new Date(project.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Role</p>
                    <p className="font-semibold text-gray-900">
                      {project.role}
                    </p>
                  </div>
                  {project.client && (
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Client</p>
                      <p className="font-semibold text-gray-900">
                        {project.client}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Technologies */}
              <div className="card">
                <h3 className="text-xl font-bold mb-4 text-primary-700">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-primary-500/10 text-primary-700 rounded-full text-sm font-semibold border border-primary-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              {(project.liveUrl || project.githubUrl) && (
                <div className="card">
                  <h3 className="text-xl font-bold mb-4 gradient-text">
                    Links
                  </h3>
                  <div className="space-y-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 btn btn-primary w-full justify-center"
                      >
                        <FaExternalLinkAlt className="w-5 h-5" />
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && project.githubUrl.length > 0 && (
                      <>
                        {project.githubUrl.map((url, index) => (
                          <a
                            key={index}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 btn btn-outline-primary w-full justify-center"
                          >
                            <FaGithub className="w-5 h-5" />
                            {project.githubUrl && project.githubUrl.length > 1
                              ? `View Code ${index + 1}`
                              : "View Code"}
                          </a>
                        ))}
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Gallery */}
          {project.images && project.images.length > 0 && (
            <div className="card mb-12">
              <h2 className="text-3xl font-bold mb-6 text-primary-700">
                Gallery
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className="group relative bg-white border border-gray-100 rounded-2xl p-3 shadow-sm hover:shadow-md transition-all cursor-zoom-in overflow-hidden"
                    onClick={() => {
                      setActiveIndex(idx);
                      setLightboxImage(img);
                    }}
                  >
                    <Image
                      src={img}
                      alt={`${project.name} image ${idx + 1}`}
                      width={800}
                      height={600}
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Lightbox */}
          {lightboxImage && (
            <div
              className="fixed inset-0 z-[60] bg-black/80 flex items-center justify-center p-4"
              onClick={() => setLightboxImage(null)}
            >
              <div
                className="max-w-5xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={lightboxImage}
                  alt="Preview"
                  width={1920}
                  height={1080}
                  sizes="100vw"
                  className="w-full h-auto max-h-[90vh] object-contain rounded-xl"
                />
                <div className="flex justify-between mt-3">
                  <button
                    className="btn btn-white"
                    onClick={() => {
                      if (!project?.images) return;
                      const next =
                        (activeIndex - 1 + project.images.length) %
                        project.images.length;
                      setActiveIndex(next);
                      setLightboxImage(project.images[next]);
                    }}
                  >
                    Prev
                  </button>
                  <button
                    className="btn btn-white"
                    onClick={() => setLightboxImage(null)}
                  >
                    Close
                  </button>
                  <button
                    className="btn btn-white"
                    onClick={() => {
                      if (!project?.images) return;
                      const next = (activeIndex + 1) % project.images.length;
                      setActiveIndex(next);
                      setLightboxImage(project.images[next]);
                    }}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Features */}
          <div className="card mb-12">
            <h2 className="text-3xl font-bold mb-6 text-primary-700">
              Key Features
            </h2>
            {Array.isArray(project.features) &&
            project.features.length > 0 &&
            typeof project.features[0] === "object" &&
            "title" in project.features[0] ? (
              // Structured features with sections
              <div className="space-y-8">
                {(project.features as FeatureSection[]).map(
                  (section, sectionIndex) => (
                    <div key={sectionIndex}>
                      <h3 className="text-xl font-bold mb-4 text-primary-600">
                        {section.title}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {section.items.map((item, itemIndex) => (
                          <div
                            key={itemIndex}
                            className="flex items-start gap-3 p-4 bg-primary-500/5 rounded-xl border border-primary-100"
                          >
                            <div className="mt-1 w-6 h-6 rounded-full bg-primary-500 text-white flex items-center justify-center flex-shrink-0">
                              <FaCheck className="w-4 h-4" />
                            </div>
                            <div className="flex-1">
                              <span className="text-gray-900 font-semibold block mb-1">
                                {item.name}
                              </span>
                              <span className="text-gray-600 text-sm">
                                {item.description}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                )}
              </div>
            ) : (
              // Legacy string array features
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(project.features as string[]).map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-primary-500/5 rounded-xl border border-primary-100"
                  >
                    <div className="mt-1 w-6 h-6 rounded-full bg-primary-500 text-white flex items-center justify-center flex-shrink-0">
                      <FaCheck className="w-4 h-4" />
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Related Projects */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Related Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {portfolioProjects
                .filter(
                  (p) => p.id !== project.id && p.category === project.category
                )
                .slice(0, 3)
                .map((p) => (
                  <Link
                    key={p.id}
                    href={`/projects/${p.id}`}
                    className="group block border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="p-3 bg-white">
                      <Image
                        src={p.coverImage}
                        alt={p.name}
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover rounded-xl"
                      />
                    </div>
                    <div className="px-4 pb-4">
                      <h3 className="mt-2 font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                        {p.name}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {p.description}
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4">
            <Link href="/#portfolio" className="btn btn-primary">
              View All Projects
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
