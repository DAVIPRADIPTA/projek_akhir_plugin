/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        'tipis': '2px',
      },
      borderRadius: {
        '4xl': '2rem'
      }
    },
  },
  plugins: [],
}

