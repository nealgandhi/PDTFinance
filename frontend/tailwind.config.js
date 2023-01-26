/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      argent: "#7b7979",
      azure: "#0681c6",
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
