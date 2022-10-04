/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {},
    colors: {
      'red1': '#300219',
      'red2': '#AF053F',
      'red3': '#BB2E57',
      'black1': '#0B0E16',
      'grey1': '#696C74',
      'grey2': '#91949D',
      'grey3': '#B1B4BD',
      'white1': '#F4F6FF'
    },
    fontFamily:{
      'cairo': 'Cairo'
    },
    fontSize: {
      sm: ['14px', '18px'],
      '3xl': ['32px', '40px'], 
      '4xl': ['32px', '40px'], 
      '5xl': ['48px', '56px'], 
      '6xl': ['58px', '66px'], 
    },
    leading:{
      11: '2.0rem'
    }
  },
  plugins: [],
}