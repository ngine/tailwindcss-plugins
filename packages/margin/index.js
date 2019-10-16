const _ = require('lodash')

module.exports = function ({ addUtilities, e, theme, variants }) {
  const generators = [
    (size, modifier) => ({
      [`.${e(`m--${modifier}`)}`]: { margin: `${size}` },
    }),
    (size, modifier) => ({
      [`.${e(`m-v--${modifier}`)}`]: { 'margin-top': `${size}`, 'margin-bottom': `${size}` },
      [`.${e(`m-h--${modifier}`)}`]: { 'margin-left': `${size}`, 'margin-right': `${size}` },
    }),
    (size, modifier) => ({
      [`.${e(`m-t--${modifier}`)}`]: { 'margin-top': `${size}` },
      [`.${e(`m-r--${modifier}`)}`]: { 'margin-right': `${size}` },
      [`.${e(`m-b--${modifier}`)}`]: { 'margin-bottom': `${size}` },
      [`.${e(`m-l--${modifier}`)}`]: { 'margin-left': `${size}` },
    }),
  ]

  const utilities = _.flatMap(generators, generator => {
    return _.flatMap(theme('margin'), generator)
  })

  addUtilities(utilities, variants('margin'))
}