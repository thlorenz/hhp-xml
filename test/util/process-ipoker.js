'use strict'

const fs = require('fs')
const path = require('path')
const fixtures = path.join(__dirname, '..', 'fixtures')
const ipoker = path.join(fixtures, 'ipoker')
const { parseHands } = require('../../')

function processFile(hand, single = false) {
  const handPath = path.join(ipoker, `${hand}.xml`)
  const handsXml = fs.readFileSync(handPath, 'utf8')
  const res = parseHands(handsXml)
  return single ? res.parsedHands[0] : res.parsedHands
}

module.exports = processFile
