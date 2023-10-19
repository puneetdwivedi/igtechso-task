/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'phone1': "400px",
      'phone': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
    },
    extend: {
      colors: {
        'color1': '#000',
        'color2': '#02073E',
        'color4':"#EF9E48",
        'color5': "#fff",
      },
    },
  },
  plugins: [],
}