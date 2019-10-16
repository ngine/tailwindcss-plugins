module.exports = function ({ addUtilities, variants }) {
  addUtilities(
    {
      '.ta--center': { 'text-align': 'center' },
      '.ta--justify': { 'text-align': 'justify' },
      '.ta--left': { 'text-align': 'left' },
      '.ta--right': { 'text-align': 'right' },
    },
    variants('textAlign')
  )
}