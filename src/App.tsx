import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#181d27]">
      <Navbar />
      <div className="">
        <section className="bg-[#0A0E18]">
          <Hero />
        </section>
        <section className="bg-[#181d27]">
          <About />
        </section>
        <section className="bg-[#0A0E18]">
          <Skills />
        </section>
        <section className="bg-[#181d27]">
          <Experience />
        </section>
        <section className="bg-[#0A0E18]">
          <Projects />
        </section>
        <section className="bg-[#181d27]">
          <Testimonials />
        </section>
        <section className="bg-[#0A0E18]">
          <Contact />
        </section>
        <Footer />
      </div>
    </div>
  );
}
export default App;
