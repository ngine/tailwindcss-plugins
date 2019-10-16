module.exports = function ({ addUtilities, variants }) {
  addUtilities(
    {
      '.ellipsis': {
        'overflow': 'hidden',
        'text-overflow': 'ellipsis',
        'white-space': 'nowrap',
      },
    },
    variants('wordBreak')
  )
}