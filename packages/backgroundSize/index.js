const _ = require('lodash')

module.exports = function ({ addUtilities, e, theme, variants }) {
  const utilities = _.fromPairs(
    _.map(theme('backgroundSize'), (value, modifier) => {
      return [
        `.${e(`bg--${modifier}`)}`,
        {
          'background-size': value,
        },
      ]
    })
  )

  addUtilities(utilities, variants('backgroundSize'))
}