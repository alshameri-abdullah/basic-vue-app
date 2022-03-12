const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/**/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.Slate,
      blue: {
        light: "#4760b2",
        DEFAULT: "#26419a",
        dark: "#0c1124",
      },
      red: {
        light: "#ff454e",
        DEFAULT: "#ef2339",
        dark: "#d6000c",
      },
    },
    extend: {},
  },
  plugins: [],
};
