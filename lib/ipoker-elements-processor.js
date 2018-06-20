'use strict'
const {
    getChild
  , getChildWithAttribute
  , extractText
  , extractTexts
  , extractAllAttributes
  , extractMatchingAttributes
} = require('./utils')

class IPokerElementsProcessor {
  constructor(game) {
    this._game = game
  }

  process() {
    this._gameGeneral = getChild(this._game, 'general')
    const posts = getChildWithAttribute(this._game, 'round', 'no', '0')
    const preflop = getChildWithAttribute(this._game, 'round', 'no', '1')
    const flop = getChildWithAttribute(this._game, 'round', 'no', '2', false)
    const turn = getChildWithAttribute(this._game, 'round', 'no', '3', false)
    const river = getChildWithAttribute(this._game, 'round', 'no', '4', false)

    const startdate = extractTexts(this._gameGeneral).get('startdate')
    const players = this._getPlayers()
    const postActions = this._getActions(posts)
    const preflopActions = this._getActions(preflop)
    const flopActions = this._getActions(flop)
    const turnActions = this._getActions(turn)
    const riverActions = this._getActions(river)

    const cards = this._getCards(posts)
      .concat(this._getCards(preflop))
      .concat(this._getCards(flop))
      .concat(this._getCards(turn))
      .concat(this._getCards(river))

    const game = this._game.attributes
    return {
        game
      , startdate
      , players
      , postActions
      , preflopActions
      , flopActions
      , turnActions
      , riverActions
      , cards
    }
  }

  _getPlayers() {
    const players = getChild(this._gameGeneral, 'players')
    return extractAllAttributes(players)
  }

  _getActions(round) {
    if (round == null) return []
    return extractMatchingAttributes(round, 'action')
  }

  _getCards(round) {
    if (round == null) return []
    return round.elements
      .filter(x => x.name === 'cards')
      .map(x => Object.assign({}, x.attributes, { cards: extractText(x) }))
      .filter(x => x.cards != null && x.cards !== 'X X')
  }
}

module.exports = IPokerElementsProcessor
