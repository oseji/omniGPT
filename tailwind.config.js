/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        backgroundMain: "#111826",
        section1Btn: " #1FC77E",
      },
      height: {
        110: "500px",
      },
      fontSize: {
        "7xl": "5rem",
      },
    },
  },
  plugins: [],
};
