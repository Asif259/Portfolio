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
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a",
          DEFAULT: "#14b8a6",
        },
        accent: {
          DEFAULT: "#14b8a6",
          glow: "rgba(20,184,166,0.35)",
          soft: "rgba(20,184,166,0.12)",
        },
        orange: {
          DEFAULT: "#FF6A00",
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#FF6A00",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
        },
        dark: {
          DEFAULT: "#121212",
          100: "#1E1E1E",
          200: "#252525",
          300: "#2D2D2D",
          400: "#333333",
          500: "#3A3A3A",
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
        "grid-shift": "gridShift 20s linear infinite",
        "scan-line": "scanLine 4s linear infinite",
      },
      backgroundImage: {
        "gradient-primary":
          "linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)",
        "gradient-hero":
          "linear-gradient(135deg, #0B0B0F 0%, #13131A 50%, #1A1A24 100%)",
        "gradient-card":
          "linear-gradient(135deg, rgba(20,184,166,0.06) 0%, rgba(20,184,166,0.02) 100%)",
        "grid-pattern":
          "linear-gradient(rgba(20,184,166,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(20,184,166,0.07) 1px, transparent 1px)",
        "emerald-glow":
          "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(20,184,166,0.18) 0%, transparent 70%)",
        "emerald-radial":
          "radial-gradient(circle at center, rgba(20,184,166,0.2) 0%, transparent 70%)",
      },
      backgroundSize: {
        "grid-sm": "30px 30px",
        "grid-md": "50px 50px",
        "grid-lg": "80px 80px",
      },
      boxShadow: {
        "neon-sm": "0 0 10px rgba(20,184,166,0.4)",
        "neon-md": "0 0 20px rgba(20,184,166,0.35), 0 0 40px rgba(20,184,166,0.15)",
        "neon-lg": "0 0 30px rgba(20,184,166,0.5), 0 0 60px rgba(20,184,166,0.25), 0 0 90px rgba(20,184,166,0.1)",
        "card-dark": "0 4px 24px rgba(0,0,0,0.4), 0 1px 4px rgba(0,0,0,0.3)",
        "card-hover": "0 8px 40px rgba(0,0,0,0.5), 0 0 20px rgba(20,184,166,0.15)",
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
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glowPulse: {
          "0%, 100%": {
            boxShadow: "0 0 15px rgba(20,184,166,0.3), 0 0 30px rgba(20,184,166,0.1)",
          },
          "50%": {
            boxShadow: "0 0 25px rgba(20,184,166,0.5), 0 0 50px rgba(20,184,166,0.2)",
          },
        },
        gridShift: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "50px 50px" },
        },
        scanLine: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
