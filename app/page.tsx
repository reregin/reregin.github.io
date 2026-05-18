import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SignalStrip from "@/components/SignalStrip";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Awards from "@/components/Awards";
import Education from "@/components/Education";
import BuilderNotes from "@/components/BuilderNotes";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SignalStrip />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Awards />
        <Education />
        <BuilderNotes />
        <Contact />
      </main>
    </>
  );
}
