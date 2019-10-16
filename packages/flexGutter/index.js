const _ = require('lodash')

module.exports = function ({ addUtilities, e, theme, variants }) {
  const generators = [
    (value, modifier) => ({
      [`.${e(`flx-gutter--${modifier}`)}>[class*=flx--]`]: { 'margin-left': `${value}`, 'margin-right': `${value}` },
      [`.${e(`flx-gutter--${modifier}`)}>[class*=flx--]:first-child`]: { 'margin-left': '0px' },
      [`.${e(`flx-gutter--${modifier}`)}>[class*=flx--]:last-child`]: { 'margin-right': '0px' },
    }),
  ]

  const utilities = _.flatMap(generators, generator => {
    return _.flatMap(theme('flexGutter'), generator)
  })

  addUtilities(utilities, variants('flexGutter'))
}