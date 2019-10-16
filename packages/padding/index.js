const _ = require('lodash')

module.exports = function ({ addUtilities, e, theme, variants }) {
  const generators = [
    (size, modifier) => ({
      [`.${e(`p--${modifier}`)}`]: { padding: `${size}` },
    }),
    (size, modifier) => ({
      [`.${e(`p-v--${modifier}`)}`]: { 'padding-top': `${size}`, 'padding-bottom': `${size}` },
      [`.${e(`p-h--${modifier}`)}`]: { 'padding-left': `${size}`, 'padding-right': `${size}` },
    }),
    (size, modifier) => ({
      [`.${e(`p-t--${modifier}`)}`]: { 'padding-top': `${size}` },
      [`.${e(`p-r--${modifier}`)}`]: { 'padding-right': `${size}` },
      [`.${e(`p-b--${modifier}`)}`]: { 'padding-bottom': `${size}` },
      [`.${e(`p-l--${modifier}`)}`]: { 'padding-left': `${size}` },
    }),
  ]

  const utilities = _.flatMap(generators, generator => {
    return _.flatMap(theme('padding'), generator)
  })

  addUtilities(utilities, variants('padding'))
}