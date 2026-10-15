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
  project8, // BariVara (Lead Full-Stack Product)
  project7, // Nexus (Full-Stack Real-time Event Platform)
  project4, // Doctein (Full-Stack Healthcare Practice Platform)
  project2, // Culinary Odyssey (Full-Stack Catering Platform)
  project3, // Home Decor And More (Full-Stack E-commerce)
  project1, // Cryzen (Frontend / Client MYBBBGlobal)
  project5, // Elegant Tech (Frontend Agency Platform)
  project6, // Careem Website (Frontend Multi-page Platform)
];

export function getProjectById(id: number): PortfolioProject | undefined {
  return portfolioProjects.find((project) => project.id === id);
}