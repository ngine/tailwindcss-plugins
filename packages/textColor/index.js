const _ = require('lodash')
const flattenColorPalette = require('tailwindcss/lib/util/flattenColorPalette').default

module.exports = function ({ addUtilities, e, theme, variants }) {
  const utilities = _.fromPairs(
    _.map(flattenColorPalette(theme('textColor')), (value, modifier) => {
      return [
        `.${e(`c--${modifier}`)}`,
        {
          color: value
        }
      ]
    })
  )

  addUtilities(utilities, variants('textColor'))
}