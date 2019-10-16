module.exports = function ({ addComponents }) {
  const links = {
    '.link--primary': {
      color: '#6C59FF',
      cursor: 'pointer',
      '&:active': { color: '#6352E8' },
      '&:hover': { color: '#7B6AFF' }
    },
    '.link--secondary': {
      color: '#ebeef2',
      cursor: 'pointer',
      '&:active': { color: '#959aa2' },
      '&:hover': { color: '#959aa2' }
    },
    '.link--pure-white': {
      color: '#ffffff',
      cursor: 'pointer',
      '&:active': { color: '#ffffff' },
      '&:hover': { color: '#959aa2' }
    },
    '.link--white-dark': {
      color: '#959aa2',
      cursor: 'pointer',
      '&:active': { color: '#ebeef2' },
      '&:hover': { color: '#ebeef2' }
    }
  }

  addComponents(links)
}