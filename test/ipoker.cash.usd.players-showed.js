'use strict'

const file = 'cash.usd.players-showed'

const test = require('tape')
const processFile = require('./util/process-ipoker')
// eslint-disable-next-line no-unused-vars
const ocat = require('ocat').applyRes5Opts()
const spok = require('spok')

test(`ipoker: ${file}`, function(t) {
  const res = processFile(file, true)
  spok(t, res,
    { seats:
      [ { seatno: 1, player: 'Player1', chips: 17.03 }
      , { seatno: 2, player: 'Player3', chips: 25.82 }
      , { seatno: 3, player: 'Player0', chips: 27.38 }
      , { seatno: 4, player: 'Player5', chips: 3.81 }
      , { seatno: 5, player: 'Player8', chips: 16 }
      , { seatno: 6, player: 'Player4', chips: 35.82 }
      , { seatno: 7, player: 'Player9', chips: 22.4 }
      , { seatno: 8, player: 'Player6', chips: 4.5 }
      , { seatno: 9, player: 'Player7', chips: 6.14 }
      , { seatno: 10, player: 'Player2', chips: 19.8 } ]
    , info:
      { pokertype: 'holdem'
      , limit: 'nolimit'
      , currency: '$'
      , sb: 0.1
      , bb: 0.2
      , ante: null
      , year: 2011
      , month: 12
      , day: 2
      , hour: 20
      , min: 44
      , sec: 59
      , hero: 'Player3'
      , handid: '3056022611'
      , gameno: '3056022611'
      , room: 'ipoker'
      , timezone: null }
    , table:
      { tablename: 'Memphis'
      , tableno: 98641631
      , maxseats: 10
      , button: 6 }
    , board: { card1: 'Kd', card2: '8s', card3: '2h', card4: '2d', card5: '6d' }
    , posts:
      [ { player: 'Player9', type: 'sb', amount: 0.1 }
      , { player: 'Player6', type: 'bb', amount: 0.2 }
      , { player: 'Player8', type: 'bb', amount: 0.3 } ]
    , preflop:
      [ { player: 'Player7', type: 'fold' }
      , { player: 'Player2', type: 'fold' }
      , { player: 'Player1', type: 'fold' }
      , { player: 'Player3', type: 'fold' }
      , { player: 'Player0', type: 'fold' }
      , { player: 'Player8', type: 'check' }
      , { player: 'Player4', type: 'fold' }
      , { player: 'Player9', type: 'fold' }
      , { player: 'Player6', type: 'check' } ]
    , flop:
      [ { player: 'Player6', type: 'check' }
      , { player: 'Player8', type: 'check' } ]
    , turn:
      [ { player: 'Player6', type: 'bet', amount: 0.4 }
      , { player: 'Player8', type: 'call', amount: 0.4 } ]
    , river:
      [ { player: 'Player6', type: 'check' }
      , { player: 'Player8', type: 'check' } ]
    , showdown:
      [ { player: 'Player6', type: 'collect', amount: 1.33 }
      , { player: 'Player3', type: 'show', card1: '6h', card2: '7h' }
      , { player: 'Player8', type: 'show', card1: 'Js', card2: 'Kh' }
      , { player: 'Player6', type: 'show', card1: '5d', card2: '7d' } ]
    , summary: [ { type: 'pot', single: true, amount: 1.33 } ]
    , hero: 'Player3'
    , holecards: { card1: '6h', card2: '7h' } })

  t.end()
})
