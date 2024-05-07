/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        MyGreen: {
          50: "#aaeca2",
          100: "#5bb450",
          200: "#3b8132",
        },
      },
      fontFamily:{
        'primary': ['Montserrat']
      }
    },
  },
  plugins: [],
}

