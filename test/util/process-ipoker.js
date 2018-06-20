'use strict'

const fs = require('fs')
const path = require('path')
const fixtures = path.join(__dirname, '..', 'fixtures')
const iPoker = path.join(fixtures, 'iPoker')
const { parseHands } = require('../../')

function processFile(hand, single = false) {
  const handPath = path.join(iPoker, `${hand}.xml`)
  const handsXml = fs.readFileSync(handPath, 'utf8')
  const res = parseHands(handsXml)
  return single ? res[0] : res
}

module.exports = processFile
