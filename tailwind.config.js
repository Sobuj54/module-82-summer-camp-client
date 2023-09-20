/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        amaranth: ["Amaranth", "sans-serif"],
        amita: ["Amita", "cursive"],
        akronim: ["Akronim", "cursive"],
        stencil: ["Allerta Stencil", "sans-serif"],
        bellefair: ["Bellefair", "serif"],
      },
    },
  },
  plugins: [],
};
