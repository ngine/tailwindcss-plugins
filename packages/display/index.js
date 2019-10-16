module.exports = function ({ addUtilities, variants }) {
  addUtilities(
    {
      '.dis--blk': {
        display: 'block',
      },
      '.dis--inl-blk': {
        display: 'inline-block',
      },
      '.dis--inl': {
        display: 'inline',
      },
      '.dis--flx': {
        display: 'flex',
      },
      '.dis--inl-flx': {
        display: 'inline-flex',
      },
      '.dis--none': {
        display: 'none',
      },
    },
    variants('display')
  )
}