const _ = require('lodash')
const flattenColorPalette = require('tailwindcss/lib/util/flattenColorPalette').default

module.exports = function ({ addUtilities, e, theme, variants }) {
  const utilities = _.fromPairs(
    _.map(flattenColorPalette(theme('backgroundColor')), (value, modifier) => {
      return [
        `.${e(`bg--${modifier}`)}`,
        {
          'background-color': value,
        },
      ]
    })
  )

  addUtilities(utilities, variants('backgroundColor'))
}