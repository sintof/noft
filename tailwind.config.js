/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#144FA4',
        'secondary': '#F2F8FD',
        'noft': '#052E95',
        'active': '#144FA4',
        'input-stroke': '#E7F4FF',
      },
      fontFamily: {
        'krona': ['Krona One', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

