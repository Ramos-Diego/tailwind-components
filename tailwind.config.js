const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        ...colors,
        gray: colors.trueGray,
      },
    },
  },
  variants: {},
  plugins: [],
}
