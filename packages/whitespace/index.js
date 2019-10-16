module.exports = function ({ addUtilities, variants }) {
  addUtilities(
    {
      '.ws--normal': { 'white-space': 'normal' },
      '.ws--nowrap': { 'white-space': 'nowrap' },
      '.ws--pre': { 'white-space': 'pre' },
    },
    variants('whitespace')
  )
}