/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        backgroundMain: "#111826",
        section1Btn: " #1FC77E",
        headingAlt: "#1FC77E",
        trialGreen: " #05E283",
      },
      height: {
        110: "500px",
        device: "90vh",
      },
      fontSize: {
        "7xl": "5rem",
      },
      width: {
        "4/10": "40%",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
