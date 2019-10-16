const _ = require('lodash')

module.exports = function ({ addUtilities, e, theme, variants }) {
  const utilities = _.fromPairs(
    _.map(theme('lineHeight'), (value, modifier) => {
      return [
        `.${e(`lh--${modifier}`)}`,
        {
          'line-height': value,
        },
      ]
    })
  )

  addUtilities(utilities, variants('lineHeight'))
}