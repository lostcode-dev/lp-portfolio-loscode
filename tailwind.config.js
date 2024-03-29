/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      colors: {
        primary: '#3aa163',
        secondary: '#b7117a',
        tertiary: '#43266c',
        fourth: '#ebc400',
      }
    },
  },
  plugins: [],
}