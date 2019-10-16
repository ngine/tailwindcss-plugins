const _ = require('lodash')

module.exports = function ({ addUtilities, e, theme, variants }) {
  const utilities = _.fromPairs(
    _.map(theme('letterSpacing'), (value, modifier) => {
      return [
        `.${e(`ls--${modifier}`)}`,
        {
          'letter-spacing': value,
        },
      ]
    })
  )

  addUtilities(utilities, variants('letterSpacing'))
}