const _ = require('lodash')

module.exports = function ({ addUtilities, e, theme, variants }) {
  const utilities = _.fromPairs(
    _.map(theme('avatar'), (value, modifier) => {
      return [
        `.${e(`avatar--${modifier}`)}`,
        {
          height: value,
          width: value,
          borderRadius: '50%'
        }
      ]
    })
  )

  addUtilities(utilities, variants('avatar'))
}