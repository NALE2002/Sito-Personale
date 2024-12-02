/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jpg,png}',
    './src/img/**/*.{html,js,jpg,png,svg}',
    './src/scripts/**/*.js',
  ],
  theme: {

    extend: {

      colors: {
        'main': '#121111',
        'prova': '#1E1D1D',
        'rosso-500': '#EF4444',
      },

      fontFamily: {
        'lato-regular': ['Lato, sans-serif'],
        'montserrat-regular': ['Montserrat, sans-serif'],
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

