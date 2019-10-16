module.exports = function ({ addUtilities, variants }) {
  addUtilities(
    {
      '.bor--solid': {
        'border-style': 'solid',
      },
      '.bor--dashed': {
        'border-style': 'dashed',
      },
      '.bor--dotted': {
        'border-style': 'dotted',
      },
    },
    variants('display')
  )
}