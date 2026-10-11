import { getProjectById, getRelatedProjects, getAllProjectIds } from "@/services/projectService";
import ProjectDetailClientView from "./ProjectDetailClientView";
import Link from "next/link";
import { Metadata } from "next";

export const revalidate = 60;

export async function generateStaticParams() {
  const ids = await getAllProjectIds();
  return ids.map((id) => ({ id: id.toString() }));
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const id = parseInt(params.id);
  const project = await getProjectById(id);

  if (!project) {
    return {
      title: "Project Not Found | Portfolio",
      description: "The requested project case study could not be found.",
    };
  }

  return {
    title: `${project.name} | Portfolio Case Study`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const id = parseInt(params.id);
  const project = await getProjectById(id);

  if (!project) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: "#121212" }}
      >
        <div className="text-center">
          <h1
            className="text-4xl font-bold mb-4"
            style={{ color: "#f1f5f9" }}
          >
            Project Not Found
          </h1>
          <Link href="/#portfolio" className="btn btn-primary">
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  const relatedProjects = await getRelatedProjects(project);

  return (
    <ProjectDetailClientView
      project={project}
      relatedProjects={relatedProjects}
    />
  );
}
