import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Metrics from "./sections/Metrics";
import About from "./sections/About";
import Experience from "./sections/Experience";
import CaseStudies from "./sections/CaseStudies";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0B]">
      <Navigation />
      <Hero />
      <Metrics />
      <About />
      <Experience />
      <CaseStudies />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
