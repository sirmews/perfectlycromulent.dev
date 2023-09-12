/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        simpsons: {
          yellow: '#F7D629',
          red: '#EF5A52',
          blue: '#4273DE',
        },
      },
    },
  },
  plugins: [],
}
