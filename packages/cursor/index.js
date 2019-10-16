const _ = require('lodash')

module.exports = function ({ addUtilities, e, theme, variants }) {
  const utilities = _.fromPairs(
    _.map(theme('cursor'), (value, modifier) => {
      return [
        `.${e(`cur--${modifier}`)}`,
        {
          cursor: value
        }
      ]
    })
  )

  addUtilities(utilities, variants('cursor'))
}