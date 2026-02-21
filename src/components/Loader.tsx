import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader({ onFinish }: { onFinish: () => void }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onFinish, 1200);
    }, 8000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div
      initial={{ opacity: 1, scale: 1 }}
      animate={{
        opacity: visible ? 1 : 0,
        scale: visible ? 1 : 1.05,
      }}
      transition={{ duration: 1.2 }}
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#020617] overflow-hidden"
    >
      {/* Ultra subtle moving background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-600/10 animate-pulse blur-3xl"></div>

      <div className="relative text-center">

        <motion.h1
          initial={{ opacity: 0, letterSpacing: "0.4em" }}
          animate={{ opacity: 1, letterSpacing: "0.15em" }}
          transition={{ duration: 3 }}
          className="text-6xl md:text-7xl font-semibold tracking-widest text-white"
        >
          ADITYA
        </motion.h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "220px" }}
          transition={{ delay: 3, duration: 3 }}
          className="h-[1px] mx-auto mt-8 bg-gradient-to-r from-cyan-400 to-purple-500"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 4, duration: 2 }}
          className="mt-6 text-sm tracking-widest text-gray-400"
        >
          Crafting Digital Systems
        </motion.p>
      </div>
    </motion.div>
  );
}