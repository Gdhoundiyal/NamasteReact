/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontSize: {
      sm: ["14px", "20px"],
      base: ["16px", "24px"],
      lg: ["20px", "28px"],
      xl: ["24px", "32px"],
    },
    fontWeight: {
      thin: "100",
      hairline: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      "extra-bold": "800",
      black: "900",
    },
    colors: {
      Primary: "#FC8018",
      Secondary: "#FFEDEA",
      Green: "#008000",
      Borders: "#878585",
      white: "#ffffff",
      Background1: "#fafafa",
      Background2: "#e6e6e6",
      Heading: "#535665",
      catogary: "#42444A",
      formbackground: "#37718E",
      black: "#000",
    },
    placeholderColor: {
      primary: "#6C6F72",
    },
  },
  plugins: [],
};
