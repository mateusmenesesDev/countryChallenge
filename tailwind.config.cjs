/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': 'hsl(207, 26%, 17%)',
        'dark-elements': 'hsl(209, 23%, 22%)',
        'dark-text': 'hsl(0, 0%, 100%)',
        'light': 'hsl(0, 0%, 98%)',
        'light-elements': 'hsl(0, 0%, 100%)',
        'light-text': 'hsl(200, 15%, 8%)',
      }
    },
  },
  plugins: [],
}