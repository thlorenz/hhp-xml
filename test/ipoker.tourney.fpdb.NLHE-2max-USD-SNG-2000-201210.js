'use strict'

const file = require('./util/guess-fixture-name')(__filename)

const test = require('tape')
const processFile = require('./util/process-ipoker')
// eslint-disable-next-line no-unused-vars
const ocat = require('ocat').applyRes5Opts()
const spok = require('spok')

test(`ipoker: ${file}`, function(t) {
  const res = processFile(file, true)
  spok(t, res,
    { seats:
      [ { seatno: 3, player: 'Player0', chips: 1500 }
      , { seatno: 8, player: 'Hero', chips: 1500 } ]
    , info:
      { room: 'ipoker'
      , timezone: null
      , pokertype: 'holdem'
      , limit: 'nolimit'
      , currency: '$'
      , donation: 2000
      , rake: 50
      , buyin: 2050
      , sb: 10
      , bb: 20
      , ante: 0
      , year: 2012
      , month: 10
      , day: 21
      , hour: 8
      , min: 10
      , sec: 9
      , hero: 'Hero'
      , handid: '4335364086'
      , gameno: '4335364086'
      , gametype: 'tournament' }
    , table:
      { tablename: '"TURBO" NLH Heads Up $2,000'
      , tableno: 770109371
      , maxseats: 2
      , button: 3 }
    , board: {}
    , posts:
      [ { player: 'Player0', type: 'sb', amount: 10 }
      , { player: 'Hero', type: 'bb', amount: 20 } ]
    , preflop:
      [ { player: 'Player0', type: 'raise', amount: 40 }
      , { player: 'Hero', type: 'raise', amount: 120 }
      , { player: 'Player0', type: 'fold' } ]
    , flop: []
    , turn: []
    , river: []
    , showdown:
      [ { player: 'Hero', type: 'collect', amount: 160 }
      , { player: 'Hero', type: 'show', card1: '4c', card2: '4s' } ]
    , summary: [ { type: 'pot', single: true, amount: 160 } ]
    , hero: 'Hero'
    , holecards: { card1: '4c', card2: '4s' } })
  t.end()
})
