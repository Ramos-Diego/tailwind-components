const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'media',
  theme: {
    extend: {
      boxShadow: {
        // prettier-ignore
        'md-invert':'0 4px 6px -1px rgba(255, 255, 255, 0.1), 0 2px 4px -1px rgba(255, 255, 255, 0.06)',
      },
      colors: {
        ...colors,
        gray: colors.trueGray,
        'light-blue': colors.lightBlue,
        cyan: colors.cyan,
      },
    },
  },
  variants: {
    // Control the shadows on dark mode to invert colors
    // prettier-ignore
    boxShadow: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus', 'dark'],
  },
  plugins: [],
}
