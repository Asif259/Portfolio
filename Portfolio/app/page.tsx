import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";
import Qualification from "@/components/Qualification";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { getPublishedProjects } from "@/services/projectService";

export const revalidate = 60;

export default async function Home() {
  const projects = await getPublishedProjects();

  return (
    <main className="relative bg-black text-white min-h-screen">
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Portfolio initialProjects={projects} />
      <Skills />
      <Qualification />
      <Contact />
      <Footer />
    </main>
  );
}
