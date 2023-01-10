/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./source/**/*.{html,erb}"
  ],
  theme: {
    extend: {
      colors: {
        'extraorange': '#ff9900',
        'extrablue': '#1C4BE6',
      },
    },
  },
  plugins: [],
}
