/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "poppins": 'Poppins',

      },
      colors:{
        "cover": "#FFC3A1",
        "headline" : "#A75D5D",
        "paragraph" : "#2a2a2a",
        "button" : "#F0997D",
        "card" : "#fffffe",
        "logo" : "#A75D5D",
        "pale" : "#FFC3A1"
      }
    },
  },
  plugins: [],
}
