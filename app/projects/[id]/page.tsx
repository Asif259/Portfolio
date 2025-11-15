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
    <main className="min-h-screen bg-white">
      <Navbar solid />

      {/* Main Content Container */}
      <div className="pt-20 pb-8">
        {/* Back Button */}
        <div className="container mx-auto px-4 lg:px-6 mb-6">
          <Link
            href="/#portfolio"
            className="flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors group"
          >
            <FaChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium text-sm">Go Back</span>
          </Link>
        </div>

        {/* Hero Section */}
        <div className="container mx-auto px-4 lg:px-6 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
            {/* Project Image */}
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-3 sticky top-20">
                <Image
                  src={project.coverImage}
                  alt={project.name}
                  width={800}
                  height={600}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="w-full h-auto object-contain rounded-lg"
                  priority
                />
              </div>
            </div>

            {/* Project Info */}
            <div className="order-1 lg:order-2 space-y-4">
              {/* Breadcrumb */}
              <nav className="text-xs text-gray-500 mb-2">
                <ol className="flex items-center gap-1.5 flex-wrap">
                  <li>
                    <Link
                      href="/"
                      className="hover:text-primary-600 transition-colors"
                    >
                      Home
                    </Link>
                  </li>
                  <li>/</li>
                  <li>
                    <Link
                      href="/#portfolio"
                      className="hover:text-primary-600 transition-colors"
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li>/</li>
                  <li className="text-gray-700 font-medium truncate">
                    {project.name}
                  </li>
                </ol>
              </nav>

              {/* Project Header */}
              <div className="space-y-3">
                <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-xs font-semibold text-gray-700 border border-gray-200">
                  {project.category}
                </span>
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                  {project.name}
                </h1>
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Quick Info Cards */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg border border-gray-100">
                  <div className="w-8 h-8 rounded-lg bg-primary-500/10 text-primary-600 flex items-center justify-center flex-shrink-0">
                    <FaClock className="w-3.5 h-3.5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-gray-500 truncate">Timeline</p>
                    <p className="font-semibold text-gray-900 text-sm truncate">
                      {new Date(project.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                      })}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg border border-gray-100">
                  <div className="w-8 h-8 rounded-lg bg-primary-500/10 text-primary-600 flex items-center justify-center flex-shrink-0">
                    <FaUsers className="w-3.5 h-3.5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-gray-500 truncate">Role</p>
                    <p className="font-semibold text-gray-900 text-sm truncate">
                      {project.role}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg border border-gray-100">
                  <div className="w-8 h-8 rounded-lg bg-primary-500/10 text-primary-600 flex items-center justify-center flex-shrink-0">
                    <FaTools className="w-3.5 h-3.5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-gray-500 truncate">Stack</p>
                    <p className="font-semibold text-gray-900 text-sm truncate">
                      {project.technologies[0]}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              {(project.liveUrl || project.githubUrl) && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 btn btn-primary btn-sm"
                    >
                      <FaExternalLinkAlt className="w-3.5 h-3.5" />
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
                          className="flex items-center gap-2 btn btn-outline-primary btn-sm"
                        >
                          <FaGithub className="w-3.5 h-3.5" />
                          {project.githubUrl && project.githubUrl.length > 1
                            ? `Code ${index + 1}`
                            : "View Code"}
                        </a>
                      ))}
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                {/* Tab Navigation */}
                <div className="flex flex-wrap gap-1 mb-6">
                  {[
                    { id: "overview", label: "Overview" },
                    { id: "solution", label: "Solution" },
                    { id: "challenges", label: "Challenges" },
                  ].map((t) => (
                    <button
                      key={t.id}
                      className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all ${
                        activeTab === (t.id as any)
                          ? "bg-primary-500 text-white border-primary-500 shadow-sm"
                          : "bg-white text-gray-700 border-gray-200 hover:border-primary-300 hover:text-primary-600"
                      }`}
                      onClick={() => setActiveTab(t.id as any)}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                <div className="space-y-4">
                  {activeTab === "overview" && (
                    <>
                      <h2 className="text-xl font-bold text-gray-900">
                        Project Overview
                      </h2>
                      <p className="text-gray-600 leading-relaxed">
                        {project.longDescription}
                      </p>
                    </>
                  )}
                  {activeTab === "solution" && (
                    <>
                      <h2 className="text-xl font-bold text-gray-900">
                        Solution & Approach
                      </h2>
                      <p className="text-gray-600 leading-relaxed">
                        {project.solution}
                      </p>
                    </>
                  )}
                  {activeTab === "challenges" && (
                    <>
                      <h2 className="text-xl font-bold text-gray-900">
                        Challenges Faced
                      </h2>
                      {Array.isArray(project.challenges) &&
                      project.challenges.length > 0 &&
                      typeof project.challenges[0] === "object" &&
                      "title" in project.challenges[0] ? (
                        <ul className="space-y-3">
                          {(project.challenges as Challenge[]).map(
                            (challenge, index) => (
                              <li
                                key={index}
                                className="flex items-start gap-3"
                              >
                                <span className="mt-1.5 w-2 h-2 rounded-full bg-primary-500 flex-shrink-0"></span>
                                <div className="flex-1">
                                  <span className="text-gray-900 font-semibold block mb-1 text-sm">
                                    {challenge.title}
                                  </span>
                                  <span className="text-gray-600 text-sm">
                                    {challenge.description}
                                  </span>
                                </div>
                              </li>
                            )
                          )}
                        </ul>
                      ) : (
                        <ul className="space-y-2">
                          {(project.challenges as string[]).map(
                            (challenge, index) => (
                              <li
                                key={index}
                                className="flex items-start gap-3"
                              >
                                <span className="mt-1.5 w-2 h-2 rounded-full bg-primary-500 flex-shrink-0"></span>
                                <span className="text-gray-600 text-sm">
                                  {challenge}
                                </span>
                              </li>
                            )
                          )}
                        </ul>
                      )}
                    </>
                  )}
                </div>
              </div>

              {/* Gallery Section */}
              {project.images && project.images.length > 0 && (
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <h2 className="text-xl font-bold mb-4 text-gray-900">
                    Project Gallery
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {project.images.map((img, idx) => (
                      <button
                        key={idx}
                        type="button"
                        className="group relative bg-white border border-gray-100 rounded-lg p-2 shadow-sm hover:shadow-md transition-all cursor-zoom-in overflow-hidden"
                        onClick={() => {
                          setActiveIndex(idx);
                          setLightboxImage(img);
                        }}
                      >
                        <Image
                          src={img}
                          alt={`${project.name} image ${idx + 1}`}
                          width={400}
                          height={300}
                          sizes="(max-width: 1024px) 100vw, 33vw"
                          className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Features Section */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h2 className="text-xl font-bold mb-4 text-gray-900">
                  Key Features
                </h2>
                {Array.isArray(project.features) &&
                project.features.length > 0 &&
                typeof project.features[0] === "object" &&
                "title" in project.features[0] ? (
                  <div className="space-y-6">
                    {(project.features as FeatureSection[]).map(
                      (section, sectionIndex) => (
                        <div key={sectionIndex}>
                          <h3 className="text-lg font-semibold mb-3 text-gray-800">
                            {section.title}
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {section.items.map((item, itemIndex) => (
                              <div
                                key={itemIndex}
                                className="flex items-start gap-3 p-3 bg-primary-500/5 rounded-lg border border-primary-100"
                              >
                                <div className="mt-0.5 w-5 h-5 rounded-full bg-primary-500 text-white flex items-center justify-center flex-shrink-0">
                                  <FaCheck className="w-3 h-3" />
                                </div>
                                <div className="flex-1">
                                  <span className="text-gray-900 font-medium block mb-1 text-sm">
                                    {item.name}
                                  </span>
                                  <span className="text-gray-600 text-xs">
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {(project.features as string[]).map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-3 bg-primary-500/5 rounded-lg border border-primary-100"
                      >
                        <div className="mt-0.5 w-5 h-5 rounded-full bg-primary-500 text-white flex items-center justify-center flex-shrink-0">
                          <FaCheck className="w-3 h-3" />
                        </div>
                        <span className="text-gray-700 font-medium text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-4 lg:sticky lg:top-20 h-max">
              {/* Project Info */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
                <h3 className="text-lg font-bold mb-3 text-gray-900">
                  Project Information
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Date</p>
                    <p className="font-semibold text-gray-900 text-sm">
                      {new Date(project.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Role</p>
                    <p className="font-semibold text-gray-900 text-sm">
                      {project.role}
                    </p>
                  </div>
                  {project.client && (
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Client</p>
                      <p className="font-semibold text-gray-900 text-sm">
                        {project.client}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Technologies */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
                <h3 className="text-lg font-bold mb-3 text-gray-900">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2.5 py-1 bg-primary-500/10 text-primary-700 rounded-lg text-xs font-medium border border-primary-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Related Projects */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4 text-gray-900">
              Related Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {portfolioProjects
                .filter(
                  (p) => p.id !== project.id && p.category === project.category
                )
                .slice(0, 3)
                .map((p) => (
                  <Link
                    key={p.id}
                    href={`/projects/${p.id}`}
                    className="group block border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all bg-white"
                  >
                    <div className="p-2">
                      <Image
                        src={p.coverImage}
                        alt={p.name}
                        width={400}
                        height={250}
                        className="w-full h-auto object-cover rounded-lg"
                      />
                    </div>
                    <div className="px-3 pb-3">
                      <h3 className="mt-1 font-semibold text-gray-900 group-hover:text-primary-600 transition-colors text-sm">
                        {p.name}
                      </h3>
                      <p className="text-xs text-gray-600 line-clamp-2 mt-1">
                        {p.description}
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center">
            <Link href="/#portfolio" className="btn btn-primary btn-sm">
              View All Projects
            </Link>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="max-w-4xl w-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightboxImage}
              alt="Preview"
              width={1200}
              height={800}
              sizes="90vw"
              className="w-full h-full object-contain rounded-lg"
            />
            <div className="flex justify-between mt-3 gap-2">
              <button
                className="btn btn-outline-white btn-sm flex-1"
                onClick={() => {
                  if (!project?.images) return;
                  const next =
                    (activeIndex - 1 + project.images.length) %
                    project.images.length;
                  setActiveIndex(next);
                  setLightboxImage(project.images[next]);
                }}
              >
                Previous
              </button>
              <button
                className="btn btn-outline-white btn-sm flex-1"
                onClick={() => setLightboxImage(null)}
              >
                Close
              </button>
              <button
                className="btn btn-outline-white btn-sm flex-1"
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

      <Footer />
    </main>
  );
}
