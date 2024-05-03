/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        primary: "#00a30a",
        primaryDarker: "#0b6e11",
        primaryLighter: "#00d30a",
        "stone-750": "#3b3835",
      },
      backgroundImage: {
        "coin-front": "url('assets/coin-front.png')",
        "coin-back": "url('assets/coin-back.png')",
        "magic-ball": "url('assets/ball.png')",
      },
      screens: {
        xs: "475px",
      },
    },
  },
  plugins: [],
};

