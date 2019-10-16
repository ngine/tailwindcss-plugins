const _ = require('lodash')

module.exports = function ({ addUtilities, e, theme, variants }) {
  const utilities = _.fromPairs(
    _.map(theme('minWidth'), (value, modifier) => {
      return [
        `.${e(`min-w--${modifier}`)}`,
        {
          'min-width': value
        }
      ]
    })
  )

  addUtilities(utilities, variants('minWidth'))
}