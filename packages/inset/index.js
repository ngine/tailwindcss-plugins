const _ = require('lodash')

module.exports = function ({ addUtilities, e, theme, variants }) {
  const generators = [
    (size, modifier) => ({
      [`.${e(`top--${modifier}`)}`]: { top: `${size}` },
      [`.${e(`right--${modifier}`)}`]: { right: `${size}` },
      [`.${e(`bottom--${modifier}`)}`]: { bottom: `${size}` },
      [`.${e(`left--${modifier}`)}`]: { left: `${size}` },
    }),
  ]

  const utilities = _.flatMap(generators, generator => {
    return _.flatMap(theme('inset'), generator)
  })

  addUtilities(utilities, variants('inset'))
}