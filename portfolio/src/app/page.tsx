import Hero from "@/components/sections/Hero";
import Vision from "@/components/sections/Vision";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Toolkit from "@/components/sections/Toolkit";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Vision />
      <About />
      <Services />
      <Toolkit />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
