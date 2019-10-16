const _ = require('lodash')

module.exports = function ({ addUtilities, e, theme, variants }) {
  const generators = [
    (value, modifier) => ({
      [`.${e(`bor--${modifier}`)}`]: { borderWidth: `${value}` },
    }),
    (value, modifier) => ({
      [`.${e(`bor-t--${modifier}`)}`]: { borderTopWidth: `${value}` },
      [`.${e(`bor-r--${modifier}`)}`]: { borderRightWidth: `${value}` },
      [`.${e(`bor-b--${modifier}`)}`]: { borderBottomWidth: `${value}` },
      [`.${e(`bor-l--${modifier}`)}`]: { borderLeftWidth: `${value}` },
    }),
    (value, modifier) => ({
      [`.${e(`bor-h--${modifier}`)}`]: { borderTopWidth: `${value}`, borderBottomWidth: `${value}` },
      [`.${e(`bor-v--${modifier}`)}`]: { borderRightWidth: `${value}`, borderLeftWidth: `${value}` },
    }),
  ]

  const utilities = _.flatMap(generators, generator => {
    return _.flatMap(theme('borderWidth'), generator)
  })

  addUtilities(utilities, variants('borderWidth'))
}