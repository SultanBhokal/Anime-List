/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      screens: {
        'vsm': '200px',
      }
    },
  },
  plugins: [],
}
