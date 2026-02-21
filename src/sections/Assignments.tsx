import { motion } from "framer-motion";

export default function Assignments() {
  return (
    <section
      id="assignments"
      className="relative min-h-screen bg-[#04060f] py-44 px-6 md:px-16 overflow-hidden"
    >
      {/* Subtle Animated Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-cyan-500/10 blur-3xl animate-pulse-slow"></div>

      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-[0.05] cyber-grid animate-grid-move"></div>

      <div className="relative max-w-6xl mx-auto text-center">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-7xl font-bold mb-20
                     bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500
                     text-transparent bg-clip-text"
        >
          Assignments
        </motion.h2>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl p-20
                     bg-[#0b1220]/80 backdrop-blur-xl
                     border border-white/10
                     hover:border-cyan-400/50
                     transition-all duration-500
                     hover:shadow-[0_40px_120px_rgba(0,255,255,0.25)]"
        >
          {/* Neon Border Sweep */}
          <div className="absolute inset-0 rounded-3xl opacity-0 hover:opacity-100 transition duration-700 pointer-events-none">
            <div className="absolute inset-0 rounded-3xl
                            bg-[conic-gradient(from_0deg,cyan,magenta,cyan)]
                            animate-spin-slow blur-md opacity-40">
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-6"
          >
            Experimental projects, research builds, and technical explorations
            will appear here.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="inline-block mt-6 px-6 py-2 rounded-full
                       bg-gradient-to-r from-cyan-500 to-purple-500
                       text-white text-sm tracking-wider animate-pulse-slow"
          >
            🚀 Under Development
          </motion.div>

        </motion.div>

        {/* Future Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mt-16"
        >
          {[
            "Cybersecurity Labs",
            "AI Mini Projects",
            "System Programming",
            "Web Security Testing",
            "CTF Writeups",
          ].map((item, i) => (
            <span
              key={i}
              className="px-5 py-2 text-sm rounded-full
                         bg-white/5 border border-white/10
                         text-gray-400
                         hover:border-cyan-400/50
                         hover:text-white
                         transition duration-300"
            >
              {item}
            </span>
          ))}
        </motion.div>

      </div>
    </section>
  );
}