/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./Portfolio/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: "burtons"
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}