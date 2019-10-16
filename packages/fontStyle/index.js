module.exports = function ({ addUtilities, variants }) {
  addUtilities(
    {
      '.fs--italic': { 'font-style': 'italic' },
      '.fs--normal': { 'font-style': 'normal' },
    },
    variants('fontStyle')
  )
}