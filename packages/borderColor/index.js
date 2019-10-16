const _ = require('lodash')
const flattenColorPalette = require('tailwindcss/lib/util/flattenColorPalette').default

module.exports = function ({ addUtilities, e, theme, variants }) {
  const colors = flattenColorPalette(theme('borderColor'))

  const utilities = _.fromPairs(
    _.map(_.omit(colors, 'default'), (value, modifier) => {
      return [
        `.${e(`bor--${modifier}`)}`,
        {
          'border-color': value,
        },
      ]
    })
  )

  addUtilities(utilities, variants('borderColor'))
}