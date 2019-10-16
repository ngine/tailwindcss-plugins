module.exports = function ({ addUtilities, variants }) {
  addUtilities(
    {
      '.flx-wrap--wrap': {
        'flex-wrap': 'wrap',
      },
      '.flx-wrap--wrap-reverse': {
        'flex-wrap': 'wrap-reverse',
      },
      '.flx-wrap--nowrap': {
        'flex-wrap': 'nowrap',
      },
    },
    variants('flexWrap')
  )
}