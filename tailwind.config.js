module.exports = {
  content: ["./src/**/*.tsx", "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "60px",
        sm: "1rem",
        lg: "2rem",
        xl: "3rem",
        "2xl": "4rem",
      },
    },
    extend: {
      colors: {
        beige1: "#CF9783",
        blue1: "#1F3D9F",
        gray1: "#666666",
        purple1: "#5552E9",
        marron: "#730A00",
      },
    },
  },
  plugins: [
    require("tw-elements/dist/plugin"),
    function ({ addVariant }) {
      addVariant("child-style", "& > *")
    },
  ],
}
