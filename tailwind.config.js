/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jpg,png}',
    './src/img/**/*.{html,js,jpg,png,svg}',
  ],
  theme: {

    extend: {

      colors: {
        'main': '#121111',
        'prova': '#1E1D1D',
      },

      fontFamily: {
        'lato-regular': ['Lato, sans-serif'],
        
      },

      fontSize: {
        'base-lg': '1.030rem',
      },

      height: {
        '22': '5.5rem',
      },

    },
  },
  plugins: [

  ],
}

