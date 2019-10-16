const _ = require('lodash')

module.exports = function ({ addUtilities, e, theme, variants }) {
  const utilities = _.fromPairs(
    _.map(theme('zIndex'), (value, modifier) => {
      return [
        `.${e(`z--${modifier}`)}`,
        {
          'z-index': value,
        },
      ]
    })
  )

  addUtilities(utilities, variants('zIndex'))
}