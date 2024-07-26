/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        describeFont :["Quicksand", "sans-serif"],
        nameFont :["Outfit", "sans-serif"],
        portfolioFont :["Playwrite BE VLG", "cursive"],
        
      }
    },
  },
  plugins: [],
}