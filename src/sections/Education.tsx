import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const education = [
  {
    name: "Graphic Era Hill University",
    degree: "B.Tech in Computer Science & Engineering",
    duration: "2025 – 2029",
    location: "Dehradun, Uttarakhand, India",
    img: "/images/education/graphic-era.png",
  },
  {
    name: "GEMS Polytechnic",
    degree: "Diploma in Computer Science & Engineering",
    duration: "2022 – 2025",
    location: "Aurangabad, Bihar, India",
    img: "/images/education/gems-polytechnic.png",
  },
];

export default function Education() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={sectionRef}
      id="education"
      className="relative min-h-screen bg-[#050816] py-44 px-6 md:px-16 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-6xl md:text-7xl font-bold text-center mb-36
                     bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500
                     text-transparent bg-clip-text"
        >
          Academic Journey
        </motion.h2>

        <div className="relative">

          {/* Static Timeline Line */}
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-[2px] bg-white/10" />

          {/* Animated Scroll Fill */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-1/2 -translate-x-1/2 w-[3px]
                       bg-gradient-to-b from-cyan-400 to-purple-500"
          />

          <div className="space-y-44">

            {education.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    isLeft ? "justify-start pr-24" : "justify-end pl-24"
                  }`}
                >
                  {/* Timeline Dot (Perfect Centered + Pulse) */}
                  <div className="absolute left-1/2 -translate-x-1/2
                                  w-6 h-6 rounded-full
                                  bg-cyan-400
                                  animate-pulse-dot
                                  z-20" />

                  {/* Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    whileHover={{
                      y: -10,
                      scale: 1.03,
                    }}
                    className="w-full md:w-[45%] group"
                  >
                    <div
                      className="relative bg-[#0b1220]/90 backdrop-blur-xl
                                 border border-white/10
                                 rounded-2xl p-10
                                 transition-all duration-500
                                 hover:border-cyan-400/50
                                 hover:shadow-[0_30px_80px_rgba(0,255,255,0.25)]"
                    >
                      <div className="flex gap-8 items-start">

                        {/* Logo */}
                        <div
                          className="w-20 h-20 bg-white rounded-xl
                                     flex items-center justify-center
                                     overflow-hidden shadow-md
                                     transition duration-500
                                     group-hover:scale-110
                                     group-hover:shadow-xl"
                        >
                          <img
                            src={item.img}
                            alt={item.name}
                            className="w-16 h-16 object-contain"
                          />
                        </div>

                        {/* Content */}
                        <div className="space-y-4">

                          <h3 className="text-2xl font-semibold text-white">
                            {item.name}
                          </h3>

                          <p className="text-cyan-300 font-medium border-b border-purple-500/40 inline-block pb-1">
                            {item.degree}
                          </p>

                          <p className="text-gray-400 text-sm tracking-wide">
                            {item.duration}
                          </p>

                          <p className="text-gray-500 text-sm">
                            {item.location}
                          </p>

                        </div>
                      </div>
                    </div>
                  </motion.div>

                </div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
}