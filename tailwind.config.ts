import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        vintageGold: "#b8860b",
        offWhite: "#faf8f5"
      },
      fontFamily: {
        display: ['"Playfair Display"', "serif"],
        body: ["Montserrat", "sans-serif"]
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        fadeIn: "fadeIn 0.8s ease-out forwards"
      }
    }
  },
  plugins: []
};

export default config;
