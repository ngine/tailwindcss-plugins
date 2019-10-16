const _ = require('lodash')

module.exports = function ({ addUtilities, e, theme, variants }) {
  const utilities = _.fromPairs(
    _.map(theme('backgroundPosition'), (value, modifier) => {
      return [
        `.${e(`bg--${modifier}`)}`,
        {
          'background-position': value,
        },
      ]
    })
  )

  addUtilities(utilities, variants('backgroundPosition'))
}