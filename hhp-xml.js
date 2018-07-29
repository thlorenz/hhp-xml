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
  return trimmed.length === 0
}

function removeXMLHeader(line) {
  return line.replace(/<\?xml.+version.+\?>/, '')
}

function removeXmlHeader(s) {
  const lines = s.split('\n')
  let idx = 0
  while (remove(lines[idx++]));

  const trimmedLines = lines.slice(idx - 1)
  trimmedLines[0] = removeXMLHeader(trimmedLines[0])
  return trimmedLines.join('\n')
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

/**
 * Determines if any of the parsers can parse the passed XML hand.
 *
 * @name canParse
 * @param {String} xml to parse
 * @returns {Boolean} `true` if it knows how to parse this xml
 */
function canParse(xml) {
  return (/<session sessioncode="/i).test(xml)
}

function processGames(general, games) {
  const parsedHands = []
  const errors = []
  for (const game of games) {
    try {
      const processedElements = new IPokerElementsProcessor(game).process()
      const postProcessed = new IPokerPostProcessor(general, processedElements).process()
      const adapted = ipokerAdapt(postProcessed)
      parsedHands.push(adapted)
    } catch (err) {
      errors.push(err)
    }
  }
  return { parsedHands, count: parsedHands.length, errors }
}

/**
 * Parses hands for Poker rooms that save them in xml format.
 * Currently only iPoker is supported.
 *
 * The structure of the returned hand objects is the same as for
 * [hhp](https://github.com/thlorenz/hhp).
 *
 * @name parseHands
 * @param {String} xml to parse
 * @return {object} parsed hands and errors encountered: `{ parsedHands: Array, errors: Array, count: Number }`
 */
function parseHands(xml) {
  if (!canParse(xml)) return { parsedHands: null, errors: null, count: 0 }

  // Treat all histories as multiple hands since each file only has one <general> section
  try {
    const essentialXml = removeXmlHeader(xml)
    const fixedXml = removeControlChars(essentialXml)
    const hands = xmljs.xml2js(fixedXml, { trim: true })

    const { general, games } = extractSession(hands)
    return processGames(general, games)
  } catch (err) {
    return { parsedHands: null, count: 0, errors: [ err ] }
  }
}

module.exports = { parseHands, canParse }
