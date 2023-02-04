/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'Montserrat':['Montserrat'],
      },
      fontSize:{
        10:'10px',
        14:'14px',
        18:'18px',
        22:'22px',
      },
      width:{
        120 :'120%',
      }
      
    },
  },
  plugins: [],
}