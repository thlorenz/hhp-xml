'use strict'

const xmljs = require('xml-js')
const IPokerElementsProcessor = require('./lib/ipoker-elements-processor')
const IPokerPostProcessor = require('./lib/ipoker-post-processor')
const ipokerAdapt = require('./lib/ipoker-adapt')

const {
    getChild
  , getChildren
  , extractTexts
} = require('./lib/utils')

// https://codereview.stackexchange.com/a/150461/10202
// https://stackoverflow.com/a/28001656/97443
// http://www.asciitable.com/
function removeControlChars(s) {
  // eslint-disable-next-line no-control-regex
  return s.replace(/[\x00-\x1F]|\?/g, '')
}

function remove(line) {
  const trimmed = line.trim()
  return trimmed.length === 0 || /<\?xml.+version.+\?>/.test(trimmed)
}

function removeXmlHeader(s) {
  const lines = s.split('\n')
  let idx = 0
  while (remove(lines[idx++]));
  return lines.slice(idx - 1).join('\n')
}

function getGeneralMap(general) {
  const generalMap = extractTexts(general)
  const validMap = new Map()
  for (const [ key, val ] of generalMap) {
    if (val === 'N/A' || val.length === 0) continue
    validMap.set(key, val)
  }
  return validMap
}

function extractSession(hands) {
  const session = getChild(hands, 'session')
  const general = getChild(session, 'general')
  const games = getChildren(session, 'game')
  const generalMap = getGeneralMap(general)
  return { general: generalMap, games }
}

// Treat all histories as multiple hands since each file only has one <general> section
function parseHands(xml) {
  const essentialXml = removeXmlHeader(xml)
  const fixedXml = removeControlChars(essentialXml)
  const hands = xmljs.xml2js(fixedXml, { trim: true })

  const { general, games } = extractSession(hands)
  const parsedHands = []
  for (const game of games) {
    const processedElements = new IPokerElementsProcessor(game).process()
    const postProcessed = new IPokerPostProcessor(general, processedElements).process()
    const adapted = ipokerAdapt(postProcessed)
    parsedHands.push(adapted)
  }
  return parsedHands
}

module.exports = { parseHands }

// Test
if (!module.parent && typeof window === 'undefined') {
  const fs = require('fs')
  const xml = fs.readFileSync(`${__dirname}/test/fixtures/iPoker/cash.multi-hands.xml`, 'utf8')
  const hands = parseHands(xml)

  console.log(JSON.stringify(hands, null, 2))
}
