'use strict'

function translateActionType(type) {
  type = parseInt(type)
  switch (type) {
      case 0: return 'fold'
      case 1: return 'sb'
      case 2: return 'bb'
      case 3: return 'call'
      case 4: return 'check'
      case 5: return 'bet'
      case 6: // both are all-ins but don't know the difference between them
      case 7: return 'allin'
      case 8: // player sits out at the beginning of a hand
      case 9: // blind isn't posted - can be treated as sitting out
        return 'sitout'
      case 15: return 'ante'
      case 23: return 'raise'
      default:
          throw new Error(`Unknown action type ${type}`)
  }
}

function getCurrency(s) {
  switch (s[0]) {
    case '$': return '$'
    case '€': return '€'
    case '£': return '£'
    default: return null
  }
}

function translateCard(c) {
  c = c.replace(10, 'T')
  return c[1] + c[0].toLowerCase()
}

function translateCards(s) {
  const cards = s.split(' ')
  return cards.map(translateCard).join(' ')
}

function disectDate(ds) {
  const d = new Date(ds)
  const dateStr = d.toLocaleDateString()
  const timeStr = d.toLocaleTimeString()
  const [ year, month, day ] = dateStr.split('-')
  const [ hour, min, sec ] = timeStr.split(':')
  return { year, month, day, hour, min, sec }
}
const cashGameBlindsWithCurrency =
  // $0.02/$0.05
  '([$€£])([^/]+)\\/[$€£]([^)]+)'

const cashGameBlindsWithoutCurrency =
  // 0.02/0.05
  '([^/]+)\\/([^)]+)'

const cashGameHeaderWithCurrency =
  `(Holdem) +(NL|PL|L) +${cashGameBlindsWithCurrency}`
const cashGameHeaderWithoutCurrency =
  `(Holdem) +(NL|PL|L) +${cashGameBlindsWithoutCurrency}`

const cashGameHeaderWithCurrencyRx = new RegExp(cashGameHeaderWithCurrency)
const cashGameHeaderWithoutCurrencyRx = new RegExp(cashGameHeaderWithoutCurrency)

function translateLimit(limit) {
  switch (limit) {
    case 'NL': return 'nolimit'
    case 'PL': return 'potlimit'
    case 'L': return 'limit'
    default: throw new Error(`Unknown limit '${limit}'`)
  }
}

function guessMaxSeats(seats) {
  const activeSeats = seats.length
  return seats.reduce((max, x) => Math.max(max, x.seatno), activeSeats)
}

/*
 * NLH: Holdem NL $2/$4
 * NLH: Holdem PL $2/$4
 * FL : Holdem L $2/$4
 * PLO: Omaha PL $0.50/$1 -- not supported
 */
// Ambia, 98575671
function parseTableName(s) {
  const [ name, number ] = s.split(',')
  return {
      tablename: name.trim()
    , tableno: parseInt(number.trim())
  }
}

// XXX: at this point we parse general for each hand, even if it is the same for each hand
// However due to using in hand info to fill in things missing from general, like max players
// it isn't trivial to separate this out and process general only once.
// If we run into speed issues due to this extra work we can improve on it though, i.e. by keeping
// state across multiple hands to fill in those values once and use for all hands.
class IPokerPostProcessor {
  constructor(general, hand) {
    this._general = general
    this._hand = hand
    this._currency = null
    this._ante = null
  }

  process() {
    const { board, playerCards } = this._processCards()
    const { seats, wins, button } = this._processPlayers()
    const info = this._processInfo()
    this._currency = info.currency

    const posts = this._processActions(this._hand.postActions)
    const preflop = this._processActions(this._hand.preflopActions)
    const flop = this._processActions(this._hand.flopActions)
    const turn = this._processActions(this._hand.turnActions)
    const river = this._processActions(this._hand.riverActions)
    const table = this._processTable(seats, button)

    if (info.currency == null) info.currency = this._currency
    return {
        board
      , playerCards
      , seats
      , posts
      , preflop
      , flop
      , turn
      , river
      , wins
      , info
      , table
    }
  }

  _parseAmount(s) {
    if (this._currency == null) {
      this._currency = getCurrency(s)
    }
    return (this._currency != null && s[0] === this._currency
      ? parseFloat(s.slice(1))
      : parseFloat(s)
    )
  }

  _tryParseGameHeader(s) {
    // TODO: tournament?
    let match = s.match(cashGameHeaderWithCurrencyRx)
    if (match != null) {
      const [ , type, limit, currency, sb, bb ] = match
      return { type, limit, currency, sb, bb }
    }
    match = s.match(cashGameHeaderWithoutCurrencyRx)
    if (match != null) {
      const [ , type, limit, sb, bb ] = match
      return { type, limit, currency: null, sb, bb }
    }
  }

  _parseGameHeader(s) {
    const headerInfo = this._tryParseGameHeader(s)
    if (headerInfo == null) {
      return {
          pokertype: 'n/a'
        , limit: 'n/a'
        , currency: null
        , sb: null
        , bb: null
        , gametype: 'n/a'
      }
    }

    const { type, limit, currency, sb, bb } = headerInfo
    return {
        pokertype: type.toLowerCase()
      , limit: translateLimit(limit)
      , currency
      , sb: this._parseAmount(sb)
      , bb: this._parseAmount(bb)
      , gametype: 'cash'
    }
  }

  _processInfo() {
    const { year, month, day, hour, min, sec } = disectDate(this._hand.startdate)
    const {
        pokertype
      , limit
      , currency
      , sb
      , bb
    } = this._parseGameHeader(this._general.get('gametype'))

    const hero = this._general.get('nickname') || null

    const gamecode = this._hand.game.gamecode
    return {
        pokertype
      , limit
      , currency
      , sb
      , bb
      , ante  : this._ante
      , year  : parseInt(year)
      , month : parseInt(month)
      , day   : parseInt(day)
      , hour  : parseInt(hour)
      , min   : parseInt(min)
      , sec   : parseInt(sec)
      , hero
      , handid : gamecode
      , gameno : gamecode
    }
  }

  _processTable(seats, button) {
    const { tablename, tableno } = parseTableName(this._general.get('tablename'))
    const maxseats = guessMaxSeats(seats)
    return { tablename, tableno, maxseats, button }
  }

  _processPlayers() {
    const seats = []
    const wins = new Map()
    let button = 0
    for (const p of this._hand.players) {
      const seatno = parseInt(p.seat)
      seats.push({
          seatno
        , player: p.name
        , chips: this._parseAmount(p.chips)
      })
      if (p.dealer === '1') button = seatno
      wins.set(p.name, this._parseAmount(p.win))
    }

    return { seats, wins, button }
  }

  _processActions(actions) {
    const unsorted = actions.map(x => {
      const type = translateActionType(x.type)
      const amount = this._parseAmount(x.sum)
      if (this._ante == null && type === 'ante') this._ante = amount
      return {
          no: parseInt(x.no)
        , player: x.player
        , type
        , amount
      }
    })

    const sorted = unsorted.sort((a, b) => a.no < b.no ? -1 : 1)

    return sorted.map(x => ({
        player: x.player
      , type: x.type
      , amount: x.amount
    }))
  }

  _processCards() {
    const board = {}
    const playerCards = new Map()

    for (const x of this._hand.cards) {
      const cards = translateCards(x.cards)
      const cardsArray = cards.split(' ')
      const type = x.type.toLowerCase()
      if (type === 'pocket') {
        playerCards.set(x.player, { card1: cardsArray[0], card2: cardsArray[1] })
      } else if (type === 'flop') {
        board.card1 = cardsArray[0]
        board.card2 = cardsArray[1]
        board.card3 = cardsArray[2]
      } else if (type === 'turn') {
        board.card4 = cardsArray[0]
      } else if (type === 'river') {
        board.card5 = cardsArray[0]
      } else {
        throw new Error(`Unknown cards type ${type}`)
      }
    }
    return { board, playerCards }
  }
}

module.exports = IPokerPostProcessor
