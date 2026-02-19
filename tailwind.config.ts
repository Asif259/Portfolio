import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f5f3ff",
          100: "#ede9fe",
          200: "#ddd6fe",
          300: "#c4b5fd",
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6d28d9",
          800: "#5b21b6",
          900: "#4c1d95",
          DEFAULT: "#8b5cf6",
        },
        accent: {
          DEFAULT: "#8b5cf6",
          glow: "rgba(139, 92, 246, 0.4)",
          soft: "rgba(139, 92, 246, 0.12)",
          pink: "#f472b6",
          blue: "#818cf8",
        },
        dark: {
          DEFAULT: "#030014",
          100: "#0f0728",
          200: "#1a0a3a",
          300: "#251052",
          400: "#301a64",
          500: "#3b2476",
        },
        secondary: "#9ca3af",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "Roboto", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      animation: {
        "bounce-slow": "bounce 2s infinite",
        gradient: "gradient 8s linear infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "gradient-shift": "gradientShift 8s ease infinite",
        shimmer: "shimmer 2s infinite",
      },
      backgroundImage: {
        "gradient-primary":
          "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%)",
        "gradient-hero":
          "linear-gradient(180deg, #030014 0%, #0f0728 50%, #1a0a3a 100%)",
        "gradient-card":
          "linear-gradient(135deg, rgba(139, 92, 246, 0.06) 0%, rgba(99, 102, 241, 0.02) 100%)",
        "grid-pattern":
          "linear-gradient(rgba(139, 92, 246, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.05) 1px, transparent 1px)",
        "glow-gradient":
          "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(139, 92, 246, 0.2) 0%, transparent 70%)",
        "glow-radial":
          "radial-gradient(circle at center, rgba(139, 92, 246, 0.15) 0%, transparent 70%)",
        "aurora":
          "linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(168, 85, 247, 0.05) 50%, rgba(244, 114, 182, 0.1) 100%)",
      },
      backgroundSize: {
        "grid-sm": "40px 40px",
        "grid-md": "60px 60px",
        "grid-lg": "80px 80px",
      },
      boxShadow: {
        "neon-sm": "0 0 10px rgba(139, 92, 246, 0.4)",
        "neon-md": "0 0 20px rgba(139, 92, 246, 0.35), 0 0 40px rgba(139, 92, 246, 0.15)",
        "neon-lg": "0 0 30px rgba(139, 92, 246, 0.5), 0 0 60px rgba(139, 92, 246, 0.25), 0 0 90px rgba(139, 92, 246, 0.1)",
        "card-dark": "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
        "card-hover": "0 16px 48px rgba(0,0,0,0.5), 0 0 30px rgba(139, 92, 246, 0.15)",
        "glow": "0 0 20px rgba(139, 92, 246, 0.3), 0 0 40px rgba(139, 92, 246, 0.1)",
        "glow-lg": "0 0 30px rgba(139, 92, 246, 0.4), 0 0 60px rgba(139, 92, 246, 0.2)",
      },
      keyframes: {
        gradient: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(2deg)" },
        },
        glowPulse: {
          "0%, 100%": {
            boxShadow: "0 0 20px rgba(139, 92, 246, 0.3), 0 0 40px rgba(139, 92, 246, 0.1)",
          },
          "50%": {
            boxShadow: "0 0 30px rgba(139, 92, 246, 0.5), 0 0 60px rgba(139, 92, 246, 0.2)",
          },
        },
        gradientShift: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;