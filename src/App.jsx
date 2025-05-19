import React from "react";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import AreaOfInterest from "./components/AreaOfInterest"; // Import here

export default function App() {
  return (
    <div>
      <header>RAJASEETHA M</header>
      <main className="container">
        <section className="section-card">
          <AboutMe />
        </section>
        <section className="section-card">
          <Education />
        </section>
        <section className="section-card">
          <Experience />
        </section>
        <section className="section-card">
          <Skills />
        </section>
        <section className="section-card">
          <AreaOfInterest /> {/* Add here */}
        </section>
        <section className="section-card">
          <Contact />
        </section>
      </main>
    </div>
  );
}
