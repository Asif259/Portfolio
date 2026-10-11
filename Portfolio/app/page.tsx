import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Qualification from "@/components/Qualification";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { getPublishedProjects } from "@/services/projectService";

export const revalidate = 60;

export default async function Home() {
  const projects = await getPublishedProjects();

  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Qualification />
      <Portfolio initialProjects={projects} />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
