/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      // fontSize: {
      //   'base': ['30px', '2rem']
      // }
    },
    screens: {
      md: '300px'
    }
  },
  plugins: [],
}

