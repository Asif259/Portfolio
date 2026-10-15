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
        background: "#0B0C0F",
        surface: {
          DEFAULT: "#14161D",
          hover: "#1A1D26",
          elevated: "#1E222D",
        },
        border: {
          DEFAULT: "#1E2028",
          highlight: "#2E3342",
        },
        primary: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#FF630F",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
          DEFAULT: "#FF630F",
        },
        accent: {
          DEFAULT: "#FF630F",
          hover: "#FF7728",
          glow: "rgba(255, 99, 15, 0.25)",
          soft: "rgba(255, 99, 15, 0.12)",
        },
        orange: {
          DEFAULT: "#FF630F",
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#FF630F",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
        },
        dark: {
          DEFAULT: "#0B0C0F",
          100: "#14161D",
          200: "#1A1D26",
          300: "#1E2028",
          400: "#252834",
          500: "#2E3342",
        },
        secondary: "#A0A1A6",
        divider: {
          22: "#222222",
          33: "#333333",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        body: ["var(--font-body)", "Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        utility: ["var(--font-utility)", "Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        sans: ["var(--font-utility)", "Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "Fira Code", "monospace"],
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
          "linear-gradient(135deg, #FF630F 0%, #EA580C 100%)",
        "gradient-hero":
          "linear-gradient(135deg, #0B0C0F 0%, #14161D 50%, #1A1D26 100%)",
        "gradient-card":
          "linear-gradient(135deg, rgba(255, 99, 15, 0.05) 0%, rgba(20, 22, 29, 0.8) 100%)",
        "grid-pattern":
          "linear-gradient(rgba(255, 99, 15, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 99, 15, 0.04) 1px, transparent 1px)",
        "accent-glow":
          "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(255, 99, 15, 0.15) 0%, transparent 70%)",
        "accent-radial":
          "radial-gradient(circle at center, rgba(255, 99, 15, 0.15) 0%, transparent 70%)",
      },
      backgroundSize: {
        "grid-sm": "30px 30px",
        "grid-md": "50px 50px",
        "grid-lg": "80px 80px",
      },
      boxShadow: {
        "accent-sm": "0 0 10px rgba(255, 99, 15, 0.3)",
        "accent-md": "0 0 20px rgba(255, 99, 15, 0.25), 0 0 40px rgba(255, 99, 15, 0.1)",
        "accent-lg": "0 0 30px rgba(255, 99, 15, 0.35), 0 0 60px rgba(255, 99, 15, 0.15)",
        "card-dark": "0 4px 24px rgba(0,0,0,0.5), 0 1px 4px rgba(0,0,0,0.3)",
        "card-hover": "0 8px 40px rgba(0,0,0,0.6), 0 0 20px rgba(255, 99, 15, 0.12)",
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
