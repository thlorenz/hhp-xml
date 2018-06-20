'use strict'

const file = 'cash.pounds.no-hero'

const test = require('tape')
const processFile = require('./util/process-ipoker')
// eslint-disable-next-line no-unused-vars
const ocat = require('ocat').applyRes5Opts()
const spok = require('spok')

test(`ipoker: ${file}`, function(t) {
  const res = processFile(file, true)
  spok(t, res,
    { seats:
      [ { seatno: 4, player: 'WWR141388412', chips: 11.25 }
      , { seatno: 5, player: 'keepfishing68', chips: 9.3 }
      , { seatno: 6, player: 'chcake515151', chips: 9.08 } ]
    , info:
      { pokertype: 'holdem'
      , limit: 'nolimit'
      , currency: '£'
      , sb: 0.05
      , bb: 0.10
      , year: 2014
      , month: 1
      , day: 6
      , hour: 17
      , min: 11
      , sec: 41
      , hero: null
      , handid: '5384038435'
      , gameno: '5384038435'
      , room: 'ipoker'
      , timezone: null }
    , table:
      { tablename: 'Albuixech'
      , tableno: 817196375
      , maxseats: 6
      , button: 6 }
    , board: { card1: '3d', card2: '9c', card3: '3h', card4: 'Jh', card5: '4s' }
    , posts:
      [ { player: 'WWR141388412', type: 'ante', amount: 0.02 }
      , { player: 'keepfishing68', type: 'ante', amount: 0.02 }
      , { player: 'chcake515151', type: 'ante', amount: 0.02 }
      , { player: 'WWR141388412', type: 'sb', amount: 0.05 }
      , { player: 'keepfishing68', type: 'bb', amount: 0.1 } ]
    , preflop:
      [ { player: 'chcake515151', type: 'fold' }
      , { player: 'WWR141388412', type: 'call', amount: 0.05 }
      , { player: 'keepfishing68', type: 'check' } ]
    , flop:
      [ { player: 'WWR141388412', type: 'check' }
      , { player: 'keepfishing68', type: 'check' } ]
    , turn:
      [ { player: 'WWR141388412', type: 'check' }
      , { player: 'keepfishing68', type: 'check' } ]
    , river:
      [ { player: 'WWR141388412', type: 'bet', amount: 0.1 }
      , { player: 'keepfishing68', type: 'fold' } ]
    , showdown: [ { player: 'WWR141388412', type: 'collect', amount: 0.35 } ]
    , summary: [ { type: 'pot', single: true, amount: 0.35 } ] })
  t.end()
})
