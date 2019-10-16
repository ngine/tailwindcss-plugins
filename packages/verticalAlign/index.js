module.exports = function ({ addUtilities, variants }) {
  addUtilities(
    {
      '.va--baseline': { 'vertical-align': 'baseline' },
      '.va--top': { 'vertical-align': 'top' },
      '.va--middle': { 'vertical-align': 'middle' },
      '.va--bottom': { 'vertical-align': 'bottom' },
      '.va--text-top': { 'vertical-align': 'text-top' },
      '.va--text-bottom': { 'vertical-align': 'text-bottom' },
    },
    variants('verticalAlign')
  )
}