'use strict'

const path = require('path')

function guessFixtureName(filename) {
  return path.basename(filename).slice(0, -3).replace(/^ipoker\./, '')
}

module.exports = guessFixtureName
