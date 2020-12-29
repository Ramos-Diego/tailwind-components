const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'media',
  theme: {
    // https://tailwindcss.com/docs/customizing-colors
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.warmGray, // Change grays
      red: colors.red,
      yellow: colors.amber,
      green: colors.emerald,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.violet,
      pink: colors.pink,
    },
  },
  variants: {},
  plugins: [],
}
