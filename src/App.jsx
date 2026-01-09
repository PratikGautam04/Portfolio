import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import ProjectModal from "./components/ProjectModal";
import Contact from "./components/Contact";
import Reveal from "./components/Reveal"
import Footer from "./components/Footer";


export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Education />
      <ProjectModal/>
      <Contact />
      <Reveal/>
      <Footer />
    </>
  );
}
