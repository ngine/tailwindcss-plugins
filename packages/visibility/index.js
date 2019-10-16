module.exports = function ({ addUtilities, variants }) {
  addUtilities(
    {
      '.vis--visible': { 'visability': 'visible' },
      '.vis--hidden': { 'visibility': 'hidden' }
    },
    variants('visibility')
  )
}