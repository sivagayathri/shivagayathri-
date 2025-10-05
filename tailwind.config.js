/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
theme: {
  extend: {
    colors: {
      lavender: "#f8f4ff",
      pinkCustom: "#ff66a3",
      yellowCustom: "#ffdd57",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
  },
  },

  

  plugins: [],
}
