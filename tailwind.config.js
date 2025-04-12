/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js,css}", "./index.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        blue: "#059669",
        drak: "#0f172a",
      },
    },
  },
  plugins: [],
};
