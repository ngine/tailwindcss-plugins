const _ = require('lodash')

module.exports = function ({ addUtilities, e, theme, variants }) {
  const utilities = _.fromPairs(
    _.map(theme('fontFamily'), (value, modifier) => {
      return [
        `.${e(`ff--${modifier}`)}`,
        {
          'font-family': Array.isArray(value) ? value.join(', ') : value,
        },
      ]
    })
  )

  addUtilities(utilities, variants('fontFamily'))
}