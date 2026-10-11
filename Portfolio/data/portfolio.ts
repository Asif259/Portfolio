export interface FeatureItem {
  name: string;
  description: string;
}

export interface FeatureSection {
  title: string;
  items: FeatureItem[];
}

export interface Challenge {
  title: string;
  description: string;
}

export interface PortfolioProject {
  id: number;
  name: string;
  category:
  | "Frontend Development"
  | "Backend Development"
  | "Full Stack Development";
  coverImage: string;
  images: string[];
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[] | FeatureSection[];
  challenges: string[] | Challenge[];
  solution: string;
  liveUrl?: string;
  githubUrl?: string[];
  date: string;
  client?: string;
  role: string;
}

import { project1 } from "./projects/project1";
import { project2 } from "./projects/project2";
import { project3 } from "./projects/project3";
import { project4 } from "./projects/project4";
import { project5 } from "./projects/project5";
import { project6 } from "./projects/project6";
import { project7 } from "./projects/project7";
import { project8 } from "./projects/project8";

export const portfolioProjects: PortfolioProject[] = [
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  project7,
  project8,
];

export function getProjectById(id: number): PortfolioProject | undefined {
  return portfolioProjects.find((project) => project.id === id);
}