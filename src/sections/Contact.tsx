import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen bg-[#04060f] py-40 px-6 md:px-16 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-600/10 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-7xl font-bold text-center mb-24
                     bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500
                     text-transparent bg-clip-text"
        >
          Let’s Build Something Powerful
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-20 items-start">

          {/* LEFT SIDE - CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div>
              <h3 className="text-2xl text-cyan-400 font-semibold mb-4">
                Direct Contact
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Feel free to reach out for collaborations, internships,
                research opportunities, or technical discussions.
              </p>
            </div>

            {/* Email */}
            <div className="space-y-1">
              <p className="text-gray-500 text-sm">Email</p>
              <a
                href="mailto:adityakumar.25011001@gehu.ac.in"
                className="text-xl font-medium text-white hover:text-cyan-400 transition"
              >
                adityakumar.25011001@gehu.ac.in
              </a>
            </div>

            {/* Phone */}
            <div className="space-y-1">
              <p className="text-gray-500 text-sm">Phone</p>
              <a
                href="tel:+917859031243"
                className="text-xl font-medium text-white hover:text-cyan-400 transition"
              >
                +91 78590 31243
              </a>
            </div>

            {/* Availability Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full
                            bg-emerald-500/10 border border-emerald-400/40
                            text-emerald-400 text-sm">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
              Open for Opportunities
            </div>
          </motion.div>

          {/* RIGHT SIDE - FORM */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Glow Border Frame */}
            <div className="absolute -inset-[1px] rounded-3xl
                            bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500
                            opacity-40 blur-xl"></div>

            <div className="relative rounded-3xl p-10
                            bg-[#0b1220]/80 backdrop-blur-xl
                            border border-white/10
                            hover:border-cyan-400/40
                            transition duration-500">

              <form className="space-y-8">

                {/* Name */}
                <div className="relative">
                  <input
                    type="text"
                    required
                    className="peer w-full bg-transparent border border-white/10
                               rounded-xl px-5 pt-6 pb-3 text-white
                               focus:outline-none focus:border-cyan-400
                               transition"
                  />
                  <label
                    className="absolute left-5 top-4 text-gray-500 text-sm
                               peer-focus:text-cyan-400
                               peer-focus:-translate-y-3
                               peer-focus:text-xs
                               peer-valid:-translate-y-3
                               peer-valid:text-xs
                               transition-all"
                  >
                    Your Name
                  </label>
                </div>

                {/* Email */}
                <div className="relative">
                  <input
                    type="email"
                    required
                    className="peer w-full bg-transparent border border-white/10
                               rounded-xl px-5 pt-6 pb-3 text-white
                               focus:outline-none focus:border-cyan-400
                               transition"
                  />
                  <label
                    className="absolute left-5 top-4 text-gray-500 text-sm
                               peer-focus:text-cyan-400
                               peer-focus:-translate-y-3
                               peer-focus:text-xs
                               peer-valid:-translate-y-3
                               peer-valid:text-xs
                               transition-all"
                  >
                    Your Email
                  </label>
                </div>

                {/* Message */}
                <div className="relative">
                  <textarea
                    rows={5}
                    required
                    className="peer w-full bg-transparent border border-white/10
                               rounded-xl px-5 pt-6 pb-3 text-white
                               focus:outline-none focus:border-cyan-400
                               transition resize-none"
                  ></textarea>
                  <label
                    className="absolute left-5 top-4 text-gray-500 text-sm
                               peer-focus:text-cyan-400
                               peer-focus:-translate-y-3
                               peer-focus:text-xs
                               peer-valid:-translate-y-3
                               peer-valid:text-xs
                               transition-all"
                  >
                    Your Message
                  </label>
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="relative w-full py-4 rounded-xl
                             bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500
                             font-semibold text-black
                             hover:scale-[1.02]
                             active:scale-[0.98]
                             transition duration-300 overflow-hidden"
                >
                  <span className="relative z-10">Send Message</span>

                  {/* Shine Effect */}
                  <span className="absolute inset-0 bg-white/20
                                   translate-x-[-100%]
                                   hover:translate-x-[100%]
                                   transition duration-700"></span>
                </button>

              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}