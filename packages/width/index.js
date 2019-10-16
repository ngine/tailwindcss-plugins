const _ = require('lodash')

module.exports = function ({ addUtilities, e, theme, variants }) {
  const utilities = _.fromPairs(
    _.map(theme('width'), (value, modifier) => {
      return [
        `.${e(`w--${modifier}`)}`,
        {
          width: value
        }
      ]
    })
  )

  addUtilities(utilities, variants('width'))
}