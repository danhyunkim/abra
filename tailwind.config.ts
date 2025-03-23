import { defineConfig } from 'tailwindcss/helpers';

export default defineConfig({
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Example vintage palette:
        vintageGold: "#b8860b",
        offWhite: "#faf8f5",
        // You can add more custom colors for your vintage feel
      },
      fontFamily: {
        // Example: use a serif font for a vintage touch.
        display: ['"Playfair Display"', 'serif'],
        body: ['Montserrat', 'sans-serif']
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.8s ease-out forwards'
      }
    }
  },
  plugins: []
});
