/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        amaranth: ["Amaranth", "sans-serif"],
        amita: ["Amita", "cursive"],
        akronim: ["Akronim", "cursive"],
      },
    },
  },
  plugins: [],
};
