/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        background: "#202124",
        primary: "#FFFFFF",
        secondary: "#595656",
        tertiary:"#6830D1",
        box: "#D9D9D9",
      },
      fontFamily: {
        inter: ["Inter","sans-serid"]
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};