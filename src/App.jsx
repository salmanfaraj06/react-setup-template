import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeroMain from "./components/HeroMain";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Hobbies from "./components/Hobbies";

function App() {
  return (
    <Router>
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
          <Routes>
            <Route path="/" element={<><HeroMain /><Skills /><Projects /><Contact /></>} />
            <Route path="/about" element={<><Hero /><Hobbies /></>} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;