/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // primary: '#FDB913', // Yellow 
        primary: '#3b536f', // dark desaturated blue 
        secondary: '#333333', // Dark text
        red: '#E34234', // Dark text
        background: '#f5f5f5', // Light background
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'], // Replace with the font family if different
      },
    },
  },
  plugins: [],
};
