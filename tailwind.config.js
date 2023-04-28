/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    screens: {
      'md': {'max': '600px'},
    },
    extend: {},
    maxWidth:{
      '8/100': '8%',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      '4/5': '80%',
      '9/10': '90%',
      '95/100': '95%',
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

