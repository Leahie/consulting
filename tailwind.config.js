/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['var(--font-barlow)'],
        ysabeau: ['var(--font-ysabeau)'],
        roboto: ['var(--font-roboto)'],
      },
      colors: {
        "dark-color": "var(--dark)",
        "white-color": "var(--white)",
        "pale-color": "var(--pale)",
        "light-color": "var(--light)",
        "med-color": "var(--med)",
        "black-color": "var(--black)",
        // if text-size is a color:
        "normal-text": "var(--text-size)"
      },
    },
  },
  plugins: [],
})