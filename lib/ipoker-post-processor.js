'use strict'

function roundAmount(n) {
  return Math.round(n * 100) / 100
}

function fixAmountString(s) {
  if (s == null) return ''
  return s.replace(/,/g, '')
}

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
  const dateStr = d.toLocaleDateString('en-US')
  const timeStr = d.toLocaleTimeString('en-US', { hour12: false })
  const [ month, day, year ] = dateStr.split('/')
  const [ hour, min, sec ] = timeStr.split(':')
  return { year, month, day, hour, min, sec }
}
const cashGameBlindsWithCurrency =
  // $0.02/$0.05
  '([$€£])([^/]+)\\/[$€£]([^)]+)'

const cashGameBlindsWithoutCurrency =
  // 0.02/0.05
  '([^/]+)\\/([^)]+)'

const tourneyGameHeader = '(Holdem) +(NL|PL|L)'
const cashGameHeaderWithCurrency =
  `${tourneyGameHeader} +${cashGameBlindsWithCurrency}`
const cashGameHeaderWithoutCurrency =
  `${tourneyGameHeader} +${cashGameBlindsWithoutCurrency}`

const tourneyGameHeaderRx = new RegExp(tourneyGameHeader)
const cashGameHeaderWithCurrencyRx = new RegExp(cashGameHeaderWithCurrency)
const cashGameHeaderWithoutCurrencyRx = new RegExp(cashGameHeaderWithoutCurrency)

const paidDonationRakeRx =
  // $100+$5
  /([$€£])([^/]+)\+[$€£]([^)]+)/

function translateLimit(limit) {
  switch (limit) {
    case 'NL': return 'nolimit'
    case 'PL': return 'potlimit'
    case 'L': return 'limit'
    default: throw new Error(`Unknown limit '${limit}'`)
  }
}

function guessMaxSeats(seats, tablename) {
  if ((/heads *up/i).test(tablename)) return 2
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
// "TURBO" NLH Heads Up $2,000, 770109371
// Gary
function parseTableName(s) {
  const parts = s.split(',')
  if (parts.length === 1) {
    return {
        tablename: s.trim()
      , tableno: null
    }
  }
  const number = parts.pop() || ''
  const name = parts.join(',')
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
    this._sb = null
    this._bb = null
    this._istourney = this._general.has('tournamentname')
  }

  process() {
    const { board, playerCards } = this._processCards()
    const { seats, wins, button } = this._processPlayers()
    const info = this._processInfo()
    if (info.currency != null) this._currency = info.currency

    const posts = this._processActions(this._hand.postActions)
    const preflop = this._processActions(this._hand.preflopActions)
    const flop = this._processActions(this._hand.flopActions)
    const turn = this._processActions(this._hand.turnActions)
    const river = this._processActions(this._hand.riverActions)
    const table = this._processTable(seats, button)

    if (info.currency == null) info.currency = this._currency
    if (info.ante == null) info.ante = this._ante || 0
    if (info.sb == null) info.sb = this._sb
    if (info.bb == null) info.bb = this._bb
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
    const fixedAmountString =  (this._currency != null && s[0] === this._currency
      ? fixAmountString(s.slice(1))
      : fixAmountString(s)
    )
    const amount = roundAmount(parseFloat(fixedAmountString))
    return Number.isNaN(amount) ? 0 : amount
  }

  _tryParseGameHeader(s) {
    if (s == null) return null
    s = fixAmountString(s)

    let match
    if (this._istourney) {
      match = s.match(tourneyGameHeaderRx)
      if (match != null) {
        const [ , type, limit ] = match
        return { type, limit, currency: null, sb: null, bb: null, gametype: 'tournament' }
      }
    } else {
      match = s.match(cashGameHeaderWithCurrencyRx)
      if (match != null) {
        const [ , type, limit, currency, sb, bb ] = match
        return { type, limit, currency, sb, bb, gametype: 'cash' }
      }
      match = s.match(cashGameHeaderWithoutCurrencyRx)
      if (match != null) {
        const [ , type, limit, sb, bb ] = match
        return { type, limit, currency: null, sb, bb, gametype: 'cash' }
      }
    }

    return null
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
        , gametype: this._istourney ? 'tournament' : 'cash'
      }
    }

    const { type, limit, currency, sb, bb, gametype } = headerInfo
    return {
        pokertype: type.toLowerCase()
      , limit: translateLimit(limit)
      , currency
      , sb: sb == null ? null : this._parseAmount(sb)
      , bb: bb == null ? null : this._parseAmount(bb)
      , gametype
    }
  }

  /*
  * <buyin>$100+$5</buyin>
  * <totalbuyin>$105</totalbuyin>
  * OR
  * <buyin>Einladung</buyin>
  * <totalbuyin>$0</totalbuyin>
  * OR
  * <buyin>$2,000.00+$50.00</buyin>
  * <totalbuyin>$2,050.00</totalbuyin>
  */
  _parseBuyin() {
    const buyin = this._general.get('buyin')
    const totalbuyin = fixAmountString(this._general.get('totalbuyin') || '')

    let donation = 0
    let rake = 0
    if (buyin != null) {
      // Freerolls pracitally have donation + rake of 0
      const match = fixAmountString(buyin).match(paidDonationRakeRx)
      if (match != null) {
        donation = this._parseAmount(match[2])
        rake = this._parseAmount(match[3])
      }
    }
    return { donation, rake, buyin: this._parseAmount(totalbuyin) }
  }

  _processInfo() {
    const { year, month, day, hour, min, sec } = disectDate(this._hand.startdate)
    const {
        pokertype
      , limit
      , currency
      , sb
      , bb
      , gametype
    } = this._parseGameHeader(this._general.get('gametype'))

    const { donation, rake, buyin } = this._istourney
      ? this._parseBuyin()
      : { donation: null, rake: null, buyin: null }

    const hero = this._general.get('nickname') || null

    const gamecode = this._hand.game.gamecode
    return {
        pokertype
      , limit
      , currency
      , donation
      , rake
      , buyin
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
      , gametype
    }
  }

  _processTable(seats, button) {
    const { tablename, tableno } = parseTableName(this._general.get('tablename'))
    const maxseats = guessMaxSeats(seats, tablename)
    return { tablename, tableno, maxseats, button }
  }

  _processPlayers() {
    const seats = []
    const wins = new Map()
    let button = 0
    for (const p of this._hand.players) {
      const seatno = parseInt(p.seat)

      // fix players not in hand
      // we can't remove them since they might be the button
      if (p.name.length === 0) p.name = 'seat' + seatno

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
    const unsorted = actions
      .map(x => {
        const type = translateActionType(x.type)

        const amount = this._parseAmount(x.sum)
        if (this._ante == null && type === 'ante') this._ante = amount
        if (this._sb == null && type === 'sb') this._sb = amount
        if (this._bb == null && type === 'bb') this._bb = amount

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
