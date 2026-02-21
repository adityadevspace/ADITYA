import { useState } from "react";
import Loader from "./components/Loader";

import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";

import Hero from "./sections/Hero";
import VideoShowcase from "./sections/VideoShowcase";
import Skills from "./sections/Skills";
import Education from "./sections/Education";
import Certifications from "./sections/Certifications";
import Assignments from "./sections/Assignments";
import Contact from "./sections/Contact";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* =========================
          PREMIUM LOADER
      ========================== */}
      {loading && (
        <Loader onFinish={() => setLoading(false)} />
      )}

      {/* =========================
          MAIN SITE (Blur Reveal)
      ========================== */}
      <div
        className={`relative bg-[#04060f] text-white overflow-x-hidden scroll-smooth
        transition-all duration-[1200ms] ease-out
        ${
          loading
            ? "opacity-0 blur-md scale-[1.02]"
            : "opacity-100 blur-0 scale-100"
        }`}
      >
        <ScrollProgress />
        <Navbar />

        {/* Sections */}
        <Hero />
        <VideoShowcase />
        <Skills />
        <Education />
        <Certifications />
        <Assignments />
        <Contact />
      </div>
    </>
  );
}