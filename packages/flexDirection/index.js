module.exports = function ({ addUtilities, variants }) {
  addUtilities(
    {
      '.flx-dir--row': {
        'flex-direction': 'row',
      },
      '.flx-dir--row-reverse': {
        'flex-direction': 'row-reverse',
      },
      '.flx-dir--col': {
        'flex-direction': 'column',
      },
      '.flx-dir--col-reverse': {
        'flex-direction': 'column-reverse',
      },
    },
    variants('flexDirection')
  )
}