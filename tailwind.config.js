/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jpg,png}',
    './src/img/**/*.{html,js,jpg,png}',
  ],
  theme: {

    extend: {

      colors: {
        'main': '#121111',
      },

      fontFamily: {
        'lato-regular': ['Lato, sans-serif'],
        
      },

      fontSize: {
        'base-lg': '1.025rem',
      },
    },
  },
  plugins: [

  ],
}

