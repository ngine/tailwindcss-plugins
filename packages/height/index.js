const _ = require('lodash')

module.exports = function ({ addUtilities, e, theme, variants }) {
  const utilities = _.fromPairs(
    _.map(theme('height'), (value, modifier) => {
      return [
        `.${e(`h--${modifier}`)}`,
        {
          height: value
        }
      ]
    })
  )

  addUtilities(utilities, variants('height'))
}