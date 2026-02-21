import { motion } from "framer-motion";

export default function VideoShowcase() {
  return (
    <section
      id="video"
      className="relative py-36 px-6 md:px-20 overflow-hidden"
    >
      {/* Ambient background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-600/10"></div>

      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 
                      bg-purple-600/10 rounded-full blur-[140px] opacity-40"></div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold 
                         bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500
                         text-transparent bg-clip-text">
            Video Showcase
          </h2>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A curated visual walkthrough of my digital systems, engineering
            experiments, and structured problem-solving approach.
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.9 }}
          viewport={{ once: true }}
          className="mt-20 relative group"
        >
          {/* Gradient Frame */}
          <div className="absolute -inset-[1.5px] rounded-3xl 
                          bg-gradient-to-r from-cyan-400/30 via-purple-500/30 to-pink-500/30 
                          blur-xl opacity-30 group-hover:opacity-60 
                          transition duration-700"></div>

          {/* Glass Card */}
          <div className="relative bg-[#0b1220]/60 backdrop-blur-2xl 
                          border border-white/10 rounded-3xl 
                          overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.6)]
                          transition duration-500 group-hover:scale-[1.01]">

            <div className="aspect-video w-full">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/FRLPnyNsoXQ"
                title="YouTube video"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}