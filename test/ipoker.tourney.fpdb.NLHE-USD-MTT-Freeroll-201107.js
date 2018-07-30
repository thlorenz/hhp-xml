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
        [ { seatno: 1, player: 'Player7', chips: 1500 }
        , { seatno: 2, player: 'Player1', chips: 1500 }
        , { seatno: 3, player: 'Player2', chips: 1500 }
        , { seatno: 4, player: 'Player9', chips: 1500 }
        , { seatno: 5, player: 'Player3', chips: 1500 }
        , { seatno: 6, player: 'Player4', chips: 1500 }
        , { seatno: 7, player: 'Player0', chips: 1500 }
        , { seatno: 8, player: 'Player5', chips: 1500 }
        , { seatno: 9, player: 'Player8', chips: 1500 }
        , { seatno: 10, player: 'Player6', chips: 1500 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '$'
        , donation: 0
        , rake: 0
        , buyin: 0
        , sb: 10
        , bb: 20
        , ante: 0
        , year: 2011
        , month: 7
        , day: 31
        , hour: 20
        , min: 0
        , sec: 42
        , hero: 'Player6'
        , handid: '3681845627'
        , gameno: '3681845627'
        , gametype: 'tournament' }
     , table:
        { tablename: 'SPF $100 Daily Tournament'
        , tableno: 611669111
        , maxseats: 10
        , button: 1 }
     , board:
        { card1: '9d', card2: '7h', card3: '3s', card4: '8s', card5: '2d' }
     , posts:
        [ { player: 'Player1', type: 'sb', amount: 10 }
        , { player: 'Player2', type: 'bb', amount: 20 } ]
     , preflop:
        [ { player: 'Player9', type: 'fold' }
        , { player: 'Player3', type: 'fold' }
        , { player: 'Player4', type: 'fold' }
        , { player: 'Player0', type: 'fold' }
        , { player: 'Player5', type: 'call', amount: 20 }
        , { player: 'Player8', type: 'fold' }
        , { player: 'Player6', type: 'fold' }
        , { player: 'Player7', type: 'call', amount: 20 }
        , { player: 'Player1', type: 'call', amount: 10 }
        , { player: 'Player2', type: 'check' } ]
     , flop:
        [ { player: 'Player1', type: 'check' }
        , { player: 'Player2', type: 'bet', amount: 80 }
        , { player: 'Player5', type: 'fold' }
        , { player: 'Player7', type: 'call', amount: 80 }
        , { player: 'Player1', type: 'call', amount: 80 } ]
     , turn:
        [ { player: 'Player1', type: 'check' }
        , { player: 'Player2', type: 'bet', amount: 240 }
        , { player: 'Player7', type: 'fold' }
        , { player: 'Player1', type: 'call', amount: 240 } ]
     , river:
        [ { player: 'Player1', type: 'check' }
        , { player: 'Player2', type: 'check' } ]
     , showdown:
        [ { player: 'Player2', type: 'collect', amount: 800 }
        , { player: 'Player1', type: 'show', card1: 'Qh', card2: 'Tc' }
        , { player: 'Player2', type: 'show', card1: 'Jd', card2: '9s' }
        , { player: 'Player6', type: 'show', card1: '6s', card2: '4c' } ]
     , summary: [ { type: 'pot', single: true, amount: 800 } ]
     , hero: 'Player6'
     , holecards: { card1: '6s', card2: '4c' } }
    , { seats:
        [ { seatno: 1, player: 'Player7', chips: 1400 }
        , { seatno: 2, player: 'Player1', chips: 1160 }
        , { seatno: 3, player: 'Player2', chips: 1960 }
        , { seatno: 4, player: 'Player9', chips: 1500 }
        , { seatno: 5, player: 'Player3', chips: 1500 }
        , { seatno: 6, player: 'Player4', chips: 1500 }
        , { seatno: 7, player: 'Player0', chips: 1500 }
        , { seatno: 8, player: 'Player5', chips: 1480 }
        , { seatno: 9, player: 'Player8', chips: 1500 }
        , { seatno: 10, player: 'Player6', chips: 1500 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '$'
        , donation: 0
        , rake: 0
        , buyin: 0
        , sb: 10
        , bb: 20
        , ante: 0
        , year: 2011
        , month: 7
        , day: 31
        , hour: 20
        , min: 2
        , sec: 23
        , hero: 'Player6'
        , handid: '3681845824'
        , gameno: '3681845824'
        , gametype: 'tournament' }
     , table:
        { tablename: 'SPF $100 Daily Tournament'
        , tableno: 611669111
        , maxseats: 10
        , button: 2 }
     , board: { card1: '6h', card2: 'Ks', card3: 'Qd', card4: '4s' }
     , posts:
        [ { player: 'Player2', type: 'sb', amount: 10 }
        , { player: 'Player9', type: 'bb', amount: 20 } ]
     , preflop:
        [ { player: 'Player3', type: 'fold' }
        , { player: 'Player4', type: 'fold' }
        , { player: 'Player0', type: 'fold' }
        , { player: 'Player5', type: 'call', amount: 20 }
        , { player: 'Player8', type: 'fold' }
        , { player: 'Player6', type: 'fold' }
        , { player: 'Player7', type: 'raise', amount: 20, raiseTo: 40 }
        , { player: 'Player1', type: 'call', amount: 40 }
        , { player: 'Player2', type: 'fold' }
        , { player: 'Player9', type: 'call', amount: 20 }
        , { player: 'Player5', type: 'call', amount: 20 } ]
     , flop:
        [ { player: 'Player9', type: 'check' }
        , { player: 'Player5', type: 'check' }
        , { player: 'Player7', type: 'check' }
        , { player: 'Player1', type: 'bet', amount: 170 }
        , { player: 'Player9', type: 'fold' }
        , { player: 'Player5', type: 'fold' }
        , { player: 'Player7', type: 'call', amount: 170 } ]
     , turn:
        [ { player: 'Player7', type: 'check' }
        , { player: 'Player1', type: 'bet', amount: 510 }
        , { player: 'Player7', type: 'fold' } ]
     , river: []
     , showdown:
        [ { player: 'Player1', type: 'collect', amount: 1020 }
        , { player: 'Player6', type: 'show', card1: 'Kc', card2: '7s' } ]
     , summary: [ { type: 'pot', single: true, amount: 1020 } ]
     , hero: 'Player6'
     , holecards: { card1: 'Kc', card2: '7s' } }
    , { seats:
        [ { seatno: 1, player: 'Player7', chips: 1190 }
        , { seatno: 2, player: 'Player1', chips: 1460 }
        , { seatno: 3, player: 'Player2', chips: 1950 }
        , { seatno: 4, player: 'Player9', chips: 1460 }
        , { seatno: 5, player: 'Player3', chips: 1500 }
        , { seatno: 6, player: 'Player4', chips: 1500 }
        , { seatno: 7, player: 'Player0', chips: 1500 }
        , { seatno: 8, player: 'Player5', chips: 1440 }
        , { seatno: 9, player: 'Player8', chips: 1500 }
        , { seatno: 10, player: 'Player6', chips: 1500 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '$'
        , donation: 0
        , rake: 0
        , buyin: 0
        , sb: 10
        , bb: 20
        , ante: 0
        , year: 2011
        , month: 7
        , day: 31
        , hour: 20
        , min: 3
        , sec: 21
        , hero: 'Player6'
        , handid: '3681863780'
        , gameno: '3681863780'
        , gametype: 'tournament' }
     , table:
        { tablename: 'SPF $100 Daily Tournament'
        , tableno: 611669111
        , maxseats: 10
        , button: 3 }
     , board:
        { card1: 'Js', card2: 'Ks', card3: '7c', card4: '2d', card5: 'Kc' }
     , posts:
        [ { player: 'Player9', type: 'sb', amount: 10 }
        , { player: 'Player3', type: 'bb', amount: 20 } ]
     , preflop:
        [ { player: 'Player4', type: 'fold' }
        , { player: 'Player0', type: 'fold' }
        , { player: 'Player5', type: 'fold' }
        , { player: 'Player8', type: 'call', amount: 20 }
        , { player: 'Player6', type: 'fold' }
        , { player: 'Player7', type: 'raise', amount: 20, raiseTo: 40 }
        , { player: 'Player1', type: 'fold' }
        , { player: 'Player2', type: 'fold' }
        , { player: 'Player9', type: 'call', amount: 30 }
        , { player: 'Player3', type: 'fold' }
        , { player: 'Player8', type: 'call', amount: 20 } ]
     , flop:
        [ { player: 'Player9', type: 'check' }
        , { player: 'Player8', type: 'bet', amount: 20 }
        , { player: 'Player7', type: 'call', amount: 20 }
        , { player: 'Player9', type: 'call', amount: 20 } ]
     , turn:
        [ { player: 'Player9', type: 'check' }
        , { player: 'Player8', type: 'bet', amount: 20 }
        , { player: 'Player7', type: 'call', amount: 20 }
        , { player: 'Player9', type: 'call', amount: 20 } ]
     , river:
        [ { player: 'Player9', type: 'check' }
        , { player: 'Player8', type: 'bet', amount: 260 }
        , { player: 'Player7', type: 'fold' }
        , { player: 'Player9', type: 'fold' } ]
     , showdown:
        [ { player: 'Player8', type: 'collect', amount: 520 }
        , { player: 'Player6', type: 'show', card1: 'Ah', card2: '5c' } ]
     , summary: [ { type: 'pot', single: true, amount: 520 } ]
     , hero: 'Player6'
     , holecards: { card1: 'Ah', card2: '5c' } }
    , { seats:
        [ { seatno: 1, player: 'Player7', chips: 1110 }
        , { seatno: 2, player: 'Player1', chips: 1460 }
        , { seatno: 3, player: 'Player2', chips: 1950 }
        , { seatno: 4, player: 'Player9', chips: 1380 }
        , { seatno: 5, player: 'Player3', chips: 1480 }
        , { seatno: 6, player: 'Player4', chips: 1500 }
        , { seatno: 7, player: 'Player0', chips: 1500 }
        , { seatno: 8, player: 'Player5', chips: 1440 }
        , { seatno: 9, player: 'Player8', chips: 1680 }
        , { seatno: 10, player: 'Player6', chips: 1500 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '$'
        , donation: 0
        , rake: 0
        , buyin: 0
        , sb: 10
        , bb: 20
        , ante: 0
        , year: 2011
        , month: 7
        , day: 31
        , hour: 20
        , min: 4
        , sec: 37
        , hero: 'Player6'
        , handid: '3681864243'
        , gameno: '3681864243'
        , gametype: 'tournament' }
     , table:
        { tablename: 'SPF $100 Daily Tournament'
        , tableno: 611669111
        , maxseats: 10
        , button: 4 }
     , board:
        { card1: 'Kc', card2: '5c', card3: '6d', card4: '3c', card5: 'Tc' }
     , posts:
        [ { player: 'Player3', type: 'sb', amount: 10 }
        , { player: 'Player4', type: 'bb', amount: 20 } ]
     , preflop:
        [ { player: 'Player0', type: 'fold' }
        , { player: 'Player5', type: 'call', amount: 20 }
        , { player: 'Player8', type: 'call', amount: 20 }
        , { player: 'Player6', type: 'fold' }
        , { player: 'Player7', type: 'fold' }
        , { player: 'Player1', type: 'fold' }
        , { player: 'Player2', type: 'fold' }
        , { player: 'Player9', type: 'fold' }
        , { player: 'Player3', type: 'call', amount: 10 }
        , { player: 'Player4', type: 'check' } ]
     , flop:
        [ { player: 'Player3', type: 'check' }
        , { player: 'Player4', type: 'check' }
        , { player: 'Player5', type: 'bet', amount: 40 }
        , { player: 'Player8', type: 'fold' }
        , { player: 'Player3', type: 'call', amount: 40 }
        , { player: 'Player4', type: 'fold' } ]
     , turn:
        [ { player: 'Player3', type: 'check' }
        , { player: 'Player5', type: 'bet', amount: 40 }
        , { player: 'Player3', type: 'call', amount: 40 } ]
     , river:
        [ { player: 'Player3', type: 'check' }
        , { player: 'Player5', type: 'check' } ]
     , showdown:
        [ { player: 'Player5', type: 'collect', amount: 240 }
        , { player: 'Player3', type: 'show', card1: '8h', card2: '7h' }
        , { player: 'Player5', type: 'show', card1: '9s', card2: 'Ts' }
        , { player: 'Player6', type: 'show', card1: 'Qh', card2: '8c' } ]
     , summary: [ { type: 'pot', single: true, amount: 240 } ]
     , hero: 'Player6'
     , holecards: { card1: 'Qh', card2: '8c' } }
    , { seats:
        [ { seatno: 1, player: 'Player7', chips: 1110 }
        , { seatno: 2, player: 'Player1', chips: 1460 }
        , { seatno: 3, player: 'Player2', chips: 1950 }
        , { seatno: 4, player: 'Player9', chips: 1380 }
        , { seatno: 5, player: 'Player3', chips: 1380 }
        , { seatno: 6, player: 'Player4', chips: 1480 }
        , { seatno: 7, player: 'Player0', chips: 1500 }
        , { seatno: 8, player: 'Player5', chips: 1580 }
        , { seatno: 9, player: 'Player8', chips: 1660 }
        , { seatno: 10, player: 'Player6', chips: 1500 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '$'
        , donation: 0
        , rake: 0
        , buyin: 0
        , sb: 10
        , bb: 20
        , ante: 0
        , year: 2011
        , month: 7
        , day: 31
        , hour: 20
        , min: 5
        , sec: 21
        , hero: 'Player6'
        , handid: '3681864554'
        , gameno: '3681864554'
        , gametype: 'tournament' }
     , table:
        { tablename: 'SPF $100 Daily Tournament'
        , tableno: 611669111
        , maxseats: 10
        , button: 5 }
     , board:
        { card1: '9d', card2: '8d', card3: '2c', card4: 'Td', card5: 'Ad' }
     , posts:
        [ { player: 'Player4', type: 'sb', amount: 10 }
        , { player: 'Player0', type: 'bb', amount: 20 } ]
     , preflop:
        [ { player: 'Player5', type: 'fold' }
        , { player: 'Player8', type: 'call', amount: 20 }
        , { player: 'Player6', type: 'fold' }
        , { player: 'Player7', type: 'call', amount: 20 }
        , { player: 'Player1', type: 'fold' }
        , { player: 'Player2', type: 'fold' }
        , { player: 'Player9', type: 'fold' }
        , { player: 'Player3', type: 'fold' }
        , { player: 'Player4', type: 'fold' }
        , { player: 'Player0', type: 'check' } ]
     , flop:
        [ { player: 'Player0', type: 'check' }
        , { player: 'Player8', type: 'check' }
        , { player: 'Player7', type: 'bet', amount: 35 }
        , { player: 'Player0', type: 'fold' }
        , { player: 'Player8', type: 'call', amount: 35 } ]
     , turn:
        [ { player: 'Player8', type: 'check' }
        , { player: 'Player7', type: 'check' } ]
     , river:
        [ { player: 'Player8', type: 'check' }
        , { player: 'Player7', type: 'check' } ]
     , showdown:
        [ { player: 'Player7', type: 'collect', amount: 140 }
        , { player: 'Player7', type: 'show', card1: '7s', card2: '7c' }
        , { player: 'Player8', type: 'show', card1: '3c', card2: '3h' }
        , { player: 'Player6', type: 'show', card1: '7h', card2: 'Kd' } ]
     , summary: [ { type: 'pot', single: true, amount: 140 } ]
     , hero: 'Player6'
     , holecards: { card1: '7h', card2: 'Kd' } }
    , { seats:
        [ { seatno: 1, player: 'Player7', chips: 1195 }
        , { seatno: 2, player: 'Player1', chips: 1460 }
        , { seatno: 3, player: 'Player2', chips: 1950 }
        , { seatno: 4, player: 'Player9', chips: 1380 }
        , { seatno: 5, player: 'Player3', chips: 1380 }
        , { seatno: 6, player: 'Player4', chips: 1470 }
        , { seatno: 7, player: 'Player0', chips: 1480 }
        , { seatno: 8, player: 'Player5', chips: 1580 }
        , { seatno: 9, player: 'Player8', chips: 1605 }
        , { seatno: 10, player: 'Player6', chips: 1500 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '$'
        , donation: 0
        , rake: 0
        , buyin: 0
        , sb: 15
        , bb: 30
        , ante: 0
        , year: 2011
        , month: 7
        , day: 31
        , hour: 20
        , min: 6
        , sec: 6
        , hero: 'Player6'
        , handid: '3681864991'
        , gameno: '3681864991'
        , gametype: 'tournament' }
     , table:
        { tablename: 'SPF $100 Daily Tournament'
        , tableno: 611669111
        , maxseats: 10
        , button: 6 }
     , board: { card1: '4d', card2: '2s', card3: '6c', card4: 'Qs' }
     , posts:
        [ { player: 'Player0', type: 'sb', amount: 15 }
        , { player: 'Player5', type: 'bb', amount: 30 } ]
     , preflop:
        [ { player: 'Player8', type: 'fold' }
        , { player: 'Player6', type: 'fold' }
        , { player: 'Player7', type: 'fold' }
        , { player: 'Player1', type: 'raise', amount: 60, raiseTo: 60 }
        , { player: 'Player2', type: 'fold' }
        , { player: 'Player9', type: 'call', amount: 60 }
        , { player: 'Player3', type: 'fold' }
        , { player: 'Player4', type: 'fold' }
        , { player: 'Player0', type: 'fold' }
        , { player: 'Player5', type: 'call', amount: 30 } ]
     , flop:
        [ { player: 'Player5', type: 'check' }
        , { player: 'Player1', type: 'bet', amount: 195 }
        , { player: 'Player9', type: 'call', amount: 195 }
        , { player: 'Player5', type: 'fold' } ]
     , turn:
        [ { player: 'Player1', type: 'bet', amount: 585 }
        , { player: 'Player9', type: 'fold' } ]
     , river: []
     , showdown:
        [ { player: 'Player1', type: 'collect', amount: 1170 }
        , { player: 'Player6', type: 'show', card1: '2c', card2: '5c' } ]
     , summary: [ { type: 'pot', single: true, amount: 1170 } ]
     , hero: 'Player6'
     , holecards: { card1: '2c', card2: '5c' } }
    , { seats:
        [ { seatno: 1, player: 'Player7', chips: 1195 }
        , { seatno: 2, player: 'Player1', chips: 1790 }
        , { seatno: 3, player: 'Player2', chips: 1950 }
        , { seatno: 4, player: 'Player9', chips: 1125 }
        , { seatno: 5, player: 'Player3', chips: 1380 }
        , { seatno: 6, player: 'Player4', chips: 1470 }
        , { seatno: 7, player: 'Player0', chips: 1465 }
        , { seatno: 8, player: 'Player5', chips: 1520 }
        , { seatno: 9, player: 'Player8', chips: 1605 }
        , { seatno: 10, player: 'Player6', chips: 1500 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '$'
        , donation: 0
        , rake: 0
        , buyin: 0
        , sb: 15
        , bb: 30
        , ante: 0
        , year: 2011
        , month: 7
        , day: 31
        , hour: 20
        , min: 7
        , sec: 14
        , hero: 'Player6'
        , handid: '3681865663'
        , gameno: '3681865663'
        , gametype: 'tournament' }
     , table:
        { tablename: 'SPF $100 Daily Tournament'
        , tableno: 611669111
        , maxseats: 10
        , button: 7 }
     , board:
        { card1: '9s', card2: '9c', card3: 'Qd', card4: '8s', card5: '5d' }
     , posts:
        [ { player: 'Player5', type: 'sb', amount: 15 }
        , { player: 'Player8', type: 'bb', amount: 30 } ]
     , preflop:
        [ { player: 'Player6', type: 'fold' }
        , { player: 'Player7', type: 'fold' }
        , { player: 'Player1', type: 'fold' }
        , { player: 'Player2', type: 'fold' }
        , { player: 'Player9', type: 'raise', amount: 90, raiseTo: 90 }
        , { player: 'Player3', type: 'raise', amount: 1290, raiseTo: 1380 }
        , { player: 'Player4', type: 'fold' }
        , { player: 'Player0', type: 'fold' }
        , { player: 'Player5', type: 'fold' }
        , { player: 'Player8', type: 'call', amount: 1350 }
        , { player: 'Player9', type: 'call', amount: 1035, allin: true } ]
     , flop: []
     , turn: []
     , river: []
     , showdown:
        [ { player: 'Player9', type: 'collect', amount: 3390 }
        , { player: 'Player3', type: 'collect', amount: 510 }
        , { player: 'Player9', type: 'show', card1: 'Qh', card2: 'Kc' }
        , { player: 'Player3', type: 'show', card1: 'Jh', card2: 'Jd' }
        , { player: 'Player8', type: 'show', card1: 'Td', card2: 'Ad' }
        , { player: 'Player6', type: 'show', card1: '8h', card2: 'Kh' } ]
     , summary: [ { type: 'pot', single: false, amount: 3900 } ]
     , hero: 'Player6'
     , holecards: { card1: '8h', card2: 'Kh' } }
    , { seats:
        [ { seatno: 1, player: 'Player7', chips: 1195 }
        , { seatno: 2, player: 'Player1', chips: 1790 }
        , { seatno: 3, player: 'Player2', chips: 1950 }
        , { seatno: 4, player: 'Player9', chips: 3390 }
        , { seatno: 5, player: 'Player3', chips: 510 }
        , { seatno: 6, player: 'Player4', chips: 1470 }
        , { seatno: 7, player: 'Player0', chips: 1465 }
        , { seatno: 8, player: 'Player5', chips: 1505 }
        , { seatno: 9, player: 'Player8', chips: 225 }
        , { seatno: 10, player: 'Player6', chips: 1500 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '$'
        , donation: 0
        , rake: 0
        , buyin: 0
        , sb: 15
        , bb: 30
        , ante: 0
        , year: 2011
        , month: 7
        , day: 31
        , hour: 20
        , min: 7
        , sec: 56
        , hero: 'Player6'
        , handid: '3681866037'
        , gameno: '3681866037'
        , gametype: 'tournament' }
     , table:
        { tablename: 'SPF $100 Daily Tournament'
        , tableno: 611669111
        , maxseats: 10
        , button: 8 }
     , board:
        { card1: 'Kc', card2: 'Qd', card3: 'Qs', card4: '8s', card5: 'Qc' }
     , posts:
        [ { player: 'Player8', type: 'sb', amount: 15 }
        , { player: 'Player6', type: 'bb', amount: 30 } ]
     , preflop:
        [ { player: 'Player7', type: 'fold' }
        , { player: 'Player1', type: 'fold' }
        , { player: 'Player2', type: 'fold' }
        , { player: 'Player9', type: 'call', amount: 30 }
        , { player: 'Player3', type: 'raise', amount: 480, raiseTo: 510 }
        , { player: 'Player4', type: 'fold' }
        , { player: 'Player0', type: 'fold' }
        , { player: 'Player5', type: 'fold' }
        , { player: 'Player8', type: 'call', amount: 210, allin: true }
        , { player: 'Player6', type: 'fold' }
        , { player: 'Player9', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown:
        [ { player: 'Player3', type: 'collect', amount: 795 }
        , { player: 'Player3', type: 'show', card1: '8h', card2: 'Th' }
        , { player: 'Player8', type: 'show', card1: '7d', card2: 'Js' }
        , { player: 'Player6', type: 'show', card1: 'Ks', card2: '9h' } ]
     , summary: [ { type: 'pot', single: true, amount: 795 } ]
     , hero: 'Player6'
     , holecards: { card1: 'Ks', card2: '9h' } }
    , { seats:
        [ { seatno: 1, player: 'Player7', chips: 1195 }
        , { seatno: 2, player: 'Player1', chips: 1790 }
        , { seatno: 3, player: 'Player2', chips: 1950 }
        , { seatno: 4, player: 'Player9', chips: 3360 }
        , { seatno: 5, player: 'Player3', chips: 795 }
        , { seatno: 6, player: 'Player4', chips: 1470 }
        , { seatno: 7, player: 'Player0', chips: 1465 }
        , { seatno: 8, player: 'Player5', chips: 1505 }
        , { seatno: 9, player: 'seat9', chips: 0 }
        , { seatno: 10, player: 'Player6', chips: 1470 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '$'
        , donation: 0
        , rake: 0
        , buyin: 0
        , sb: 15
        , bb: 30
        , ante: 0
        , year: 2011
        , month: 7
        , day: 31
        , hour: 20
        , min: 8
        , sec: 39
        , hero: 'Player6'
        , handid: '3681866566'
        , gameno: '3681866566'
        , gametype: 'tournament' }
     , table:
        { tablename: 'SPF $100 Daily Tournament'
        , tableno: 611669111
        , maxseats: 10
        , button: 9 }
     , board:
        { card1: '5d', card2: '7d', card3: 'Jc', card4: '8s', card5: '3s' }
     , posts:
        [ { player: 'Player6', type: 'sb', amount: 15 }
        , { player: 'Player7', type: 'bb', amount: 30 } ]
     , preflop:
        [ { player: 'Player1', type: 'fold' }
        , { player: 'Player2', type: 'call', amount: 30 }
        , { player: 'Player9', type: 'fold' }
        , { player: 'Player3', type: 'fold' }
        , { player: 'Player4', type: 'fold' }
        , { player: 'Player0', type: 'fold' }
        , { player: 'Player5', type: 'call', amount: 30 }
        , { player: 'Player6', type: 'raise', amount: 120, raiseTo: 150 }
        , { player: 'Player7', type: 'fold' }
        , { player: 'Player2', type: 'call', amount: 120 }
        , { player: 'Player5', type: 'call', amount: 120 } ]
     , flop:
        [ { player: 'Player6', type: 'bet', amount: 360 }
        , { player: 'Player2', type: 'call', amount: 360 }
        , { player: 'Player5', type: 'call', amount: 360 } ]
     , turn:
        [ { player: 'Player6', type: 'bet', amount: 960 }
        , { player: 'Player2', type: 'fold' }
        , { player: 'Player5', type: 'call', amount: 960 } ]
     , river: []
     , showdown:
        [ { player: 'Player5', type: 'collect', amount: 3480 }
        , { player: 'Player5', type: 'show', card1: 'Js', card2: '4s' }
        , { player: 'Player6', type: 'show', card1: 'As', card2: 'Tc' } ]
     , summary: [ { type: 'pot', single: true, amount: 3480 } ]
     , hero: 'Player6'
     , holecards: { card1: 'As', card2: 'Tc' } } ])
  t.end()
})
