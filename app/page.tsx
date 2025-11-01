import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Qualification from "@/components/Qualification";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Qualification />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
