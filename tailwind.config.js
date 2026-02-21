/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {

      /* =========================
         🔥 ANIMATIONS
      ========================== */

      animation: {
        "spin-fast": "spinFast 3s linear infinite",
        "grid-move": "gridMove 40s linear infinite",
        "float-slow": "floatSlow 8s ease-in-out infinite",
        "gradient-x": "gradientX 8s ease infinite",
        "pulse-slow": "pulseSlow 4s ease-in-out infinite",
        "pulse-dot": "pulseDot 2.5s ease-in-out infinite",
      },

      /* =========================
         🔥 KEYFRAMES
      ========================== */

      keyframes: {

        spinFast: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },

        gridMove: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "80px 80px" },
        },

        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },

        gradientX: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },

        pulseSlow: {
          "0%, 100%": { opacity: 0.6 },
          "50%": { opacity: 1 },
        },

        pulseDot: {
          "0%, 100%": {
            boxShadow: "0 0 20px rgba(0,255,255,0.4)"
          },
          "50%": {
            boxShadow: "0 0 40px rgba(0,255,255,0.9)"
          },
        },
      },

      /* =========================
         🔥 TRANSITION CURVES
      ========================== */

      transitionTimingFunction: {
        cyber: "cubic-bezier(0.22, 1, 0.36, 1)",
      },

    },
  },

  plugins: [],
};