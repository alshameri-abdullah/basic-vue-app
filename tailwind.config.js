/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/components/**/*.{vue,js}',
    './src/views/**/*.{vue,js}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp'), require('tailwindcss-rtl')],
}
