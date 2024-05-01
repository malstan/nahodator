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
      },
    },
  },
  plugins: [],
};

