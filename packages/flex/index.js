const _ = require('lodash')

module.exports = function ({ addUtilities, e, theme, variants }) {
  const utilities = _.fromPairs(
    _.map(theme('flex'), (value, modifier) => {
      return [
        `.${e(`flx--${modifier}`)}`,
        {
          flex: value
        }
      ]
    })
  )

  addUtilities(utilities, variants('flex'))
}