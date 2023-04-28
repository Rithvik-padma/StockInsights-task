/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
    maxWidth:{
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      '4/5': '80%',
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

