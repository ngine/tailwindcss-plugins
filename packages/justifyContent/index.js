module.exports = function ({ addUtilities, variants }) {
  addUtilities(
    {
      '.jus-con--flex-start': {
        'justify-content': 'flex-start',
      },
      '.jus-con--flex-end': {
        'justify-content': 'flex-end',
      },
      '.jus-con--center': {
        'justify-content': 'center',
      },
      '.jus-con--space-between': {
        'justify-content': 'space-between',
      },
      '.jus-con--space-around': {
        'justify-content': 'space-around',
      },
    },
    variants('justifyContent')
  )
}