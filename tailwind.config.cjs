/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      red:{
        100:'#300219',
        200:'#AF053F',
        300:'#BB2E57'
      },
      black : '#0B0E16',
      gray: {
        100:'#696C74',
        200: '#91949D',
        300: '#B1B4BD',
      },
      white:'#F4F6FF',
    },
    fontFamily:{
      'cairo': 'Cairo'
    },
    fontSize: {
      'xs': ['12px', '16px'],
      'sm': ['14px', '18px'],
      'base': ['16px', '24px'],
      'xl': ['20px', '28px'],
      '2xl': ['24px', '32px'],
      '3xl': ['32px', '40px'], 
      '4xl': ['32px', '40px'], 
      '5xl': ['48px', '56px'], 
      '6xl': ['58px', '66px'], 
    },
    backgroundImage: {
      'csBlur': "url('/public/img/blur-fsc02.png')"
    }
  },
  plugins: [],
}