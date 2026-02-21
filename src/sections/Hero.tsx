import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />

      {/* Gradient Glow Layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            <span className="text-white">Aditya Kumar</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
              Cybersecurity Engineer
            </span>
          </h1>

          <p className="text-gray-300 mt-6 max-w-lg text-lg">
            Building secure systems. Engineering resilient architectures.
            Exploring DSA, networking and futuristic tech.
          </p>

          <div className="flex gap-6 mt-10">
            <a
              href="#skills"
              className="px-8 py-3 bg-cyan-500 text-black font-semibold rounded-xl hover:scale-105 transition duration-300 shadow-lg shadow-cyan-500/30"
            >
              Explore Skills
            </a>

            <a
              href="#contact"
              className="px-8 py-3 border border-purple-400 text-purple-400 rounded-xl hover:bg-purple-500/20 transition duration-300"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="relative group">
            <div className="absolute -inset-6 bg-gradient-to-r from-cyan-500 to-purple-500 blur-3xl opacity-30 rounded-3xl group-hover:opacity-60 transition duration-500"></div>
            <img
              src="/images/profile/profile.jpg"
              alt="Aditya"
              className="relative w-80 md:w-96 rounded-3xl border border-cyan-500/30 shadow-2xl object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}