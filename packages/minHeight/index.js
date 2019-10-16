const _ = require('lodash')

module.exports = function ({ addUtilities, e, theme, variants }) {
  const utilities = _.fromPairs(
    _.map(theme('minHeight'), (value, modifier) => {
      return [
        `.${e(`min-h--${modifier}`)}`,
        {
          'min-height': value
        }
      ]
    })
  )

  addUtilities(utilities, variants('minHeight'))
}