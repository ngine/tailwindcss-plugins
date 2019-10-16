module.exports = function ({ addUtilities, variants }) {
  addUtilities(
    {
      '.pos--static': { position: 'static' },
      '.pos--fix': { position: 'fixed' },
      '.pos--abs': { position: 'absolute' },
      '.pos--rel': { position: 'relative' },
      '.pos--sticky': { position: 'sticky' },
    },
    variants('position')
  )
}