/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        first: "#0A142F",
        second: "#353F5B",
        third: "#FFC93E",
        fourth: "#FFFFFF",
      },
    },    
  },
  plugins: [],
}