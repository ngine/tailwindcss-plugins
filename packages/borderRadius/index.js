const _ = require('lodash')

module.exports = function ({ addUtilities, e, theme, variants }) {
  const utilities = _.fromPairs(
    _.map(theme('borderRadius'), (value, modifier) => {
      return [
        `.${e(`br--${modifier}`)}`,
        {
          'border-radius': value
        }
      ]
    })
  )

  addUtilities(utilities, variants('borderRadius'))
}