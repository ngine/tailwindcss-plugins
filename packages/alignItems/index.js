module.exports = function ({ addUtilities, variants }) {
  addUtilities(
    {
      '.ali-ite--flex-start': {
        'align-items': 'flex-start',
      },
      '.ali-ite--flex-end': {
        'align-items': 'flex-end',
      },
      '.ali-ite--center': {
        'align-items': 'center',
      },
      '.ali-ite--baseline': {
        'align-items': 'baseline',
      },
      '.ali-ite--stretch': {
        'align-items': 'stretch',
      },
    },
    variants('alignItems')
  )
}