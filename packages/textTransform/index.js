module.exports = function ({ addUtilities, variants }) {
  addUtilities(
    {
      '.tt--u': { 'text-transform': 'uppercase' },
      '.tt--l': { 'text-transform': 'lowercase' },
      '.tt--c': { 'text-transform': 'capitalize' },
      '.tt--n': { 'text-transform': 'none' },
    },
    variants('textTransform')
  )
}