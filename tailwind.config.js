/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "14px",
    },
    extend: {
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
