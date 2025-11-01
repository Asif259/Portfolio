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
        // Brand palette
        primary: {
          50: "#F1FAEE", // light
          100: "#F1FAEE",
          200: "#A8DADC", // soft teal
          300: "#A8DADC",
          400: "#457B9D", // steel blue
          500: "#457B9D",
          600: "#1D3557", // deep navy
          700: "#1D3557",
          800: "#1D3557",
          900: "#1D3557",
          DEFAULT: "#457B9D",
        },
        accent: {
          50: "#F1FAEE",
          100: "#F1FAEE",
          200: "#E9F7F6",
          300: "#D3EFF0",
          400: "#BFE6E8",
          500: "#A8DADC", // light teal
          600: "#7FBCC1",
          DEFAULT: "#A8DADC",
        },
        pink: {
          500: "#E63946", // brand red accent
          600: "#C62E3A",
        },
        secondary: "#6b7280",
        dark: "#1D3557",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "Roboto", "sans-serif"],
      },
      animation: {
        "bounce-slow": "bounce 2s infinite",
        gradient: "gradient 8s linear infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      backgroundImage: {
        // Primary brand gradient (steel blue → red)
        "gradient-primary": "linear-gradient(135deg, #457B9D 0%, #E63946 100%)",
        // Hero gradient (navy → steel blue → light teal)
        "gradient-hero":
          "linear-gradient(135deg, #1D3557 0%, #457B9D 50%, #A8DADC 100%)",
        // Subtle card tint using brand colors
        "gradient-card":
          "linear-gradient(135deg, rgba(69, 123, 157, 0.10) 0%, rgba(230, 57, 70, 0.10) 100%)",
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
      },
    },
  },
  plugins: [],
};
export default config;
