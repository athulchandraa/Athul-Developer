/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Arial", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      colors: {
        ink: "#080a12",
        panel: "#10131e",
        accent: "#8b7bff",
        cyan: "#67e8f9",
      },
      boxShadow: {
        glow: "0 0 70px rgba(139, 123, 255, 0.18)",
      },
    },
  },
  plugins: [],
};
