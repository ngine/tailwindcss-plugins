const _ = require('lodash')

module.exports = function ({ addUtilities, e, theme, variants }) {
  const utilities = _.fromPairs(
    _.map(theme('boxShadow'), (value, modifier) => {
      return [
        `.${e(`bs--${modifier}`)}`,
        {
          'box-shadow': value
        }
      ]
    })
  )

  addUtilities(utilities, variants('boxShadow'))
}