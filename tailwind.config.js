module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: 'hsl(0, 0%, 100%)',
        darkRed: 'hsl(235, 16%, 14%)',
        darbBlue: 'hsl(234, 17%, 12%)',
        liteBlue: 'hsl(236, 21%, 26%)',
        softBlue: 'hsl(237, 18%, 59%)',
        softRed: 'hsl(345, 95%, 68%)',
    }
    },
  },
  variants: {
    fill: ['hover', 'focus'], // this line does the trick
  },
  plugins: [],
}
