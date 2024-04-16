import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="w-full bg-yellow-50 pb-24 md:pb-2">
      <div className="flex flex-col ">
        <Helmet>
          <title>Rukaiya Nishfan</title>
          <meta
            name="description"
            content="Explore Rukaiyss's portfolio showcasing top-notch website designs, user research, and web development projects. Discover UI/UX services that deliver results."
          />
        </Helmet>
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
