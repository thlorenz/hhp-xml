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
        [ { seatno: 1, player: 'Player0', chips: 2.02 }
        , { seatno: 2, player: 'Player1', chips: 1.58 }
        , { seatno: 3, player: 'Player2', chips: 3.05 }
        , { seatno: 4, player: 'Player3', chips: 3 }
        , { seatno: 6, player: 'Player4', chips: 0.66 }
        , { seatno: 8, player: 'Player5', chips: 2.61 }
        , { seatno: 10, player: 'Player6', chips: 1.42 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '$'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.01
        , bb: 0.02
        , ante: 0
        , year: 2017
        , month: 1
        , day: 23
        , hour: 22
        , min: 27
        , sec: 48
        , hero: 'Hero'
        , handid: '3858162574'
        , gameno: '3858162574'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ajaccio'
        , tableno: 486280776
        , maxseats: 10
        , button: 10 }
     , board:
        { card1: '9d', card2: 'Tc', card3: 'Qh', card4: '5d', card5: '5h' }
     , posts:
        [ { player: 'Player0', type: 'sb', amount: 0.01 }
        , { player: 'Player1', type: 'bb', amount: 0.02 } ]
     , preflop:
        [ { player: 'Player2', type: 'fold' }
        , { player: 'Player3', type: 'fold' }
        , { player: 'Player4', type: 'call', amount: 0.02 }
        , { player: 'Player5', type: 'fold' }
        , { player: 'Player6', type: 'call', amount: 0.02 }
        , { player: 'Player0', type: 'call', amount: 0.01 }
        , { player: 'Player1', type: 'check' } ]
     , flop:
        [ { player: 'Player0', type: 'check' }
        , { player: 'Player1', type: 'check' }
        , { player: 'Player4', type: 'check' }
        , { player: 'Player6', type: 'check' } ]
     , turn:
        [ { player: 'Player0', type: 'check' }
        , { player: 'Player1', type: 'check' }
        , { player: 'Player4', type: 'check' }
        , { player: 'Player6', type: 'bet', amount: 0.04 }
        , { player: 'Player0', type: 'fold' }
        , { player: 'Player1', type: 'fold' }
        , { player: 'Player4', type: 'call', amount: 0.04 } ]
     , river:
        [ { player: 'Player4', type: 'check' }
        , { player: 'Player6', type: 'check' } ]
     , showdown:
        [ { player: 'Player6', type: 'collect', amount: 0.15 }
        , { player: 'Player4', type: 'show', card1: '8h', card2: 'Kh' }
        , { player: 'Player6', type: 'show', card1: 'Qc', card2: 'Jc' } ]
     , summary: [ { type: 'pot', single: true, amount: 0.15 } ]
     , hero: 'Hero'
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Player0', chips: 2 }
        , { seatno: 2, player: 'Player1', chips: 1.56 }
        , { seatno: 3, player: 'Player2', chips: 3.05 }
        , { seatno: 4, player: 'Player3', chips: 3 }
        , { seatno: 5, player: 'Hero', chips: 0.8 }
        , { seatno: 6, player: 'Player4', chips: 0.6 }
        , { seatno: 8, player: 'Player5', chips: 2.61 }
        , { seatno: 10, player: 'Player6', chips: 1.51 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '$'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.01
        , bb: 0.02
        , ante: 0
        , year: 2017
        , month: 1
        , day: 23
        , hour: 22
        , min: 29
        , sec: 14
        , hero: 'Hero'
        , handid: '3858162748'
        , gameno: '3858162748'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ajaccio'
        , tableno: 486280776
        , maxseats: 10
        , button: 1 }
     , board: { card1: '4d', card2: '6h', card3: 'Js', card4: '6s' }
     , posts:
        [ { player: 'Player1', type: 'sb', amount: 0.01 }
        , { player: 'Player2', type: 'bb', amount: 0.02 }
        , { player: 'Hero', type: 'bb', amount: 0.02 } ]
     , preflop:
        [ { player: 'Player3', type: 'fold' }
        , { player: 'Hero', type: 'check' }
        , { player: 'Player4', type: 'fold' }
        , { player: 'Player5', type: 'fold' }
        , { player: 'Player6', type: 'fold' }
        , { player: 'Player0', type: 'call', amount: 0.02 }
        , { player: 'Player1', type: 'raise', amount: 0.02, raiseTo: 0.04 }
        , { player: 'Player2', type: 'fold' }
        , { player: 'Hero', type: 'fold' }
        , { player: 'Player0', type: 'call', amount: 0.02 } ]
     , flop:
        [ { player: 'Player1', type: 'check' }
        , { player: 'Player0', type: 'check' } ]
     , turn:
        [ { player: 'Player1', type: 'check' }
        , { player: 'Player0', type: 'bet', amount: 0.12 }
        , { player: 'Player1', type: 'fold' } ]
     , river: []
     , showdown:
        [ { player: 'Player0', type: 'collect', amount: 0.24 }
        , { player: 'Hero', type: 'show', card1: '7s', card2: '8s' } ]
     , summary: [ { type: 'pot', single: true, amount: 0.24 } ]
     , hero: 'Hero'
     , holecards: { card1: '7s', card2: '8s' } }
    , { seats:
        [ { seatno: 1, player: 'Player0', chips: 2.08 }
        , { seatno: 2, player: 'Player1', chips: 1.52 }
        , { seatno: 3, player: 'Player2', chips: 3.03 }
        , { seatno: 4, player: 'Player3', chips: 3 }
        , { seatno: 5, player: 'Hero', chips: 0.78 }
        , { seatno: 6, player: 'Player4', chips: 0.6 }
        , { seatno: 8, player: 'Player5', chips: 2.61 }
        , { seatno: 10, player: 'Player6', chips: 1.51 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '$'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.01
        , bb: 0.02
        , ante: 0
        , year: 2017
        , month: 1
        , day: 23
        , hour: 22
        , min: 30
        , sec: 41
        , hero: 'Hero'
        , handid: '3858162919'
        , gameno: '3858162919'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ajaccio'
        , tableno: 486280776
        , maxseats: 10
        , button: 2 }
     , board:
        { card1: '4h', card2: '6c', card3: '6s', card4: '8s', card5: '2c' }
     , posts:
        [ { player: 'Player2', type: 'sb', amount: 0.01 }
        , { player: 'Player3', type: 'bb', amount: 0.02 } ]
     , preflop:
        [ { player: 'Hero', type: 'fold' }
        , { player: 'Player4', type: 'call', amount: 0.02 }
        , { player: 'Player5', type: 'fold' }
        , { player: 'Player6', type: 'fold' }
        , { player: 'Player0', type: 'call', amount: 0.02 }
        , { player: 'Player1', type: 'fold' }
        , { player: 'Player2', type: 'fold' }
        , { player: 'Player3', type: 'check' } ]
     , flop:
        [ { player: 'Player3', type: 'check' }
        , { player: 'Player4', type: 'check' }
        , { player: 'Player0', type: 'check' } ]
     , turn:
        [ { player: 'Player3', type: 'check' }
        , { player: 'Player4', type: 'check' }
        , { player: 'Player0', type: 'check' } ]
     , river:
        [ { player: 'Player3', type: 'check' }
        , { player: 'Player4', type: 'check' }
        , { player: 'Player0', type: 'check' } ]
     , showdown:
        [ { player: 'Player4', type: 'collect', amount: 0.07 }
        , { player: 'Hero', type: 'show', card1: '8c', card2: 'Ah' }
        , { player: 'Player4', type: 'show', card1: 'Js', card2: '2h' }
        , { player: 'Player0', type: 'show', card1: 'Ks', card2: '9d' }
        , { player: 'Player3', type: 'show', card1: 'Th', card2: 'Ac' } ]
     , summary: [ { type: 'pot', single: true, amount: 0.07 } ]
     , hero: 'Hero'
     , holecards: { card1: '8c', card2: 'Ah' } } ])
  t.end()
})
