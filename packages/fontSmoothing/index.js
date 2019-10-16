module.exports = function ({ addUtilities, variants }) {
  addUtilities(
    {
      '.antialiased': {
        '-webkit-font-smoothing': 'antialiased',
        '-moz-osx-font-smoothing': 'grayscale',
      }
    },
    variants('fontSmoothing')
  )
}