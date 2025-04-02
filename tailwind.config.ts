import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#121212", // dark background
        // Metallic gradient for headers (used in the shiny effect)
        metallicStart: "#C0C0C0",
        metallicEnd: "#E0E0E0",
        // Gradient for CTA buttons (muted pastel)
        ctaGradientFrom: "#a8dadc",
        ctaGradientTo: "#457b9d",
      },
      fontFamily: {
        heading: ['"Nunito Sans"', 'sans-serif'],
        body: ['"Open Sans"', 'sans-serif'],
      },
      keyframes: {
        metallicShine: {
          '0%, 100%': { textShadow: '0 0 5px #C0C0C0, 0 0 10px #C0C0C0' },
          '50%': { textShadow: '0 0 15px #E0E0E0, 0 0 20px #E0E0E0' },
        },
      },
      animation: {
        shine: 'metallicShine 2s infinite alternate',
      },
    },
  },
  plugins: [],
};

export default config;
