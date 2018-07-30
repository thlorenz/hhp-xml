'use strict'

const file = require('./util/guess-fixture-name')(__filename)

const test = require('tape')
const processFile = require('./util/process-ipoker')
// eslint-disable-next-line no-unused-vars
const ocat = require('ocat').applyRes5Opts()
const spok = require('spok')

test(`ipoker: ${file} first 100`, function(t) {
  const res = processFile(file)
  spok(t, res.slice(0, 100),
    [ { seats:
        [ { seatno: 1, player: 'h3llr4zor', chips: 104.4 }
        , { seatno: 3, player: 'Imfairminded', chips: 199 }
        , { seatno: 5, player: 'samsung77', chips: 100 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 14
        , min: 9
        , sec: 49
        , hero: null
        , handid: '7973132732'
        , gameno: '7973132732'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 6
        , button: 3 }
     , board:
        { card1: 'Th', card2: '8s', card3: '6c', card4: '7s', card5: '9c' }
     , posts:
        [ { player: 'samsung77', type: 'sb', amount: 0.5 }
        , { player: 'h3llr4zor', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'Imfairminded', type: 'raise', amount: 2, raiseTo: 2 }
        , { player: 'samsung77', type: 'raise', amount: 7, raiseTo: 9 }
        , { player: 'h3llr4zor', type: 'call', amount: 8 }
        , { player: 'Imfairminded', type: 'fold' } ]
     , flop:
        [ { player: 'samsung77', type: 'check' }
        , { player: 'h3llr4zor', type: 'check' } ]
     , turn:
        [ { player: 'samsung77', type: 'check' }
        , { player: 'h3llr4zor', type: 'check' } ]
     , river:
        [ { player: 'samsung77', type: 'check' }
        , { player: 'h3llr4zor', type: 'check' } ]
     , showdown:
        [ { player: 'h3llr4zor', type: 'collect', amount: 9.5 }
        , { player: 'samsung77', type: 'collect', amount: 9.5 }
        , { player: 'samsung77', type: 'show', card1: 'Ah', card2: 'Qh' }
        , { player: 'h3llr4zor', type: 'show', card1: 'Kh', card2: 'Kd' } ]
     , summary: [ { type: 'pot', single: false, amount: 19 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'h3llr4zor', chips: 104.9 }
        , { seatno: 3, player: 'Imfairminded', chips: 197 }
        , { seatno: 5, player: 'samsung77', chips: 100.5 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 14
        , min: 10
        , sec: 40
        , hero: null
        , handid: '7973133244'
        , gameno: '7973133244'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 6
        , button: 5 }
     , board: {}
     , posts:
        [ { player: 'h3llr4zor', type: 'sb', amount: 0.5 }
        , { player: 'Imfairminded', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'samsung77', type: 'raise', amount: 2, raiseTo: 2 }
        , { player: 'h3llr4zor', type: 'fold' }
        , { player: 'Imfairminded', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'samsung77', type: 'collect', amount: 2.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 2.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'h3llr4zor', chips: 104.4 }
        , { seatno: 3, player: 'Imfairminded', chips: 196 }
        , { seatno: 5, player: 'samsung77', chips: 102 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 14
        , min: 10
        , sec: 55
        , hero: null
        , handid: '7973133299'
        , gameno: '7973133299'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 6
        , button: 1 }
     , board: { card1: '8s', card2: '6h', card3: 'Ah' }
     , posts:
        [ { player: 'Imfairminded', type: 'sb', amount: 0.5 }
        , { player: 'samsung77', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'h3llr4zor', type: 'fold' }
        , { player: 'Imfairminded', type: 'raise', amount: 3, raiseTo: 3 }
        , { player: 'samsung77', type: 'call', amount: 2 } ]
     , flop:
        [ { player: 'Imfairminded', type: 'bet', amount: 3 }
        , { player: 'samsung77', type: 'fold' } ]
     , turn: []
     , river: []
     , showdown: [ { player: 'Imfairminded', type: 'collect', amount: 5.7 } ]
     , summary: [ { type: 'pot', single: true, amount: 5.7 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'h3llr4zor', chips: 104.4 }
        , { seatno: 3, player: 'Imfairminded', chips: 198.7 }
        , { seatno: 5, player: 'samsung77', chips: 100 }
        , { seatno: 6, player: 'GrifonnS', chips: 100 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 14
        , min: 11
        , sec: 25
        , hero: null
        , handid: '7973133404'
        , gameno: '7973133404'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 6
        , button: 3 }
     , board: {}
     , posts:
        [ { player: 'samsung77', type: 'sb', amount: 0.5 }
        , { player: 'GrifonnS', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'h3llr4zor', type: 'raise', amount: 2, raiseTo: 2 }
        , { player: 'Imfairminded', type: 'fold' }
        , { player: 'samsung77', type: 'fold' }
        , { player: 'GrifonnS', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'h3llr4zor', type: 'collect', amount: 2.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 2.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'h3llr4zor', chips: 105.9 }
        , { seatno: 3, player: 'Imfairminded', chips: 198.7 }
        , { seatno: 5, player: 'samsung77', chips: 100 }
        , { seatno: 6, player: 'GrifonnS', chips: 100 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 14
        , min: 11
        , sec: 39
        , hero: null
        , handid: '7973133459'
        , gameno: '7973133459'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 6
        , button: 5 }
     , board:
        { card1: 'Jh', card2: '5d', card3: '3d', card4: '6c', card5: '6s' }
     , posts:
        [ { player: 'GrifonnS', type: 'sb', amount: 0.5 }
        , { player: 'h3llr4zor', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'Imfairminded', type: 'raise', amount: 2, raiseTo: 2 }
        , { player: 'samsung77', type: 'fold' }
        , { player: 'GrifonnS', type: 'fold' }
        , { player: 'h3llr4zor', type: 'call', amount: 1 } ]
     , flop:
        [ { player: 'h3llr4zor', type: 'check' }
        , { player: 'Imfairminded', type: 'bet', amount: 2 }
        , { player: 'h3llr4zor', type: 'call', amount: 2 } ]
     , turn:
        [ { player: 'h3llr4zor', type: 'check' }
        , { player: 'Imfairminded', type: 'check' } ]
     , river:
        [ { player: 'h3llr4zor', type: 'check' }
        , { player: 'Imfairminded', type: 'check' } ]
     , showdown:
        [ { player: 'h3llr4zor', type: 'collect', amount: 8.08 }
        , { player: 'h3llr4zor', type: 'show', card1: 'Th', card2: 'Jd' } ]
     , summary: [ { type: 'pot', single: true, amount: 8.08 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'h3llr4zor', chips: 109.98 }
        , { seatno: 3, player: 'Imfairminded', chips: 194.7 }
        , { seatno: 5, player: 'samsung77', chips: 100 }
        , { seatno: 6, player: 'GrifonnS', chips: 100 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 14
        , min: 12
        , sec: 38
        , hero: null
        , handid: '7973133684'
        , gameno: '7973133684'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 6
        , button: 6 }
     , board:
        { card1: '8s', card2: '9h', card3: 'Kc', card4: '3s', card5: '6d' }
     , posts:
        [ { player: 'h3llr4zor', type: 'sb', amount: 0.5 }
        , { player: 'Imfairminded', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'samsung77', type: 'fold' }
        , { player: 'GrifonnS', type: 'raise', amount: 2, raiseTo: 2 }
        , { player: 'h3llr4zor', type: 'call', amount: 1.5 }
        , { player: 'Imfairminded', type: 'call', amount: 1 } ]
     , flop:
        [ { player: 'h3llr4zor', type: 'check' }
        , { player: 'Imfairminded', type: 'check' }
        , { player: 'GrifonnS', type: 'check' } ]
     , turn:
        [ { player: 'h3llr4zor', type: 'check' }
        , { player: 'Imfairminded', type: 'check' }
        , { player: 'GrifonnS', type: 'check' } ]
     , river:
        [ { player: 'h3llr4zor', type: 'bet', amount: 3 }
        , { player: 'Imfairminded', type: 'fold' }
        , { player: 'GrifonnS', type: 'call', amount: 3 } ]
     , showdown:
        [ { player: 'h3llr4zor', type: 'collect', amount: 11.4 }
        , { player: 'h3llr4zor', type: 'show', card1: '9d', card2: 'Kd' } ]
     , summary: [ { type: 'pot', single: true, amount: 11.4 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'h3llr4zor', chips: 116.38 }
        , { seatno: 3, player: 'Imfairminded', chips: 192.7 }
        , { seatno: 6, player: 'GrifonnS', chips: 100 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 14
        , min: 13
        , sec: 43
        , hero: null
        , handid: '7973133935'
        , gameno: '7973133935'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 6
        , button: 1 }
     , board: {}
     , posts:
        [ { player: 'Imfairminded', type: 'sb', amount: 0.5 }
        , { player: 'GrifonnS', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'h3llr4zor', type: 'raise', amount: 2, raiseTo: 2 }
        , { player: 'Imfairminded', type: 'fold' }
        , { player: 'GrifonnS', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'h3llr4zor', type: 'collect', amount: 2.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 2.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'h3llr4zor', chips: 117.88 }
        , { seatno: 3, player: 'Imfairminded', chips: 192.2 }
        , { seatno: 6, player: 'GrifonnS', chips: 100 }
        , { seatno: 8, player: '48085832', chips: 100 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 14
        , min: 13
        , sec: 56
        , hero: null
        , handid: '7973133972'
        , gameno: '7973133972'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 6
        , button: 3 }
     , board: {}
     , posts:
        [ { player: 'GrifonnS', type: 'sb', amount: 0.5 }
        , { player: '48085832', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'h3llr4zor', type: 'fold' }
        , { player: 'Imfairminded', type: 'fold' }
        , { player: 'GrifonnS', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: '48085832', type: 'collect', amount: 1 } ]
     , summary: [ { type: 'pot', single: true, amount: 1 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'h3llr4zor', chips: 117.88 }
        , { seatno: 3, player: 'Imfairminded', chips: 192.2 }
        , { seatno: 6, player: 'GrifonnS', chips: 100 }
        , { seatno: 8, player: '48085832', chips: 100.5 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 14
        , min: 14
        , sec: 18
        , hero: null
        , handid: '7973134247'
        , gameno: '7973134247'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 6
        , button: 6 }
     , board: { card1: '4c', card2: 'Kc', card3: 'Jc', card4: '5h' }
     , posts:
        [ { player: '48085832', type: 'sb', amount: 0.5 }
        , { player: 'h3llr4zor', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'Imfairminded', type: 'raise', amount: 2, raiseTo: 2 }
        , { player: 'GrifonnS', type: 'fold' }
        , { player: '48085832', type: 'call', amount: 1.5 }
        , { player: 'h3llr4zor', type: 'fold' } ]
     , flop:
        [ { player: '48085832', type: 'check' }
        , { player: 'Imfairminded', type: 'bet', amount: 2 }
        , { player: '48085832', type: 'call', amount: 2 } ]
     , turn:
        [ { player: '48085832', type: 'check' }
        , { player: 'Imfairminded', type: 'bet', amount: 5 }
        , { player: '48085832', type: 'raise', amount: 10, raiseTo: 15 }
        , { player: 'Imfairminded', type: 'raise', amount: 25, raiseTo: 40 }
        , { player: '48085832', type: 'fold' } ]
     , river: []
     , showdown:
        [ { player: 'Imfairminded', type: 'collect', amount: 37.05 } ]
     , summary: [ { type: 'pot', single: true, amount: 37.05 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'h3llr4zor', chips: 116.88 }
        , { seatno: 3, player: 'Imfairminded', chips: 210.25 }
        , { seatno: 6, player: 'GrifonnS', chips: 100 }
        , { seatno: 8, player: '48085832', chips: 100 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 14
        , min: 15
        , sec: 32
        , hero: null
        , handid: '7973134484'
        , gameno: '7973134484'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 6
        , button: 8 }
     , board: {}
     , posts:
        [ { player: 'h3llr4zor', type: 'sb', amount: 0.5 }
        , { player: 'Imfairminded', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'GrifonnS', type: 'fold' }
        , { player: '48085832', type: 'fold' }
        , { player: 'h3llr4zor', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'Imfairminded', type: 'collect', amount: 1 } ]
     , summary: [ { type: 'pot', single: true, amount: 1 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'h3llr4zor', chips: 116.38 }
        , { seatno: 3, player: 'Imfairminded', chips: 210.75 }
        , { seatno: 6, player: 'GrifonnS', chips: 100 }
        , { seatno: 8, player: '48085832', chips: 100 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 14
        , min: 15
        , sec: 52
        , hero: null
        , handid: '7973135795'
        , gameno: '7973135795'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 6
        , button: 1 }
     , board: {}
     , posts:
        [ { player: 'Imfairminded', type: 'sb', amount: 0.5 }
        , { player: 'GrifonnS', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: '48085832', type: 'raise', amount: 2.5, raiseTo: 2.5 }
        , { player: 'h3llr4zor', type: 'fold' }
        , { player: 'Imfairminded', type: 'fold' }
        , { player: 'GrifonnS', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: '48085832', type: 'collect', amount: 2.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 2.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'h3llr4zor', chips: 116.38 }
        , { seatno: 3, player: 'Imfairminded', chips: 210.25 }
        , { seatno: 6, player: 'GrifonnS', chips: 100 }
        , { seatno: 8, player: '48085832', chips: 101.5 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 14
        , min: 16
        , sec: 18
        , hero: null
        , handid: '7973135884'
        , gameno: '7973135884'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 6
        , button: 3 }
     , board: {}
     , posts:
        [ { player: 'GrifonnS', type: 'sb', amount: 0.5 }
        , { player: '48085832', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'h3llr4zor', type: 'raise', amount: 2, raiseTo: 2 }
        , { player: 'Imfairminded', type: 'fold' }
        , { player: 'GrifonnS', type: 'fold' }
        , { player: '48085832', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'h3llr4zor', type: 'collect', amount: 2.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 2.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'h3llr4zor', chips: 117.88 }
        , { seatno: 3, player: 'Imfairminded', chips: 210.25 }
        , { seatno: 6, player: 'GrifonnS', chips: 100 }
        , { seatno: 8, player: '48085832', chips: 100.5 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 14
        , min: 16
        , sec: 41
        , hero: null
        , handid: '7973135951'
        , gameno: '7973135951'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 6
        , button: 6 }
     , board: {}
     , posts:
        [ { player: '48085832', type: 'sb', amount: 0.5 }
        , { player: 'h3llr4zor', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'Imfairminded', type: 'raise', amount: 2, raiseTo: 2 }
        , { player: 'GrifonnS', type: 'raise', amount: 4, raiseTo: 6 }
        , { player: '48085832', type: 'fold' }
        , { player: 'h3llr4zor', type: 'fold' }
        , { player: 'Imfairminded', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'GrifonnS', type: 'collect', amount: 5.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 5.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'h3llr4zor', chips: 116.88 }
        , { seatno: 3, player: 'Imfairminded', chips: 208.25 }
        , { seatno: 6, player: 'GrifonnS', chips: 103.5 }
        , { seatno: 8, player: '48085832', chips: 100 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 14
        , min: 17
        , sec: 10
        , hero: null
        , handid: '7973136038'
        , gameno: '7973136038'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 6
        , button: 8 }
     , board: {}
     , posts:
        [ { player: 'h3llr4zor', type: 'sb', amount: 0.5 }
        , { player: 'Imfairminded', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'GrifonnS', type: 'fold' }
        , { player: '48085832', type: 'fold' }
        , { player: 'h3llr4zor', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'Imfairminded', type: 'collect', amount: 1 } ]
     , summary: [ { type: 'pot', single: true, amount: 1 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'h3llr4zor', chips: 116.38 }
        , { seatno: 3, player: 'Imfairminded', chips: 208.75 }
        , { seatno: 8, player: '48085832', chips: 100 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 14
        , min: 18
        , sec: 9
        , hero: null
        , handid: '7973136712'
        , gameno: '7973136712'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 6
        , button: 1 }
     , board: {}
     , posts:
        [ { player: 'Imfairminded', type: 'sb', amount: 0.5 }
        , { player: '48085832', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'h3llr4zor', type: 'raise', amount: 2, raiseTo: 2 }
        , { player: 'Imfairminded', type: 'fold' }
        , { player: '48085832', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'h3llr4zor', type: 'collect', amount: 2.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 2.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'h3llr4zor', chips: 117.88 }
        , { seatno: 3, player: 'Imfairminded', chips: 208.25 }
        , { seatno: 8, player: '48085832', chips: 99 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 14
        , min: 18
        , sec: 30
        , hero: null
        , handid: '7973136784'
        , gameno: '7973136784'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 6
        , button: 3 }
     , board: { card1: 'Qs', card2: 'Qd', card3: '5s' }
     , posts:
        [ { player: '48085832', type: 'sb', amount: 0.5 }
        , { player: 'h3llr4zor', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'Imfairminded', type: 'raise', amount: 2, raiseTo: 2 }
        , { player: '48085832', type: 'fold' }
        , { player: 'h3llr4zor', type: 'call', amount: 1 } ]
     , flop:
        [ { player: 'h3llr4zor', type: 'check' }
        , { player: 'Imfairminded', type: 'bet', amount: 2 }
        , { player: 'h3llr4zor', type: 'fold' } ]
     , turn: []
     , river: []
     , showdown:
        [ { player: 'Imfairminded', type: 'collect', amount: 4.28 } ]
     , summary: [ { type: 'pot', single: true, amount: 4.28 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'h3llr4zor', chips: 115.88 }
        , { seatno: 3, player: 'Imfairminded', chips: 210.53 }
        , { seatno: 8, player: '48085832', chips: 98.5 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 14
        , min: 18
        , sec: 52
        , hero: null
        , handid: '7973136854'
        , gameno: '7973136854'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 6
        , button: 8 }
     , board: { card1: 'Tc', card2: 'Th', card3: 'Js' }
     , posts:
        [ { player: 'h3llr4zor', type: 'sb', amount: 0.5 }
        , { player: 'Imfairminded', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: '48085832', type: 'fold' }
        , { player: 'h3llr4zor', type: 'raise', amount: 2, raiseTo: 2 }
        , { player: 'Imfairminded', type: 'call', amount: 1 } ]
     , flop:
        [ { player: 'h3llr4zor', type: 'bet', amount: 2 }
        , { player: 'Imfairminded', type: 'fold' } ]
     , turn: []
     , river: []
     , showdown: [ { player: 'h3llr4zor', type: 'collect', amount: 3.8 } ]
     , summary: [ { type: 'pot', single: true, amount: 3.8 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'h3llr4zor', chips: 117.68 }
        , { seatno: 3, player: 'Imfairminded', chips: 208.53 }
        , { seatno: 5, player: 'CJHRZH', chips: 100 }
        , { seatno: 8, player: '48085832', chips: 98.5 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 14
        , min: 19
        , sec: 32
        , hero: null
        , handid: '7973138712'
        , gameno: '7973138712'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 6
        , button: 1 }
     , board:
        { card1: '5c', card2: '6s', card3: 'Kh', card4: 'Tc', card5: '4d' }
     , posts:
        [ { player: 'Imfairminded', type: 'sb', amount: 0.5 }
        , { player: 'CJHRZH', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: '48085832', type: 'fold' }
        , { player: 'h3llr4zor', type: 'raise', amount: 2, raiseTo: 2 }
        , { player: 'Imfairminded', type: 'raise', amount: 4, raiseTo: 6 }
        , { player: 'CJHRZH', type: 'fold' }
        , { player: 'h3llr4zor', type: 'call', amount: 4 } ]
     , flop:
        [ { player: 'Imfairminded', type: 'bet', amount: 5 }
        , { player: 'h3llr4zor', type: 'call', amount: 5 } ]
     , turn:
        [ { player: 'Imfairminded', type: 'check' }
        , { player: 'h3llr4zor', type: 'check' } ]
     , river:
        [ { player: 'Imfairminded', type: 'bet', amount: 12 }
        , { player: 'h3llr4zor', type: 'call', amount: 12 } ]
     , showdown:
        [ { player: 'Imfairminded', type: 'collect', amount: 44.65 }
        , { player: 'Imfairminded', type: 'show', card1: 'Kd', card2: 'Qd' } ]
     , summary: [ { type: 'pot', single: true, amount: 44.65 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'h3llr4zor', chips: 100 }
        , { seatno: 3, player: 'Imfairminded', chips: 230.18 }
        , { seatno: 5, player: 'CJHRZH', chips: 100 }
        , { seatno: 6, player: 'HOOKD001', chips: 100 }
        , { seatno: 8, player: '48085832', chips: 98.5 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 14
        , min: 20
        , sec: 39
        , hero: null
        , handid: '7973139185'
        , gameno: '7973139185'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 6
        , button: 3 }
     , board: { card1: 'Qd', card2: 'As', card3: 'Ah', card4: '7h' }
     , posts:
        [ { player: 'CJHRZH', type: 'sb', amount: 0.5 }
        , { player: 'HOOKD001', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: '48085832', type: 'fold' }
        , { player: 'h3llr4zor', type: 'fold' }
        , { player: 'Imfairminded', type: 'raise', amount: 2, raiseTo: 2 }
        , { player: 'CJHRZH', type: 'call', amount: 1.5 }
        , { player: 'HOOKD001', type: 'fold' } ]
     , flop:
        [ { player: 'CJHRZH', type: 'check' }
        , { player: 'Imfairminded', type: 'bet', amount: 2 }
        , { player: 'CJHRZH', type: 'call', amount: 2 } ]
     , turn:
        [ { player: 'CJHRZH', type: 'check' }
        , { player: 'Imfairminded', type: 'bet', amount: 5 }
        , { player: 'CJHRZH', type: 'fold' } ]
     , river: []
     , showdown:
        [ { player: 'Imfairminded', type: 'collect', amount: 8.55 } ]
     , summary: [ { type: 'pot', single: true, amount: 8.55 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'h3llr4zor', chips: 100 }
        , { seatno: 3, player: 'Imfairminded', chips: 234.73 }
        , { seatno: 5, player: 'CJHRZH', chips: 100 }
        , { seatno: 6, player: 'HOOKD001', chips: 99 }
        , { seatno: 10, player: '1ntr4nce', chips: 100 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 14
        , min: 21
        , sec: 32
        , hero: null
        , handid: '7973140687'
        , gameno: '7973140687'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 5 }
     , board: {}
     , posts:
        [ { player: 'HOOKD001', type: 'sb', amount: 0.5 }
        , { player: '1ntr4nce', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'h3llr4zor', type: 'raise', amount: 2, raiseTo: 2 }
        , { player: 'Imfairminded', type: 'fold' }
        , { player: 'CJHRZH', type: 'fold' }
        , { player: 'HOOKD001', type: 'fold' }
        , { player: '1ntr4nce', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'h3llr4zor', type: 'collect', amount: 2.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 2.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'h3llr4zor', chips: 101.5 }
        , { seatno: 3, player: 'Imfairminded', chips: 234.73 }
        , { seatno: 5, player: 'CJHRZH', chips: 100 }
        , { seatno: 6, player: 'HOOKD001', chips: 98.5 }
        , { seatno: 10, player: '1ntr4nce', chips: 100 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 14
        , min: 21
        , sec: 58
        , hero: null
        , handid: '7973141439'
        , gameno: '7973141439'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 6 }
     , board:
        { card1: '4h', card2: '4s', card3: '9s', card4: '6s', card5: 'Qd' }
     , posts:
        [ { player: '1ntr4nce', type: 'sb', amount: 0.5 }
        , { player: 'h3llr4zor', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'Imfairminded', type: 'fold' }
        , { player: 'CJHRZH', type: 'fold' }
        , { player: 'HOOKD001', type: 'raise', amount: 2.5, raiseTo: 2.5 }
        , { player: '1ntr4nce', type: 'raise', amount: 6.5, raiseTo: 9 }
        , { player: 'h3llr4zor', type: 'call', amount: 8 }
        , { player: 'HOOKD001', type: 'raise', amount: 30.5, raiseTo: 38.5 }
        , { player: '1ntr4nce', type: 'fold' }
        , { player: 'h3llr4zor', type: 'raise', amount: 63, raiseTo: 101.5 }
        , { player: 'HOOKD001', type: 'call', amount: 60, allin: true } ]
     , flop: []
     , turn: []
     , river: []
     , showdown:
        [ { player: 'h3llr4zor', type: 'collect', amount: 202 }
        , { player: 'HOOKD001', type: 'show', card1: 'Kh', card2: 'Ad' }
        , { player: 'h3llr4zor', type: 'show', card1: 'As', card2: 'Ks' } ]
     , summary: [ { type: 'pot', single: true, amount: 202 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'h3llr4zor', chips: 205 }
        , { seatno: 3, player: 'Imfairminded', chips: 234.73 }
        , { seatno: 5, player: 'CJHRZH', chips: 100 }
        , { seatno: 6, player: 'HOOKD001', chips: 100 }
        , { seatno: 10, player: '1ntr4nce', chips: 100 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 14
        , min: 22
        , sec: 56
        , hero: null
        , handid: '7973141620'
        , gameno: '7973141620'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 10 }
     , board:
        { card1: '7h', card2: 'Qd', card3: 'Qc', card4: '4d', card5: 'Ts' }
     , posts:
        [ { player: 'h3llr4zor', type: 'sb', amount: 0.5 }
        , { player: 'Imfairminded', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'CJHRZH', type: 'fold' }
        , { player: 'HOOKD001', type: 'fold' }
        , { player: '1ntr4nce', type: 'fold' }
        , { player: 'h3llr4zor', type: 'raise', amount: 2, raiseTo: 2 }
        , { player: 'Imfairminded', type: 'call', amount: 1 } ]
     , flop:
        [ { player: 'h3llr4zor', type: 'check' }
        , { player: 'Imfairminded', type: 'check' } ]
     , turn:
        [ { player: 'h3llr4zor', type: 'check' }
        , { player: 'Imfairminded', type: 'check' } ]
     , river:
        [ { player: 'h3llr4zor', type: 'check' }
        , { player: 'Imfairminded', type: 'check' } ]
     , showdown:
        [ { player: 'Imfairminded', type: 'collect', amount: 3.8 }
        , { player: 'Imfairminded', type: 'show', card1: '2d', card2: 'Kd' } ]
     , summary: [ { type: 'pot', single: true, amount: 3.8 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'h3llr4zor', chips: 203 }
        , { seatno: 3, player: 'Imfairminded', chips: 236.53 }
        , { seatno: 5, player: 'CJHRZH', chips: 100 }
        , { seatno: 6, player: 'HOOKD001', chips: 100 }
        , { seatno: 10, player: '1ntr4nce', chips: 100 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 14
        , min: 23
        , sec: 40
        , hero: null
        , handid: '7973141759'
        , gameno: '7973141759'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 1 }
     , board:
        { card1: '7c', card2: '6h', card3: 'Kd', card4: 'Qc', card5: '5c' }
     , posts:
        [ { player: 'Imfairminded', type: 'sb', amount: 0.5 }
        , { player: 'CJHRZH', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'HOOKD001', type: 'fold' }
        , { player: '1ntr4nce', type: 'raise', amount: 2.5, raiseTo: 2.5 }
        , { player: 'h3llr4zor', type: 'call', amount: 2.5 }
        , { player: 'Imfairminded', type: 'fold' }
        , { player: 'CJHRZH', type: 'fold' } ]
     , flop:
        [ { player: '1ntr4nce', type: 'bet', amount: 3 }
        , { player: 'h3llr4zor', type: 'call', amount: 3 } ]
     , turn:
        [ { player: '1ntr4nce', type: 'check' }
        , { player: 'h3llr4zor', type: 'check' } ]
     , river:
        [ { player: '1ntr4nce', type: 'check' }
        , { player: 'h3llr4zor', type: 'check' } ]
     , showdown:
        [ { player: 'h3llr4zor', type: 'collect', amount: 11.88 }
        , { player: 'h3llr4zor', type: 'show', card1: 'As', card2: 'Ac' } ]
     , summary: [ { type: 'pot', single: true, amount: 11.88 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'h3llr4zor', chips: 209.38 }
        , { seatno: 3, player: 'Imfairminded', chips: 236.03 }
        , { seatno: 5, player: 'CJHRZH', chips: 100 }
        , { seatno: 6, player: 'HOOKD001', chips: 100 }
        , { seatno: 10, player: '1ntr4nce', chips: 100 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 14
        , min: 24
        , sec: 41
        , hero: null
        , handid: '7973141967'
        , gameno: '7973141967'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 3 }
     , board: {}
     , posts:
        [ { player: 'CJHRZH', type: 'sb', amount: 0.5 }
        , { player: 'HOOKD001', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: '1ntr4nce', type: 'fold' }
        , { player: 'h3llr4zor', type: 'raise', amount: 2, raiseTo: 2 }
        , { player: 'Imfairminded', type: 'fold' }
        , { player: 'CJHRZH', type: 'fold' }
        , { player: 'HOOKD001', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'h3llr4zor', type: 'collect', amount: 2.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 2.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'h3llr4zor', chips: 210.88 }
        , { seatno: 3, player: 'Imfairminded', chips: 236.03 }
        , { seatno: 5, player: 'CJHRZH', chips: 100 }
        , { seatno: 6, player: 'HOOKD001', chips: 99 }
        , { seatno: 8, player: '48085832', chips: 98.5 }
        , { seatno: 10, player: '1ntr4nce', chips: 100 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 14
        , min: 25
        , sec: 0
        , hero: null
        , handid: '7973142021'
        , gameno: '7973142021'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 5 }
     , board:
        { card1: '2c', card2: 'Qc', card3: '8d', card4: '6d', card5: '5d' }
     , posts:
        [ { player: 'HOOKD001', type: 'sb', amount: 0.5 }
        , { player: '48085832', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: '1ntr4nce', type: 'fold' }
        , { player: 'h3llr4zor', type: 'raise', amount: 2, raiseTo: 2 }
        , { player: 'Imfairminded', type: 'fold' }
        , { player: 'CJHRZH', type: 'call', amount: 2 }
        , { player: 'HOOKD001', type: 'fold' }
        , { player: '48085832', type: 'fold' } ]
     , flop:
        [ { player: 'h3llr4zor', type: 'bet', amount: 2.75 }
        , { player: 'CJHRZH', type: 'call', amount: 2.75 } ]
     , turn:
        [ { player: 'h3llr4zor', type: 'check' }
        , { player: 'CJHRZH', type: 'bet', amount: 6 }
        , { player: 'h3llr4zor', type: 'call', amount: 6 } ]
     , river:
        [ { player: 'h3llr4zor', type: 'check' }
        , { player: 'CJHRZH', type: 'check' } ]
     , showdown:
        [ { player: 'h3llr4zor', type: 'collect', amount: 21.85 }
        , { player: 'h3llr4zor', type: 'show', card1: 'Qd', card2: 'Kh' } ]
     , summary: [ { type: 'pot', single: true, amount: 21.85 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'h3llr4zor', chips: 221.98 }
        , { seatno: 3, player: 'Imfairminded', chips: 236.03 }
        , { seatno: 5, player: 'CJHRZH', chips: 100 }
        , { seatno: 6, player: 'HOOKD001', chips: 98.5 }
        , { seatno: 8, player: '48085832', chips: 97.5 }
        , { seatno: 10, player: '1ntr4nce', chips: 100 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 14
        , min: 25
        , sec: 53
        , hero: null
        , handid: '7973143311'
        , gameno: '7973143311'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 6 }
     , board: { card1: 'Ad', card2: 'Kd', card3: '5d', card4: '6s' }
     , posts:
        [ { player: '48085832', type: 'sb', amount: 0.5 }
        , { player: '1ntr4nce', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'h3llr4zor', type: 'fold' }
        , { player: 'Imfairminded', type: 'fold' }
        , { player: 'CJHRZH', type: 'fold' }
        , { player: 'HOOKD001', type: 'raise', amount: 2.5, raiseTo: 2.5 }
        , { player: '48085832', type: 'fold' }
        , { player: '1ntr4nce', type: 'call', amount: 1.5 } ]
     , flop:
        [ { player: '1ntr4nce', type: 'check' }
        , { player: 'HOOKD001', type: 'check' } ]
     , turn:
        [ { player: '1ntr4nce', type: 'check' }
        , { player: 'HOOKD001', type: 'bet', amount: 3.3 }
        , { player: '1ntr4nce', type: 'fold' } ]
     , river: []
     , showdown: [ { player: 'HOOKD001', type: 'collect', amount: 5.23 } ]
     , summary: [ { type: 'pot', single: true, amount: 5.23 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'h3llr4zor', chips: 221.98 }
        , { seatno: 3, player: 'Imfairminded', chips: 236.03 }
        , { seatno: 5, player: 'CJHRZH', chips: 100 }
        , { seatno: 6, player: 'HOOKD001', chips: 101.23 }
        , { seatno: 8, player: '48085832', chips: 97 }
        , { seatno: 10, player: '1ntr4nce', chips: 100 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 14
        , min: 26
        , sec: 46
        , hero: null
        , handid: '7973143491'
        , gameno: '7973143491'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 8 }
     , board: {}
     , posts:
        [ { player: '1ntr4nce', type: 'sb', amount: 0.5 }
        , { player: 'h3llr4zor', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'Imfairminded', type: 'fold' }
        , { player: 'CJHRZH', type: 'raise', amount: 2.5, raiseTo: 2.5 }
        , { player: 'HOOKD001', type: 'fold' }
        , { player: '48085832', type: 'fold' }
        , { player: '1ntr4nce', type: 'fold' }
        , { player: 'h3llr4zor', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'CJHRZH', type: 'collect', amount: 2.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 2.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'h3llr4zor', chips: 220.98 }
        , { seatno: 3, player: 'Imfairminded', chips: 236.03 }
        , { seatno: 5, player: 'CJHRZH', chips: 101.5 }
        , { seatno: 6, player: 'HOOKD001', chips: 101.23 }
        , { seatno: 8, player: '48085832', chips: 97 }
        , { seatno: 10, player: '1ntr4nce', chips: 100 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 14
        , min: 27
        , sec: 10
        , hero: null
        , handid: '7973144046'
        , gameno: '7973144046'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 10 }
     , board: {}
     , posts:
        [ { player: 'h3llr4zor', type: 'sb', amount: 0.5 }
        , { player: 'Imfairminded', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'CJHRZH', type: 'fold' }
        , { player: 'HOOKD001', type: 'fold' }
        , { player: '48085832', type: 'fold' }
        , { player: '1ntr4nce', type: 'fold' }
        , { player: 'h3llr4zor', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'Imfairminded', type: 'collect', amount: 1 } ]
     , summary: [ { type: 'pot', single: true, amount: 1 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'h3llr4zor', chips: 220.48 }
        , { seatno: 3, player: 'Imfairminded', chips: 236.53 }
        , { seatno: 5, player: 'CJHRZH', chips: 101.5 }
        , { seatno: 6, player: 'HOOKD001', chips: 101.23 }
        , { seatno: 8, player: '48085832', chips: 97 }
        , { seatno: 10, player: '1ntr4nce', chips: 100 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 14
        , min: 27
        , sec: 34
        , hero: null
        , handid: '7973144119'
        , gameno: '7973144119'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 1 }
     , board: {}
     , posts:
        [ { player: 'Imfairminded', type: 'sb', amount: 0.5 }
        , { player: 'CJHRZH', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'HOOKD001', type: 'fold' }
        , { player: '48085832', type: 'fold' }
        , { player: '1ntr4nce', type: 'fold' }
        , { player: 'h3llr4zor', type: 'fold' }
        , { player: 'Imfairminded', type: 'raise', amount: 3, raiseTo: 3 }
        , { player: 'CJHRZH', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'Imfairminded', type: 'collect', amount: 2 } ]
     , summary: [ { type: 'pot', single: true, amount: 2 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'h3llr4zor', chips: 220.48 }
        , { seatno: 3, player: 'Imfairminded', chips: 237.53 }
        , { seatno: 5, player: 'CJHRZH', chips: 100.5 }
        , { seatno: 6, player: 'HOOKD001', chips: 101.23 }
        , { seatno: 8, player: '48085832', chips: 97 }
        , { seatno: 10, player: '1ntr4nce', chips: 100 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 14
        , min: 28
        , sec: 15
        , hero: null
        , handid: '7973145665'
        , gameno: '7973145665'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 3 }
     , board: {}
     , posts:
        [ { player: 'CJHRZH', type: 'sb', amount: 0.5 }
        , { player: 'HOOKD001', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: '48085832', type: 'fold' }
        , { player: '1ntr4nce', type: 'fold' }
        , { player: 'h3llr4zor', type: 'raise', amount: 2, raiseTo: 2 }
        , { player: 'Imfairminded', type: 'fold' }
        , { player: 'CJHRZH', type: 'fold' }
        , { player: 'HOOKD001', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'h3llr4zor', type: 'collect', amount: 2.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 2.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'h3llr4zor', chips: 221.98 }
        , { seatno: 3, player: 'Imfairminded', chips: 237.53 }
        , { seatno: 5, player: 'CJHRZH', chips: 100 }
        , { seatno: 6, player: 'HOOKD001', chips: 100.23 }
        , { seatno: 10, player: '1ntr4nce', chips: 100 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 14
        , min: 28
        , sec: 30
        , hero: null
        , handid: '7973145724'
        , gameno: '7973145724'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 5 }
     , board: { card1: '7s', card2: '8d', card3: '7d' }
     , posts:
        [ { player: 'HOOKD001', type: 'sb', amount: 0.5 }
        , { player: '1ntr4nce', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'h3llr4zor', type: 'raise', amount: 2, raiseTo: 2 }
        , { player: 'Imfairminded', type: 'fold' }
        , { player: 'CJHRZH', type: 'raise', amount: 6, raiseTo: 8 }
        , { player: 'HOOKD001', type: 'fold' }
        , { player: '1ntr4nce', type: 'fold' }
        , { player: 'h3llr4zor', type: 'call', amount: 6 } ]
     , flop:
        [ { player: 'h3llr4zor', type: 'check' }
        , { player: 'CJHRZH', type: 'bet', amount: 9 }
        , { player: 'h3llr4zor', type: 'fold' } ]
     , turn: []
     , river: []
     , showdown: [ { player: 'CJHRZH', type: 'collect', amount: 16.63 } ]
     , summary: [ { type: 'pot', single: true, amount: 16.63 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'h3llr4zor', chips: 213.98 }
        , { seatno: 3, player: 'Imfairminded', chips: 237.53 }
        , { seatno: 5, player: 'CJHRZH', chips: 108.63 }
        , { seatno: 6, player: 'HOOKD001', chips: 99.73 }
        , { seatno: 10, player: '1ntr4nce', chips: 100 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 14
        , min: 29
        , sec: 20
        , hero: null
        , handid: '7973145892'
        , gameno: '7973145892'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 6 }
     , board: { card1: '6c', card2: 'Qs', card3: 'Td' }
     , posts:
        [ { player: '1ntr4nce', type: 'sb', amount: 0.5 }
        , { player: 'h3llr4zor', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'Imfairminded', type: 'fold' }
        , { player: 'CJHRZH', type: 'fold' }
        , { player: 'HOOKD001', type: 'raise', amount: 2.5, raiseTo: 2.5 }
        , { player: '1ntr4nce', type: 'fold' }
        , { player: 'h3llr4zor', type: 'call', amount: 1.5 } ]
     , flop:
        [ { player: 'h3llr4zor', type: 'check' }
        , { player: 'HOOKD001', type: 'bet', amount: 3.3 }
        , { player: 'h3llr4zor', type: 'fold' } ]
     , turn: []
     , river: []
     , showdown: [ { player: 'HOOKD001', type: 'collect', amount: 5.23 } ]
     , summary: [ { type: 'pot', single: true, amount: 5.23 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'h3llr4zor', chips: 211.48 }
        , { seatno: 3, player: 'Imfairminded', chips: 237.53 }
        , { seatno: 5, player: 'CJHRZH', chips: 108.63 }
        , { seatno: 6, player: 'HOOKD001', chips: 102.46 }
        , { seatno: 10, player: '1ntr4nce', chips: 100 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 14
        , min: 30
        , sec: 2
        , hero: null
        , handid: '7973146252'
        , gameno: '7973146252'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 10 }
     , board: {}
     , posts:
        [ { player: 'h3llr4zor', type: 'sb', amount: 0.5 }
        , { player: 'Imfairminded', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'CJHRZH', type: 'fold' }
        , { player: 'HOOKD001', type: 'fold' }
        , { player: '1ntr4nce', type: 'fold' }
        , { player: 'h3llr4zor', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'Imfairminded', type: 'collect', amount: 1 } ]
     , summary: [ { type: 'pot', single: true, amount: 1 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'h3llr4zor', chips: 210.98 }
        , { seatno: 3, player: 'Imfairminded', chips: 238.03 }
        , { seatno: 5, player: 'CJHRZH', chips: 108.63 }
        , { seatno: 6, player: 'HOOKD001', chips: 102.46 }
        , { seatno: 10, player: '1ntr4nce', chips: 100 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 14
        , min: 30
        , sec: 17
        , hero: null
        , handid: '7973146299'
        , gameno: '7973146299'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 1 }
     , board: {}
     , posts:
        [ { player: 'Imfairminded', type: 'sb', amount: 0.5 }
        , { player: 'CJHRZH', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'HOOKD001', type: 'fold' }
        , { player: '1ntr4nce', type: 'fold' }
        , { player: 'h3llr4zor', type: 'raise', amount: 2, raiseTo: 2 }
        , { player: 'Imfairminded', type: 'fold' }
        , { player: 'CJHRZH', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'h3llr4zor', type: 'collect', amount: 2.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 2.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'h3llr4zor', chips: 212.48 }
        , { seatno: 3, player: 'Imfairminded', chips: 237.53 }
        , { seatno: 5, player: 'CJHRZH', chips: 107.63 }
        , { seatno: 6, player: 'HOOKD001', chips: 102.46 }
        , { seatno: 10, player: '1ntr4nce', chips: 100 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 14
        , min: 30
        , sec: 39
        , hero: null
        , handid: '7973146380'
        , gameno: '7973146380'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 3 }
     , board: { card1: '4d', card2: 'Qs', card3: 'Kd' }
     , posts:
        [ { player: 'CJHRZH', type: 'sb', amount: 0.5 }
        , { player: 'HOOKD001', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: '1ntr4nce', type: 'raise', amount: 3, raiseTo: 3 }
        , { player: 'h3llr4zor', type: 'fold' }
        , { player: 'Imfairminded', type: 'call', amount: 3 }
        , { player: 'CJHRZH', type: 'fold' }
        , { player: 'HOOKD001', type: 'fold' } ]
     , flop:
        [ { player: '1ntr4nce', type: 'check' }
        , { player: 'Imfairminded', type: 'bet', amount: 3 }
        , { player: '1ntr4nce', type: 'raise', amount: 8, raiseTo: 11 }
        , { player: 'Imfairminded', type: 'fold' } ]
     , turn: []
     , river: []
     , showdown: [ { player: '1ntr4nce', type: 'collect', amount: 12.83 } ]
     , summary: [ { type: 'pot', single: true, amount: 12.83 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'h3llr4zor', chips: 212.48 }
        , { seatno: 3, player: 'Imfairminded', chips: 231.53 }
        , { seatno: 5, player: 'CJHRZH', chips: 107.13 }
        , { seatno: 6, player: 'HOOKD001', chips: 101.46 }
        , { seatno: 8, player: 'Pharlll', chips: 100 }
        , { seatno: 10, player: '1ntr4nce', chips: 106.83 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 14
        , min: 31
        , sec: 39
        , hero: null
        , handid: '7973146572'
        , gameno: '7973146572'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 5 }
     , board:
        { card1: '8c', card2: '6h', card3: '5c', card4: 'Qd', card5: '3s' }
     , posts:
        [ { player: 'HOOKD001', type: 'sb', amount: 0.5 }
        , { player: 'Pharlll', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: '1ntr4nce', type: 'fold' }
        , { player: 'h3llr4zor', type: 'fold' }
        , { player: 'Imfairminded', type: 'fold' }
        , { player: 'CJHRZH', type: 'fold' }
        , { player: 'HOOKD001', type: 'call', amount: 0.5 }
        , { player: 'Pharlll', type: 'raise', amount: 2.5, raiseTo: 3 }
        , { player: 'HOOKD001', type: 'call', amount: 2 } ]
     , flop:
        [ { player: 'HOOKD001', type: 'check' }
        , { player: 'Pharlll', type: 'check' } ]
     , turn:
        [ { player: 'HOOKD001', type: 'check' }
        , { player: 'Pharlll', type: 'check' } ]
     , river:
        [ { player: 'HOOKD001', type: 'bet', amount: 3.6 }
        , { player: 'Pharlll', type: 'call', amount: 3.6 } ]
     , showdown:
        [ { player: 'Pharlll', type: 'collect', amount: 12.54 }
        , { player: 'HOOKD001', type: 'show', card1: 'Th', card2: 'Jc' }
        , { player: 'Pharlll', type: 'show', card1: 'Ad', card2: 'Ks' } ]
     , summary: [ { type: 'pot', single: true, amount: 12.54 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'h3llr4zor', chips: 212.48 }
        , { seatno: 3, player: 'Imfairminded', chips: 231.53 }
        , { seatno: 5, player: 'CJHRZH', chips: 107.13 }
        , { seatno: 6, player: 'HOOKD001', chips: 94.86 }
        , { seatno: 8, player: 'Pharlll', chips: 105.94 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 14
        , min: 32
        , sec: 41
        , hero: null
        , handid: '7973148715'
        , gameno: '7973148715'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 6
        , button: 6 }
     , board: {}
     , posts:
        [ { player: 'Pharlll', type: 'sb', amount: 0.5 }
        , { player: 'h3llr4zor', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'Imfairminded', type: 'fold' }
        , { player: 'CJHRZH', type: 'fold' }
        , { player: 'HOOKD001', type: 'fold' }
        , { player: 'Pharlll', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'h3llr4zor', type: 'collect', amount: 1 } ]
     , summary: [ { type: 'pot', single: true, amount: 1 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'h3llr4zor', chips: 212.98 }
        , { seatno: 3, player: 'Imfairminded', chips: 231.53 }
        , { seatno: 5, player: 'CJHRZH', chips: 107.13 }
        , { seatno: 6, player: 'HOOKD001', chips: 94.86 }
        , { seatno: 8, player: 'Pharlll', chips: 105.44 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 14
        , min: 33
        , sec: 5
        , hero: null
        , handid: '7973148794'
        , gameno: '7973148794'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 6
        , button: 8 }
     , board: {}
     , posts:
        [ { player: 'h3llr4zor', type: 'sb', amount: 0.5 }
        , { player: 'Imfairminded', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'CJHRZH', type: 'fold' }
        , { player: 'HOOKD001', type: 'raise', amount: 2.5, raiseTo: 2.5 }
        , { player: 'Pharlll', type: 'fold' }
        , { player: 'h3llr4zor', type: 'fold' }
        , { player: 'Imfairminded', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'HOOKD001', type: 'collect', amount: 2.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 2.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'h3llr4zor', chips: 212.48 }
        , { seatno: 3, player: 'Imfairminded', chips: 230.53 }
        , { seatno: 5, player: 'CJHRZH', chips: 107.13 }
        , { seatno: 6, player: 'HOOKD001', chips: 96.36 }
        , { seatno: 8, player: 'Pharlll', chips: 105.44 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 14
        , min: 33
        , sec: 35
        , hero: null
        , handid: '7973149105'
        , gameno: '7973149105'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 6
        , button: 1 }
     , board: {}
     , posts:
        [ { player: 'Imfairminded', type: 'sb', amount: 0.5 }
        , { player: 'CJHRZH', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'HOOKD001', type: 'raise', amount: 3, raiseTo: 3 }
        , { player: 'Pharlll', type: 'fold' }
        , { player: 'h3llr4zor', type: 'fold' }
        , { player: 'Imfairminded', type: 'fold' }
        , { player: 'CJHRZH', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'HOOKD001', type: 'collect', amount: 2.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 2.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'h3llr4zor', chips: 212.48 }
        , { seatno: 3, player: 'Imfairminded', chips: 230.03 }
        , { seatno: 5, player: 'CJHRZH', chips: 106.13 }
        , { seatno: 6, player: 'HOOKD001', chips: 97.86 }
        , { seatno: 8, player: 'Pharlll', chips: 105.44 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 14
        , min: 33
        , sec: 57
        , hero: null
        , handid: '7973149175'
        , gameno: '7973149175'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 6
        , button: 3 }
     , board:
        { card1: 'Th', card2: 'Qc', card3: '9h', card4: 'Js', card5: 'Jd' }
     , posts:
        [ { player: 'CJHRZH', type: 'sb', amount: 0.5 }
        , { player: 'HOOKD001', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'Pharlll', type: 'fold' }
        , { player: 'h3llr4zor', type: 'raise', amount: 2, raiseTo: 2 }
        , { player: 'Imfairminded', type: 'raise', amount: 5, raiseTo: 7 }
        , { player: 'CJHRZH', type: 'fold' }
        , { player: 'HOOKD001', type: 'fold' }
        , { player: 'h3llr4zor', type: 'call', amount: 5 } ]
     , flop:
        [ { player: 'h3llr4zor', type: 'check' }
        , { player: 'Imfairminded', type: 'bet', amount: 5 }
        , { player: 'h3llr4zor', type: 'call', amount: 5 } ]
     , turn:
        [ { player: 'h3llr4zor', type: 'check' }
        , { player: 'Imfairminded', type: 'check' } ]
     , river:
        [ { player: 'h3llr4zor', type: 'check' }
        , { player: 'Imfairminded', type: 'bet', amount: 15 }
        , { player: 'h3llr4zor', type: 'call', amount: 15 } ]
     , showdown:
        [ { player: 'h3llr4zor', type: 'collect', amount: 52.73 }
        , { player: 'h3llr4zor', type: 'show', card1: 'Kh', card2: 'Ts' }
        , { player: 'Imfairminded', type: 'show', card1: '8d', card2: '6d' } ]
     , summary: [ { type: 'pot', single: true, amount: 52.73 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'h3llr4zor', chips: 238.21 }
        , { seatno: 3, player: 'Imfairminded', chips: 203.03 }
        , { seatno: 5, player: 'CJHRZH', chips: 105.63 }
        , { seatno: 6, player: 'HOOKD001', chips: 96.86 }
        , { seatno: 8, player: 'Pharlll', chips: 105.44 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 14
        , min: 35
        , sec: 43
        , hero: null
        , handid: '7973149506'
        , gameno: '7973149506'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 6
        , button: 5 }
     , board: {}
     , posts:
        [ { player: 'HOOKD001', type: 'sb', amount: 0.5 }
        , { player: 'Pharlll', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'h3llr4zor', type: 'fold' }
        , { player: 'Imfairminded', type: 'raise', amount: 2, raiseTo: 2 }
        , { player: 'CJHRZH', type: 'fold' }
        , { player: 'HOOKD001', type: 'fold' }
        , { player: 'Pharlll', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'Imfairminded', type: 'collect', amount: 2.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 2.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'h3llr4zor', chips: 238.21 }
        , { seatno: 3, player: 'Imfairminded', chips: 204.53 }
        , { seatno: 5, player: 'CJHRZH', chips: 105.63 }
        , { seatno: 6, player: 'HOOKD001', chips: 96.36 }
        , { seatno: 8, player: 'Pharlll', chips: 104.44 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 14
        , min: 36
        , sec: 3
        , hero: null
        , handid: '7973149580'
        , gameno: '7973149580'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 6
        , button: 6 }
     , board:
        { card1: 'Ah', card2: '2c', card3: 'Td', card4: '4s', card5: '8d' }
     , posts:
        [ { player: 'Pharlll', type: 'sb', amount: 0.5 }
        , { player: 'h3llr4zor', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'Imfairminded', type: 'raise', amount: 3, raiseTo: 3 }
        , { player: 'CJHRZH', type: 'call', amount: 3 }
        , { player: 'HOOKD001', type: 'fold' }
        , { player: 'Pharlll', type: 'fold' }
        , { player: 'h3llr4zor', type: 'fold' } ]
     , flop:
        [ { player: 'Imfairminded', type: 'bet', amount: 5 }
        , { player: 'CJHRZH', type: 'call', amount: 5 } ]
     , turn:
        [ { player: 'Imfairminded', type: 'check' }
        , { player: 'CJHRZH', type: 'check' } ]
     , river:
        [ { player: 'Imfairminded', type: 'check' }
        , { player: 'CJHRZH', type: 'check' } ]
     , showdown:
        [ { player: 'CJHRZH', type: 'collect', amount: 16.63 }
        , { player: 'CJHRZH', type: 'show', card1: 'As', card2: '7s' } ]
     , summary: [ { type: 'pot', single: true, amount: 16.63 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'h3llr4zor', chips: 237.21 }
        , { seatno: 3, player: 'Imfairminded', chips: 196.53 }
        , { seatno: 5, player: 'CJHRZH', chips: 114.26 }
        , { seatno: 6, player: 'HOOKD001', chips: 96.36 }
        , { seatno: 8, player: 'Pharlll', chips: 103.94 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 14
        , min: 36
        , sec: 59
        , hero: null
        , handid: '7973149777'
        , gameno: '7973149777'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 6
        , button: 8 }
     , board:
        { card1: 'Jc', card2: 'Ks', card3: '5h', card4: '6d', card5: '9d' }
     , posts:
        [ { player: 'h3llr4zor', type: 'sb', amount: 0.5 }
        , { player: 'Imfairminded', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'CJHRZH', type: 'raise', amount: 2.5, raiseTo: 2.5 }
        , { player: 'HOOKD001', type: 'call', amount: 2.5 }
        , { player: 'Pharlll', type: 'call', amount: 2.5 }
        , { player: 'h3llr4zor', type: 'fold' }
        , { player: 'Imfairminded', type: 'call', amount: 1.5 } ]
     , flop:
        [ { player: 'Imfairminded', type: 'check' }
        , { player: 'CJHRZH', type: 'check' }
        , { player: 'HOOKD001', type: 'check' }
        , { player: 'Pharlll', type: 'bet', amount: 3 }
        , { player: 'Imfairminded', type: 'call', amount: 3 }
        , { player: 'CJHRZH', type: 'call', amount: 3 }
        , { player: 'HOOKD001', type: 'fold' } ]
     , turn:
        [ { player: 'Imfairminded', type: 'check' }
        , { player: 'CJHRZH', type: 'check' }
        , { player: 'Pharlll', type: 'check' } ]
     , river:
        [ { player: 'Imfairminded', type: 'check' }
        , { player: 'CJHRZH', type: 'check' }
        , { player: 'Pharlll', type: 'bet', amount: 10 }
        , { player: 'Imfairminded', type: 'fold' }
        , { player: 'CJHRZH', type: 'call', amount: 10 } ]
     , showdown:
        [ { player: 'CJHRZH', type: 'collect', amount: 37.53 }
        , { player: 'CJHRZH', type: 'show', card1: 'Qh', card2: 'Qd' }
        , { player: 'Pharlll', type: 'show', card1: '7c', card2: '7h' } ]
     , summary: [ { type: 'pot', single: true, amount: 37.53 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'h3llr4zor', chips: 236.71 }
        , { seatno: 3, player: 'Imfairminded', chips: 191.03 }
        , { seatno: 5, player: 'CJHRZH', chips: 136.29 }
        , { seatno: 8, player: 'Pharlll', chips: 100 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 14
        , min: 38
        , sec: 46
        , hero: null
        , handid: '7973150369'
        , gameno: '7973150369'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 6
        , button: 1 }
     , board: {}
     , posts:
        [ { player: 'Imfairminded', type: 'sb', amount: 0.5 }
        , { player: 'CJHRZH', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'Pharlll', type: 'fold' }
        , { player: 'h3llr4zor', type: 'raise', amount: 2, raiseTo: 2 }
        , { player: 'Imfairminded', type: 'fold' }
        , { player: 'CJHRZH', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'h3llr4zor', type: 'collect', amount: 2.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 2.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'h3llr4zor', chips: 238.21 }
        , { seatno: 3, player: 'Imfairminded', chips: 190.53 }
        , { seatno: 5, player: 'CJHRZH', chips: 135.29 }
        , { seatno: 8, player: 'Pharlll', chips: 100 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 14
        , min: 39
        , sec: 2
        , hero: null
        , handid: '7973150414'
        , gameno: '7973150414'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 6
        , button: 3 }
     , board: {}
     , posts:
        [ { player: 'CJHRZH', type: 'sb', amount: 0.5 }
        , { player: 'Pharlll', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'h3llr4zor', type: 'fold' }
        , { player: 'Imfairminded', type: 'fold' }
        , { player: 'CJHRZH', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'Pharlll', type: 'collect', amount: 1 } ]
     , summary: [ { type: 'pot', single: true, amount: 1 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'h3llr4zor', chips: 238.21 }
        , { seatno: 3, player: 'Imfairminded', chips: 190.53 }
        , { seatno: 5, player: 'CJHRZH', chips: 134.79 }
        , { seatno: 8, player: 'Pharlll', chips: 100.5 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 14
        , min: 39
        , sec: 14
        , hero: null
        , handid: '7973150457'
        , gameno: '7973150457'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 6
        , button: 5 }
     , board: {}
     , posts:
        [ { player: 'Pharlll', type: 'sb', amount: 0.5 }
        , { player: 'h3llr4zor', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'Imfairminded', type: 'fold' }
        , { player: 'CJHRZH', type: 'fold' }
        , { player: 'Pharlll', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'h3llr4zor', type: 'collect', amount: 1 } ]
     , summary: [ { type: 'pot', single: true, amount: 1 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'h3llr4zor', chips: 238.71 }
        , { seatno: 3, player: 'Imfairminded', chips: 190.53 }
        , { seatno: 5, player: 'CJHRZH', chips: 134.79 }
        , { seatno: 8, player: 'Pharlll', chips: 100 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 14
        , min: 39
        , sec: 27
        , hero: null
        , handid: '7973150927'
        , gameno: '7973150927'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 6
        , button: 8 }
     , board: {}
     , posts:
        [ { player: 'h3llr4zor', type: 'sb', amount: 0.5 }
        , { player: 'Imfairminded', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'CJHRZH', type: 'fold' }
        , { player: 'Pharlll', type: 'raise', amount: 2, raiseTo: 2 }
        , { player: 'h3llr4zor', type: 'fold' }
        , { player: 'Imfairminded', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'Pharlll', type: 'collect', amount: 2.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 2.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'h3llr4zor', chips: 238.21 }
        , { seatno: 3, player: 'Imfairminded', chips: 189.53 }
        , { seatno: 5, player: 'CJHRZH', chips: 134.79 }
        , { seatno: 8, player: 'Pharlll', chips: 101.5 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 14
        , min: 39
        , sec: 58
        , hero: null
        , handid: '7973151045'
        , gameno: '7973151045'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 6
        , button: 1 }
     , board: {}
     , posts:
        [ { player: 'Imfairminded', type: 'sb', amount: 0.5 }
        , { player: 'CJHRZH', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'Pharlll', type: 'fold' }
        , { player: 'h3llr4zor', type: 'fold' }
        , { player: 'Imfairminded', type: 'raise', amount: 3, raiseTo: 3 }
        , { player: 'CJHRZH', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'Imfairminded', type: 'collect', amount: 2 } ]
     , summary: [ { type: 'pot', single: true, amount: 2 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'h3llr4zor', chips: 238.21 }
        , { seatno: 3, player: 'Imfairminded', chips: 190.53 }
        , { seatno: 5, player: 'CJHRZH', chips: 133.79 }
        , { seatno: 6, player: 'HOOKD001', chips: 93.86 }
        , { seatno: 8, player: 'Pharlll', chips: 101.5 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 14
        , min: 40
        , sec: 31
        , hero: null
        , handid: '7973151166'
        , gameno: '7973151166'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 6
        , button: 3 }
     , board: {}
     , posts:
        [ { player: 'CJHRZH', type: 'sb', amount: 0.5 }
        , { player: 'HOOKD001', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'Pharlll', type: 'fold' }
        , { player: 'h3llr4zor', type: 'fold' }
        , { player: 'Imfairminded', type: 'raise', amount: 2, raiseTo: 2 }
        , { player: 'CJHRZH', type: 'call', amount: 1.5 }
        , { player: 'HOOKD001', type: 'raise', amount: 8.5, raiseTo: 10 }
        , { player: 'Imfairminded', type: 'fold' }
        , { player: 'CJHRZH', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'HOOKD001', type: 'collect', amount: 6 } ]
     , summary: [ { type: 'pot', single: true, amount: 6 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'h3llr4zor', chips: 238.21 }
        , { seatno: 3, player: 'Imfairminded', chips: 188.53 }
        , { seatno: 5, player: 'CJHRZH', chips: 131.79 }
        , { seatno: 6, player: 'HOOKD001', chips: 97.86 }
        , { seatno: 8, player: 'Pharlll', chips: 101.5 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 14
        , min: 41
        , sec: 20
        , hero: null
        , handid: '7973152493'
        , gameno: '7973152493'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 6
        , button: 5 }
     , board: {}
     , posts:
        [ { player: 'HOOKD001', type: 'sb', amount: 0.5 }
        , { player: 'Pharlll', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'h3llr4zor', type: 'fold' }
        , { player: 'Imfairminded', type: 'fold' }
        , { player: 'CJHRZH', type: 'fold' }
        , { player: 'HOOKD001', type: 'raise', amount: 3.08, raiseTo: 3.08 }
        , { player: 'Pharlll', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'HOOKD001', type: 'collect', amount: 2 } ]
     , summary: [ { type: 'pot', single: true, amount: 2 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'h3llr4zor', chips: 238.21 }
        , { seatno: 3, player: 'Imfairminded', chips: 188.53 }
        , { seatno: 5, player: 'CJHRZH', chips: 131.79 }
        , { seatno: 6, player: 'HOOKD001', chips: 98.86 }
        , { seatno: 8, player: 'Pharlll', chips: 100.5 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 14
        , min: 41
        , sec: 47
        , hero: null
        , handid: '7973152780'
        , gameno: '7973152780'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 6
        , button: 6 }
     , board:
        { card1: 'Kd', card2: '7s', card3: '3c', card4: '9c', card5: 'Kc' }
     , posts:
        [ { player: 'Pharlll', type: 'sb', amount: 0.5 }
        , { player: 'h3llr4zor', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'Imfairminded', type: 'raise', amount: 3, raiseTo: 3 }
        , { player: 'CJHRZH', type: 'fold' }
        , { player: 'HOOKD001', type: 'call', amount: 3 }
        , { player: 'Pharlll', type: 'fold' }
        , { player: 'h3llr4zor', type: 'fold' } ]
     , flop:
        [ { player: 'Imfairminded', type: 'check' }
        , { player: 'HOOKD001', type: 'check' } ]
     , turn:
        [ { player: 'Imfairminded', type: 'check' }
        , { player: 'HOOKD001', type: 'check' } ]
     , river:
        [ { player: 'Imfairminded', type: 'bet', amount: 4 }
        , { player: 'HOOKD001', type: 'fold' } ]
     , showdown:
        [ { player: 'Imfairminded', type: 'collect', amount: 7.13 } ]
     , summary: [ { type: 'pot', single: true, amount: 7.13 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'h3llr4zor', chips: 237.21 }
        , { seatno: 3, player: 'Imfairminded', chips: 192.66 }
        , { seatno: 5, player: 'CJHRZH', chips: 131.79 }
        , { seatno: 6, player: 'HOOKD001', chips: 95.86 }
        , { seatno: 8, player: 'Pharlll', chips: 100 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 14
        , min: 42
        , sec: 55
        , hero: null
        , handid: '7973153165'
        , gameno: '7973153165'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 6
        , button: 8 }
     , board: {}
     , posts:
        [ { player: 'h3llr4zor', type: 'sb', amount: 0.5 }
        , { player: 'Imfairminded', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'CJHRZH', type: 'fold' }
        , { player: 'HOOKD001', type: 'raise', amount: 2.5, raiseTo: 2.5 }
        , { player: 'Pharlll', type: 'fold' }
        , { player: 'h3llr4zor', type: 'fold' }
        , { player: 'Imfairminded', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'HOOKD001', type: 'collect', amount: 2.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 2.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'h3llr4zor', chips: 236.71 }
        , { seatno: 3, player: 'Imfairminded', chips: 191.66 }
        , { seatno: 5, player: 'CJHRZH', chips: 131.79 }
        , { seatno: 6, player: 'HOOKD001', chips: 97.36 }
        , { seatno: 8, player: 'Pharlll', chips: 100 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 14
        , min: 43
        , sec: 20
        , hero: null
        , handid: '7973154438'
        , gameno: '7973154438'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 6
        , button: 1 }
     , board: { card1: '2h', card2: '6s', card3: '3s' }
     , posts:
        [ { player: 'Imfairminded', type: 'sb', amount: 0.5 }
        , { player: 'CJHRZH', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'HOOKD001', type: 'fold' }
        , { player: 'Pharlll', type: 'fold' }
        , { player: 'h3llr4zor', type: 'raise', amount: 2, raiseTo: 2 }
        , { player: 'Imfairminded', type: 'fold' }
        , { player: 'CJHRZH', type: 'call', amount: 1 } ]
     , flop:
        [ { player: 'CJHRZH', type: 'check' }
        , { player: 'h3llr4zor', type: 'bet', amount: 2.25 }
        , { player: 'CJHRZH', type: 'raise', amount: 3.75, raiseTo: 6 }
        , { player: 'h3llr4zor', type: 'fold' } ]
     , turn: []
     , river: []
     , showdown: [ { player: 'CJHRZH', type: 'collect', amount: 8.55 } ]
     , summary: [ { type: 'pot', single: true, amount: 8.55 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'h3llr4zor', chips: 232.46 }
        , { seatno: 3, player: 'Imfairminded', chips: 191.16 }
        , { seatno: 5, player: 'CJHRZH', chips: 136.09 }
        , { seatno: 6, player: 'HOOKD001', chips: 97.36 }
        , { seatno: 8, player: 'Pharlll', chips: 100 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 14
        , min: 44
        , sec: 3
        , hero: null
        , handid: '7973154699'
        , gameno: '7973154699'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 6
        , button: 3 }
     , board: {}
     , posts:
        [ { player: 'CJHRZH', type: 'sb', amount: 0.5 }
        , { player: 'HOOKD001', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'Pharlll', type: 'fold' }
        , { player: 'h3llr4zor', type: 'fold' }
        , { player: 'Imfairminded', type: 'raise', amount: 2, raiseTo: 2 }
        , { player: 'CJHRZH', type: 'fold' }
        , { player: 'HOOKD001', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'Imfairminded', type: 'collect', amount: 2.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 2.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'h3llr4zor', chips: 232.46 }
        , { seatno: 3, player: 'Imfairminded', chips: 192.66 }
        , { seatno: 5, player: 'CJHRZH', chips: 135.59 }
        , { seatno: 6, player: 'HOOKD001', chips: 96.36 }
        , { seatno: 8, player: 'Pharlll', chips: 100 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 14
        , min: 44
        , sec: 34
        , hero: null
        , handid: '7973155355'
        , gameno: '7973155355'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 6
        , button: 5 }
     , board: {}
     , posts:
        [ { player: 'HOOKD001', type: 'sb', amount: 0.5 }
        , { player: 'Pharlll', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'h3llr4zor', type: 'fold' }
        , { player: 'Imfairminded', type: 'fold' }
        , { player: 'CJHRZH', type: 'raise', amount: 2.5, raiseTo: 2.5 }
        , { player: 'HOOKD001', type: 'fold' }
        , { player: 'Pharlll', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'CJHRZH', type: 'collect', amount: 2.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 2.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'h3llr4zor', chips: 232.46 }
        , { seatno: 3, player: 'Imfairminded', chips: 192.66 }
        , { seatno: 5, player: 'CJHRZH', chips: 137.09 }
        , { seatno: 6, player: 'HOOKD001', chips: 95.86 }
        , { seatno: 8, player: 'Pharlll', chips: 100 }
        , { seatno: 10, player: 'danikeen', chips: 50 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 14
        , min: 44
        , sec: 59
        , hero: null
        , handid: '7973156852'
        , gameno: '7973156852'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 6 }
     , board: { card1: 'Tc', card2: 'As', card3: 'Ks', card4: '8d' }
     , posts:
        [ { player: 'Pharlll', type: 'sb', amount: 0.5 }
        , { player: 'danikeen', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'h3llr4zor', type: 'fold' }
        , { player: 'Imfairminded', type: 'raise', amount: 3, raiseTo: 3 }
        , { player: 'CJHRZH', type: 'fold' }
        , { player: 'HOOKD001', type: 'fold' }
        , { player: 'Pharlll', type: 'fold' }
        , { player: 'danikeen', type: 'call', amount: 2 } ]
     , flop:
        [ { player: 'danikeen', type: 'check' }
        , { player: 'Imfairminded', type: 'bet', amount: 2 }
        , { player: 'danikeen', type: 'call', amount: 2 } ]
     , turn:
        [ { player: 'danikeen', type: 'check' }
        , { player: 'Imfairminded', type: 'bet', amount: 6 }
        , { player: 'danikeen', type: 'fold' } ]
     , river: []
     , showdown:
        [ { player: 'Imfairminded', type: 'collect', amount: 9.98 } ]
     , summary: [ { type: 'pot', single: true, amount: 9.98 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'h3llr4zor', chips: 232.46 }
        , { seatno: 3, player: 'Imfairminded', chips: 197.64 }
        , { seatno: 5, player: 'CJHRZH', chips: 137.09 }
        , { seatno: 6, player: 'HOOKD001', chips: 95.86 }
        , { seatno: 8, player: 'Pharlll', chips: 100 }
        , { seatno: 10, player: 'danikeen', chips: 50 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 14
        , min: 46
        , sec: 8
        , hero: null
        , handid: '7973157107'
        , gameno: '7973157107'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 8 }
     , board: {}
     , posts:
        [ { player: 'danikeen', type: 'sb', amount: 0.5 }
        , { player: 'h3llr4zor', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'Imfairminded', type: 'fold' }
        , { player: 'CJHRZH', type: 'fold' }
        , { player: 'HOOKD001', type: 'fold' }
        , { player: 'Pharlll', type: 'fold' }
        , { player: 'danikeen', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'h3llr4zor', type: 'collect', amount: 1 } ]
     , summary: [ { type: 'pot', single: true, amount: 1 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'h3llr4zor', chips: 232.96 }
        , { seatno: 3, player: 'Imfairminded', chips: 197.64 }
        , { seatno: 5, player: 'CJHRZH', chips: 137.09 }
        , { seatno: 6, player: 'HOOKD001', chips: 95.86 }
        , { seatno: 8, player: 'Pharlll', chips: 100 }
        , { seatno: 10, player: 'danikeen', chips: 50 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 14
        , min: 46
        , sec: 29
        , hero: null
        , handid: '7973157182'
        , gameno: '7973157182'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 10 }
     , board:
        { card1: 'Th', card2: '9d', card3: '5d', card4: '4h', card5: 'Ks' }
     , posts:
        [ { player: 'h3llr4zor', type: 'sb', amount: 0.5 }
        , { player: 'Imfairminded', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'CJHRZH', type: 'fold' }
        , { player: 'HOOKD001', type: 'fold' }
        , { player: 'Pharlll', type: 'raise', amount: 3, raiseTo: 3 }
        , { player: 'danikeen', type: 'fold' }
        , { player: 'h3llr4zor', type: 'fold' }
        , { player: 'Imfairminded', type: 'raise', amount: 6, raiseTo: 9 }
        , { player: 'Pharlll', type: 'call', amount: 6 } ]
     , flop:
        [ { player: 'Imfairminded', type: 'bet', amount: 8 }
        , { player: 'Pharlll', type: 'call', amount: 8 } ]
     , turn:
        [ { player: 'Imfairminded', type: 'check' }
        , { player: 'Pharlll', type: 'check' } ]
     , river:
        [ { player: 'Imfairminded', type: 'check' }
        , { player: 'Pharlll', type: 'check' } ]
     , showdown:
        [ { player: 'Imfairminded', type: 'collect', amount: 32.78 }
        , { player: 'Imfairminded', type: 'show', card1: 'Kh', card2: '9c' } ]
     , summary: [ { type: 'pot', single: true, amount: 32.78 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'h3llr4zor', chips: 232.46 }
        , { seatno: 3, player: 'Imfairminded', chips: 213.42 }
        , { seatno: 5, player: 'CJHRZH', chips: 137.09 }
        , { seatno: 6, player: 'HOOKD001', chips: 95.86 }
        , { seatno: 8, player: 'Pharlll', chips: 100 }
        , { seatno: 10, player: 'danikeen', chips: 50 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 14
        , min: 47
        , sec: 43
        , hero: null
        , handid: '7973157435'
        , gameno: '7973157435'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 1 }
     , board: {}
     , posts:
        [ { player: 'Imfairminded', type: 'sb', amount: 0.5 }
        , { player: 'CJHRZH', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'HOOKD001', type: 'fold' }
        , { player: 'Pharlll', type: 'fold' }
        , { player: 'danikeen', type: 'fold' }
        , { player: 'h3llr4zor', type: 'raise', amount: 2, raiseTo: 2 }
        , { player: 'Imfairminded', type: 'fold' }
        , { player: 'CJHRZH', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'h3llr4zor', type: 'collect', amount: 2.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 2.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'h3llr4zor', chips: 233.96 }
        , { seatno: 3, player: 'Imfairminded', chips: 212.92 }
        , { seatno: 5, player: 'CJHRZH', chips: 136.09 }
        , { seatno: 6, player: 'HOOKD001', chips: 95.86 }
        , { seatno: 8, player: 'Pharlll', chips: 100 }
        , { seatno: 10, player: 'danikeen', chips: 50 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 14
        , min: 48
        , sec: 19
        , hero: null
        , handid: '7973157557'
        , gameno: '7973157557'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 3 }
     , board:
        { card1: '3h', card2: 'Ks', card3: '8h', card4: '9d', card5: 'Jc' }
     , posts:
        [ { player: 'CJHRZH', type: 'sb', amount: 0.5 }
        , { player: 'HOOKD001', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'Pharlll', type: 'raise', amount: 3, raiseTo: 3 }
        , { player: 'danikeen', type: 'fold' }
        , { player: 'h3llr4zor', type: 'fold' }
        , { player: 'Imfairminded', type: 'call', amount: 3 }
        , { player: 'CJHRZH', type: 'fold' }
        , { player: 'HOOKD001', type: 'fold' } ]
     , flop:
        [ { player: 'Pharlll', type: 'bet', amount: 4 }
        , { player: 'Imfairminded', type: 'call', amount: 4 } ]
     , turn:
        [ { player: 'Pharlll', type: 'check' }
        , { player: 'Imfairminded', type: 'check' } ]
     , river:
        [ { player: 'Pharlll', type: 'check' }
        , { player: 'Imfairminded', type: 'check' } ]
     , showdown:
        [ { player: 'Imfairminded', type: 'collect', amount: 14.73 }
        , { player: 'Imfairminded', type: 'show', card1: 'Ts', card2: 'Tc' } ]
     , summary: [ { type: 'pot', single: true, amount: 14.73 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'h3llr4zor', chips: 233.96 }
        , { seatno: 3, player: 'Imfairminded', chips: 220.65 }
        , { seatno: 5, player: 'CJHRZH', chips: 135.59 }
        , { seatno: 6, player: 'HOOKD001', chips: 94.86 }
        , { seatno: 8, player: 'Pharlll', chips: 100 }
        , { seatno: 10, player: 'danikeen', chips: 50 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 14
        , min: 49
        , sec: 43
        , hero: null
        , handid: '7973158117'
        , gameno: '7973158117'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 5 }
     , board: {}
     , posts:
        [ { player: 'HOOKD001', type: 'sb', amount: 0.5 }
        , { player: 'Pharlll', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'danikeen', type: 'fold' }
        , { player: 'h3llr4zor', type: 'fold' }
        , { player: 'Imfairminded', type: 'fold' }
        , { player: 'CJHRZH', type: 'raise', amount: 2.5, raiseTo: 2.5 }
        , { player: 'HOOKD001', type: 'fold' }
        , { player: 'Pharlll', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'CJHRZH', type: 'collect', amount: 2.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 2.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'h3llr4zor', chips: 233.96 }
        , { seatno: 3, player: 'Imfairminded', chips: 220.65 }
        , { seatno: 5, player: 'CJHRZH', chips: 137.09 }
        , { seatno: 6, player: 'HOOKD001', chips: 94.36 }
        , { seatno: 8, player: 'Pharlll', chips: 100 }
        , { seatno: 10, player: 'danikeen', chips: 50 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 14
        , min: 50
        , sec: 9
        , hero: null
        , handid: '7973158212'
        , gameno: '7973158212'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 6 }
     , board: {}
     , posts:
        [ { player: 'Pharlll', type: 'sb', amount: 0.5 }
        , { player: 'danikeen', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'h3llr4zor', type: 'fold' }
        , { player: 'Imfairminded', type: 'fold' }
        , { player: 'CJHRZH', type: 'raise', amount: 2.5, raiseTo: 2.5 }
        , { player: 'HOOKD001', type: 'raise', amount: 5.5, raiseTo: 8 }
        , { player: 'Pharlll', type: 'fold' }
        , { player: 'danikeen', type: 'fold' }
        , { player: 'CJHRZH', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'HOOKD001', type: 'collect', amount: 6.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 6.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'h3llr4zor', chips: 233.96 }
        , { seatno: 3, player: 'Imfairminded', chips: 220.65 }
        , { seatno: 5, player: 'CJHRZH', chips: 134.59 }
        , { seatno: 6, player: 'HOOKD001', chips: 98.36 }
        , { seatno: 8, player: 'Pharlll', chips: 100 }
        , { seatno: 10, player: 'danikeen', chips: 50 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 14
        , min: 50
        , sec: 42
        , hero: null
        , handid: '7973158328'
        , gameno: '7973158328'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 8 }
     , board: {}
     , posts:
        [ { player: 'danikeen', type: 'sb', amount: 0.5 }
        , { player: 'h3llr4zor', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'Imfairminded', type: 'fold' }
        , { player: 'CJHRZH', type: 'fold' }
        , { player: 'HOOKD001', type: 'fold' }
        , { player: 'Pharlll', type: 'fold' }
        , { player: 'danikeen', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'h3llr4zor', type: 'collect', amount: 1 } ]
     , summary: [ { type: 'pot', single: true, amount: 1 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'h3llr4zor', chips: 234.46 }
        , { seatno: 3, player: 'Imfairminded', chips: 220.65 }
        , { seatno: 5, player: 'CJHRZH', chips: 134.59 }
        , { seatno: 6, player: 'HOOKD001', chips: 98.36 }
        , { seatno: 8, player: 'Pharlll', chips: 100 }
        , { seatno: 10, player: 'danikeen', chips: 50 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 14
        , min: 51
        , sec: 7
        , hero: null
        , handid: '7973158414'
        , gameno: '7973158414'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 10 }
     , board: {}
     , posts:
        [ { player: 'h3llr4zor', type: 'sb', amount: 0.5 }
        , { player: 'Imfairminded', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'CJHRZH', type: 'fold' }
        , { player: 'HOOKD001', type: 'raise', amount: 3, raiseTo: 3 }
        , { player: 'Pharlll', type: 'fold' }
        , { player: 'danikeen', type: 'raise', amount: 6, raiseTo: 9 }
        , { player: 'h3llr4zor', type: 'fold' }
        , { player: 'Imfairminded', type: 'fold' }
        , { player: 'HOOKD001', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'danikeen', type: 'collect', amount: 7.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 7.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'h3llr4zor', chips: 233.96 }
        , { seatno: 3, player: 'Imfairminded', chips: 219.65 }
        , { seatno: 5, player: 'CJHRZH', chips: 134.59 }
        , { seatno: 6, player: 'HOOKD001', chips: 95.36 }
        , { seatno: 8, player: 'Pharlll', chips: 100 }
        , { seatno: 10, player: 'danikeen', chips: 54.5 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 14
        , min: 51
        , sec: 48
        , hero: null
        , handid: '7973158612'
        , gameno: '7973158612'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 1 }
     , board: { card1: '3h', card2: '5h', card3: 'Jd' }
     , posts:
        [ { player: 'Imfairminded', type: 'sb', amount: 0.5 }
        , { player: 'CJHRZH', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'HOOKD001', type: 'fold' }
        , { player: 'Pharlll', type: 'fold' }
        , { player: 'danikeen', type: 'fold' }
        , { player: 'h3llr4zor', type: 'fold' }
        , { player: 'Imfairminded', type: 'raise', amount: 3, raiseTo: 3 }
        , { player: 'CJHRZH', type: 'raise', amount: 7, raiseTo: 10 }
        , { player: 'Imfairminded', type: 'call', amount: 7 } ]
     , flop:
        [ { player: 'Imfairminded', type: 'check' }
        , { player: 'CJHRZH', type: 'bet', amount: 12.5 }
        , { player: 'Imfairminded', type: 'fold' } ]
     , turn: []
     , river: []
     , showdown: [ { player: 'CJHRZH', type: 'collect', amount: 19 } ]
     , summary: [ { type: 'pot', single: true, amount: 19 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'h3llr4zor', chips: 233.96 }
        , { seatno: 3, player: 'Imfairminded', chips: 209.65 }
        , { seatno: 5, player: 'CJHRZH', chips: 143.59 }
        , { seatno: 6, player: 'HOOKD001', chips: 95.36 }
        , { seatno: 8, player: 'Pharlll', chips: 100 }
        , { seatno: 10, player: 'danikeen', chips: 54.5 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 14
        , min: 52
        , sec: 32
        , hero: null
        , handid: '7973158771'
        , gameno: '7973158771'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 3 }
     , board: {}
     , posts:
        [ { player: 'CJHRZH', type: 'sb', amount: 0.5 }
        , { player: 'HOOKD001', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'Pharlll', type: 'fold' }
        , { player: 'danikeen', type: 'fold' }
        , { player: 'h3llr4zor', type: 'fold' }
        , { player: 'Imfairminded', type: 'fold' }
        , { player: 'CJHRZH', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'HOOKD001', type: 'collect', amount: 1 } ]
     , summary: [ { type: 'pot', single: true, amount: 1 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'h3llr4zor', chips: 233.96 }
        , { seatno: 3, player: 'Imfairminded', chips: 209.65 }
        , { seatno: 5, player: 'CJHRZH', chips: 143.09 }
        , { seatno: 6, player: 'HOOKD001', chips: 95.86 }
        , { seatno: 8, player: 'Pharlll', chips: 100 }
        , { seatno: 10, player: 'danikeen', chips: 54.5 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 14
        , min: 52
        , sec: 49
        , hero: null
        , handid: '7973158826'
        , gameno: '7973158826'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 5 }
     , board: {}
     , posts:
        [ { player: 'HOOKD001', type: 'sb', amount: 0.5 }
        , { player: 'Pharlll', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'danikeen', type: 'fold' }
        , { player: 'h3llr4zor', type: 'raise', amount: 2, raiseTo: 2 }
        , { player: 'Imfairminded', type: 'fold' }
        , { player: 'CJHRZH', type: 'fold' }
        , { player: 'HOOKD001', type: 'fold' }
        , { player: 'Pharlll', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'h3llr4zor', type: 'collect', amount: 2.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 2.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'h3llr4zor', chips: 235.46 }
        , { seatno: 3, player: 'Imfairminded', chips: 209.65 }
        , { seatno: 5, player: 'CJHRZH', chips: 143.09 }
        , { seatno: 6, player: 'HOOKD001', chips: 95.36 }
        , { seatno: 8, player: 'Pharlll', chips: 100 }
        , { seatno: 10, player: 'danikeen', chips: 54.5 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 14
        , min: 53
        , sec: 19
        , hero: null
        , handid: '7973159119'
        , gameno: '7973159119'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 6 }
     , board: {}
     , posts:
        [ { player: 'Pharlll', type: 'sb', amount: 0.5 }
        , { player: 'danikeen', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'h3llr4zor', type: 'fold' }
        , { player: 'Imfairminded', type: 'fold' }
        , { player: 'CJHRZH', type: 'fold' }
        , { player: 'HOOKD001', type: 'fold' }
        , { player: 'Pharlll', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'danikeen', type: 'collect', amount: 1 } ]
     , summary: [ { type: 'pot', single: true, amount: 1 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 3, player: 'Imfairminded', chips: 209.65 }
        , { seatno: 5, player: 'CJHRZH', chips: 143.09 }
        , { seatno: 6, player: 'HOOKD001', chips: 95.36 }
        , { seatno: 8, player: 'Pharlll', chips: 100 }
        , { seatno: 10, player: 'danikeen', chips: 55 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 14
        , min: 53
        , sec: 49
        , hero: null
        , handid: '7973159222'
        , gameno: '7973159222'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 8 }
     , board: { card1: '6d', card2: 'Kh', card3: '9c' }
     , posts:
        [ { player: 'danikeen', type: 'sb', amount: 0.5 }
        , { player: 'Imfairminded', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'CJHRZH', type: 'fold' }
        , { player: 'HOOKD001', type: 'fold' }
        , { player: 'Pharlll', type: 'raise', amount: 2, raiseTo: 2 }
        , { player: 'danikeen', type: 'fold' }
        , { player: 'Imfairminded', type: 'raise', amount: 5, raiseTo: 7 }
        , { player: 'Pharlll', type: 'call', amount: 5 } ]
     , flop:
        [ { player: 'Imfairminded', type: 'bet', amount: 6 }
        , { player: 'Pharlll', type: 'fold' } ]
     , turn: []
     , river: []
     , showdown:
        [ { player: 'Imfairminded', type: 'collect', amount: 13.78 } ]
     , summary: [ { type: 'pot', single: true, amount: 13.78 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 3, player: 'Imfairminded', chips: 216.43 }
        , { seatno: 5, player: 'CJHRZH', chips: 143.09 }
        , { seatno: 6, player: 'HOOKD001', chips: 95.36 }
        , { seatno: 8, player: 'Pharlll', chips: 100 }
        , { seatno: 10, player: 'danikeen', chips: 54.5 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 14
        , min: 54
        , sec: 28
        , hero: null
        , handid: '7973159344'
        , gameno: '7973159344'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 10 }
     , board: {}
     , posts:
        [ { player: 'Imfairminded', type: 'sb', amount: 0.5 }
        , { player: 'CJHRZH', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'HOOKD001', type: 'raise', amount: 3, raiseTo: 3 }
        , { player: 'Pharlll', type: 'fold' }
        , { player: 'danikeen', type: 'fold' }
        , { player: 'Imfairminded', type: 'fold' }
        , { player: 'CJHRZH', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'HOOKD001', type: 'collect', amount: 2.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 2.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 3, player: 'Imfairminded', chips: 215.93 }
        , { seatno: 5, player: 'CJHRZH', chips: 142.09 }
        , { seatno: 6, player: 'HOOKD001', chips: 96.86 }
        , { seatno: 8, player: 'Pharlll', chips: 100 }
        , { seatno: 10, player: 'danikeen', chips: 54.5 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 14
        , min: 54
        , sec: 55
        , hero: null
        , handid: '7973160689'
        , gameno: '7973160689'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 3 }
     , board: {}
     , posts:
        [ { player: 'CJHRZH', type: 'sb', amount: 0.5 }
        , { player: 'HOOKD001', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'Pharlll', type: 'fold' }
        , { player: 'danikeen', type: 'raise', amount: 3, raiseTo: 3 }
        , { player: 'Imfairminded', type: 'raise', amount: 6, raiseTo: 9 }
        , { player: 'CJHRZH', type: 'fold' }
        , { player: 'HOOKD001', type: 'fold' }
        , { player: 'danikeen', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'Imfairminded', type: 'collect', amount: 7.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 7.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 3, player: 'Imfairminded', chips: 220.43 }
        , { seatno: 5, player: 'CJHRZH', chips: 141.59 }
        , { seatno: 6, player: 'HOOKD001', chips: 95.86 }
        , { seatno: 8, player: 'Pharlll', chips: 100 }
        , { seatno: 10, player: 'danikeen', chips: 51.5 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 14
        , min: 55
        , sec: 16
        , hero: null
        , handid: '7973160753'
        , gameno: '7973160753'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 5 }
     , board: {}
     , posts:
        [ { player: 'HOOKD001', type: 'sb', amount: 0.5 }
        , { player: 'Pharlll', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'danikeen', type: 'raise', amount: 3, raiseTo: 3 }
        , { player: 'Imfairminded', type: 'fold' }
        , { player: 'CJHRZH', type: 'fold' }
        , { player: 'HOOKD001', type: 'fold' }
        , { player: 'Pharlll', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'danikeen', type: 'collect', amount: 2.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 2.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 3, player: 'Imfairminded', chips: 218.93 }
        , { seatno: 5, player: 'CJHRZH', chips: 140.59 }
        , { seatno: 6, player: 'HOOKD001', chips: 96.86 }
        , { seatno: 8, player: 'Pharlll', chips: 101.5 }
        , { seatno: 10, player: 'danikeen', chips: 53 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 14
        , min: 56
        , sec: 23
        , hero: null
        , handid: '7973161109'
        , gameno: '7973161109'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 3 }
     , board: {}
     , posts:
        [ { player: 'CJHRZH', type: 'sb', amount: 0.5 }
        , { player: 'HOOKD001', type: 'bb', amount: 1 }
        , { player: 'danikeen', type: 'bb', amount: 1.5 } ]
     , preflop:
        [ { player: 'Pharlll', type: 'raise', amount: 3, raiseTo: 3 }
        , { player: 'danikeen', type: 'fold' }
        , { player: 'Imfairminded', type: 'fold' }
        , { player: 'CJHRZH', type: 'fold' }
        , { player: 'HOOKD001', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'Pharlll', type: 'collect', amount: 4 } ]
     , summary: [ { type: 'pot', single: true, amount: 4 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 3, player: 'Imfairminded', chips: 218.93 }
        , { seatno: 5, player: 'CJHRZH', chips: 140.09 }
        , { seatno: 6, player: 'HOOKD001', chips: 95.86 }
        , { seatno: 8, player: 'Pharlll', chips: 104.5 }
        , { seatno: 10, player: 'danikeen', chips: 51.5 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 14
        , min: 56
        , sec: 52
        , hero: null
        , handid: '7973161204'
        , gameno: '7973161204'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 5 }
     , board: {}
     , posts:
        [ { player: 'HOOKD001', type: 'sb', amount: 0.5 }
        , { player: 'Pharlll', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'danikeen', type: 'fold' }
        , { player: 'Imfairminded', type: 'fold' }
        , { player: 'CJHRZH', type: 'fold' }
        , { player: 'HOOKD001', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'Pharlll', type: 'collect', amount: 1 } ]
     , summary: [ { type: 'pot', single: true, amount: 1 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 3, player: 'Imfairminded', chips: 218.93 }
        , { seatno: 5, player: 'CJHRZH', chips: 140.09 }
        , { seatno: 6, player: 'HOOKD001', chips: 95.36 }
        , { seatno: 8, player: 'Pharlll', chips: 105 }
        , { seatno: 10, player: 'danikeen', chips: 51.5 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 14
        , min: 57
        , sec: 6
        , hero: null
        , handid: '7973162410'
        , gameno: '7973162410'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 6 }
     , board:
        { card1: '8h', card2: 'Jc', card3: 'Ks', card4: '7c', card5: '4s' }
     , posts:
        [ { player: 'Pharlll', type: 'sb', amount: 0.5 }
        , { player: 'danikeen', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'Imfairminded', type: 'fold' }
        , { player: 'CJHRZH', type: 'raise', amount: 2.5, raiseTo: 2.5 }
        , { player: 'HOOKD001', type: 'call', amount: 2.5 }
        , { player: 'Pharlll', type: 'fold' }
        , { player: 'danikeen', type: 'call', amount: 1.5 } ]
     , flop:
        [ { player: 'danikeen', type: 'check' }
        , { player: 'CJHRZH', type: 'bet', amount: 5 }
        , { player: 'HOOKD001', type: 'fold' }
        , { player: 'danikeen', type: 'call', amount: 5 } ]
     , turn:
        [ { player: 'danikeen', type: 'check' }
        , { player: 'CJHRZH', type: 'check' } ]
     , river:
        [ { player: 'danikeen', type: 'bet', amount: 14 }
        , { player: 'CJHRZH', type: 'call', amount: 14 } ]
     , showdown:
        [ { player: 'danikeen', type: 'collect', amount: 43.7 }
        , { player: 'danikeen', type: 'show', card1: '9c', card2: 'Td' } ]
     , summary: [ { type: 'pot', single: true, amount: 43.7 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 3, player: 'Imfairminded', chips: 218.93 }
        , { seatno: 5, player: 'CJHRZH', chips: 118.59 }
        , { seatno: 6, player: 'HOOKD001', chips: 92.86 }
        , { seatno: 8, player: 'Pharlll', chips: 104.5 }
        , { seatno: 10, player: 'danikeen', chips: 73.7 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 14
        , min: 58
        , sec: 23
        , hero: null
        , handid: '7973162650'
        , gameno: '7973162650'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 8 }
     , board: {}
     , posts:
        [ { player: 'danikeen', type: 'sb', amount: 0.5 }
        , { player: 'Imfairminded', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'CJHRZH', type: 'fold' }
        , { player: 'HOOKD001', type: 'fold' }
        , { player: 'Pharlll', type: 'fold' }
        , { player: 'danikeen', type: 'raise', amount: 3, raiseTo: 3 }
        , { player: 'Imfairminded', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'danikeen', type: 'collect', amount: 2 } ]
     , summary: [ { type: 'pot', single: true, amount: 2 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 3, player: 'Imfairminded', chips: 217.93 }
        , { seatno: 6, player: 'HOOKD001', chips: 92.86 }
        , { seatno: 8, player: 'Pharlll', chips: 104.5 }
        , { seatno: 10, player: 'danikeen', chips: 74.7 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 14
        , min: 58
        , sec: 42
        , hero: null
        , handid: '7973162708'
        , gameno: '7973162708'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 10 }
     , board: {}
     , posts:
        [ { player: 'Imfairminded', type: 'sb', amount: 0.5 }
        , { player: 'HOOKD001', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'Pharlll', type: 'fold' }
        , { player: 'danikeen', type: 'fold' }
        , { player: 'Imfairminded', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'HOOKD001', type: 'collect', amount: 1 } ]
     , summary: [ { type: 'pot', single: true, amount: 1 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 3, player: 'Imfairminded', chips: 217.43 }
        , { seatno: 6, player: 'HOOKD001', chips: 93.36 }
        , { seatno: 8, player: 'Pharlll', chips: 104.5 }
        , { seatno: 10, player: 'danikeen', chips: 74.7 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 14
        , min: 58
        , sec: 53
        , hero: null
        , handid: '7973162742'
        , gameno: '7973162742'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 3 }
     , board:
        { card1: 'Jc', card2: '9c', card3: 'Tc', card4: '4c', card5: '8h' }
     , posts:
        [ { player: 'HOOKD001', type: 'sb', amount: 0.5 }
        , { player: 'Pharlll', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'danikeen', type: 'fold' }
        , { player: 'Imfairminded', type: 'fold' }
        , { player: 'HOOKD001', type: 'call', amount: 0.5 }
        , { player: 'Pharlll', type: 'raise', amount: 2.5, raiseTo: 3 }
        , { player: 'HOOKD001', type: 'call', amount: 2 } ]
     , flop:
        [ { player: 'HOOKD001', type: 'check' }
        , { player: 'Pharlll', type: 'check' } ]
     , turn:
        [ { player: 'HOOKD001', type: 'check' }
        , { player: 'Pharlll', type: 'check' } ]
     , river:
        [ { player: 'HOOKD001', type: 'check' }
        , { player: 'Pharlll', type: 'bet', amount: 3 }
        , { player: 'HOOKD001', type: 'fold' } ]
     , showdown: [ { player: 'Pharlll', type: 'collect', amount: 5.7 } ]
     , summary: [ { type: 'pot', single: true, amount: 5.7 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 3, player: 'Imfairminded', chips: 217.43 }
        , { seatno: 6, player: 'HOOKD001', chips: 90.36 }
        , { seatno: 8, player: 'Pharlll', chips: 107.2 }
        , { seatno: 10, player: 'danikeen', chips: 74.7 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 15
        , min: 0
        , sec: 6
        , hero: null
        , handid: '7973163521'
        , gameno: '7973163521'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 6 }
     , board: {}
     , posts:
        [ { player: 'Pharlll', type: 'sb', amount: 0.5 }
        , { player: 'danikeen', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'Imfairminded', type: 'raise', amount: 2, raiseTo: 2 }
        , { player: 'HOOKD001', type: 'fold' }
        , { player: 'Pharlll', type: 'fold' }
        , { player: 'danikeen', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'Imfairminded', type: 'collect', amount: 2.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 2.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'bf067329', chips: 40 }
        , { seatno: 3, player: 'Imfairminded', chips: 218.93 }
        , { seatno: 6, player: 'HOOKD001', chips: 90.36 }
        , { seatno: 8, player: 'Pharlll', chips: 106.7 }
        , { seatno: 10, player: 'danikeen', chips: 73.7 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 15
        , min: 0
        , sec: 33
        , hero: null
        , handid: '7973164986'
        , gameno: '7973164986'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 8 }
     , board: {}
     , posts:
        [ { player: 'danikeen', type: 'sb', amount: 0.5 }
        , { player: 'bf067329', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'Imfairminded', type: 'fold' }
        , { player: 'HOOKD001', type: 'fold' }
        , { player: 'Pharlll', type: 'fold' }
        , { player: 'danikeen', type: 'raise', amount: 3, raiseTo: 3 }
        , { player: 'bf067329', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'danikeen', type: 'collect', amount: 2 } ]
     , summary: [ { type: 'pot', single: true, amount: 2 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'bf067329', chips: 39 }
        , { seatno: 3, player: 'Imfairminded', chips: 218.93 }
        , { seatno: 6, player: 'HOOKD001', chips: 90.36 }
        , { seatno: 8, player: 'Pharlll', chips: 106.7 }
        , { seatno: 10, player: 'danikeen', chips: 74.7 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 15
        , min: 0
        , sec: 56
        , hero: null
        , handid: '7973165053'
        , gameno: '7973165053'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 10 }
     , board:
        { card1: 'Th', card2: '3s', card3: 'As', card4: '4h', card5: '7d' }
     , posts:
        [ { player: 'bf067329', type: 'sb', amount: 0.5 }
        , { player: 'Imfairminded', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'HOOKD001', type: 'fold' }
        , { player: 'Pharlll', type: 'fold' }
        , { player: 'danikeen', type: 'fold' }
        , { player: 'bf067329', type: 'call', amount: 0.5 }
        , { player: 'Imfairminded', type: 'check' } ]
     , flop:
        [ { player: 'bf067329', type: 'check' }
        , { player: 'Imfairminded', type: 'check' } ]
     , turn:
        [ { player: 'bf067329', type: 'check' }
        , { player: 'Imfairminded', type: 'check' } ]
     , river:
        [ { player: 'bf067329', type: 'check' }
        , { player: 'Imfairminded', type: 'bet', amount: 3 }
        , { player: 'bf067329', type: 'fold' } ]
     , showdown: [ { player: 'Imfairminded', type: 'collect', amount: 1.9 } ]
     , summary: [ { type: 'pot', single: true, amount: 1.9 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'bf067329', chips: 38 }
        , { seatno: 3, player: 'Imfairminded', chips: 219.83 }
        , { seatno: 5, player: '1ntr4nce', chips: 106.83 }
        , { seatno: 6, player: 'HOOKD001', chips: 90.36 }
        , { seatno: 8, player: 'Pharlll', chips: 106.7 }
        , { seatno: 10, player: 'danikeen', chips: 74.7 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 15
        , min: 2
        , sec: 42
        , hero: null
        , handid: '7973165692'
        , gameno: '7973165692'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 1 }
     , board: { card1: '7h', card2: 'Jc', card3: 'As' }
     , posts:
        [ { player: 'Imfairminded', type: 'sb', amount: 0.5 }
        , { player: '1ntr4nce', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'HOOKD001', type: 'fold' }
        , { player: 'Pharlll', type: 'fold' }
        , { player: 'danikeen', type: 'fold' }
        , { player: 'bf067329', type: 'fold' }
        , { player: 'Imfairminded', type: 'call', amount: 0.5 }
        , { player: '1ntr4nce', type: 'check' } ]
     , flop:
        [ { player: 'Imfairminded', type: 'bet', amount: 1 }
        , { player: '1ntr4nce', type: 'fold' } ]
     , turn: []
     , river: []
     , showdown: [ { player: 'Imfairminded', type: 'collect', amount: 1.9 } ]
     , summary: [ { type: 'pot', single: true, amount: 1.9 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'bf067329', chips: 38 }
        , { seatno: 3, player: 'Imfairminded', chips: 220.73 }
        , { seatno: 5, player: '1ntr4nce', chips: 105.83 }
        , { seatno: 6, player: 'HOOKD001', chips: 90.36 }
        , { seatno: 8, player: 'Pharlll', chips: 106.7 }
        , { seatno: 10, player: 'danikeen', chips: 74.7 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 15
        , min: 3
        , sec: 17
        , hero: null
        , handid: '7973165807'
        , gameno: '7973165807'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 3 }
     , board: {}
     , posts:
        [ { player: '1ntr4nce', type: 'sb', amount: 0.5 }
        , { player: 'HOOKD001', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'Pharlll', type: 'fold' }
        , { player: 'danikeen', type: 'fold' }
        , { player: 'bf067329', type: 'raise', amount: 3, raiseTo: 3 }
        , { player: 'Imfairminded', type: 'fold' }
        , { player: '1ntr4nce', type: 'fold' }
        , { player: 'HOOKD001', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'bf067329', type: 'collect', amount: 2.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 2.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'bf067329', chips: 39.5 }
        , { seatno: 3, player: 'Imfairminded', chips: 220.73 }
        , { seatno: 5, player: '1ntr4nce', chips: 105.33 }
        , { seatno: 6, player: 'HOOKD001', chips: 89.36 }
        , { seatno: 10, player: 'danikeen', chips: 74.7 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 15
        , min: 3
        , sec: 56
        , hero: null
        , handid: '7973165918'
        , gameno: '7973165918'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 5 }
     , board: { card1: '4c', card2: 'Th', card3: '3s', card4: '7h' }
     , posts:
        [ { player: 'HOOKD001', type: 'sb', amount: 0.5 }
        , { player: 'danikeen', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'bf067329', type: 'fold' }
        , { player: 'Imfairminded', type: 'fold' }
        , { player: '1ntr4nce', type: 'fold' }
        , { player: 'HOOKD001', type: 'raise', amount: 3.08, raiseTo: 3.08 }
        , { player: 'danikeen', type: 'call', amount: 2.08 } ]
     , flop:
        [ { player: 'HOOKD001', type: 'bet', amount: 2.46 }
        , { player: 'danikeen', type: 'call', amount: 2.46 } ]
     , turn:
        [ { player: 'HOOKD001', type: 'bet', amount: 6.64 }
        , { player: 'danikeen', type: 'fold' } ]
     , river: []
     , showdown: [ { player: 'HOOKD001', type: 'collect', amount: 10.53 } ]
     , summary: [ { type: 'pot', single: true, amount: 10.53 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 3, player: 'Imfairminded', chips: 220.73 }
        , { seatno: 5, player: '1ntr4nce', chips: 105.33 }
        , { seatno: 6, player: 'HOOKD001', chips: 94.35 }
        , { seatno: 10, player: 'danikeen', chips: 69.16 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 15
        , min: 4
        , sec: 56
        , hero: null
        , handid: '7973166234'
        , gameno: '7973166234'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 6 }
     , board: {}
     , posts:
        [ { player: 'danikeen', type: 'sb', amount: 0.5 }
        , { player: 'Imfairminded', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: '1ntr4nce', type: 'fold' }
        , { player: 'HOOKD001', type: 'fold' }
        , { player: 'danikeen', type: 'raise', amount: 3, raiseTo: 3 }
        , { player: 'Imfairminded', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'danikeen', type: 'collect', amount: 2 } ]
     , summary: [ { type: 'pot', single: true, amount: 2 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 3, player: 'Imfairminded', chips: 219.73 }
        , { seatno: 5, player: '1ntr4nce', chips: 105.33 }
        , { seatno: 6, player: 'HOOKD001', chips: 94.35 }
        , { seatno: 10, player: 'danikeen', chips: 70.16 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 15
        , min: 5
        , sec: 15
        , hero: null
        , handid: '7973166291'
        , gameno: '7973166291'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 10 }
     , board: {}
     , posts:
        [ { player: 'Imfairminded', type: 'sb', amount: 0.5 }
        , { player: '1ntr4nce', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'HOOKD001', type: 'fold' }
        , { player: 'danikeen', type: 'fold' }
        , { player: 'Imfairminded', type: 'raise', amount: 3, raiseTo: 3 }
        , { player: '1ntr4nce', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'Imfairminded', type: 'collect', amount: 2 } ]
     , summary: [ { type: 'pot', single: true, amount: 2 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 3, player: 'Imfairminded', chips: 220.73 }
        , { seatno: 5, player: '1ntr4nce', chips: 104.33 }
        , { seatno: 6, player: 'HOOKD001', chips: 94.35 }
        , { seatno: 10, player: 'danikeen', chips: 70.16 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 15
        , min: 5
        , sec: 30
        , hero: null
        , handid: '7973166344'
        , gameno: '7973166344'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 3 }
     , board: {}
     , posts:
        [ { player: '1ntr4nce', type: 'sb', amount: 0.5 }
        , { player: 'HOOKD001', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'danikeen', type: 'fold' }
        , { player: 'Imfairminded', type: 'raise', amount: 2, raiseTo: 2 }
        , { player: '1ntr4nce', type: 'fold' }
        , { player: 'HOOKD001', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'Imfairminded', type: 'collect', amount: 2.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 2.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 3, player: 'Imfairminded', chips: 222.23 }
        , { seatno: 5, player: '1ntr4nce', chips: 103.83 }
        , { seatno: 6, player: 'HOOKD001', chips: 93.35 }
        , { seatno: 10, player: 'danikeen', chips: 70.16 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 15
        , min: 5
        , sec: 49
        , hero: null
        , handid: '7973166625'
        , gameno: '7973166625'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 5 }
     , board:
        { card1: 'Qc', card2: '9d', card3: 'Ah', card4: 'As', card5: 'Jd' }
     , posts:
        [ { player: 'HOOKD001', type: 'sb', amount: 0.5 }
        , { player: 'danikeen', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'Imfairminded', type: 'raise', amount: 2, raiseTo: 2 }
        , { player: '1ntr4nce', type: 'call', amount: 2 }
        , { player: 'HOOKD001', type: 'fold' }
        , { player: 'danikeen', type: 'call', amount: 1 } ]
     , flop:
        [ { player: 'danikeen', type: 'check' }
        , { player: 'Imfairminded', type: 'bet', amount: 3 }
        , { player: '1ntr4nce', type: 'fold' }
        , { player: 'danikeen', type: 'call', amount: 3 } ]
     , turn:
        [ { player: 'danikeen', type: 'check' }
        , { player: 'Imfairminded', type: 'bet', amount: 8 }
        , { player: 'danikeen', type: 'call', amount: 8 } ]
     , river:
        [ { player: 'danikeen', type: 'check' }
        , { player: 'Imfairminded', type: 'check' } ]
     , showdown:
        [ { player: 'danikeen', type: 'collect', amount: 27.08 }
        , { player: 'danikeen', type: 'show', card1: 'Ac', card2: '2h' } ]
     , summary: [ { type: 'pot', single: true, amount: 27.08 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'ZYXXJT001', chips: 40.16 }
        , { seatno: 3, player: 'Imfairminded', chips: 209.23 }
        , { seatno: 5, player: '1ntr4nce', chips: 101.83 }
        , { seatno: 6, player: 'HOOKD001', chips: 92.85 }
        , { seatno: 10, player: 'danikeen', chips: 84.24 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 15
        , min: 7
        , sec: 5
        , hero: null
        , handid: '7973166884'
        , gameno: '7973166884'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 6 }
     , board:
        { card1: 'Qs', card2: '3c', card3: '9s', card4: '8s', card5: '7c' }
     , posts:
        [ { player: 'danikeen', type: 'sb', amount: 0.5 }
        , { player: 'ZYXXJT001', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'Imfairminded', type: 'fold' }
        , { player: '1ntr4nce', type: 'fold' }
        , { player: 'HOOKD001', type: 'raise', amount: 2.5, raiseTo: 2.5 }
        , { player: 'danikeen', type: 'call', amount: 2 }
        , { player: 'ZYXXJT001', type: 'call', amount: 1.5 } ]
     , flop:
        [ { player: 'danikeen', type: 'check' }
        , { player: 'ZYXXJT001', type: 'check' }
        , { player: 'HOOKD001', type: 'check' } ]
     , turn:
        [ { player: 'danikeen', type: 'check' }
        , { player: 'ZYXXJT001', type: 'check' }
        , { player: 'HOOKD001', type: 'check' } ]
     , river:
        [ { player: 'danikeen', type: 'bet', amount: 3.75 }
        , { player: 'ZYXXJT001', type: 'fold' }
        , { player: 'HOOKD001', type: 'call', amount: 3.75 } ]
     , showdown:
        [ { player: 'HOOKD001', type: 'collect', amount: 14.25 }
        , { player: 'HOOKD001', type: 'show', card1: '7h', card2: '9h' }
        , { player: 'danikeen', type: 'show', card1: '8d', card2: '7d' } ]
     , summary: [ { type: 'pot', single: true, amount: 14.25 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'ZYXXJT001', chips: 37.66 }
        , { seatno: 3, player: 'Imfairminded', chips: 209.23 }
        , { seatno: 5, player: '1ntr4nce', chips: 101.83 }
        , { seatno: 6, player: 'HOOKD001', chips: 100.85 }
        , { seatno: 10, player: 'danikeen', chips: 77.99 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 15
        , min: 8
        , sec: 20
        , hero: null
        , handid: '7973168501'
        , gameno: '7973168501'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 10 }
     , board: {}
     , posts:
        [ { player: 'ZYXXJT001', type: 'sb', amount: 0.5 }
        , { player: 'Imfairminded', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: '1ntr4nce', type: 'fold' }
        , { player: 'HOOKD001', type: 'fold' }
        , { player: 'danikeen', type: 'fold' }
        , { player: 'ZYXXJT001', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'Imfairminded', type: 'collect', amount: 1 } ]
     , summary: [ { type: 'pot', single: true, amount: 1 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'ZYXXJT001', chips: 37.16 }
        , { seatno: 3, player: 'Imfairminded', chips: 209.73 }
        , { seatno: 5, player: '1ntr4nce', chips: 101.83 }
        , { seatno: 6, player: 'HOOKD001', chips: 100.85 }
        , { seatno: 10, player: 'danikeen', chips: 77.99 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 15
        , min: 8
        , sec: 44
        , hero: null
        , handid: '7973168640'
        , gameno: '7973168640'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 1 }
     , board:
        { card1: 'Jc', card2: '6d', card3: '9d', card4: '5h', card5: 'Kd' }
     , posts:
        [ { player: 'Imfairminded', type: 'sb', amount: 0.5 }
        , { player: '1ntr4nce', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'HOOKD001', type: 'fold' }
        , { player: 'danikeen', type: 'fold' }
        , { player: 'ZYXXJT001', type: 'fold' }
        , { player: 'Imfairminded', type: 'raise', amount: 3, raiseTo: 3 }
        , { player: '1ntr4nce', type: 'call', amount: 2 } ]
     , flop:
        [ { player: 'Imfairminded', type: 'check' }
        , { player: '1ntr4nce', type: 'check' } ]
     , turn:
        [ { player: 'Imfairminded', type: 'check' }
        , { player: '1ntr4nce', type: 'check' } ]
     , river:
        [ { player: 'Imfairminded', type: 'check' }
        , { player: '1ntr4nce', type: 'check' } ]
     , showdown:
        [ { player: 'Imfairminded', type: 'collect', amount: 5.7 }
        , { player: 'Imfairminded', type: 'show', card1: 'Jh', card2: 'Ac' } ]
     , summary: [ { type: 'pot', single: true, amount: 5.7 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'ZYXXJT001', chips: 37.06 }
        , { seatno: 3, player: 'Imfairminded', chips: 209.43 }
        , { seatno: 5, player: '1ntr4nce', chips: 105 }
        , { seatno: 10, player: 'danikeen', chips: 75.99 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 15
        , min: 10
        , sec: 48
        , hero: null
        , handid: '7973170283'
        , gameno: '7973170283'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 10 }
     , board:
        { card1: 'Js', card2: 'Jc', card3: 'As', card4: 'Ah', card5: 'Qc' }
     , posts:
        [ { player: 'ZYXXJT001', type: 'sb', amount: 0.5 }
        , { player: 'Imfairminded', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: '1ntr4nce', type: 'raise', amount: 2.5, raiseTo: 2.5 }
        , { player: 'danikeen', type: 'call', amount: 2.5 }
        , { player: 'ZYXXJT001', type: 'call', amount: 2 }
        , { player: 'Imfairminded', type: 'call', amount: 1.5 } ]
     , flop:
        [ { player: 'ZYXXJT001', type: 'bet', amount: 3 }
        , { player: 'Imfairminded', type: 'call', amount: 3 }
        , { player: '1ntr4nce', type: 'fold' }
        , { player: 'danikeen', type: 'fold' } ]
     , turn:
        [ { player: 'ZYXXJT001', type: 'bet', amount: 6 }
        , { player: 'Imfairminded', type: 'call', amount: 6 } ]
     , river:
        [ { player: 'ZYXXJT001', type: 'bet', amount: 25.56 }
        , { player: 'Imfairminded', type: 'call', amount: 25.56 } ]
     , showdown:
        [ { player: 'ZYXXJT001', type: 'collect', amount: 75.17 }
        , { player: 'ZYXXJT001', type: 'show', card1: '9d', card2: 'Ad' } ]
     , summary: [ { type: 'pot', single: true, amount: 75.17 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'ZYXXJT001', chips: 75.17 }
        , { seatno: 3, player: 'Imfairminded', chips: 172.37 }
        , { seatno: 5, player: '1ntr4nce', chips: 102.5 }
        , { seatno: 10, player: 'danikeen', chips: 73.49 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 15
        , min: 12
        , sec: 5
        , hero: null
        , handid: '7973170690'
        , gameno: '7973170690'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 1 }
     , board: { card1: '6d', card2: '5s', card3: '3d', card4: '6c' }
     , posts:
        [ { player: 'Imfairminded', type: 'sb', amount: 0.5 }
        , { player: '1ntr4nce', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'danikeen', type: 'fold' }
        , { player: 'ZYXXJT001', type: 'fold' }
        , { player: 'Imfairminded', type: 'raise', amount: 3, raiseTo: 3 }
        , { player: '1ntr4nce', type: 'call', amount: 2 } ]
     , flop:
        [ { player: 'Imfairminded', type: 'check' }
        , { player: '1ntr4nce', type: 'bet', amount: 3 }
        , { player: 'Imfairminded', type: 'call', amount: 3 } ]
     , turn:
        [ { player: 'Imfairminded', type: 'bet', amount: 5 }
        , { player: '1ntr4nce', type: 'fold' } ]
     , river: []
     , showdown:
        [ { player: 'Imfairminded', type: 'collect', amount: 11.4 } ]
     , summary: [ { type: 'pot', single: true, amount: 11.4 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'ZYXXJT001', chips: 75.17 }
        , { seatno: 3, player: 'Imfairminded', chips: 177.77 }
        , { seatno: 5, player: '1ntr4nce', chips: 100 }
        , { seatno: 6, player: 'huravy', chips: 100 }
        , { seatno: 10, player: 'danikeen', chips: 73.49 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 15
        , min: 13
        , sec: 13
        , hero: null
        , handid: '7973170932'
        , gameno: '7973170932'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 3 }
     , board: {}
     , posts:
        [ { player: '1ntr4nce', type: 'sb', amount: 0.5 }
        , { player: 'huravy', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'danikeen', type: 'fold' }
        , { player: 'ZYXXJT001', type: 'fold' }
        , { player: 'Imfairminded', type: 'raise', amount: 2, raiseTo: 2 }
        , { player: '1ntr4nce', type: 'fold' }
        , { player: 'huravy', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'Imfairminded', type: 'collect', amount: 2.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 2.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'ZYXXJT001', chips: 75.17 }
        , { seatno: 3, player: 'Imfairminded', chips: 179.27 }
        , { seatno: 5, player: '1ntr4nce', chips: 100 }
        , { seatno: 6, player: 'huravy', chips: 100 }
        , { seatno: 8, player: 'medusaborb', chips: 100 }
        , { seatno: 10, player: 'danikeen', chips: 73.49 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 15
        , min: 13
        , sec: 30
        , hero: null
        , handid: '7973170995'
        , gameno: '7973170995'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 5 }
     , board: { card1: 'Jd', card2: 'Qc', card3: '4d' }
     , posts:
        [ { player: 'huravy', type: 'sb', amount: 0.5 }
        , { player: 'medusaborb', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'danikeen', type: 'fold' }
        , { player: 'ZYXXJT001', type: 'call', amount: 1 }
        , { player: 'Imfairminded', type: 'fold' }
        , { player: '1ntr4nce', type: 'raise', amount: 3, raiseTo: 4 }
        , { player: 'huravy', type: 'fold' }
        , { player: 'medusaborb', type: 'fold' }
        , { player: 'ZYXXJT001', type: 'call', amount: 3 } ]
     , flop:
        [ { player: 'ZYXXJT001', type: 'bet', amount: 4.75 }
        , { player: '1ntr4nce', type: 'fold' } ]
     , turn: []
     , river: []
     , showdown: [ { player: 'ZYXXJT001', type: 'collect', amount: 9.03 } ]
     , summary: [ { type: 'pot', single: true, amount: 9.03 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'ZYXXJT001', chips: 77.2 }
        , { seatno: 3, player: 'Imfairminded', chips: 182.45 }
        , { seatno: 5, player: '1ntr4nce', chips: 100 }
        , { seatno: 6, player: 'huravy', chips: 100 }
        , { seatno: 8, player: 'medusaborb', chips: 100 }
        , { seatno: 10, player: 'danikeen', chips: 73.49 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 15
        , min: 15
        , sec: 13
        , hero: null
        , handid: '7973173664'
        , gameno: '7973173664'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 10 }
     , board: {}
     , posts:
        [ { player: 'ZYXXJT001', type: 'sb', amount: 0.5 }
        , { player: 'Imfairminded', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: '1ntr4nce', type: 'fold' }
        , { player: 'huravy', type: 'fold' }
        , { player: 'medusaborb', type: 'fold' }
        , { player: 'danikeen', type: 'fold' }
        , { player: 'ZYXXJT001', type: 'call', amount: 0.5 }
        , { player: 'Imfairminded', type: 'raise', amount: 2.5, raiseTo: 3 }
        , { player: 'ZYXXJT001', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'Imfairminded', type: 'collect', amount: 2 } ]
     , summary: [ { type: 'pot', single: true, amount: 2 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'ZYXXJT001', chips: 76.2 }
        , { seatno: 3, player: 'Imfairminded', chips: 183.45 }
        , { seatno: 5, player: '1ntr4nce', chips: 100 }
        , { seatno: 6, player: 'huravy', chips: 100 }
        , { seatno: 8, player: 'medusaborb', chips: 100 }
        , { seatno: 10, player: 'danikeen', chips: 73.49 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 15
        , min: 15
        , sec: 35
        , hero: null
        , handid: '7973174128'
        , gameno: '7973174128'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 1 }
     , board: {}
     , posts:
        [ { player: 'Imfairminded', type: 'sb', amount: 0.5 }
        , { player: '1ntr4nce', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'huravy', type: 'fold' }
        , { player: 'medusaborb', type: 'fold' }
        , { player: 'danikeen', type: 'fold' }
        , { player: 'ZYXXJT001', type: 'fold' }
        , { player: 'Imfairminded', type: 'raise', amount: 3, raiseTo: 3 }
        , { player: '1ntr4nce', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'Imfairminded', type: 'collect', amount: 2 } ]
     , summary: [ { type: 'pot', single: true, amount: 2 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'ZYXXJT001', chips: 76.2 }
        , { seatno: 3, player: 'Imfairminded', chips: 182.45 }
        , { seatno: 5, player: '1ntr4nce', chips: 103 }
        , { seatno: 6, player: 'huravy', chips: 100 }
        , { seatno: 8, player: 'medusaborb', chips: 100.5 }
        , { seatno: 10, player: 'danikeen', chips: 73.49 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 15
        , min: 16
        , sec: 50
        , hero: null
        , handid: '7973174407'
        , gameno: '7973174407'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 6 }
     , board: {}
     , posts:
        [ { player: 'medusaborb', type: 'sb', amount: 0.5 }
        , { player: 'danikeen', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'ZYXXJT001', type: 'fold' }
        , { player: 'Imfairminded', type: 'fold' }
        , { player: '1ntr4nce', type: 'raise', amount: 2.5, raiseTo: 2.5 }
        , { player: 'huravy', type: 'raise', amount: 6.5, raiseTo: 9 }
        , { player: 'medusaborb', type: 'fold' }
        , { player: 'danikeen', type: 'fold' }
        , { player: '1ntr4nce', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'huravy', type: 'collect', amount: 6.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 6.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'ZYXXJT001', chips: 76.2 }
        , { seatno: 3, player: 'Imfairminded', chips: 182.45 }
        , { seatno: 5, player: '1ntr4nce', chips: 100.5 }
        , { seatno: 6, player: 'huravy', chips: 104 }
        , { seatno: 8, player: 'medusaborb', chips: 100 }
        , { seatno: 10, player: 'danikeen', chips: 72.49 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 15
        , min: 17
        , sec: 24
        , hero: null
        , handid: '7973174538'
        , gameno: '7973174538'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 8 }
     , board: {}
     , posts:
        [ { player: 'danikeen', type: 'sb', amount: 0.5 }
        , { player: 'ZYXXJT001', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'Imfairminded', type: 'fold' }
        , { player: '1ntr4nce', type: 'fold' }
        , { player: 'huravy', type: 'fold' }
        , { player: 'medusaborb', type: 'fold' }
        , { player: 'danikeen', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'ZYXXJT001', type: 'collect', amount: 1 } ]
     , summary: [ { type: 'pot', single: true, amount: 1 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'ZYXXJT001', chips: 76.7 }
        , { seatno: 3, player: 'Imfairminded', chips: 182.45 }
        , { seatno: 5, player: '1ntr4nce', chips: 100.5 }
        , { seatno: 6, player: 'huravy', chips: 104 }
        , { seatno: 8, player: 'medusaborb', chips: 100 }
        , { seatno: 10, player: 'danikeen', chips: 71.99 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 15
        , min: 17
        , sec: 53
        , hero: null
        , handid: '7973176005'
        , gameno: '7973176005'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 10 }
     , board:
        { card1: '4d', card2: '4c', card3: '6c', card4: 'Ad', card5: '7c' }
     , posts:
        [ { player: 'ZYXXJT001', type: 'sb', amount: 0.5 }
        , { player: 'Imfairminded', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: '1ntr4nce', type: 'raise', amount: 3, raiseTo: 3 }
        , { player: 'huravy', type: 'fold' }
        , { player: 'medusaborb', type: 'call', amount: 3 }
        , { player: 'danikeen', type: 'call', amount: 3 }
        , { player: 'ZYXXJT001', type: 'fold' }
        , { player: 'Imfairminded', type: 'fold' } ]
     , flop:
        [ { player: '1ntr4nce', type: 'check' }
        , { player: 'medusaborb', type: 'bet', amount: 6.3 }
        , { player: 'danikeen', type: 'call', amount: 6.3 }
        , { player: '1ntr4nce', type: 'fold' } ]
     , turn:
        [ { player: 'medusaborb', type: 'check' }
        , { player: 'danikeen', type: 'check' } ]
     , river:
        [ { player: 'medusaborb', type: 'check' }
        , { player: 'danikeen', type: 'bet', amount: 16 }
        , { player: 'medusaborb', type: 'fold' } ]
     , showdown: [ { player: 'danikeen', type: 'collect', amount: 21.95 } ]
     , summary: [ { type: 'pot', single: true, amount: 21.95 } ]
     , hero: null
     , holecards: null } ])
  t.end()
})
