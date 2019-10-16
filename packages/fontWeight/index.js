const _ = require('lodash')

module.exports = function ({ addUtilities, e, theme, variants }) {
  const utilities = _.fromPairs(
    _.map(theme('fontWeight'), (value, modifier) => {
      return [
        `.${e(`fw--${modifier}`)}`,
        {
          'font-weight': value,
        },
      ]
    })
  )

  addUtilities(utilities, variants('fontWeight'))
}