/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      "9xl": "12rem",
      "8xl": "10rem",
      "2xl": "1rem",
      "3xl": "2rem",
      "4xl": "3rem",
    },
    extend: {
      keyframes: {
        imgFadeIn: {
          "0%": {
            opacity: 0,
          },
          "50%": {
            opacity: 0.5,
          },
          "100%": {
            opacity: 1,
          },
        },
      },
      animation: {
        fadeIn: "imgFadeIn 2s linear",
      },
    },
  },
  plugins: [],
};
