'use strict'

const file = require('./util/guess-fixture-name')(__filename)

const test = require('tape')
const processFile = require('./util/process-ipoker')
// eslint-disable-next-line no-unused-vars
const ocat = require('ocat').applyRes5Opts()
const spok = require('spok')

test(`ipoker: ${file}`, function(t) {
  const res = processFile(file)
  spok(t, res,
    [ { seats:
        [ { seatno: 1, player: 'Player0', chips: 0 }
        , { seatno: 3, player: 'Player1', chips: 21.12 }
        , { seatno: 5, player: 'Player2', chips: 20 }
        , { seatno: 6, player: 'Player3', chips: 11.76 }
        , { seatno: 8, player: 'Hero', chips: 22.45 }
        , { seatno: 10, player: 'bf411509', chips: 5.66 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '$'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.05
        , bb: 0.1
        , ante: 0.02
        , year: 2013
        , month: 12
        , day: 19
        , hour: 20
        , min: 0
        , sec: 35
        , hero: 'Hero'
        , handid: '5338624766'
        , gameno: '5338624766'
        , gametype: 'cash' }
     , table:
        { tablename: '"Ante" Acropoli'
        , tableno: 766490881
        , maxseats: 10
        , button: 10 }
     , board:
        { card1: 'Qc', card2: 'Tc', card3: 'Qd', card4: '5d', card5: '2s' }
     , posts:
        [ { player: 'Player2', type: 'ante', amount: 0.02 }
        , { player: 'Player3', type: 'ante', amount: 0.02 }
        , { player: 'Hero', type: 'ante', amount: 0.02 }
        , { player: 'bf411509', type: 'ante', amount: 0.02 }
        , { player: 'Player2', type: 'sb', amount: 0.05 }
        , { player: 'Hero', type: 'bb', amount: 0.1 } ]
     , preflop:
        [ { player: 'Player3', type: 'sitout', amount: 0 }
        , { player: 'bf411509', type: 'call', amount: 0.1 }
        , { player: 'Player2', type: 'fold' }
        , { player: 'Hero', type: 'check' } ]
     , flop:
        [ { player: 'Hero', type: 'check' }
        , { player: 'bf411509', type: 'check' } ]
     , turn:
        [ { player: 'Hero', type: 'check' }
        , { player: 'bf411509', type: 'check' } ]
     , river:
        [ { player: 'Hero', type: 'check' }
        , { player: 'bf411509', type: 'check' } ]
     , showdown:
        [ { player: 'Hero', type: 'collect', amount: 0.31 }
        , { player: 'Hero', type: 'show', card1: 'Jh', card2: '4d' }
        , { player: 'bf411509', type: 'show', card1: '6c', card2: '7d' } ]
     , summary: [ { type: 'pot', single: true, amount: 0.31 } ]
     , hero: 'Hero'
     , holecards: { card1: 'Jh', card2: '4d' } } ])
  t.end()
})
