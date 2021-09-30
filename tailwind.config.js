const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        accent: "#6df1bc",
        lime: colors.lime,
        amber: colors.amber,
        cyan: colors.cyan,
        teal: colors.teal,
        gray: colors.coolGray,
      },
      borderWidth: {
        12: "12px",
      },
      height: {
        header: "36rem",
      },
      fontFamily: {
        sans: ["Work Sans", ...defaultTheme.fontFamily.sans],
        serif: ["Piazzolla", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ["hover"],
      rotate: ["hover"],
    },
  },
  plugins: [],
};
