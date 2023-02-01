/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Quicksand: ["Quicksand", "sans-serif"],
        Arvo: ["Arvo", "serif"],
      },
    },
  },
  plugins: [],
};
