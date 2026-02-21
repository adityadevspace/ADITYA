import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const skills = [
  { name: "C", file: "/images/skills/c.png" },
  { name: "C++", file: "/images/skills/cpp.png" },
  { name: "Java", file: "/images/skills/Java.png" },
  { name: "Python", file: "/images/skills/Python.png" },
  { name: "HTML5", file: "/images/skills/HTML5.png" },
  { name: "CSS3", file: "/images/skills/CSS3.png" },
  { name: "Tailwind", file: "/images/skills/Tailwind CSS.png" },
  { name: "React", file: "/images/skills/React.png" },
  { name: "TypeScript", file: "/images/skills/TypeScript.png" },
  { name: "Git", file: "/images/skills/Git.png" },
  { name: "GitHub", file: "/images/skills/GitHub.png" },
  { name: "Linux", file: "/images/skills/Linux.png" },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const [mouse, setMouse] = useState({ x: -500, y: -500 });
  const [smoothMouse, setSmoothMouse] = useState({ x: -500, y: -500 });

  // Track real mouse position relative to section
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setMouse({ x, y });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  // Smooth trailing effect
  useEffect(() => {
    const smooth = () => {
      setSmoothMouse(prev => ({
        x: prev.x + (mouse.x - prev.x) * 0.1,
        y: prev.y + (mouse.y - prev.y) * 0.1,
      }));
      requestAnimationFrame(smooth);
    };
    smooth();
  }, [mouse]);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative min-h-screen bg-[#050816] py-32 px-6 md:px-16 overflow-hidden"
    >
      {/* 🔥 Layered Reactor Spotlight */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(circle 180px at ${smoothMouse.x}px ${smoothMouse.y}px, rgba(0,255,255,0.5), transparent 60%),
            radial-gradient(circle 350px at ${smoothMouse.x}px ${smoothMouse.y}px, rgba(0,255,255,0.25), transparent 70%),
            radial-gradient(circle 650px at ${smoothMouse.x}px ${smoothMouse.y}px, rgba(168,85,247,0.2), transparent 80%)
          `,
          filter: "blur(30px)",
        }}
      />

      {/* 🔥 Refined Cyber Grid */}
      <div className="absolute inset-0 opacity-[0.06] cyber-grid animate-grid-move"></div>

      <div className="relative max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-extrabold text-center mb-28 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text"
        >
          Tech Arsenal
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-16">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="relative group"
            >
              {/* 🔥 Neon Border */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-[conic-gradient(from_0deg,cyan,magenta,cyan)] animate-spin-fast blur-md"></div>
              </div>

              <div
                className="relative p-12 rounded-3xl bg-[#0b1220]
                           border border-cyan-500/20
                           transition-all duration-300 ease-cyber
                           group-hover:-translate-y-5
                           group-hover:shadow-[0_0_120px_rgba(0,255,255,0.8)]"
              >
                <img
                  src={skill.file}
                  alt={skill.name}
                  className={`relative w-24 h-24 mx-auto mb-6 object-contain transition duration-500 group-hover:scale-120 ${
                    skill.name === "GitHub"
                      ? "brightness-200 drop-shadow-[0_0_25px_white]"
                      : ""
                  }`}
                />

                <p className="relative text-lg text-gray-300 group-hover:text-white text-center tracking-wider transition duration-300">
                  {skill.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}