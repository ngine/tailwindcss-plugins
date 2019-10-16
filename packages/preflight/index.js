const fs = require('fs')
const postcss = require('postcss')

module.exports = function ({ addBase }) {
  const preflightStyles = postcss.parse(fs.readFileSync(`${__dirname}/preflight.css`, 'utf-8'))

  addBase(preflightStyles.nodes)
}