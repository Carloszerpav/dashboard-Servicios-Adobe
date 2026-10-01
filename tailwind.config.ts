import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "rgb(var(--ink-950) / <alpha-value>)",
          900: "rgb(var(--ink-900) / <alpha-value>)",
          800: "rgb(var(--ink-800) / <alpha-value>)",
          700: "rgb(var(--ink-700) / <alpha-value>)",
        },
        /** Texto y bordes sobre el lienzo; en modo claro es tinta, no blanco. */
        white: "rgb(var(--fg) / <alpha-value>)",
        /** Blanco real para texto sobre rojo Adobe / gradiente de marca. */
        snow: "#FFFFFF",
        adobe: {
          red: "#E31B23",
          ember: "#FF4B2B",
        },
        doccloud: "#7B2CBF",
        creative: "#00A3FF",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.045em",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgb(var(--fg) / 0.07) 1px, transparent 1px), linear-gradient(to bottom, rgb(var(--fg) / 0.07) 1px, transparent 1px)",
        "brand-gradient":
          "linear-gradient(120deg, #E31B23 0%, #B4177A 50%, #7B2CBF 100%)",
      },
      boxShadow: {
        elevated: "0 18px 50px -28px rgb(var(--fg) / 0.22)",
        glow: "0 0 0 1px rgb(var(--fg) / 0.08), 0 24px 60px -36px rgba(227,27,35,0.28)",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
        "drift-slow": {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%": { transform: "translate3d(0,-18px,0) scale(1.05)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        "pulse-soft": "pulse-soft 3.2s ease-in-out infinite",
        "drift-slow": "drift-slow 14s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
