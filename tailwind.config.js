/** @type {import('tailwindcss').Config} */
// tailwind.config.js
export default {
  content: ["index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neonPink: "#FF3FA4",
        neonGreen: "#39FF14",
        prideRed: "#E40303",
        prideOrange: "#FF8C00",
        prideYellow: "#FFED00",
        prideBlue: "#004DFF",
        prideIndigo: "#750787",
        prideViolet: "#8B00FF",
      },
    },
  },
  plugins: [],
}