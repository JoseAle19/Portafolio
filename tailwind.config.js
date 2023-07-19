/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize:{
      '9xl':'12rem',
      '8xl':'10rem',
      '2xl':'1rem',
      '3xl':'2rem',
      '4xl':'3rem',
    },
    extend: {
    },
  },
  plugins: [],
}