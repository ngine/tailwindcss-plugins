module.exports = function ({ addUtilities, variants }) {
  addUtilities(
    {
      '.ove--auto': { overflow: 'auto' },
      '.ove--hidden': { overflow: 'hidden' },
      '.ove--visible': { overflow: 'visible' },
      '.ove--scroll': { overflow: 'scroll' },
      '.ove-x--hidden': { 'overflow-x': 'hidden' },
      '.ove-x--auto': { 'overflow-x': 'auto' },
      '.ove-x--scroll': { 'overflow-x': 'scroll' },
      '.ove-y--hidden': { 'overflow-y': 'hidden' },
      '.ove-y--auto': { 'overflow-y': 'auto' },
      '.ove-y--scroll': { 'overflow-y': 'scroll' },
      '.ove-s--touch': { '-webkit-overflow-scrolling': 'touch' },
      '.ove-s--auto': { '-webkit-overflow-scrolling': 'auto' },
    },
    variants('overflow')
  )
}