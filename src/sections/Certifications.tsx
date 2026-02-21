import { motion } from "framer-motion";
import { useState } from "react";

const certifications = [
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "03 Aug 2025",
    pdf: "/images/certificates/cybersecurity-hackerrank.pdf",
    thumbnail: "/images/certificates/cybersecurity-thumbnail.png",
    skills: ["Cybersecurity", "Networking", "Security Basics"],
  },
  {
    title: "GEN AI – 101",
    issuer: "NASSCOM FutureSkills",
    date: "17 Feb 2026",
    pdf: "/images/certificates/genai-101.pdf",
    thumbnail: "/images/certificates/genai-thumbnail.png",
    skills: ["AI", "Generative AI", "Machine Learning"],
  },
  {
    title: "Problem Solving (Basic)",
    issuer: "HackerRank",
    date: "04 Nov 2025",
    pdf: "/images/certificates/problem-solving-basic-hackerrank.pdf",
    thumbnail: "/images/certificates/problem-solving-thumbnail.png",
    skills: ["C++", "Problem Solving", "DSA"],
  },
];

export default function Certifications() {
  const [selected, setSelected] = useState<any>(null);

  return (
    <section
      id="certifications"
      className="relative min-h-screen bg-[#04060f] py-44 px-6 md:px-16 overflow-hidden"
    >
      {/* Subtle Animated Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-purple-500/10 blur-3xl animate-pulse-slow"></div>

      <div className="relative max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-6xl md:text-7xl font-bold text-center mb-24
                     bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500
                     text-transparent bg-clip-text"
        >
          Certifications
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14 items-stretch">

          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ rotateX: 4, rotateY: -4, scale: 1.03 }}
              className="group relative h-full cursor-pointer"
              onClick={() => setSelected(cert)}
            >

              {/* Cursor Reactive Glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500">
                <div className="absolute inset-0 rounded-2xl bg-cyan-500/10 blur-xl"></div>
              </div>

              <div className="relative h-full flex flex-col
                              bg-[#0b1220]/90 backdrop-blur-xl
                              border border-white/10
                              rounded-2xl p-6
                              transition-all duration-500
                              hover:border-cyan-400/70
                              hover:shadow-[0_30px_80px_rgba(0,255,255,0.25)]">

                {/* Thumbnail */}
                <div className="relative h-48 rounded-xl overflow-hidden mb-6 bg-white/5">
                  <img
                    src={cert.thumbnail}
                    alt={cert.title}
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                    <span className="text-sm text-white tracking-wider">
                      Click to Preview →
                    </span>
                  </div>
                </div>

                <div className="flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-white">
                      {cert.title}
                    </h3>
                    <span className="text-cyan-400 animate-pulse-slow">✔</span>
                  </div>

                  <p className="text-cyan-300 text-sm mb-1">{cert.issuer}</p>
                  <p className="text-gray-400 text-sm mb-6">{cert.date}</p>

                  <div className="mt-auto flex flex-wrap gap-2">
                    {cert.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full
                                   bg-white/5 text-gray-300
                                   border border-white/10
                                   transition duration-300
                                   group-hover:border-cyan-400/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL PREVIEW */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-lg flex items-center justify-center z-50 p-6"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative bg-[#0b1220] rounded-2xl overflow-hidden max-w-4xl w-full h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={selected.pdf}
              title="Certificate Preview"
              className="w-full h-full"
            ></iframe>

            <button
              className="absolute top-4 right-4 text-white bg-red-500 px-4 py-1 rounded-full"
              onClick={() => setSelected(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}