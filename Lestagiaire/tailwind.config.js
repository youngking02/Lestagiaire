/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "Grisnu": "#F7F8FC",
        "Emma": "#E2E3FF",
        "Mathias":"#6167F5",
        "Cedrick":"#EDEDFF",
        "Bluefonce":"#3B3D95",
        "Jaune":"#F4D42D",
        "Jaunefonce":"#FFE040",
        "Blueciel":"#3B80E8",
        "gris":"#C5C5C5",
        "griis":"#7C7C7C",
        "blanc":"#FFFFFF"
      },
      fontFamily:{
        Lexe: ['Didact Gothic','sans-serif'],
        Lexen:['Dongle',' sans-serif'],
        Lexend:['Lexend', 'sans-serif']
      },
    },
  },
  plugins: []
}
