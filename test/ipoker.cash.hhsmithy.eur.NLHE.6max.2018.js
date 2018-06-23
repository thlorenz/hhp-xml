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
        [ { player: 'Imfairminded', type: 'raise', amount: 2 }
        , { player: 'samsung77', type: 'raise', amount: 9 }
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
        [ { player: 'samsung77', type: 'raise', amount: 2 }
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
        , { player: 'Imfairminded', type: 'raise', amount: 3 }
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
        [ { player: 'h3llr4zor', type: 'raise', amount: 2 }
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
        [ { player: 'Imfairminded', type: 'raise', amount: 2 }
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
        , { player: 'GrifonnS', type: 'raise', amount: 2 }
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
        [ { player: 'h3llr4zor', type: 'raise', amount: 2 }
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
        [ { player: 'Imfairminded', type: 'raise', amount: 2 }
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
        , { player: '48085832', type: 'raise', amount: 15 }
        , { player: 'Imfairminded', type: 'raise', amount: 40 }
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
        [ { player: '48085832', type: 'raise', amount: 2.5 }
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
        [ { player: 'h3llr4zor', type: 'raise', amount: 2 }
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
        [ { player: 'Imfairminded', type: 'raise', amount: 2 }
        , { player: 'GrifonnS', type: 'raise', amount: 6 }
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
        [ { player: 'h3llr4zor', type: 'raise', amount: 2 }
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
        [ { player: 'Imfairminded', type: 'raise', amount: 2 }
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
        , { player: 'h3llr4zor', type: 'raise', amount: 2 }
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
        , { player: 'h3llr4zor', type: 'raise', amount: 2 }
        , { player: 'Imfairminded', type: 'raise', amount: 6 }
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
        , { player: 'Imfairminded', type: 'raise', amount: 2 }
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
        [ { player: 'h3llr4zor', type: 'raise', amount: 2 }
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
        , { player: 'HOOKD001', type: 'raise', amount: 2.5 }
        , { player: '1ntr4nce', type: 'raise', amount: 9 }
        , { player: 'h3llr4zor', type: 'call', amount: 8 }
        , { player: 'HOOKD001', type: 'raise', amount: 38.5 }
        , { player: '1ntr4nce', type: 'fold' }
        , { player: 'h3llr4zor', type: 'raise', amount: 101.5 }
        , { player: 'HOOKD001', type: 'allin', amount: 52, raiseTo: 60 } ]
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
        , { player: 'h3llr4zor', type: 'raise', amount: 2 }
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
        , { player: '1ntr4nce', type: 'raise', amount: 2.5 }
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
        , { player: 'h3llr4zor', type: 'raise', amount: 2 }
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
        , { player: 'h3llr4zor', type: 'raise', amount: 2 }
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
        , { player: 'HOOKD001', type: 'raise', amount: 2.5 }
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
        , { player: 'CJHRZH', type: 'raise', amount: 2.5 }
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
        , { player: 'Imfairminded', type: 'raise', amount: 3 }
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
        , { player: 'h3llr4zor', type: 'raise', amount: 2 }
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
        [ { player: 'h3llr4zor', type: 'raise', amount: 2 }
        , { player: 'Imfairminded', type: 'fold' }
        , { player: 'CJHRZH', type: 'raise', amount: 8 }
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
        , { player: 'HOOKD001', type: 'raise', amount: 2.5 }
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
        , { player: 'h3llr4zor', type: 'raise', amount: 2 }
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
        [ { player: '1ntr4nce', type: 'raise', amount: 3 }
        , { player: 'h3llr4zor', type: 'fold' }
        , { player: 'Imfairminded', type: 'call', amount: 3 }
        , { player: 'CJHRZH', type: 'fold' }
        , { player: 'HOOKD001', type: 'fold' } ]
     , flop:
        [ { player: '1ntr4nce', type: 'check' }
        , { player: 'Imfairminded', type: 'bet', amount: 3 }
        , { player: '1ntr4nce', type: 'raise', amount: 11 }
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
        , { player: 'Pharlll', type: 'raise', amount: 3 }
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
        , { player: 'HOOKD001', type: 'raise', amount: 2.5 }
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
        [ { player: 'HOOKD001', type: 'raise', amount: 3 }
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
        , { player: 'h3llr4zor', type: 'raise', amount: 2 }
        , { player: 'Imfairminded', type: 'raise', amount: 7 }
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
        , { player: 'Imfairminded', type: 'raise', amount: 2 }
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
        [ { player: 'Imfairminded', type: 'raise', amount: 3 }
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
        [ { player: 'CJHRZH', type: 'raise', amount: 2.5 }
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
        , { player: 'h3llr4zor', type: 'raise', amount: 2 }
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
        , { player: 'Pharlll', type: 'raise', amount: 2 }
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
        , { player: 'Imfairminded', type: 'raise', amount: 3 }
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
        , { player: 'Imfairminded', type: 'raise', amount: 2 }
        , { player: 'CJHRZH', type: 'call', amount: 1.5 }
        , { player: 'HOOKD001', type: 'raise', amount: 10 }
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
        , { player: 'HOOKD001', type: 'raise', amount: 3.08 }
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
        [ { player: 'Imfairminded', type: 'raise', amount: 3 }
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
        , { player: 'HOOKD001', type: 'raise', amount: 2.5 }
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
        , { player: 'h3llr4zor', type: 'raise', amount: 2 }
        , { player: 'Imfairminded', type: 'fold' }
        , { player: 'CJHRZH', type: 'call', amount: 1 } ]
     , flop:
        [ { player: 'CJHRZH', type: 'check' }
        , { player: 'h3llr4zor', type: 'bet', amount: 2.25 }
        , { player: 'CJHRZH', type: 'raise', amount: 6 }
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
        , { player: 'Imfairminded', type: 'raise', amount: 2 }
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
        , { player: 'CJHRZH', type: 'raise', amount: 2.5 }
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
        , { player: 'Imfairminded', type: 'raise', amount: 3 }
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
        , { player: 'Pharlll', type: 'raise', amount: 3 }
        , { player: 'danikeen', type: 'fold' }
        , { player: 'h3llr4zor', type: 'fold' }
        , { player: 'Imfairminded', type: 'raise', amount: 9 }
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
        , { player: 'h3llr4zor', type: 'raise', amount: 2 }
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
        [ { player: 'Pharlll', type: 'raise', amount: 3 }
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
        , { player: 'CJHRZH', type: 'raise', amount: 2.5 }
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
        , { player: 'CJHRZH', type: 'raise', amount: 2.5 }
        , { player: 'HOOKD001', type: 'raise', amount: 8 }
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
        , { player: 'HOOKD001', type: 'raise', amount: 3 }
        , { player: 'Pharlll', type: 'fold' }
        , { player: 'danikeen', type: 'raise', amount: 9 }
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
        , { player: 'Imfairminded', type: 'raise', amount: 3 }
        , { player: 'CJHRZH', type: 'raise', amount: 10 }
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
        , { player: 'h3llr4zor', type: 'raise', amount: 2 }
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
        , { player: 'Pharlll', type: 'raise', amount: 2 }
        , { player: 'danikeen', type: 'fold' }
        , { player: 'Imfairminded', type: 'raise', amount: 7 }
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
        [ { player: 'HOOKD001', type: 'raise', amount: 3 }
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
        , { player: 'danikeen', type: 'raise', amount: 3 }
        , { player: 'Imfairminded', type: 'raise', amount: 9 }
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
        [ { player: 'danikeen', type: 'raise', amount: 3 }
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
        [ { player: 'Pharlll', type: 'raise', amount: 3 }
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
        , { player: 'CJHRZH', type: 'raise', amount: 2.5 }
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
        , { player: 'danikeen', type: 'raise', amount: 3 }
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
        , { player: 'Pharlll', type: 'raise', amount: 3 }
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
        [ { player: 'Imfairminded', type: 'raise', amount: 2 }
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
        , { player: 'danikeen', type: 'raise', amount: 3 }
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
        , { player: 'bf067329', type: 'raise', amount: 3 }
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
        , { player: 'HOOKD001', type: 'raise', amount: 3.08 }
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
        , { player: 'danikeen', type: 'raise', amount: 3 }
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
        , { player: 'Imfairminded', type: 'raise', amount: 3 }
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
        , { player: 'Imfairminded', type: 'raise', amount: 2 }
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
        [ { player: 'Imfairminded', type: 'raise', amount: 2 }
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
        , { player: 'HOOKD001', type: 'raise', amount: 2.5 }
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
        , { player: 'Imfairminded', type: 'raise', amount: 3 }
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
        [ { player: '1ntr4nce', type: 'raise', amount: 2.5 }
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
        , { player: 'Imfairminded', type: 'raise', amount: 3 }
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
        , { player: 'Imfairminded', type: 'raise', amount: 2 }
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
        , { player: '1ntr4nce', type: 'raise', amount: 4 }
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
        , { player: 'Imfairminded', type: 'raise', amount: 3 }
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
        , { player: 'Imfairminded', type: 'raise', amount: 3 }
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
        , { player: '1ntr4nce', type: 'raise', amount: 2.5 }
        , { player: 'huravy', type: 'raise', amount: 9 }
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
        [ { player: '1ntr4nce', type: 'raise', amount: 3 }
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

test(`ipoker: ${file} second 100`, function(t) {
  const res = processFile(file)
  spok(t, res.slice(100, 200),
    [ { seats:
        [ { seatno: 3, player: 'Imfairminded', chips: 181.45 }
        , { seatno: 5, player: '1ntr4nce', chips: 100 }
        , { seatno: 6, player: 'huravy', chips: 104 }
        , { seatno: 8, player: 'medusaborb', chips: 100 }
        , { seatno: 10, player: 'danikeen', chips: 84.64 } ]
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
        , min: 19
        , sec: 46
        , hero: null
        , handid: '7973176894'
        , gameno: '7973176894'
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
        [ { player: 'medusaborb', type: 'fold' }
        , { player: 'danikeen', type: 'raise', amount: 3 }
        , { player: 'Imfairminded', type: 'fold' }
        , { player: '1ntr4nce', type: 'fold' }
        , { player: 'huravy', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'danikeen', type: 'collect', amount: 2.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 2.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 3, player: 'Imfairminded', chips: 181.45 }
        , { seatno: 5, player: '1ntr4nce', chips: 100 }
        , { seatno: 6, player: 'huravy', chips: 103 }
        , { seatno: 8, player: 'medusaborb', chips: 100 }
        , { seatno: 10, player: 'danikeen', chips: 86.14 } ]
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
        , min: 20
        , sec: 10
        , hero: null
        , handid: '7973176973'
        , gameno: '7973176973'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 5 }
     , board: {}
     , posts:
        [ { player: 'huravy', type: 'sb', amount: 0.5 }
        , { player: 'medusaborb', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'danikeen', type: 'raise', amount: 3 }
        , { player: 'Imfairminded', type: 'fold' }
        , { player: '1ntr4nce', type: 'fold' }
        , { player: 'huravy', type: 'fold' }
        , { player: 'medusaborb', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'danikeen', type: 'collect', amount: 2.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 2.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Sean007007', chips: 39 }
        , { seatno: 3, player: 'Imfairminded', chips: 181.45 }
        , { seatno: 5, player: '1ntr4nce', chips: 100 }
        , { seatno: 6, player: 'huravy', chips: 102.5 }
        , { seatno: 8, player: 'medusaborb', chips: 100 }
        , { seatno: 10, player: 'danikeen', chips: 89.84 } ]
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
        , min: 21
        , sec: 30
        , hero: null
        , handid: '7973178558'
        , gameno: '7973178558'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 10 }
     , board:
        { card1: '8c', card2: 'Js', card3: '8s', card4: '7d', card5: '8h' }
     , posts:
        [ { player: 'Sean007007', type: 'sb', amount: 0.5 }
        , { player: 'Imfairminded', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: '1ntr4nce', type: 'fold' }
        , { player: 'huravy', type: 'fold' }
        , { player: 'medusaborb', type: 'fold' }
        , { player: 'danikeen', type: 'raise', amount: 3.5 }
        , { player: 'Sean007007', type: 'call', amount: 3 }
        , { player: 'Imfairminded', type: 'fold' } ]
     , flop:
        [ { player: 'Sean007007', type: 'check' }
        , { player: 'danikeen', type: 'check' } ]
     , turn:
        [ { player: 'Sean007007', type: 'check' }
        , { player: 'danikeen', type: 'check' } ]
     , river:
        [ { player: 'Sean007007', type: 'check' }
        , { player: 'danikeen', type: 'check' } ]
     , showdown:
        [ { player: 'danikeen', type: 'collect', amount: 7.6 }
        , { player: 'danikeen', type: 'show', card1: 'Kc', card2: 'Ah' } ]
     , summary: [ { type: 'pot', single: true, amount: 7.6 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Sean007007', chips: 28.5 }
        , { seatno: 3, player: 'Imfairminded', chips: 179.45 }
        , { seatno: 5, player: '1ntr4nce', chips: 107.25 }
        , { seatno: 6, player: 'huravy', chips: 102.5 }
        , { seatno: 8, player: 'medusaborb', chips: 100 }
        , { seatno: 10, player: 'danikeen', chips: 93.94 } ]
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
        , min: 22
        , sec: 59
        , hero: null
        , handid: '7973178944'
        , gameno: '7973178944'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 3 }
     , board:
        { card1: 'Kd', card2: 'Ks', card3: '8d', card4: '4c', card5: '3s' }
     , posts:
        [ { player: '1ntr4nce', type: 'sb', amount: 0.5 }
        , { player: 'huravy', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'medusaborb', type: 'fold' }
        , { player: 'danikeen', type: 'fold' }
        , { player: 'Sean007007', type: 'call', amount: 1 }
        , { player: 'Imfairminded', type: 'raise', amount: 3 }
        , { player: '1ntr4nce', type: 'call', amount: 2.5 }
        , { player: 'huravy', type: 'fold' }
        , { player: 'Sean007007', type: 'call', amount: 2 } ]
     , flop:
        [ { player: '1ntr4nce', type: 'check' }
        , { player: 'Sean007007', type: 'check' }
        , { player: 'Imfairminded', type: 'check' } ]
     , turn:
        [ { player: '1ntr4nce', type: 'check' }
        , { player: 'Sean007007', type: 'check' }
        , { player: 'Imfairminded', type: 'check' } ]
     , river:
        [ { player: '1ntr4nce', type: 'check' }
        , { player: 'Sean007007', type: 'check' }
        , { player: 'Imfairminded', type: 'check' } ]
     , showdown:
        [ { player: '1ntr4nce', type: 'collect', amount: 9.5 }
        , { player: '1ntr4nce', type: 'show', card1: 'Js', card2: 'Ah' } ]
     , summary: [ { type: 'pot', single: true, amount: 9.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Sean007007', chips: 25.5 }
        , { seatno: 3, player: 'Imfairminded', chips: 176.45 }
        , { seatno: 5, player: '1ntr4nce', chips: 113.75 }
        , { seatno: 6, player: 'huravy', chips: 101.5 }
        , { seatno: 8, player: 'medusaborb', chips: 100 }
        , { seatno: 10, player: 'danikeen', chips: 93.94 } ]
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
        , min: 23
        , sec: 56
        , hero: null
        , handid: '7973179150'
        , gameno: '7973179150'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 5 }
     , board: {}
     , posts:
        [ { player: 'huravy', type: 'sb', amount: 0.5 }
        , { player: 'medusaborb', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'danikeen', type: 'fold' }
        , { player: 'Sean007007', type: 'fold' }
        , { player: 'Imfairminded', type: 'fold' }
        , { player: '1ntr4nce', type: 'raise', amount: 2.5 }
        , { player: 'huravy', type: 'fold' }
        , { player: 'medusaborb', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: '1ntr4nce', type: 'collect', amount: 2.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 2.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Sean007007', chips: 26 }
        , { seatno: 3, player: 'Imfairminded', chips: 175.45 }
        , { seatno: 5, player: '1ntr4nce', chips: 115.25 }
        , { seatno: 6, player: 'huravy', chips: 100 }
        , { seatno: 8, player: 'medusaborb', chips: 101.5 }
        , { seatno: 10, player: 'danikeen', chips: 100.62 } ]
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
        , min: 25
        , sec: 45
        , hero: null
        , handid: '7973181715'
        , gameno: '7973181715'
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
        , { player: 'Sean007007', type: 'fold' }
        , { player: 'Imfairminded', type: 'raise', amount: 3 }
        , { player: '1ntr4nce', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'Imfairminded', type: 'collect', amount: 2 } ]
     , summary: [ { type: 'pot', single: true, amount: 2 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Sean007007', chips: 26 }
        , { seatno: 3, player: 'Imfairminded', chips: 176.45 }
        , { seatno: 5, player: '1ntr4nce', chips: 114.25 }
        , { seatno: 6, player: 'huravy', chips: 100 }
        , { seatno: 8, player: 'medusaborb', chips: 101.5 }
        , { seatno: 10, player: 'danikeen', chips: 100.62 } ]
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
        , min: 26
        , sec: 4
        , hero: null
        , handid: '7973181788'
        , gameno: '7973181788'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 3 }
     , board:
        { card1: '5s', card2: 'Td', card3: 'Js', card4: '4s', card5: '6h' }
     , posts:
        [ { player: '1ntr4nce', type: 'sb', amount: 0.5 }
        , { player: 'huravy', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'medusaborb', type: 'fold' }
        , { player: 'danikeen', type: 'fold' }
        , { player: 'Sean007007', type: 'raise', amount: 3 }
        , { player: 'Imfairminded', type: 'fold' }
        , { player: '1ntr4nce', type: 'fold' }
        , { player: 'huravy', type: 'raise', amount: 10 }
        , { player: 'Sean007007', type: 'raise', amount: 25 }
        , { player: 'huravy', type: 'raise', amount: 40 }
        , { player: 'Sean007007', type: 'allin', amount: 1, raiseTo: 1 } ]
     , flop: []
     , turn: []
     , river: []
     , showdown:
        [ { player: 'huravy', type: 'collect', amount: 49.88 }
        , { player: 'Sean007007', type: 'show', card1: '9c', card2: '9h' }
        , { player: 'huravy', type: 'show', card1: 'Tc', card2: 'Ad' } ]
     , summary: [ { type: 'pot', single: true, amount: 49.88 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 3, player: 'Imfairminded', chips: 176.45 }
        , { seatno: 5, player: '1ntr4nce', chips: 113.75 }
        , { seatno: 6, player: 'huravy', chips: 123.38 }
        , { seatno: 8, player: 'medusaborb', chips: 101.5 }
        , { seatno: 10, player: 'danikeen', chips: 101.12 } ]
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
        , min: 27
        , sec: 20
        , hero: null
        , handid: '7973182215'
        , gameno: '7973182215'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 8 }
     , board: { card1: 'Th', card2: '6s', card3: 'Kh', card4: '7s' }
     , posts:
        [ { player: 'danikeen', type: 'sb', amount: 0.5 }
        , { player: 'Imfairminded', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: '1ntr4nce', type: 'fold' }
        , { player: 'huravy', type: 'fold' }
        , { player: 'medusaborb', type: 'raise', amount: 2.5 }
        , { player: 'danikeen', type: 'fold' }
        , { player: 'Imfairminded', type: 'call', amount: 1.5 } ]
     , flop:
        [ { player: 'Imfairminded', type: 'check' }
        , { player: 'medusaborb', type: 'check' } ]
     , turn:
        [ { player: 'Imfairminded', type: 'check' }
        , { player: 'medusaborb', type: 'bet', amount: 3.85 }
        , { player: 'Imfairminded', type: 'raise', amount: 13 }
        , { player: 'medusaborb', type: 'fold' } ]
     , river: []
     , showdown:
        [ { player: 'Imfairminded', type: 'collect', amount: 12.54 } ]
     , summary: [ { type: 'pot', single: true, amount: 12.54 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 3, player: 'Imfairminded', chips: 182.64 }
        , { seatno: 5, player: '1ntr4nce', chips: 113.75 }
        , { seatno: 6, player: 'huravy', chips: 123.38 }
        , { seatno: 8, player: 'medusaborb', chips: 100 }
        , { seatno: 10, player: 'danikeen', chips: 100.62 } ]
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
        , min: 28
        , sec: 7
        , hero: null
        , handid: '7973182397'
        , gameno: '7973182397'
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
        [ { player: 'huravy', type: 'fold' }
        , { player: 'medusaborb', type: 'fold' }
        , { player: 'danikeen', type: 'fold' }
        , { player: 'Imfairminded', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: '1ntr4nce', type: 'collect', amount: 1 } ]
     , summary: [ { type: 'pot', single: true, amount: 1 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 3, player: 'Imfairminded', chips: 182.14 }
        , { seatno: 5, player: '1ntr4nce', chips: 114.25 }
        , { seatno: 8, player: 'medusaborb', chips: 100 }
        , { seatno: 10, player: 'danikeen', chips: 100.62 } ]
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
        , min: 28
        , sec: 30
        , hero: null
        , handid: '7973182672'
        , gameno: '7973182672'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 3 }
     , board: {}
     , posts:
        [ { player: '1ntr4nce', type: 'sb', amount: 0.5 }
        , { player: 'medusaborb', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'danikeen', type: 'fold' }
        , { player: 'Imfairminded', type: 'fold' }
        , { player: '1ntr4nce', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'medusaborb', type: 'collect', amount: 1 } ]
     , summary: [ { type: 'pot', single: true, amount: 1 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 3, player: 'Imfairminded', chips: 182.14 }
        , { seatno: 5, player: '1ntr4nce', chips: 113.75 }
        , { seatno: 8, player: 'medusaborb', chips: 100.5 }
        , { seatno: 10, player: 'danikeen', chips: 100.62 } ]
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
        , min: 28
        , sec: 40
        , hero: null
        , handid: '7973182712'
        , gameno: '7973182712'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 5 }
     , board: {}
     , posts:
        [ { player: 'medusaborb', type: 'sb', amount: 0.5 }
        , { player: 'danikeen', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'Imfairminded', type: 'raise', amount: 2 }
        , { player: '1ntr4nce', type: 'fold' }
        , { player: 'medusaborb', type: 'fold' }
        , { player: 'danikeen', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'Imfairminded', type: 'collect', amount: 2.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 2.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 3, player: 'Imfairminded', chips: 182.64 }
        , { seatno: 5, player: '1ntr4nce', chips: 118.75 }
        , { seatno: 8, player: 'medusaborb', chips: 100 }
        , { seatno: 10, player: 'danikeen', chips: 95.12 } ]
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
        , min: 30
        , sec: 11
        , hero: null
        , handid: '7973185029'
        , gameno: '7973185029'
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
        [ { player: 'medusaborb', type: 'raise', amount: 3 }
        , { player: 'danikeen', type: 'fold' }
        , { player: 'Imfairminded', type: 'fold' }
        , { player: '1ntr4nce', type: 'raise', amount: 10 }
        , { player: 'medusaborb', type: 'raise', amount: 24 }
        , { player: '1ntr4nce', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'medusaborb', type: 'collect', amount: 20.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 20.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Sean007007', chips: 35.5 }
        , { seatno: 3, player: 'Imfairminded', chips: 197.69 }
        , { seatno: 5, player: '1ntr4nce', chips: 108.25 }
        , { seatno: 6, player: 'Pharlll', chips: 100 }
        , { seatno: 8, player: 'medusaborb', chips: 110.5 }
        , { seatno: 10, player: 'danikeen', chips: 95.12 } ]
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
        , min: 31
        , sec: 56
        , hero: null
        , handid: '7973186702'
        , gameno: '7973186702'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 5 }
     , board: {}
     , posts:
        [ { player: 'Pharlll', type: 'sb', amount: 0.5 }
        , { player: 'medusaborb', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'danikeen', type: 'fold' }
        , { player: 'Sean007007', type: 'call', amount: 1 }
        , { player: 'Imfairminded', type: 'raise', amount: 3 }
        , { player: '1ntr4nce', type: 'fold' }
        , { player: 'Pharlll', type: 'call', amount: 2.5 }
        , { player: 'medusaborb', type: 'raise', amount: 13 }
        , { player: 'Sean007007', type: 'fold' }
        , { player: 'Imfairminded', type: 'fold' }
        , { player: 'Pharlll', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'medusaborb', type: 'collect', amount: 10 } ]
     , summary: [ { type: 'pot', single: true, amount: 10 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Sean007007', chips: 39.06 }
        , { seatno: 3, player: 'Imfairminded', chips: 191.69 }
        , { seatno: 5, player: '1ntr4nce', chips: 108.25 }
        , { seatno: 6, player: 'Pharlll', chips: 100 }
        , { seatno: 8, player: 'medusaborb', chips: 117 }
        , { seatno: 10, player: 'danikeen', chips: 93.62 } ]
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
        , min: 34
        , sec: 6
        , hero: null
        , handid: '7973187173'
        , gameno: '7973187173'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 10 }
     , board: {}
     , posts:
        [ { player: 'Sean007007', type: 'sb', amount: 0.5 }
        , { player: 'Imfairminded', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: '1ntr4nce', type: 'fold' }
        , { player: 'Pharlll', type: 'fold' }
        , { player: 'medusaborb', type: 'fold' }
        , { player: 'danikeen', type: 'raise', amount: 3 }
        , { player: 'Sean007007', type: 'fold' }
        , { player: 'Imfairminded', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'danikeen', type: 'collect', amount: 2.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 2.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Sean007007', chips: 37.56 }
        , { seatno: 3, player: 'Imfairminded', chips: 185.69 }
        , { seatno: 5, player: '1ntr4nce', chips: 111.75 }
        , { seatno: 6, player: 'Pharlll', chips: 101.85 }
        , { seatno: 8, player: 'medusaborb', chips: 117 }
        , { seatno: 10, player: 'danikeen', chips: 95.12 } ]
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
        , min: 36
        , sec: 21
        , hero: null
        , handid: '7973189242'
        , gameno: '7973189242'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 5 }
     , board:
        { card1: '8d', card2: '8s', card3: '7s', card4: '4h', card5: '3c' }
     , posts:
        [ { player: 'Pharlll', type: 'sb', amount: 0.5 }
        , { player: 'medusaborb', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'danikeen', type: 'fold' }
        , { player: 'Sean007007', type: 'call', amount: 1 }
        , { player: 'Imfairminded', type: 'fold' }
        , { player: '1ntr4nce', type: 'fold' }
        , { player: 'Pharlll', type: 'call', amount: 0.5 }
        , { player: 'medusaborb', type: 'raise', amount: 4.52 }
        , { player: 'Sean007007', type: 'call', amount: 3.52 }
        , { player: 'Pharlll', type: 'fold' } ]
     , flop:
        [ { player: 'medusaborb', type: 'bet', amount: 6.02 }
        , { player: 'Sean007007', type: 'call', amount: 6.02 } ]
     , turn:
        [ { player: 'medusaborb', type: 'check' }
        , { player: 'Sean007007', type: 'check' } ]
     , river:
        [ { player: 'medusaborb', type: 'check' }
        , { player: 'Sean007007', type: 'check' } ]
     , showdown:
        [ { player: 'Sean007007', type: 'collect', amount: 20.98 }
        , { player: 'Sean007007', type: 'show', card1: 'As', card2: 'Jh' } ]
     , summary: [ { type: 'pot', single: true, amount: 20.98 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Sean007007', chips: 93 }
        , { seatno: 3, player: 'Imfairminded', chips: 185.69 }
        , { seatno: 5, player: '1ntr4nce', chips: 111.75 }
        , { seatno: 6, player: 'Pharlll', chips: 100.85 }
        , { seatno: 8, player: 'medusaborb', chips: 100 }
        , { seatno: 10, player: 'danikeen', chips: 94.12 } ]
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
        , min: 38
        , sec: 24
        , hero: null
        , handid: '7973189837'
        , gameno: '7973189837'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 8 }
     , board: { card1: 'Ah', card2: '3c', card3: '7d', card4: 'Td' }
     , posts:
        [ { player: 'danikeen', type: 'sb', amount: 0.5 }
        , { player: 'Sean007007', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'Imfairminded', type: 'fold' }
        , { player: '1ntr4nce', type: 'fold' }
        , { player: 'Pharlll', type: 'raise', amount: 3 }
        , { player: 'medusaborb', type: 'fold' }
        , { player: 'danikeen', type: 'call', amount: 2.5 }
        , { player: 'Sean007007', type: 'call', amount: 2 } ]
     , flop:
        [ { player: 'danikeen', type: 'check' }
        , { player: 'Sean007007', type: 'check' }
        , { player: 'Pharlll', type: 'check' } ]
     , turn:
        [ { player: 'danikeen', type: 'bet', amount: 3.6 }
        , { player: 'Sean007007', type: 'fold' }
        , { player: 'Pharlll', type: 'fold' } ]
     , river: []
     , showdown: [ { player: 'danikeen', type: 'collect', amount: 8.55 } ]
     , summary: [ { type: 'pot', single: true, amount: 8.55 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Sean007007', chips: 73.85 }
        , { seatno: 3, player: 'Imfairminded', chips: 184.19 }
        , { seatno: 5, player: '1ntr4nce', chips: 110.75 }
        , { seatno: 6, player: 'Pharlll', chips: 100 }
        , { seatno: 8, player: 'medusaborb', chips: 108.06 }
        , { seatno: 10, player: 'danikeen', chips: 108.52 } ]
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
        , min: 40
        , sec: 36
        , hero: null
        , handid: '7973190367'
        , gameno: '7973190367'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 3 }
     , board:
        { card1: '3c', card2: 'Ac', card3: '8h', card4: 'Kd', card5: 'Td' }
     , posts:
        [ { player: '1ntr4nce', type: 'sb', amount: 0.5 }
        , { player: 'Pharlll', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'medusaborb', type: 'fold' }
        , { player: 'danikeen', type: 'fold' }
        , { player: 'Sean007007', type: 'raise', amount: 2 }
        , { player: 'Imfairminded', type: 'fold' }
        , { player: '1ntr4nce', type: 'fold' }
        , { player: 'Pharlll', type: 'raise', amount: 6 }
        , { player: 'Sean007007', type: 'call', amount: 4 } ]
     , flop:
        [ { player: 'Pharlll', type: 'bet', amount: 7 }
        , { player: 'Sean007007', type: 'call', amount: 7 } ]
     , turn:
        [ { player: 'Pharlll', type: 'bet', amount: 15 }
        , { player: 'Sean007007', type: 'call', amount: 15 } ]
     , river:
        [ { player: 'Pharlll', type: 'bet', amount: 24 }
        , { player: 'Sean007007', type: 'fold' } ]
     , showdown: [ { player: 'Pharlll', type: 'collect', amount: 53.68 } ]
     , summary: [ { type: 'pot', single: true, amount: 53.68 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Sean007007', chips: 47.7 }
        , { seatno: 3, player: 'Imfairminded', chips: 184.19 }
        , { seatno: 5, player: '1ntr4nce', chips: 110.25 }
        , { seatno: 6, player: 'Pharlll', chips: 124.68 }
        , { seatno: 8, player: 'medusaborb', chips: 107.06 } ]
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
        , min: 42
        , sec: 31
        , hero: null
        , handid: '7973194271'
        , gameno: '7973194271'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 6
        , button: 6 }
     , board: { card1: 'Kc', card2: '4c', card3: 'Tc', card4: '2s' }
     , posts:
        [ { player: 'medusaborb', type: 'sb', amount: 0.5 }
        , { player: 'Sean007007', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'Imfairminded', type: 'fold' }
        , { player: '1ntr4nce', type: 'raise', amount: 2.5 }
        , { player: 'Pharlll', type: 'fold' }
        , { player: 'medusaborb', type: 'fold' }
        , { player: 'Sean007007', type: 'call', amount: 1.5 } ]
     , flop:
        [ { player: 'Sean007007', type: 'check' }
        , { player: '1ntr4nce', type: 'check' } ]
     , turn:
        [ { player: 'Sean007007', type: 'check' }
        , { player: '1ntr4nce', type: 'bet', amount: 2.75 }
        , { player: 'Sean007007', type: 'fold' } ]
     , river: []
     , showdown: [ { player: '1ntr4nce', type: 'collect', amount: 5.23 } ]
     , summary: [ { type: 'pot', single: true, amount: 5.23 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Sean007007', chips: 45.2 }
        , { seatno: 3, player: 'Imfairminded', chips: 184.19 }
        , { seatno: 5, player: '1ntr4nce', chips: 112.98 }
        , { seatno: 6, player: 'Pharlll', chips: 124.68 }
        , { seatno: 8, player: 'medusaborb', chips: 106.56 } ]
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
        , min: 43
        , sec: 11
        , hero: null
        , handid: '7973194737'
        , gameno: '7973194737'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 6
        , button: 8 }
     , board: {}
     , posts:
        [ { player: 'Sean007007', type: 'sb', amount: 0.5 }
        , { player: 'Imfairminded', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: '1ntr4nce', type: 'fold' }
        , { player: 'Pharlll', type: 'fold' }
        , { player: 'medusaborb', type: 'fold' }
        , { player: 'Sean007007', type: 'raise', amount: 4 }
        , { player: 'Imfairminded', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'Sean007007', type: 'collect', amount: 2 } ]
     , summary: [ { type: 'pot', single: true, amount: 2 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Sean007007', chips: 46.2 }
        , { seatno: 3, player: 'Imfairminded', chips: 183.19 }
        , { seatno: 5, player: '1ntr4nce', chips: 112.98 }
        , { seatno: 6, player: 'Pharlll', chips: 124.68 }
        , { seatno: 8, player: 'medusaborb', chips: 106.56 } ]
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
        , min: 43
        , sec: 41
        , hero: null
        , handid: '7973194863'
        , gameno: '7973194863'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 6
        , button: 1 }
     , board: {}
     , posts:
        [ { player: 'Imfairminded', type: 'sb', amount: 0.5 }
        , { player: '1ntr4nce', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'Pharlll', type: 'fold' }
        , { player: 'medusaborb', type: 'fold' }
        , { player: 'Sean007007', type: 'fold' }
        , { player: 'Imfairminded', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: '1ntr4nce', type: 'collect', amount: 1 } ]
     , summary: [ { type: 'pot', single: true, amount: 1 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Sean007007', chips: 47.58 }
        , { seatno: 3, player: 'Imfairminded', chips: 182.69 }
        , { seatno: 5, player: '1ntr4nce', chips: 112.98 }
        , { seatno: 6, player: 'Pharlll', chips: 123.68 }
        , { seatno: 8, player: 'medusaborb', chips: 106.56 } ]
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
        , min: 44
        , sec: 36
        , hero: null
        , handid: '7973195091'
        , gameno: '7973195091'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 6
        , button: 5 }
     , board: {}
     , posts:
        [ { player: 'Pharlll', type: 'sb', amount: 0.5 }
        , { player: 'medusaborb', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'Sean007007', type: 'fold' }
        , { player: 'Imfairminded', type: 'fold' }
        , { player: '1ntr4nce', type: 'raise', amount: 2.5 }
        , { player: 'Pharlll', type: 'raise', amount: 7 }
        , { player: 'medusaborb', type: 'fold' }
        , { player: '1ntr4nce', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'Pharlll', type: 'collect', amount: 6 } ]
     , summary: [ { type: 'pot', single: true, amount: 6 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Sean007007', chips: 47.58 }
        , { seatno: 3, player: 'Imfairminded', chips: 182.69 }
        , { seatno: 5, player: '1ntr4nce', chips: 110.48 }
        , { seatno: 6, player: 'Pharlll', chips: 127.18 }
        , { seatno: 8, player: 'medusaborb', chips: 105.56 }
        , { seatno: 10, player: '1576893454', chips: 100 } ]
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
        , min: 45
        , sec: 13
        , hero: null
        , handid: '7973195552'
        , gameno: '7973195552'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 6 }
     , board: { card1: '4d', card2: 'Ah', card3: 'Th' }
     , posts:
        [ { player: 'medusaborb', type: 'sb', amount: 0.5 }
        , { player: '1576893454', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'Sean007007', type: 'call', amount: 1 }
        , { player: 'Imfairminded', type: 'fold' }
        , { player: '1ntr4nce', type: 'fold' }
        , { player: 'Pharlll', type: 'fold' }
        , { player: 'medusaborb', type: 'fold' }
        , { player: '1576893454', type: 'check' } ]
     , flop:
        [ { player: '1576893454', type: 'check' }
        , { player: 'Sean007007', type: 'bet', amount: 1 }
        , { player: '1576893454', type: 'fold' } ]
     , turn: []
     , river: []
     , showdown: [ { player: 'Sean007007', type: 'collect', amount: 2.38 } ]
     , summary: [ { type: 'pot', single: true, amount: 2.38 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Sean007007', chips: 47.46 }
        , { seatno: 3, player: 'Imfairminded', chips: 181.69 }
        , { seatno: 5, player: '1ntr4nce', chips: 110.48 }
        , { seatno: 6, player: 'Pharlll', chips: 127.18 }
        , { seatno: 8, player: 'medusaborb', chips: 102.56 }
        , { seatno: 10, player: '1576893454', chips: 105 } ]
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
        , min: 46
        , sec: 47
        , hero: null
        , handid: '7973195938'
        , gameno: '7973195938'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 1 }
     , board: { card1: '5d', card2: 'As', card3: '8h' }
     , posts:
        [ { player: 'Imfairminded', type: 'sb', amount: 0.5 }
        , { player: '1ntr4nce', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'Pharlll', type: 'fold' }
        , { player: 'medusaborb', type: 'fold' }
        , { player: '1576893454', type: 'fold' }
        , { player: 'Sean007007', type: 'call', amount: 1 }
        , { player: 'Imfairminded', type: 'call', amount: 0.5 }
        , { player: '1ntr4nce', type: 'check' } ]
     , flop:
        [ { player: 'Imfairminded', type: 'check' }
        , { player: '1ntr4nce', type: 'check' }
        , { player: 'Sean007007', type: 'bet', amount: 1 }
        , { player: 'Imfairminded', type: 'fold' }
        , { player: '1ntr4nce', type: 'fold' } ]
     , turn: []
     , river: []
     , showdown: [ { player: 'Sean007007', type: 'collect', amount: 2.85 } ]
     , summary: [ { type: 'pot', single: true, amount: 2.85 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Sean007007', chips: 49.31 }
        , { seatno: 3, player: 'Imfairminded', chips: 180.69 }
        , { seatno: 5, player: '1ntr4nce', chips: 109.48 }
        , { seatno: 6, player: 'Pharlll', chips: 127.18 }
        , { seatno: 8, player: 'medusaborb', chips: 102.56 }
        , { seatno: 10, player: '1576893454', chips: 105 } ]
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
        , min: 47
        , sec: 23
        , hero: null
        , handid: '7973196074'
        , gameno: '7973196074'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 3 }
     , board: { card1: '2d', card2: '6c', card3: '3h', card4: '9s' }
     , posts:
        [ { player: '1ntr4nce', type: 'sb', amount: 0.5 }
        , { player: 'Pharlll', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'medusaborb', type: 'fold' }
        , { player: '1576893454', type: 'fold' }
        , { player: 'Sean007007', type: 'fold' }
        , { player: 'Imfairminded', type: 'raise', amount: 2 }
        , { player: '1ntr4nce', type: 'fold' }
        , { player: 'Pharlll', type: 'call', amount: 1 } ]
     , flop:
        [ { player: 'Pharlll', type: 'check' }
        , { player: 'Imfairminded', type: 'check' } ]
     , turn:
        [ { player: 'Pharlll', type: 'bet', amount: 3 }
        , { player: 'Imfairminded', type: 'fold' } ]
     , river: []
     , showdown: [ { player: 'Pharlll', type: 'collect', amount: 4.28 } ]
     , summary: [ { type: 'pot', single: true, amount: 4.28 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Sean007007', chips: 49.31 }
        , { seatno: 3, player: 'Imfairminded', chips: 178.69 }
        , { seatno: 5, player: '1ntr4nce', chips: 108.98 }
        , { seatno: 6, player: 'Pharlll', chips: 129.46 }
        , { seatno: 8, player: 'medusaborb', chips: 102.56 }
        , { seatno: 10, player: '1576893454', chips: 105 } ]
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
        , min: 48
        , sec: 22
        , hero: null
        , handid: '7973196312'
        , gameno: '7973196312'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 5 }
     , board:
        { card1: '9d', card2: 'Th', card3: '7h', card4: '5d', card5: 'Qh' }
     , posts:
        [ { player: 'Pharlll', type: 'sb', amount: 0.5 }
        , { player: 'medusaborb', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: '1576893454', type: 'fold' }
        , { player: 'Sean007007', type: 'fold' }
        , { player: 'Imfairminded', type: 'fold' }
        , { player: '1ntr4nce', type: 'raise', amount: 2.5 }
        , { player: 'Pharlll', type: 'fold' }
        , { player: 'medusaborb', type: 'call', amount: 1.5 } ]
     , flop:
        [ { player: 'medusaborb', type: 'check' }
        , { player: '1ntr4nce', type: 'bet', amount: 2 }
        , { player: 'medusaborb', type: 'call', amount: 2 } ]
     , turn:
        [ { player: 'medusaborb', type: 'check' }
        , { player: '1ntr4nce', type: 'bet', amount: 4 }
        , { player: 'medusaborb', type: 'call', amount: 4 } ]
     , river:
        [ { player: 'medusaborb', type: 'check' }
        , { player: '1ntr4nce', type: 'bet', amount: 12 }
        , { player: 'medusaborb', type: 'call', amount: 12 } ]
     , showdown:
        [ { player: '1ntr4nce', type: 'collect', amount: 39.43 }
        , { player: '1ntr4nce', type: 'show', card1: '8h', card2: '6h' } ]
     , summary: [ { type: 'pot', single: true, amount: 39.43 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Sean007007', chips: 49.31 }
        , { seatno: 3, player: 'Imfairminded', chips: 178.69 }
        , { seatno: 5, player: '1ntr4nce', chips: 127.91 }
        , { seatno: 6, player: 'Pharlll', chips: 128.96 }
        , { seatno: 8, player: 'medusaborb', chips: 100 }
        , { seatno: 10, player: '1576893454', chips: 105 } ]
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
        , min: 49
        , sec: 41
        , hero: null
        , handid: '7973197843'
        , gameno: '7973197843'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 6 }
     , board: { card1: 'Ah', card2: 'Qh', card3: 'Kd' }
     , posts:
        [ { player: 'medusaborb', type: 'sb', amount: 0.5 }
        , { player: '1576893454', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'Sean007007', type: 'call', amount: 1 }
        , { player: 'Imfairminded', type: 'fold' }
        , { player: '1ntr4nce', type: 'fold' }
        , { player: 'Pharlll', type: 'fold' }
        , { player: 'medusaborb', type: 'fold' }
        , { player: '1576893454', type: 'check' } ]
     , flop:
        [ { player: '1576893454', type: 'check' }
        , { player: 'Sean007007', type: 'bet', amount: 3 }
        , { player: '1576893454', type: 'fold' } ]
     , turn: []
     , river: []
     , showdown: [ { player: 'Sean007007', type: 'collect', amount: 2.38 } ]
     , summary: [ { type: 'pot', single: true, amount: 2.38 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Sean007007', chips: 63.15 }
        , { seatno: 3, player: 'Imfairminded', chips: 177.69 }
        , { seatno: 5, player: '1ntr4nce', chips: 127.91 }
        , { seatno: 6, player: 'Pharlll', chips: 133.09 }
        , { seatno: 8, player: 'medusaborb', chips: 100 }
        , { seatno: 10, player: '1576893454', chips: 100 } ]
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
        , min: 51
        , sec: 24
        , hero: null
        , handid: '7973198258'
        , gameno: '7973198258'
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
        [ { player: 'Pharlll', type: 'fold' }
        , { player: 'medusaborb', type: 'fold' }
        , { player: '1576893454', type: 'fold' }
        , { player: 'Sean007007', type: 'fold' }
        , { player: 'Imfairminded', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: '1ntr4nce', type: 'collect', amount: 1 } ]
     , summary: [ { type: 'pot', single: true, amount: 1 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Sean007007', chips: 67.28 }
        , { seatno: 3, player: 'Imfairminded', chips: 177.19 }
        , { seatno: 5, player: '1ntr4nce', chips: 120.41 }
        , { seatno: 6, player: 'Pharlll', chips: 139.79 }
        , { seatno: 8, player: 'medusaborb', chips: 100 }
        , { seatno: 10, player: '1576893454', chips: 100 } ]
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
        , min: 53
        , sec: 32
        , hero: null
        , handid: '7973199184'
        , gameno: '7973199184'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 6 }
     , board: { card1: 'Ah', card2: 'Ac', card3: '8h' }
     , posts:
        [ { player: 'medusaborb', type: 'sb', amount: 0.5 }
        , { player: '1576893454', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'Sean007007', type: 'fold' }
        , { player: 'Imfairminded', type: 'fold' }
        , { player: '1ntr4nce', type: 'fold' }
        , { player: 'Pharlll', type: 'raise', amount: 2 }
        , { player: 'medusaborb', type: 'fold' }
        , { player: '1576893454', type: 'call', amount: 1 } ]
     , flop:
        [ { player: '1576893454', type: 'check' }
        , { player: 'Pharlll', type: 'bet', amount: 2 }
        , { player: '1576893454', type: 'fold' } ]
     , turn: []
     , river: []
     , showdown: [ { player: 'Pharlll', type: 'collect', amount: 4.28 } ]
     , summary: [ { type: 'pot', single: true, amount: 4.28 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Sean007007', chips: 65.78 }
        , { seatno: 5, player: '1ntr4nce', chips: 118.91 }
        , { seatno: 6, player: 'Pharlll', chips: 148.57 }
        , { seatno: 8, player: 'medusaborb', chips: 100 }
        , { seatno: 10, player: '1576893454', chips: 100 } ]
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
        , min: 55
        , sec: 46
        , hero: null
        , handid: '7973202261'
        , gameno: '7973202261'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 5 }
     , board:
        { card1: '7h', card2: '4c', card3: '5h', card4: '9s', card5: '7c' }
     , posts:
        [ { player: 'Pharlll', type: 'sb', amount: 0.5 }
        , { player: 'medusaborb', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: '1576893454', type: 'fold' }
        , { player: 'Sean007007', type: 'call', amount: 1 }
        , { player: '1ntr4nce', type: 'raise', amount: 3 }
        , { player: 'Pharlll', type: 'fold' }
        , { player: 'medusaborb', type: 'fold' }
        , { player: 'Sean007007', type: 'call', amount: 2 } ]
     , flop:
        [ { player: 'Sean007007', type: 'check' }
        , { player: '1ntr4nce', type: 'check' } ]
     , turn:
        [ { player: 'Sean007007', type: 'check' }
        , { player: '1ntr4nce', type: 'bet', amount: 3 }
        , { player: 'Sean007007', type: 'call', amount: 3 } ]
     , river:
        [ { player: 'Sean007007', type: 'check' }
        , { player: '1ntr4nce', type: 'check' } ]
     , showdown:
        [ { player: '1ntr4nce', type: 'collect', amount: 12.83 }
        , { player: '1ntr4nce', type: 'show', card1: 'Ac', card2: '5c' } ]
     , summary: [ { type: 'pot', single: true, amount: 12.83 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Sean007007', chips: 61.16 }
        , { seatno: 3, player: 'eroxone77', chips: 100.5 }
        , { seatno: 5, player: '1ntr4nce', chips: 125.74 }
        , { seatno: 6, player: 'Pharlll', chips: 148.07 }
        , { seatno: 8, player: 'medusaborb', chips: 100 }
        , { seatno: 10, player: '1576893454', chips: 100 } ]
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
        , min: 58
        , sec: 5
        , hero: null
        , handid: '7973204119'
        , gameno: '7973204119'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 1 }
     , board: {}
     , posts:
        [ { player: 'eroxone77', type: 'sb', amount: 0.5 }
        , { player: '1ntr4nce', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'Pharlll', type: 'fold' }
        , { player: 'medusaborb', type: 'raise', amount: 3 }
        , { player: '1576893454', type: 'raise', amount: 9 }
        , { player: 'Sean007007', type: 'raise', amount: 61.16 }
        , { player: 'eroxone77', type: 'fold' }
        , { player: '1ntr4nce', type: 'fold' }
        , { player: 'medusaborb', type: 'fold' }
        , { player: '1576893454', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'Sean007007', type: 'collect', amount: 22.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 22.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Sean007007', chips: 83.74 }
        , { seatno: 3, player: 'eroxone77', chips: 100 }
        , { seatno: 5, player: '1ntr4nce', chips: 124.24 }
        , { seatno: 8, player: 'medusaborb', chips: 100 }
        , { seatno: 10, player: '1576893454', chips: 100 } ]
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
        , min: 59
        , sec: 52
        , hero: null
        , handid: '7973204526'
        , gameno: '7973204526'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 5 }
     , board: { card1: '3c', card2: 'Td', card3: 'Qh' }
     , posts:
        [ { player: 'medusaborb', type: 'sb', amount: 0.5 }
        , { player: '1576893454', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'Sean007007', type: 'call', amount: 1 }
        , { player: 'eroxone77', type: 'fold' }
        , { player: '1ntr4nce', type: 'fold' }
        , { player: 'medusaborb', type: 'fold' }
        , { player: '1576893454', type: 'check' } ]
     , flop:
        [ { player: '1576893454', type: 'check' }
        , { player: 'Sean007007', type: 'bet', amount: 3 }
        , { player: '1576893454', type: 'fold' } ]
     , turn: []
     , river: []
     , showdown: [ { player: 'Sean007007', type: 'collect', amount: 2.38 } ]
     , summary: [ { type: 'pot', single: true, amount: 2.38 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Sean007007', chips: 85.12 }
        , { seatno: 3, player: 'eroxone77', chips: 100 }
        , { seatno: 5, player: '1ntr4nce', chips: 124.24 }
        , { seatno: 8, player: 'medusaborb', chips: 100 }
        , { seatno: 10, player: '1576893454', chips: 100 } ]
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
        , hour: 16
        , min: 0
        , sec: 30
        , hero: null
        , handid: '7973204669'
        , gameno: '7973204669'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 8 }
     , board: {}
     , posts:
        [ { player: '1576893454', type: 'sb', amount: 0.5 }
        , { player: 'Sean007007', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'eroxone77', type: 'fold' }
        , { player: '1ntr4nce', type: 'fold' }
        , { player: 'medusaborb', type: 'fold' }
        , { player: '1576893454', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'Sean007007', type: 'collect', amount: 1 } ]
     , summary: [ { type: 'pot', single: true, amount: 1 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Sean007007', chips: 85.12 }
        , { seatno: 3, player: 'eroxone77', chips: 105.45 }
        , { seatno: 5, player: '1ntr4nce', chips: 123.24 }
        , { seatno: 8, player: 'medusaborb', chips: 100 }
        , { seatno: 10, player: '1576893454', chips: 100 } ]
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
        , hour: 16
        , min: 2
        , sec: 13
        , hero: null
        , handid: '7973206399'
        , gameno: '7973206399'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 3 }
     , board:
        { card1: '7s', card2: 'Ah', card3: '4c', card4: 'Kc', card5: '9d' }
     , posts:
        [ { player: '1ntr4nce', type: 'sb', amount: 0.5 }
        , { player: 'medusaborb', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: '1576893454', type: 'fold' }
        , { player: 'Sean007007', type: 'fold' }
        , { player: 'eroxone77', type: 'raise', amount: 3 }
        , { player: '1ntr4nce', type: 'fold' }
        , { player: 'medusaborb', type: 'call', amount: 2 } ]
     , flop:
        [ { player: 'medusaborb', type: 'check' }
        , { player: 'eroxone77', type: 'bet', amount: 3 }
        , { player: 'medusaborb', type: 'call', amount: 3 } ]
     , turn:
        [ { player: 'medusaborb', type: 'check' }
        , { player: 'eroxone77', type: 'check' } ]
     , river:
        [ { player: 'medusaborb', type: 'bet', amount: 7.5 }
        , { player: 'eroxone77', type: 'fold' } ]
     , showdown: [ { player: 'medusaborb', type: 'collect', amount: 11.88 } ]
     , summary: [ { type: 'pot', single: true, amount: 11.88 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Sean007007', chips: 85.12 }
        , { seatno: 3, player: 'eroxone77', chips: 100 }
        , { seatno: 5, player: '1ntr4nce', chips: 122.74 }
        , { seatno: 8, player: 'medusaborb', chips: 105.88 } ]
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
        , hour: 16
        , min: 3
        , sec: 17
        , hero: null
        , handid: '7973206658'
        , gameno: '7973206658'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 6
        , button: 5 }
     , board: {}
     , posts:
        [ { player: 'medusaborb', type: 'sb', amount: 0.5 }
        , { player: 'Sean007007', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'eroxone77', type: 'fold' }
        , { player: '1ntr4nce', type: 'raise', amount: 2.5 }
        , { player: 'medusaborb', type: 'fold' }
        , { player: 'Sean007007', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: '1ntr4nce', type: 'collect', amount: 2.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 2.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Sean007007', chips: 88.55 }
        , { seatno: 3, player: 'eroxone77', chips: 100 }
        , { seatno: 5, player: '1ntr4nce', chips: 122.74 }
        , { seatno: 8, player: 'medusaborb', chips: 101.76 } ]
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
        , hour: 16
        , min: 4
        , sec: 48
        , hero: null
        , handid: '7973207093'
        , gameno: '7973207093'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 6
        , button: 5 }
     , board: { card1: '5c', card2: '3d', card3: '7h' }
     , posts:
        [ { player: 'medusaborb', type: 'sb', amount: 0.5 }
        , { player: 'Sean007007', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'eroxone77', type: 'raise', amount: 3 }
        , { player: '1ntr4nce', type: 'fold' }
        , { player: 'medusaborb', type: 'raise', amount: 11 }
        , { player: 'Sean007007', type: 'fold' }
        , { player: 'eroxone77', type: 'call', amount: 8 } ]
     , flop:
        [ { player: 'medusaborb', type: 'bet', amount: 7.9 }
        , { player: 'eroxone77', type: 'fold' } ]
     , turn: []
     , river: []
     , showdown: [ { player: 'medusaborb', type: 'collect', amount: 21.85 } ]
     , summary: [ { type: 'pot', single: true, amount: 21.85 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Sean007007', chips: 87.55 }
        , { seatno: 3, player: 'eroxone77', chips: 100 }
        , { seatno: 5, player: '1ntr4nce', chips: 122.74 }
        , { seatno: 8, player: 'medusaborb', chips: 112.61 } ]
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
        , hour: 16
        , min: 5
        , sec: 19
        , hero: null
        , handid: '7973207205'
        , gameno: '7973207205'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 6
        , button: 8 }
     , board: {}
     , posts:
        [ { player: 'Sean007007', type: 'sb', amount: 0.5 }
        , { player: 'eroxone77', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: '1ntr4nce', type: 'fold' }
        , { player: 'medusaborb', type: 'raise', amount: 2.5 }
        , { player: 'Sean007007', type: 'fold' }
        , { player: 'eroxone77', type: 'raise', amount: 10 }
        , { player: 'medusaborb', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'eroxone77', type: 'collect', amount: 5.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 5.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Sean007007', chips: 84.05 }
        , { seatno: 5, player: '1ntr4nce', chips: 123.97 }
        , { seatno: 8, player: 'medusaborb', chips: 108.61 } ]
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
        , hour: 16
        , min: 6
        , sec: 53
        , hero: null
        , handid: '7973207885'
        , gameno: '7973207885'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 6
        , button: 8 }
     , board: {}
     , posts:
        [ { player: 'Sean007007', type: 'sb', amount: 0.5 }
        , { player: '1ntr4nce', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'medusaborb', type: 'fold' }
        , { player: 'Sean007007', type: 'raise', amount: 3 }
        , { player: '1ntr4nce', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'Sean007007', type: 'collect', amount: 2 } ]
     , summary: [ { type: 'pot', single: true, amount: 2 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Sean007007', chips: 85.05 }
        , { seatno: 5, player: '1ntr4nce', chips: 122.97 }
        , { seatno: 8, player: 'medusaborb', chips: 108.61 } ]
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
        , hour: 16
        , min: 7
        , sec: 11
        , hero: null
        , handid: '7973207964'
        , gameno: '7973207964'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 6
        , button: 1 }
     , board:
        { card1: '2s', card2: '9c', card3: '5d', card4: '3c', card5: 'Kh' }
     , posts:
        [ { player: '1ntr4nce', type: 'sb', amount: 0.5 }
        , { player: 'medusaborb', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'Sean007007', type: 'raise', amount: 2 }
        , { player: '1ntr4nce', type: 'fold' }
        , { player: 'medusaborb', type: 'call', amount: 1 } ]
     , flop:
        [ { player: 'medusaborb', type: 'check' }
        , { player: 'Sean007007', type: 'bet', amount: 2 }
        , { player: 'medusaborb', type: 'call', amount: 2 } ]
     , turn:
        [ { player: 'medusaborb', type: 'check' }
        , { player: 'Sean007007', type: 'check' } ]
     , river:
        [ { player: 'medusaborb', type: 'bet', amount: 5.1 }
        , { player: 'Sean007007', type: 'fold' } ]
     , showdown: [ { player: 'medusaborb', type: 'collect', amount: 8.08 } ]
     , summary: [ { type: 'pot', single: true, amount: 8.08 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Sean007007', chips: 81.05 }
        , { seatno: 5, player: '1ntr4nce', chips: 122.47 }
        , { seatno: 8, player: 'medusaborb', chips: 112.69 } ]
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
        , hour: 16
        , min: 7
        , sec: 40
        , hero: null
        , handid: '7973211395'
        , gameno: '7973211395'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 6
        , button: 5 }
     , board: {}
     , posts:
        [ { player: 'medusaborb', type: 'sb', amount: 0.5 }
        , { player: 'Sean007007', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: '1ntr4nce', type: 'fold' }
        , { player: 'medusaborb', type: 'raise', amount: 2.5 }
        , { player: 'Sean007007', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'medusaborb', type: 'collect', amount: 2 } ]
     , summary: [ { type: 'pot', single: true, amount: 2 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Sean007007', chips: 85.05 }
        , { seatno: 3, player: 'StoplossNo', chips: 40 }
        , { seatno: 5, player: '1ntr4nce', chips: 118.47 }
        , { seatno: 8, player: 'medusaborb', chips: 113.69 } ]
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
        , hour: 16
        , min: 8
        , sec: 56
        , hero: null
        , handid: '7973211644'
        , gameno: '7973211644'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 6
        , button: 3 }
     , board: { card1: 'Ad', card2: '9s', card3: 'Qd' }
     , posts:
        [ { player: '1ntr4nce', type: 'sb', amount: 0.5 }
        , { player: 'medusaborb', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'Sean007007', type: 'call', amount: 1 }
        , { player: 'StoplossNo', type: 'fold' }
        , { player: '1ntr4nce', type: 'fold' }
        , { player: 'medusaborb', type: 'raise', amount: 3.5 }
        , { player: 'Sean007007', type: 'call', amount: 2.5 } ]
     , flop:
        [ { player: 'medusaborb', type: 'check' }
        , { player: 'Sean007007', type: 'bet', amount: 4 }
        , { player: 'medusaborb', type: 'fold' } ]
     , turn: []
     , river: []
     , showdown: [ { player: 'Sean007007', type: 'collect', amount: 7.13 } ]
     , summary: [ { type: 'pot', single: true, amount: 7.13 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Sean007007', chips: 88.68 }
        , { seatno: 3, player: 'StoplossNo', chips: 40 }
        , { seatno: 5, player: '1ntr4nce', chips: 117.97 }
        , { seatno: 8, player: 'medusaborb', chips: 110.19 }
        , { seatno: 10, player: 'FENIX505', chips: 50 } ]
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
        , hour: 16
        , min: 9
        , sec: 24
        , hero: null
        , handid: '7973211745'
        , gameno: '7973211745'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 5 }
     , board: { card1: 'Qs', card2: 'Kc', card3: '2d', card4: '6c' }
     , posts:
        [ { player: 'medusaborb', type: 'sb', amount: 0.5 }
        , { player: 'FENIX505', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'Sean007007', type: 'call', amount: 1 }
        , { player: 'StoplossNo', type: 'fold' }
        , { player: '1ntr4nce', type: 'call', amount: 1 }
        , { player: 'medusaborb', type: 'call', amount: 0.5 }
        , { player: 'FENIX505', type: 'check' } ]
     , flop:
        [ { player: 'medusaborb', type: 'check' }
        , { player: 'FENIX505', type: 'check' }
        , { player: 'Sean007007', type: 'bet', amount: 3 }
        , { player: '1ntr4nce', type: 'fold' }
        , { player: 'medusaborb', type: 'call', amount: 3 }
        , { player: 'FENIX505', type: 'fold' } ]
     , turn:
        [ { player: 'medusaborb', type: 'check' }
        , { player: 'Sean007007', type: 'bet', amount: 6 }
        , { player: 'medusaborb', type: 'fold' } ]
     , river: []
     , showdown: [ { player: 'Sean007007', type: 'collect', amount: 9.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 9.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Sean007007', chips: 95.68 }
        , { seatno: 3, player: 'StoplossNo', chips: 40 }
        , { seatno: 5, player: '1ntr4nce', chips: 115.97 }
        , { seatno: 6, player: 'AmberSym69', chips: 100 }
        , { seatno: 8, player: 'medusaborb', chips: 107.69 }
        , { seatno: 10, player: 'FENIX505', chips: 50 } ]
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
        , hour: 16
        , min: 11
        , sec: 0
        , hero: null
        , handid: '7973212516'
        , gameno: '7973212516'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 3 }
     , board: { card1: '4h', card2: 'Js', card3: '5h' }
     , posts:
        [ { player: '1ntr4nce', type: 'sb', amount: 0.5 }
        , { player: 'AmberSym69', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'medusaborb', type: 'fold' }
        , { player: 'FENIX505', type: 'fold' }
        , { player: 'Sean007007', type: 'call', amount: 1 }
        , { player: 'StoplossNo', type: 'fold' }
        , { player: '1ntr4nce', type: 'fold' }
        , { player: 'AmberSym69', type: 'check' } ]
     , flop:
        [ { player: 'AmberSym69', type: 'check' }
        , { player: 'Sean007007', type: 'bet', amount: 1 }
        , { player: 'AmberSym69', type: 'fold' } ]
     , turn: []
     , river: []
     , showdown: [ { player: 'Sean007007', type: 'collect', amount: 2.38 } ]
     , summary: [ { type: 'pot', single: true, amount: 2.38 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Sean007007', chips: 97.06 }
        , { seatno: 3, player: 'StoplossNo', chips: 40 }
        , { seatno: 5, player: '1ntr4nce', chips: 105.97 }
        , { seatno: 6, player: 'AmberSym69', chips: 100 }
        , { seatno: 8, player: 'medusaborb', chips: 116.72 }
        , { seatno: 10, player: 'FENIX505', chips: 50 } ]
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
        , hour: 16
        , min: 13
        , sec: 10
        , hero: null
        , handid: '7973213543'
        , gameno: '7973213543'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 6 }
     , board: {}
     , posts:
        [ { player: 'medusaborb', type: 'sb', amount: 0.5 }
        , { player: 'FENIX505', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'Sean007007', type: 'fold' }
        , { player: 'StoplossNo', type: 'fold' }
        , { player: '1ntr4nce', type: 'fold' }
        , { player: 'AmberSym69', type: 'raise', amount: 2 }
        , { player: 'medusaborb', type: 'fold' }
        , { player: 'FENIX505', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'AmberSym69', type: 'collect', amount: 2.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 2.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Sean007007', chips: 97.06 }
        , { seatno: 3, player: 'StoplossNo', chips: 40 }
        , { seatno: 5, player: '1ntr4nce', chips: 105.97 }
        , { seatno: 6, player: 'AmberSym69', chips: 101.5 }
        , { seatno: 8, player: 'medusaborb', chips: 116.22 }
        , { seatno: 10, player: 'FENIX505', chips: 50 } ]
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
        , hour: 16
        , min: 13
        , sec: 29
        , hero: null
        , handid: '7973213606'
        , gameno: '7973213606'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 8 }
     , board: { card1: '2c', card2: '9s', card3: '2s', card4: 'Ks' }
     , posts:
        [ { player: 'FENIX505', type: 'sb', amount: 0.5 }
        , { player: 'Sean007007', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'StoplossNo', type: 'fold' }
        , { player: '1ntr4nce', type: 'raise', amount: 2.5 }
        , { player: 'AmberSym69', type: 'fold' }
        , { player: 'medusaborb', type: 'call', amount: 2.5 }
        , { player: 'FENIX505', type: 'fold' }
        , { player: 'Sean007007', type: 'fold' } ]
     , flop:
        [ { player: '1ntr4nce', type: 'bet', amount: 3.25 }
        , { player: 'medusaborb', type: 'call', amount: 3.25 } ]
     , turn:
        [ { player: '1ntr4nce', type: 'bet', amount: 9 }
        , { player: 'medusaborb', type: 'fold' } ]
     , river: []
     , showdown: [ { player: '1ntr4nce', type: 'collect', amount: 12.35 } ]
     , summary: [ { type: 'pot', single: true, amount: 12.35 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Sean007007', chips: 93.56 }
        , { seatno: 3, player: 'StoplossNo', chips: 55.43 }
        , { seatno: 5, player: '1ntr4nce', chips: 100 }
        , { seatno: 6, player: 'AmberSym69', chips: 101.5 }
        , { seatno: 8, player: 'medusaborb', chips: 110.47 }
        , { seatno: 10, player: 'FENIX505', chips: 50 } ]
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
        , hour: 16
        , min: 15
        , sec: 25
        , hero: null
        , handid: '7973215289'
        , gameno: '7973215289'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 1 }
     , board: {}
     , posts:
        [ { player: 'StoplossNo', type: 'sb', amount: 0.5 }
        , { player: '1ntr4nce', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'AmberSym69', type: 'fold' }
        , { player: 'medusaborb', type: 'fold' }
        , { player: 'FENIX505', type: 'fold' }
        , { player: 'Sean007007', type: 'fold' }
        , { player: 'StoplossNo', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: '1ntr4nce', type: 'collect', amount: 1 } ]
     , summary: [ { type: 'pot', single: true, amount: 1 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Sean007007', chips: 93.56 }
        , { seatno: 3, player: 'StoplossNo', chips: 54.93 }
        , { seatno: 5, player: '1ntr4nce', chips: 100.5 }
        , { seatno: 6, player: 'AmberSym69', chips: 101.5 }
        , { seatno: 8, player: 'medusaborb', chips: 110.47 }
        , { seatno: 10, player: 'FENIX505', chips: 50 } ]
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
        , hour: 16
        , min: 15
        , sec: 40
        , hero: null
        , handid: '7973215348'
        , gameno: '7973215348'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 3 }
     , board: {}
     , posts:
        [ { player: '1ntr4nce', type: 'sb', amount: 0.5 }
        , { player: 'AmberSym69', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'medusaborb', type: 'fold' }
        , { player: 'FENIX505', type: 'raise', amount: 2.5 }
        , { player: 'Sean007007', type: 'fold' }
        , { player: 'StoplossNo', type: 'fold' }
        , { player: '1ntr4nce', type: 'fold' }
        , { player: 'AmberSym69', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'FENIX505', type: 'collect', amount: 2.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 2.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 3, player: 'StoplossNo', chips: 53.93 }
        , { seatno: 5, player: '1ntr4nce', chips: 101.5 }
        , { seatno: 6, player: 'AmberSym69', chips: 101.5 }
        , { seatno: 8, player: 'medusaborb', chips: 110.47 }
        , { seatno: 10, player: 'FENIX505', chips: 50 } ]
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
        , hour: 16
        , min: 17
        , sec: 45
        , hero: null
        , handid: '7973217523'
        , gameno: '7973217523'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 10 }
     , board:
        { card1: 'Kc', card2: 'Kh', card3: 'Kd', card4: 'Ac', card5: '5d' }
     , posts:
        [ { player: 'StoplossNo', type: 'sb', amount: 0.5 }
        , { player: '1ntr4nce', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'AmberSym69', type: 'fold' }
        , { player: 'medusaborb', type: 'fold' }
        , { player: 'FENIX505', type: 'fold' }
        , { player: 'StoplossNo', type: 'raise', amount: 2.5 }
        , { player: '1ntr4nce', type: 'call', amount: 1.5 } ]
     , flop:
        [ { player: 'StoplossNo', type: 'bet', amount: 2.5 }
        , { player: '1ntr4nce', type: 'call', amount: 2.5 } ]
     , turn:
        [ { player: 'StoplossNo', type: 'bet', amount: 7 }
        , { player: '1ntr4nce', type: 'raise', amount: 15 }
        , { player: 'StoplossNo', type: 'call', amount: 8 } ]
     , river:
        [ { player: 'StoplossNo', type: 'check' }
        , { player: '1ntr4nce', type: 'bet', amount: 40 }
        , { player: 'StoplossNo', type: 'fold' } ]
     , showdown: [ { player: '1ntr4nce', type: 'collect', amount: 38 } ]
     , summary: [ { type: 'pot', single: true, amount: 38 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Sean007007', chips: 75.94 }
        , { seatno: 3, player: 'StoplossNo', chips: 40 }
        , { seatno: 5, player: '1ntr4nce', chips: 136.41 }
        , { seatno: 6, player: 'AmberSym69', chips: 104.68 }
        , { seatno: 8, player: 'medusaborb', chips: 108.47 }
        , { seatno: 10, player: 'FENIX505', chips: 50 } ]
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
        , hour: 16
        , min: 24
        , sec: 48
        , hero: null
        , handid: '7973221950'
        , gameno: '7973221950'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 1 }
     , board: { card1: '2h', card2: 'Ad', card3: 'Qc', card4: '8d' }
     , posts:
        [ { player: 'StoplossNo', type: 'sb', amount: 0.5 }
        , { player: '1ntr4nce', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'AmberSym69', type: 'raise', amount: 3 }
        , { player: 'medusaborb', type: 'fold' }
        , { player: 'FENIX505', type: 'fold' }
        , { player: 'Sean007007', type: 'fold' }
        , { player: 'StoplossNo', type: 'fold' }
        , { player: '1ntr4nce', type: 'call', amount: 2 } ]
     , flop:
        [ { player: '1ntr4nce', type: 'check' }
        , { player: 'AmberSym69', type: 'bet', amount: 4.55 }
        , { player: '1ntr4nce', type: 'call', amount: 4.55 } ]
     , turn:
        [ { player: '1ntr4nce', type: 'check' }
        , { player: 'AmberSym69', type: 'bet', amount: 22 }
        , { player: '1ntr4nce', type: 'fold' } ]
     , river: []
     , showdown: [ { player: 'AmberSym69', type: 'collect', amount: 14.82 } ]
     , summary: [ { type: 'pot', single: true, amount: 14.82 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Sean007007', chips: 75.94 }
        , { seatno: 3, player: 'StoplossNo', chips: 40 }
        , { seatno: 5, player: '1ntr4nce', chips: 128.86 }
        , { seatno: 6, player: 'AmberSym69', chips: 111.95 }
        , { seatno: 8, player: 'medusaborb', chips: 108.47 }
        , { seatno: 10, player: 'FENIX505', chips: 50 } ]
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
        , hour: 16
        , min: 25
        , sec: 49
        , hero: null
        , handid: '7973223509'
        , gameno: '7973223509'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 3 }
     , board: { card1: '5h', card2: '7c', card3: '8h' }
     , posts:
        [ { player: '1ntr4nce', type: 'sb', amount: 0.5 }
        , { player: 'AmberSym69', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'medusaborb', type: 'fold' }
        , { player: 'FENIX505', type: 'raise', amount: 2.5 }
        , { player: 'Sean007007', type: 'call', amount: 2.5 }
        , { player: 'StoplossNo', type: 'fold' }
        , { player: '1ntr4nce', type: 'fold' }
        , { player: 'AmberSym69', type: 'fold' } ]
     , flop:
        [ { player: 'FENIX505', type: 'check' }
        , { player: 'Sean007007', type: 'bet', amount: 2 }
        , { player: 'FENIX505', type: 'fold' } ]
     , turn: []
     , river: []
     , showdown: [ { player: 'Sean007007', type: 'collect', amount: 6.18 } ]
     , summary: [ { type: 'pot', single: true, amount: 6.18 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Sean007007', chips: 79.62 }
        , { seatno: 3, player: 'StoplossNo', chips: 40 }
        , { seatno: 5, player: '1ntr4nce', chips: 128.36 }
        , { seatno: 6, player: 'AmberSym69', chips: 110.95 }
        , { seatno: 8, player: 'medusaborb', chips: 108.47 }
        , { seatno: 10, player: 'FENIX505', chips: 50 } ]
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
        , hour: 16
        , min: 26
        , sec: 21
        , hero: null
        , handid: '7973224006'
        , gameno: '7973224006'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 5 }
     , board: { card1: '7d', card2: 'Th', card3: 'Js' }
     , posts:
        [ { player: 'AmberSym69', type: 'sb', amount: 0.5 }
        , { player: 'medusaborb', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'FENIX505', type: 'fold' }
        , { player: 'Sean007007', type: 'call', amount: 1 }
        , { player: 'StoplossNo', type: 'fold' }
        , { player: '1ntr4nce', type: 'fold' }
        , { player: 'AmberSym69', type: 'fold' }
        , { player: 'medusaborb', type: 'check' } ]
     , flop:
        [ { player: 'medusaborb', type: 'check' }
        , { player: 'Sean007007', type: 'bet', amount: 2 }
        , { player: 'medusaborb', type: 'fold' } ]
     , turn: []
     , river: []
     , showdown: [ { player: 'Sean007007', type: 'collect', amount: 2.38 } ]
     , summary: [ { type: 'pot', single: true, amount: 2.38 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Sean007007', chips: 81 }
        , { seatno: 3, player: 'StoplossNo', chips: 40 }
        , { seatno: 5, player: '1ntr4nce', chips: 128.36 }
        , { seatno: 6, player: 'AmberSym69', chips: 110.45 }
        , { seatno: 8, player: 'medusaborb', chips: 107.47 }
        , { seatno: 10, player: 'FENIX505', chips: 50 } ]
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
        , hour: 16
        , min: 26
        , sec: 41
        , hero: null
        , handid: '7973224083'
        , gameno: '7973224083'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 6 }
     , board: { card1: 'Kc', card2: 'Kd', card3: 'Js', card4: '9d' }
     , posts:
        [ { player: 'medusaborb', type: 'sb', amount: 0.5 }
        , { player: 'FENIX505', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'Sean007007', type: 'call', amount: 1 }
        , { player: 'StoplossNo', type: 'fold' }
        , { player: '1ntr4nce', type: 'fold' }
        , { player: 'AmberSym69', type: 'raise', amount: 3 }
        , { player: 'medusaborb', type: 'fold' }
        , { player: 'FENIX505', type: 'call', amount: 2 }
        , { player: 'Sean007007', type: 'call', amount: 2 } ]
     , flop:
        [ { player: 'FENIX505', type: 'check' }
        , { player: 'Sean007007', type: 'check' }
        , { player: 'AmberSym69', type: 'check' } ]
     , turn:
        [ { player: 'FENIX505', type: 'bet', amount: 5.75 }
        , { player: 'Sean007007', type: 'fold' }
        , { player: 'AmberSym69', type: 'fold' } ]
     , river: []
     , showdown: [ { player: 'FENIX505', type: 'collect', amount: 9.03 } ]
     , summary: [ { type: 'pot', single: true, amount: 9.03 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Sean007007', chips: 78 }
        , { seatno: 3, player: 'StoplossNo', chips: 40 }
        , { seatno: 5, player: '1ntr4nce', chips: 128.36 }
        , { seatno: 6, player: 'AmberSym69', chips: 107.45 }
        , { seatno: 8, player: 'medusaborb', chips: 106.97 }
        , { seatno: 10, player: 'FENIX505', chips: 56.03 } ]
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
        , hour: 16
        , min: 27
        , sec: 40
        , hero: null
        , handid: '7973224428'
        , gameno: '7973224428'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 8 }
     , board: {}
     , posts:
        [ { player: 'FENIX505', type: 'sb', amount: 0.5 }
        , { player: 'Sean007007', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'StoplossNo', type: 'fold' }
        , { player: '1ntr4nce', type: 'fold' }
        , { player: 'AmberSym69', type: 'fold' }
        , { player: 'medusaborb', type: 'raise', amount: 2.5 }
        , { player: 'FENIX505', type: 'fold' }
        , { player: 'Sean007007', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'medusaborb', type: 'collect', amount: 2.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 2.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Sean007007', chips: 77 }
        , { seatno: 3, player: 'StoplossNo', chips: 40 }
        , { seatno: 5, player: '1ntr4nce', chips: 128.36 }
        , { seatno: 6, player: 'AmberSym69', chips: 107.45 }
        , { seatno: 8, player: 'medusaborb', chips: 108.47 }
        , { seatno: 10, player: 'FENIX505', chips: 55.53 } ]
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
        , hour: 16
        , min: 28
        , sec: 1
        , hero: null
        , handid: '7973224516'
        , gameno: '7973224516'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 10 }
     , board: {}
     , posts:
        [ { player: 'Sean007007', type: 'sb', amount: 0.5 }
        , { player: 'StoplossNo', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: '1ntr4nce', type: 'fold' }
        , { player: 'AmberSym69', type: 'fold' }
        , { player: 'medusaborb', type: 'fold' }
        , { player: 'FENIX505', type: 'fold' }
        , { player: 'Sean007007', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'StoplossNo', type: 'collect', amount: 1 } ]
     , summary: [ { type: 'pot', single: true, amount: 1 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Sean007007', chips: 76.5 }
        , { seatno: 3, player: 'StoplossNo', chips: 40.5 }
        , { seatno: 5, player: '1ntr4nce', chips: 128.36 }
        , { seatno: 6, player: 'AmberSym69', chips: 107.45 }
        , { seatno: 8, player: 'medusaborb', chips: 108.47 }
        , { seatno: 10, player: 'FENIX505', chips: 55.53 } ]
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
        , hour: 16
        , min: 28
        , sec: 19
        , hero: null
        , handid: '7973224579'
        , gameno: '7973224579'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 1 }
     , board: {}
     , posts:
        [ { player: 'StoplossNo', type: 'sb', amount: 0.5 }
        , { player: '1ntr4nce', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'AmberSym69', type: 'fold' }
        , { player: 'medusaborb', type: 'fold' }
        , { player: 'FENIX505', type: 'fold' }
        , { player: 'Sean007007', type: 'fold' }
        , { player: 'StoplossNo', type: 'raise', amount: 2.5 }
        , { player: '1ntr4nce', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'StoplossNo', type: 'collect', amount: 2 } ]
     , summary: [ { type: 'pot', single: true, amount: 2 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Sean007007', chips: 76.5 }
        , { seatno: 3, player: 'StoplossNo', chips: 41.5 }
        , { seatno: 5, player: '1ntr4nce', chips: 127.36 }
        , { seatno: 6, player: 'AmberSym69', chips: 107.45 }
        , { seatno: 8, player: 'medusaborb', chips: 108.47 }
        , { seatno: 10, player: 'FENIX505', chips: 55.53 } ]
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
        , hour: 16
        , min: 28
        , sec: 35
        , hero: null
        , handid: '7973224633'
        , gameno: '7973224633'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 3 }
     , board: {}
     , posts:
        [ { player: '1ntr4nce', type: 'sb', amount: 0.5 }
        , { player: 'AmberSym69', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'medusaborb', type: 'fold' }
        , { player: 'FENIX505', type: 'raise', amount: 2.5 }
        , { player: 'Sean007007', type: 'fold' }
        , { player: 'StoplossNo', type: 'fold' }
        , { player: '1ntr4nce', type: 'fold' }
        , { player: 'AmberSym69', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'FENIX505', type: 'collect', amount: 2.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 2.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Sean007007', chips: 76.5 }
        , { seatno: 3, player: 'StoplossNo', chips: 41.5 }
        , { seatno: 5, player: '1ntr4nce', chips: 126.86 }
        , { seatno: 6, player: 'AmberSym69', chips: 106.45 }
        , { seatno: 8, player: 'medusaborb', chips: 108.47 }
        , { seatno: 10, player: 'FENIX505', chips: 57.03 } ]
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
        , hour: 16
        , min: 29
        , sec: 16
        , hero: null
        , handid: '7973224802'
        , gameno: '7973224802'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 5 }
     , board: {}
     , posts:
        [ { player: 'AmberSym69', type: 'sb', amount: 0.5 }
        , { player: 'medusaborb', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'FENIX505', type: 'fold' }
        , { player: 'Sean007007', type: 'fold' }
        , { player: 'StoplossNo', type: 'fold' }
        , { player: '1ntr4nce', type: 'fold' }
        , { player: 'AmberSym69', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'medusaborb', type: 'collect', amount: 1 } ]
     , summary: [ { type: 'pot', single: true, amount: 1 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Sean007007', chips: 76.5 }
        , { seatno: 3, player: 'StoplossNo', chips: 41.5 }
        , { seatno: 5, player: '1ntr4nce', chips: 126.86 }
        , { seatno: 6, player: 'AmberSym69', chips: 105.95 }
        , { seatno: 8, player: 'medusaborb', chips: 108.97 }
        , { seatno: 10, player: 'FENIX505', chips: 57.03 } ]
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
        , hour: 16
        , min: 29
        , sec: 32
        , hero: null
        , handid: '7973227336'
        , gameno: '7973227336'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 6 }
     , board: { card1: 'Kh', card2: '4d', card3: '2h' }
     , posts:
        [ { player: 'medusaborb', type: 'sb', amount: 0.5 }
        , { player: 'FENIX505', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'Sean007007', type: 'fold' }
        , { player: 'StoplossNo', type: 'fold' }
        , { player: '1ntr4nce', type: 'fold' }
        , { player: 'AmberSym69', type: 'raise', amount: 2 }
        , { player: 'medusaborb', type: 'fold' }
        , { player: 'FENIX505', type: 'call', amount: 1 } ]
     , flop:
        [ { player: 'FENIX505', type: 'check' }
        , { player: 'AmberSym69', type: 'bet', amount: 1.35 }
        , { player: 'FENIX505', type: 'fold' } ]
     , turn: []
     , river: []
     , showdown: [ { player: 'AmberSym69', type: 'collect', amount: 4.28 } ]
     , summary: [ { type: 'pot', single: true, amount: 4.28 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Sean007007', chips: 76.5 }
        , { seatno: 3, player: 'StoplossNo', chips: 41.5 }
        , { seatno: 5, player: '1ntr4nce', chips: 126.86 }
        , { seatno: 6, player: 'AmberSym69', chips: 108.23 }
        , { seatno: 8, player: 'medusaborb', chips: 108.47 }
        , { seatno: 10, player: 'FENIX505', chips: 55.03 } ]
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
        , hour: 16
        , min: 30
        , sec: 11
        , hero: null
        , handid: '7973227642'
        , gameno: '7973227642'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 8 }
     , board:
        { card1: '6s', card2: '9s', card3: '8d', card4: '9c', card5: '7h' }
     , posts:
        [ { player: 'FENIX505', type: 'sb', amount: 0.5 }
        , { player: 'Sean007007', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'StoplossNo', type: 'fold' }
        , { player: '1ntr4nce', type: 'fold' }
        , { player: 'AmberSym69', type: 'fold' }
        , { player: 'medusaborb', type: 'raise', amount: 2.5 }
        , { player: 'FENIX505', type: 'fold' }
        , { player: 'Sean007007', type: 'call', amount: 1.5 } ]
     , flop:
        [ { player: 'Sean007007', type: 'check' }
        , { player: 'medusaborb', type: 'bet', amount: 3.85 }
        , { player: 'Sean007007', type: 'call', amount: 3.85 } ]
     , turn:
        [ { player: 'Sean007007', type: 'check' }
        , { player: 'medusaborb', type: 'check' } ]
     , river:
        [ { player: 'Sean007007', type: 'bet', amount: 11 }
        , { player: 'medusaborb', type: 'call', amount: 11 } ]
     , showdown:
        [ { player: 'Sean007007', type: 'collect', amount: 33.44 }
        , { player: 'Sean007007', type: 'show', card1: '9h', card2: '6h' } ]
     , summary: [ { type: 'pot', single: true, amount: 33.44 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Sean007007', chips: 92.59 }
        , { seatno: 3, player: 'StoplossNo', chips: 41.5 }
        , { seatno: 5, player: '1ntr4nce', chips: 126.86 }
        , { seatno: 6, player: 'AmberSym69', chips: 108.23 }
        , { seatno: 8, player: 'medusaborb', chips: 100 }
        , { seatno: 10, player: 'FENIX505', chips: 54.53 } ]
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
        , hour: 16
        , min: 31
        , sec: 3
        , hero: null
        , handid: '7973227843'
        , gameno: '7973227843'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 10 }
     , board: {}
     , posts:
        [ { player: 'Sean007007', type: 'sb', amount: 0.5 }
        , { player: 'StoplossNo', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: '1ntr4nce', type: 'fold' }
        , { player: 'AmberSym69', type: 'fold' }
        , { player: 'medusaborb', type: 'raise', amount: 3 }
        , { player: 'FENIX505', type: 'fold' }
        , { player: 'Sean007007', type: 'fold' }
        , { player: 'StoplossNo', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'medusaborb', type: 'collect', amount: 2.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 2.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Sean007007', chips: 92.09 }
        , { seatno: 3, player: 'StoplossNo', chips: 40.5 }
        , { seatno: 5, player: '1ntr4nce', chips: 126.86 }
        , { seatno: 6, player: 'AmberSym69', chips: 108.23 }
        , { seatno: 8, player: 'medusaborb', chips: 101.5 }
        , { seatno: 10, player: 'FENIX505', chips: 54.53 } ]
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
        , hour: 16
        , min: 31
        , sec: 26
        , hero: null
        , handid: '7973228034'
        , gameno: '7973228034'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 1 }
     , board: {}
     , posts:
        [ { player: 'StoplossNo', type: 'sb', amount: 0.5 }
        , { player: '1ntr4nce', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'AmberSym69', type: 'fold' }
        , { player: 'medusaborb', type: 'fold' }
        , { player: 'FENIX505', type: 'fold' }
        , { player: 'Sean007007', type: 'fold' }
        , { player: 'StoplossNo', type: 'raise', amount: 2.5 }
        , { player: '1ntr4nce', type: 'raise', amount: 7.5 }
        , { player: 'StoplossNo', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: '1ntr4nce', type: 'collect', amount: 5 } ]
     , summary: [ { type: 'pot', single: true, amount: 5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Sean007007', chips: 92.09 }
        , { seatno: 3, player: 'StoplossNo', chips: 40 }
        , { seatno: 5, player: '1ntr4nce', chips: 129.36 }
        , { seatno: 6, player: 'AmberSym69', chips: 108.23 }
        , { seatno: 8, player: 'medusaborb', chips: 101.5 }
        , { seatno: 10, player: 'FENIX505', chips: 54.53 } ]
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
        , hour: 16
        , min: 31
        , sec: 50
        , hero: null
        , handid: '7973228125'
        , gameno: '7973228125'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 3 }
     , board:
        { card1: '8c', card2: 'Ks', card3: 'Th', card4: 'Ad', card5: 'Qs' }
     , posts:
        [ { player: '1ntr4nce', type: 'sb', amount: 0.5 }
        , { player: 'AmberSym69', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'medusaborb', type: 'fold' }
        , { player: 'FENIX505', type: 'fold' }
        , { player: 'Sean007007', type: 'fold' }
        , { player: 'StoplossNo', type: 'fold' }
        , { player: '1ntr4nce', type: 'raise', amount: 3 }
        , { player: 'AmberSym69', type: 'call', amount: 2 } ]
     , flop:
        [ { player: '1ntr4nce', type: 'check' }
        , { player: 'AmberSym69', type: 'bet', amount: 2 }
        , { player: '1ntr4nce', type: 'call', amount: 2 } ]
     , turn:
        [ { player: '1ntr4nce', type: 'check' }
        , { player: 'AmberSym69', type: 'bet', amount: 15 }
        , { player: '1ntr4nce', type: 'call', amount: 15 } ]
     , river:
        [ { player: '1ntr4nce', type: 'check' }
        , { player: 'AmberSym69', type: 'check' } ]
     , showdown:
        [ { player: '1ntr4nce', type: 'collect', amount: 38 }
        , { player: '1ntr4nce', type: 'show', card1: 'Ts', card2: 'Qd' } ]
     , summary: [ { type: 'pot', single: true, amount: 38 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Sean007007', chips: 92.09 }
        , { seatno: 3, player: 'StoplossNo', chips: 40 }
        , { seatno: 5, player: '1ntr4nce', chips: 147.36 }
        , { seatno: 6, player: 'AmberSym69', chips: 100 }
        , { seatno: 8, player: 'medusaborb', chips: 101.5 }
        , { seatno: 10, player: 'FENIX505', chips: 54.53 } ]
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
        , hour: 16
        , min: 33
        , sec: 30
        , hero: null
        , handid: '7973228486'
        , gameno: '7973228486'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 5 }
     , board:
        { card1: '5c', card2: '8c', card3: 'Ts', card4: 'Jd', card5: '9s' }
     , posts:
        [ { player: 'AmberSym69', type: 'sb', amount: 0.5 }
        , { player: 'medusaborb', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'FENIX505', type: 'fold' }
        , { player: 'Sean007007', type: 'call', amount: 1 }
        , { player: 'StoplossNo', type: 'fold' }
        , { player: '1ntr4nce', type: 'raise', amount: 3 }
        , { player: 'AmberSym69', type: 'fold' }
        , { player: 'medusaborb', type: 'fold' }
        , { player: 'Sean007007', type: 'call', amount: 2 } ]
     , flop:
        [ { player: 'Sean007007', type: 'check' }
        , { player: '1ntr4nce', type: 'bet', amount: 3.75 }
        , { player: 'Sean007007', type: 'call', amount: 3.75 } ]
     , turn:
        [ { player: 'Sean007007', type: 'check' }
        , { player: '1ntr4nce', type: 'check' } ]
     , river:
        [ { player: 'Sean007007', type: 'check' }
        , { player: '1ntr4nce', type: 'bet', amount: 10.5 }
        , { player: 'Sean007007', type: 'fold' } ]
     , showdown: [ { player: '1ntr4nce', type: 'collect', amount: 14.25 } ]
     , summary: [ { type: 'pot', single: true, amount: 14.25 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Sean007007', chips: 85.34 }
        , { seatno: 3, player: 'StoplossNo', chips: 40 }
        , { seatno: 5, player: '1ntr4nce', chips: 154.86 }
        , { seatno: 6, player: 'AmberSym69', chips: 100 }
        , { seatno: 8, player: 'medusaborb', chips: 100.5 }
        , { seatno: 10, player: 'FENIX505', chips: 54.53 } ]
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
        , hour: 16
        , min: 34
        , sec: 38
        , hero: null
        , handid: '7973228760'
        , gameno: '7973228760'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 6 }
     , board:
        { card1: 'Qc', card2: '4c', card3: 'Qs', card4: '4s', card5: '5c' }
     , posts:
        [ { player: 'medusaborb', type: 'sb', amount: 0.5 }
        , { player: 'FENIX505', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'Sean007007', type: 'call', amount: 1 }
        , { player: 'StoplossNo', type: 'raise', amount: 3.5 }
        , { player: '1ntr4nce', type: 'fold' }
        , { player: 'AmberSym69', type: 'fold' }
        , { player: 'medusaborb', type: 'fold' }
        , { player: 'FENIX505', type: 'fold' }
        , { player: 'Sean007007', type: 'call', amount: 2.5 } ]
     , flop:
        [ { player: 'Sean007007', type: 'check' }
        , { player: 'StoplossNo', type: 'bet', amount: 4.25 }
        , { player: 'Sean007007', type: 'call', amount: 4.25 } ]
     , turn:
        [ { player: 'Sean007007', type: 'check' }
        , { player: 'StoplossNo', type: 'check' } ]
     , river:
        [ { player: 'Sean007007', type: 'check' }
        , { player: 'StoplossNo', type: 'bet', amount: 11 }
        , { player: 'Sean007007', type: 'call', amount: 11 } ]
     , showdown:
        [ { player: 'StoplossNo', type: 'collect', amount: 37.05 }
        , { player: 'StoplossNo', type: 'show', card1: 'Qd', card2: 'Td' } ]
     , summary: [ { type: 'pot', single: true, amount: 37.05 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Sean007007', chips: 66.59 }
        , { seatno: 3, player: 'StoplossNo', chips: 58.3 }
        , { seatno: 5, player: '1ntr4nce', chips: 154.86 }
        , { seatno: 6, player: 'AmberSym69', chips: 100 }
        , { seatno: 8, player: 'medusaborb', chips: 100 }
        , { seatno: 10, player: 'FENIX505', chips: 53.53 } ]
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
        , hour: 16
        , min: 35
        , sec: 26
        , hero: null
        , handid: '7973229361'
        , gameno: '7973229361'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 8 }
     , board: { card1: 'Th', card2: '8s', card3: 'Kc' }
     , posts:
        [ { player: 'FENIX505', type: 'sb', amount: 0.5 }
        , { player: 'Sean007007', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'StoplossNo', type: 'fold' }
        , { player: '1ntr4nce', type: 'raise', amount: 3 }
        , { player: 'AmberSym69', type: 'fold' }
        , { player: 'medusaborb', type: 'fold' }
        , { player: 'FENIX505', type: 'fold' }
        , { player: 'Sean007007', type: 'call', amount: 2 } ]
     , flop:
        [ { player: 'Sean007007', type: 'check' }
        , { player: '1ntr4nce', type: 'bet', amount: 3 }
        , { player: 'Sean007007', type: 'fold' } ]
     , turn: []
     , river: []
     , showdown: [ { player: '1ntr4nce', type: 'collect', amount: 6.18 } ]
     , summary: [ { type: 'pot', single: true, amount: 6.18 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Sean007007', chips: 63.59 }
        , { seatno: 3, player: 'StoplossNo', chips: 58.3 }
        , { seatno: 5, player: '1ntr4nce', chips: 158.04 }
        , { seatno: 6, player: 'AmberSym69', chips: 100 }
        , { seatno: 8, player: 'medusaborb', chips: 100 }
        , { seatno: 10, player: 'FENIX505', chips: 53.03 } ]
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
        , hour: 16
        , min: 35
        , sec: 50
        , hero: null
        , handid: '7973229462'
        , gameno: '7973229462'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 10 }
     , board:
        { card1: 'Ad', card2: '9d', card3: 'Qd', card4: '7c', card5: '9h' }
     , posts:
        [ { player: 'Sean007007', type: 'sb', amount: 0.5 }
        , { player: 'StoplossNo', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: '1ntr4nce', type: 'fold' }
        , { player: 'AmberSym69', type: 'fold' }
        , { player: 'medusaborb', type: 'raise', amount: 3 }
        , { player: 'FENIX505', type: 'raise', amount: 8 }
        , { player: 'Sean007007', type: 'fold' }
        , { player: 'StoplossNo', type: 'raise', amount: 58.3 }
        , { player: 'medusaborb', type: 'fold' }
        , { player: 'FENIX505'
          , type: 'allin'
          , amount: 45.03
          , raiseTo: 45.03 } ]
     , flop: []
     , turn: []
     , river: []
     , showdown:
        [ { player: 'FENIX505', type: 'collect', amount: 105.56 }
        , { player: 'FENIX505', type: 'show', card1: 'Ah', card2: 'As' }
        , { player: 'StoplossNo', type: 'show', card1: 'Jh', card2: 'Js' } ]
     , summary: [ { type: 'pot', single: true, amount: 105.56 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Sean007007', chips: 63.09 }
        , { seatno: 3, player: 'StoplossNo', chips: 40 }
        , { seatno: 5, player: '1ntr4nce', chips: 158.04 }
        , { seatno: 6, player: 'AmberSym69', chips: 100 }
        , { seatno: 8, player: 'medusaborb', chips: 100 }
        , { seatno: 10, player: 'FENIX505', chips: 105.56 } ]
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
        , hour: 16
        , min: 36
        , sec: 39
        , hero: null
        , handid: '7973231663'
        , gameno: '7973231663'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 1 }
     , board:
        { card1: '4c', card2: '2h', card3: '6h', card4: 'Js', card5: '6d' }
     , posts:
        [ { player: 'StoplossNo', type: 'sb', amount: 0.5 }
        , { player: '1ntr4nce', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'AmberSym69', type: 'fold' }
        , { player: 'medusaborb', type: 'fold' }
        , { player: 'FENIX505', type: 'raise', amount: 2.5 }
        , { player: 'Sean007007', type: 'call', amount: 2.5 }
        , { player: 'StoplossNo', type: 'fold' }
        , { player: '1ntr4nce', type: 'fold' } ]
     , flop:
        [ { player: 'FENIX505', type: 'bet', amount: 4 }
        , { player: 'Sean007007', type: 'call', amount: 4 } ]
     , turn:
        [ { player: 'FENIX505', type: 'bet', amount: 10.15 }
        , { player: 'Sean007007', type: 'call', amount: 10.15 } ]
     , river:
        [ { player: 'FENIX505', type: 'check' }
        , { player: 'Sean007007', type: 'check' } ]
     , showdown:
        [ { player: 'FENIX505', type: 'collect', amount: 33.06 }
        , { player: 'FENIX505', type: 'show', card1: 'Kh', card2: 'Th' } ]
     , summary: [ { type: 'pot', single: true, amount: 33.06 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Sean007007', chips: 46.44 }
        , { seatno: 3, player: 'StoplossNo', chips: 40 }
        , { seatno: 5, player: '1ntr4nce', chips: 157.04 }
        , { seatno: 6, player: 'AmberSym69', chips: 100 }
        , { seatno: 8, player: 'medusaborb', chips: 100 }
        , { seatno: 10, player: 'FENIX505', chips: 121.97 } ]
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
        , hour: 16
        , min: 37
        , sec: 46
        , hero: null
        , handid: '7973232045'
        , gameno: '7973232045'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 3 }
     , board: {}
     , posts:
        [ { player: '1ntr4nce', type: 'sb', amount: 0.5 }
        , { player: 'AmberSym69', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'medusaborb', type: 'fold' }
        , { player: 'FENIX505', type: 'fold' }
        , { player: 'Sean007007', type: 'call', amount: 1 }
        , { player: 'StoplossNo', type: 'fold' }
        , { player: '1ntr4nce', type: 'call', amount: 0.5 }
        , { player: 'AmberSym69', type: 'raise', amount: 4 }
        , { player: 'Sean007007', type: 'raise', amount: 46.44 }
        , { player: '1ntr4nce', type: 'fold' }
        , { player: 'AmberSym69', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'Sean007007', type: 'collect', amount: 9 } ]
     , summary: [ { type: 'pot', single: true, amount: 9 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Sean007007', chips: 51.44 }
        , { seatno: 3, player: 'StoplossNo', chips: 40 }
        , { seatno: 5, player: '1ntr4nce', chips: 156.04 }
        , { seatno: 6, player: 'AmberSym69', chips: 100 }
        , { seatno: 8, player: 'medusaborb', chips: 100 }
        , { seatno: 10, player: 'FENIX505', chips: 121.97 } ]
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
        , hour: 16
        , min: 38
        , sec: 6
        , hero: null
        , handid: '7973232132'
        , gameno: '7973232132'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 5 }
     , board: {}
     , posts:
        [ { player: 'AmberSym69', type: 'sb', amount: 0.5 }
        , { player: 'medusaborb', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'FENIX505', type: 'fold' }
        , { player: 'Sean007007', type: 'fold' }
        , { player: 'StoplossNo', type: 'raise', amount: 2.5 }
        , { player: '1ntr4nce', type: 'fold' }
        , { player: 'AmberSym69', type: 'raise', amount: 8.5 }
        , { player: 'medusaborb', type: 'fold' }
        , { player: 'StoplossNo', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'AmberSym69', type: 'collect', amount: 6 } ]
     , summary: [ { type: 'pot', single: true, amount: 6 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Sean007007', chips: 51.44 }
        , { seatno: 3, player: 'StoplossNo', chips: 40 }
        , { seatno: 5, player: '1ntr4nce', chips: 156.04 }
        , { seatno: 6, player: 'AmberSym69', chips: 103.5 }
        , { seatno: 8, player: 'medusaborb', chips: 100 } ]
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
        , hour: 16
        , min: 38
        , sec: 38
        , hero: null
        , handid: '7973232254'
        , gameno: '7973232254'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 6
        , button: 6 }
     , board:
        { card1: 'Jh', card2: 'Js', card3: '9d', card4: 'Th', card5: '2d' }
     , posts:
        [ { player: 'medusaborb', type: 'sb', amount: 0.5 }
        , { player: 'Sean007007', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'StoplossNo', type: 'raise', amount: 2.5 }
        , { player: '1ntr4nce', type: 'call', amount: 2.5 }
        , { player: 'AmberSym69', type: 'fold' }
        , { player: 'medusaborb', type: 'fold' }
        , { player: 'Sean007007', type: 'call', amount: 1.5 } ]
     , flop:
        [ { player: 'Sean007007', type: 'check' }
        , { player: 'StoplossNo', type: 'check' }
        , { player: '1ntr4nce', type: 'check' } ]
     , turn:
        [ { player: 'Sean007007', type: 'bet', amount: 3 }
        , { player: 'StoplossNo', type: 'call', amount: 3 }
        , { player: '1ntr4nce', type: 'fold' } ]
     , river:
        [ { player: 'Sean007007', type: 'check' }
        , { player: 'StoplossNo', type: 'check' } ]
     , showdown:
        [ { player: 'Sean007007', type: 'collect', amount: 13.3 }
        , { player: 'Sean007007', type: 'show', card1: '9s', card2: '8s' } ]
     , summary: [ { type: 'pot', single: true, amount: 13.3 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Sean007007', chips: 59.24 }
        , { seatno: 3, player: 'StoplossNo', chips: 40 }
        , { seatno: 5, player: '1ntr4nce', chips: 153.54 }
        , { seatno: 6, player: 'AmberSym69', chips: 103.5 }
        , { seatno: 8, player: 'medusaborb', chips: 100 } ]
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
        , hour: 16
        , min: 39
        , sec: 30
        , hero: null
        , handid: '7973233979'
        , gameno: '7973233979'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 6
        , button: 8 }
     , board: {}
     , posts:
        [ { player: 'Sean007007', type: 'sb', amount: 0.5 }
        , { player: 'StoplossNo', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: '1ntr4nce', type: 'fold' }
        , { player: 'AmberSym69', type: 'fold' }
        , { player: 'medusaborb', type: 'fold' }
        , { player: 'Sean007007', type: 'raise', amount: 3 }
        , { player: 'StoplossNo', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'Sean007007', type: 'collect', amount: 2 } ]
     , summary: [ { type: 'pot', single: true, amount: 2 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Sean007007', chips: 60.24 }
        , { seatno: 3, player: 'StoplossNo', chips: 40 }
        , { seatno: 5, player: '1ntr4nce', chips: 153.54 }
        , { seatno: 6, player: 'AmberSym69', chips: 103.5 }
        , { seatno: 8, player: 'medusaborb', chips: 100 } ]
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
        , hour: 16
        , min: 39
        , sec: 48
        , hero: null
        , handid: '7973234057'
        , gameno: '7973234057'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 6
        , button: 1 }
     , board: {}
     , posts:
        [ { player: 'StoplossNo', type: 'sb', amount: 0.5 }
        , { player: '1ntr4nce', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'AmberSym69', type: 'fold' }
        , { player: 'medusaborb', type: 'fold' }
        , { player: 'Sean007007', type: 'raise', amount: 2 }
        , { player: 'StoplossNo', type: 'fold' }
        , { player: '1ntr4nce', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'Sean007007', type: 'collect', amount: 2.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 2.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Sean007007', chips: 61.74 }
        , { seatno: 3, player: 'StoplossNo', chips: 40 }
        , { seatno: 5, player: '1ntr4nce', chips: 152.54 }
        , { seatno: 6, player: 'AmberSym69', chips: 103.5 }
        , { seatno: 8, player: 'medusaborb', chips: 100 } ]
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
        , hour: 16
        , min: 40
        , sec: 8
        , hero: null
        , handid: '7973234136'
        , gameno: '7973234136'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 6
        , button: 3 }
     , board: { card1: '7s', card2: '7h', card3: '3d' }
     , posts:
        [ { player: '1ntr4nce', type: 'sb', amount: 0.5 }
        , { player: 'AmberSym69', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'medusaborb', type: 'fold' }
        , { player: 'Sean007007', type: 'call', amount: 1 }
        , { player: 'StoplossNo', type: 'fold' }
        , { player: '1ntr4nce', type: 'raise', amount: 4 }
        , { player: 'AmberSym69', type: 'fold' }
        , { player: 'Sean007007', type: 'call', amount: 3 } ]
     , flop:
        [ { player: '1ntr4nce', type: 'bet', amount: 4 }
        , { player: 'Sean007007', type: 'fold' } ]
     , turn: []
     , river: []
     , showdown: [ { player: '1ntr4nce', type: 'collect', amount: 8.55 } ]
     , summary: [ { type: 'pot', single: true, amount: 8.55 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Sean007007', chips: 57.74 }
        , { seatno: 3, player: 'StoplossNo', chips: 40 }
        , { seatno: 5, player: '1ntr4nce', chips: 157.09 }
        , { seatno: 6, player: 'AmberSym69', chips: 102.5 }
        , { seatno: 8, player: 'medusaborb', chips: 100 } ]
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
        , hour: 16
        , min: 40
        , sec: 44
        , hero: null
        , handid: '7973234280'
        , gameno: '7973234280'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 6
        , button: 5 }
     , board:
        { card1: '6h', card2: 'Ks', card3: 'Jc', card4: '7c', card5: '8s' }
     , posts:
        [ { player: 'AmberSym69', type: 'sb', amount: 0.5 }
        , { player: 'medusaborb', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'Sean007007', type: 'call', amount: 1 }
        , { player: 'StoplossNo', type: 'fold' }
        , { player: '1ntr4nce', type: 'fold' }
        , { player: 'AmberSym69', type: 'fold' }
        , { player: 'medusaborb', type: 'raise', amount: 3.5 }
        , { player: 'Sean007007', type: 'call', amount: 2.5 } ]
     , flop:
        [ { player: 'medusaborb', type: 'bet', amount: 2.25 }
        , { player: 'Sean007007', type: 'call', amount: 2.25 } ]
     , turn:
        [ { player: 'medusaborb', type: 'bet', amount: 8.4 }
        , { player: 'Sean007007', type: 'call', amount: 8.4 } ]
     , river:
        [ { player: 'medusaborb', type: 'check' }
        , { player: 'Sean007007', type: 'check' } ]
     , showdown:
        [ { player: 'medusaborb', type: 'collect', amount: 27.36 }
        , { player: 'medusaborb', type: 'show', card1: '9s', card2: 'Kd' } ]
     , summary: [ { type: 'pot', single: true, amount: 27.36 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Sean007007', chips: 43.59 }
        , { seatno: 3, player: 'StoplossNo', chips: 40 }
        , { seatno: 5, player: '1ntr4nce', chips: 157.09 }
        , { seatno: 6, player: 'AmberSym69', chips: 102 }
        , { seatno: 8, player: 'medusaborb', chips: 113.21 }
        , { seatno: 10, player: 'Jadah', chips: 40 } ]
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
        , hour: 16
        , min: 41
        , sec: 24
        , hero: null
        , handid: '7973235735'
        , gameno: '7973235735'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 6 }
     , board: { card1: '8c', card2: '5s', card3: 'Tc', card4: 'Jh' }
     , posts:
        [ { player: 'medusaborb', type: 'sb', amount: 0.5 }
        , { player: 'Jadah', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'Sean007007', type: 'raise', amount: 4 }
        , { player: 'StoplossNo', type: 'fold' }
        , { player: '1ntr4nce', type: 'fold' }
        , { player: 'AmberSym69', type: 'call', amount: 4 }
        , { player: 'medusaborb', type: 'fold' }
        , { player: 'Jadah', type: 'fold' } ]
     , flop:
        [ { player: 'Sean007007', type: 'bet', amount: 1 }
        , { player: 'AmberSym69', type: 'call', amount: 1 } ]
     , turn:
        [ { player: 'Sean007007', type: 'bet', amount: 1 }
        , { player: 'AmberSym69', type: 'raise', amount: 11 }
        , { player: 'Sean007007', type: 'fold' } ]
     , river: []
     , showdown: [ { player: 'AmberSym69', type: 'collect', amount: 12.83 } ]
     , summary: [ { type: 'pot', single: true, amount: 12.83 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Sean007007', chips: 37.59 }
        , { seatno: 3, player: 'StoplossNo', chips: 40 }
        , { seatno: 5, player: '1ntr4nce', chips: 157.09 }
        , { seatno: 6, player: 'AmberSym69', chips: 108.83 }
        , { seatno: 8, player: 'medusaborb', chips: 112.71 }
        , { seatno: 10, player: 'Jadah', chips: 40 } ]
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
        , hour: 16
        , min: 42
        , sec: 30
        , hero: null
        , handid: '7973235990'
        , gameno: '7973235990'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 8 }
     , board: {}
     , posts:
        [ { player: 'Jadah', type: 'sb', amount: 0.5 }
        , { player: 'Sean007007', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'StoplossNo', type: 'fold' }
        , { player: '1ntr4nce', type: 'fold' }
        , { player: 'AmberSym69', type: 'raise', amount: 3 }
        , { player: 'medusaborb', type: 'fold' }
        , { player: 'Jadah', type: 'fold' }
        , { player: 'Sean007007', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'AmberSym69', type: 'collect', amount: 2.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 2.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Sean007007', chips: 36.59 }
        , { seatno: 3, player: 'StoplossNo', chips: 40 }
        , { seatno: 5, player: '1ntr4nce', chips: 157.09 }
        , { seatno: 6, player: 'AmberSym69', chips: 110.33 }
        , { seatno: 8, player: 'medusaborb', chips: 112.71 }
        , { seatno: 10, player: 'Jadah', chips: 40 } ]
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
        , hour: 16
        , min: 42
        , sec: 55
        , hero: null
        , handid: '7973236279'
        , gameno: '7973236279'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 10 }
     , board: {}
     , posts:
        [ { player: 'Sean007007', type: 'sb', amount: 0.5 }
        , { player: 'StoplossNo', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: '1ntr4nce', type: 'fold' }
        , { player: 'AmberSym69', type: 'raise', amount: 3 }
        , { player: 'medusaborb', type: 'fold' }
        , { player: 'Jadah', type: 'fold' }
        , { player: 'Sean007007', type: 'raise', amount: 35 }
        , { player: 'StoplossNo', type: 'fold' }
        , { player: 'AmberSym69', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'Sean007007', type: 'collect', amount: 7 } ]
     , summary: [ { type: 'pot', single: true, amount: 7 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Sean007007', chips: 40.59 }
        , { seatno: 3, player: 'StoplossNo', chips: 40 }
        , { seatno: 6, player: 'AmberSym69', chips: 107.33 }
        , { seatno: 8, player: 'medusaborb', chips: 112.71 }
        , { seatno: 10, player: 'Jadah', chips: 40 } ]
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
        , hour: 16
        , min: 43
        , sec: 23
        , hero: null
        , handid: '7973236383'
        , gameno: '7973236383'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 1 }
     , board:
        { card1: '5s', card2: 'Tc', card3: '6c', card4: 'Td', card5: '2s' }
     , posts:
        [ { player: 'StoplossNo', type: 'sb', amount: 0.5 }
        , { player: 'AmberSym69', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'medusaborb', type: 'fold' }
        , { player: 'Jadah', type: 'fold' }
        , { player: 'Sean007007', type: 'call', amount: 1 }
        , { player: 'StoplossNo', type: 'fold' }
        , { player: 'AmberSym69', type: 'check' } ]
     , flop:
        [ { player: 'AmberSym69', type: 'check' }
        , { player: 'Sean007007', type: 'check' } ]
     , turn:
        [ { player: 'AmberSym69', type: 'check' }
        , { player: 'Sean007007', type: 'check' } ]
     , river:
        [ { player: 'AmberSym69', type: 'check' }
        , { player: 'Sean007007', type: 'check' } ]
     , showdown:
        [ { player: 'AmberSym69', type: 'collect', amount: 2.38 }
        , { player: 'AmberSym69', type: 'show', card1: 'Kd', card2: '2d' } ]
     , summary: [ { type: 'pot', single: true, amount: 2.38 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Sean007007', chips: 39.59 }
        , { seatno: 3, player: 'StoplossNo', chips: 40 }
        , { seatno: 6, player: 'AmberSym69', chips: 108.71 }
        , { seatno: 8, player: 'medusaborb', chips: 112.71 }
        , { seatno: 10, player: 'Jadah', chips: 40 } ]
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
        , hour: 16
        , min: 43
        , sec: 52
        , hero: null
        , handid: '7973236497'
        , gameno: '7973236497'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 3 }
     , board:
        { card1: 'Kd', card2: 'Ks', card3: '6s', card4: 'Jh', card5: '4s' }
     , posts:
        [ { player: 'AmberSym69', type: 'sb', amount: 0.5 }
        , { player: 'medusaborb', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'Jadah', type: 'fold' }
        , { player: 'Sean007007', type: 'call', amount: 1 }
        , { player: 'StoplossNo', type: 'fold' }
        , { player: 'AmberSym69', type: 'call', amount: 0.5 }
        , { player: 'medusaborb', type: 'check' } ]
     , flop:
        [ { player: 'AmberSym69', type: 'bet', amount: 1.5 }
        , { player: 'medusaborb', type: 'fold' }
        , { player: 'Sean007007', type: 'call', amount: 1.5 } ]
     , turn:
        [ { player: 'AmberSym69', type: 'check' }
        , { player: 'Sean007007', type: 'check' } ]
     , river:
        [ { player: 'AmberSym69', type: 'bet', amount: 1 }
        , { player: 'Sean007007', type: 'call', amount: 1 } ]
     , showdown:
        [ { player: 'AmberSym69', type: 'collect', amount: 7.6 }
        , { player: 'AmberSym69', type: 'show', card1: 'Ac', card2: '6h' } ]
     , summary: [ { type: 'pot', single: true, amount: 7.6 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Sean007007', chips: 36.09 }
        , { seatno: 3, player: 'StoplossNo', chips: 40 }
        , { seatno: 6, player: 'AmberSym69', chips: 112.81 }
        , { seatno: 8, player: 'medusaborb', chips: 111.71 }
        , { seatno: 10, player: 'Jadah', chips: 40 } ]
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
        , hour: 16
        , min: 44
        , sec: 30
        , hero: null
        , handid: '7973237172'
        , gameno: '7973237172'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 6 }
     , board: { card1: '2d', card2: '5c', card3: '8h' }
     , posts:
        [ { player: 'medusaborb', type: 'sb', amount: 0.5 }
        , { player: 'Jadah', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'Sean007007', type: 'fold' }
        , { player: 'StoplossNo', type: 'fold' }
        , { player: 'AmberSym69', type: 'fold' }
        , { player: 'medusaborb', type: 'raise', amount: 2.5 }
        , { player: 'Jadah', type: 'call', amount: 1.5 } ]
     , flop:
        [ { player: 'medusaborb', type: 'bet', amount: 1.5 }
        , { player: 'Jadah', type: 'fold' } ]
     , turn: []
     , river: []
     , showdown: [ { player: 'medusaborb', type: 'collect', amount: 4.75 } ]
     , summary: [ { type: 'pot', single: true, amount: 4.75 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Sean007007', chips: 36.09 }
        , { seatno: 3, player: 'StoplossNo', chips: 40 }
        , { seatno: 6, player: 'AmberSym69', chips: 112.81 }
        , { seatno: 8, player: 'medusaborb', chips: 113.96 }
        , { seatno: 10, player: 'Jadah', chips: 40 } ]
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
        , hour: 16
        , min: 45
        , sec: 0
        , hero: null
        , handid: '7973237298'
        , gameno: '7973237298'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 8 }
     , board: { card1: 'Ac', card2: 'As', card3: '6h' }
     , posts:
        [ { player: 'Jadah', type: 'sb', amount: 0.5 }
        , { player: 'Sean007007', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'StoplossNo', type: 'fold' }
        , { player: 'AmberSym69', type: 'fold' }
        , { player: 'medusaborb', type: 'fold' }
        , { player: 'Jadah', type: 'raise', amount: 3 }
        , { player: 'Sean007007', type: 'call', amount: 2 } ]
     , flop:
        [ { player: 'Jadah', type: 'bet', amount: 3 }
        , { player: 'Sean007007', type: 'fold' } ]
     , turn: []
     , river: []
     , showdown: [ { player: 'Jadah', type: 'collect', amount: 5.7 } ]
     , summary: [ { type: 'pot', single: true, amount: 5.7 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Sean007007', chips: 33.09 }
        , { seatno: 3, player: 'StoplossNo', chips: 40 }
        , { seatno: 6, player: 'AmberSym69', chips: 112.81 }
        , { seatno: 8, player: 'medusaborb', chips: 113.96 }
        , { seatno: 10, player: 'Jadah', chips: 42.7 } ]
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
        , hour: 16
        , min: 45
        , sec: 25
        , hero: null
        , handid: '7973237392'
        , gameno: '7973237392'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 10 }
     , board: {}
     , posts:
        [ { player: 'Sean007007', type: 'sb', amount: 0.5 }
        , { player: 'StoplossNo', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'AmberSym69', type: 'fold' }
        , { player: 'medusaborb', type: 'raise', amount: 3 }
        , { player: 'Jadah', type: 'fold' }
        , { player: 'Sean007007', type: 'fold' }
        , { player: 'StoplossNo', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'medusaborb', type: 'collect', amount: 2.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 2.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Sean007007', chips: 32.59 }
        , { seatno: 3, player: 'StoplossNo', chips: 40 }
        , { seatno: 6, player: 'AmberSym69', chips: 112.81 }
        , { seatno: 8, player: 'medusaborb', chips: 115.46 }
        , { seatno: 10, player: 'Jadah', chips: 42.7 } ]
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
        , hour: 16
        , min: 45
        , sec: 51
        , hero: null
        , handid: '7973237492'
        , gameno: '7973237492'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 1 }
     , board: { card1: 'Js', card2: '4c', card3: '6d' }
     , posts:
        [ { player: 'StoplossNo', type: 'sb', amount: 0.5 }
        , { player: 'AmberSym69', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'medusaborb', type: 'fold' }
        , { player: 'Jadah', type: 'fold' }
        , { player: 'Sean007007', type: 'call', amount: 1 }
        , { player: 'StoplossNo', type: 'fold' }
        , { player: 'AmberSym69', type: 'check' } ]
     , flop:
        [ { player: 'AmberSym69', type: 'check' }
        , { player: 'Sean007007', type: 'bet', amount: 2 }
        , { player: 'AmberSym69', type: 'fold' } ]
     , turn: []
     , river: []
     , showdown: [ { player: 'Sean007007', type: 'collect', amount: 2.38 } ]
     , summary: [ { type: 'pot', single: true, amount: 2.38 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Sean007007', chips: 33.97 }
        , { seatno: 3, player: 'StoplossNo', chips: 40 }
        , { seatno: 6, player: 'AmberSym69', chips: 111.81 }
        , { seatno: 8, player: 'medusaborb', chips: 115.46 }
        , { seatno: 10, player: 'Jadah', chips: 42.7 } ]
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
        , hour: 16
        , min: 46
        , sec: 29
        , hero: null
        , handid: '7973237881'
        , gameno: '7973237881'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 3 }
     , board: { card1: 'Ad', card2: 'Qs', card3: '5h' }
     , posts:
        [ { player: 'AmberSym69', type: 'sb', amount: 0.5 }
        , { player: 'medusaborb', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'Jadah', type: 'fold' }
        , { player: 'Sean007007', type: 'fold' }
        , { player: 'StoplossNo', type: 'fold' }
        , { player: 'AmberSym69', type: 'call', amount: 0.5 }
        , { player: 'medusaborb', type: 'raise', amount: 3.5 }
        , { player: 'AmberSym69', type: 'call', amount: 2.5 } ]
     , flop:
        [ { player: 'AmberSym69', type: 'check' }
        , { player: 'medusaborb', type: 'bet', amount: 2.1 }
        , { player: 'AmberSym69', type: 'fold' } ]
     , turn: []
     , river: []
     , showdown: [ { player: 'medusaborb', type: 'collect', amount: 6.65 } ]
     , summary: [ { type: 'pot', single: true, amount: 6.65 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Sean007007', chips: 33.97 }
        , { seatno: 3, player: 'StoplossNo', chips: 40 }
        , { seatno: 6, player: 'AmberSym69', chips: 108.31 }
        , { seatno: 8, player: 'medusaborb', chips: 118.61 }
        , { seatno: 10, player: 'Jadah', chips: 42.7 } ]
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
        , hour: 16
        , min: 47
        , sec: 12
        , hero: null
        , handid: '7973238064'
        , gameno: '7973238064'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 6 }
     , board:
        { card1: 'Ts', card2: '5h', card3: 'Kh', card4: 'Js', card5: '5s' }
     , posts:
        [ { player: 'medusaborb', type: 'sb', amount: 0.5 }
        , { player: 'Jadah', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'Sean007007', type: 'call', amount: 1 }
        , { player: 'StoplossNo', type: 'fold' }
        , { player: 'AmberSym69', type: 'raise', amount: 3 }
        , { player: 'medusaborb', type: 'call', amount: 2.5 }
        , { player: 'Jadah', type: 'fold' }
        , { player: 'Sean007007', type: 'call', amount: 2 } ]
     , flop:
        [ { player: 'medusaborb', type: 'check' }
        , { player: 'Sean007007', type: 'check' }
        , { player: 'AmberSym69', type: 'check' } ]
     , turn:
        [ { player: 'medusaborb', type: 'bet', amount: 7 }
        , { player: 'Sean007007', type: 'call', amount: 7 }
        , { player: 'AmberSym69', type: 'fold' } ]
     , river:
        [ { player: 'medusaborb', type: 'check' }
        , { player: 'Sean007007', type: 'check' } ]
     , showdown:
        [ { player: 'Sean007007', type: 'collect', amount: 22.8 }
        , { player: 'Sean007007', type: 'show', card1: 'Qc', card2: '4c' } ]
     , summary: [ { type: 'pot', single: true, amount: 22.8 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Sean007007', chips: 46.77 }
        , { seatno: 3, player: 'StoplossNo', chips: 40 }
        , { seatno: 6, player: 'AmberSym69', chips: 105.31 }
        , { seatno: 8, player: 'medusaborb', chips: 108.61 }
        , { seatno: 10, player: 'Jadah', chips: 41.7 } ]
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
        , hour: 16
        , min: 48
        , sec: 1
        , hero: null
        , handid: '7973238240'
        , gameno: '7973238240'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 8 }
     , board:
        { card1: 'Qh', card2: 'Js', card3: '6c', card4: 'Kd', card5: '9s' }
     , posts:
        [ { player: 'Jadah', type: 'sb', amount: 0.5 }
        , { player: 'Sean007007', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'StoplossNo', type: 'fold' }
        , { player: 'AmberSym69', type: 'fold' }
        , { player: 'medusaborb', type: 'fold' }
        , { player: 'Jadah', type: 'call', amount: 0.5 }
        , { player: 'Sean007007', type: 'check' } ]
     , flop:
        [ { player: 'Jadah', type: 'check' }
        , { player: 'Sean007007', type: 'check' } ]
     , turn:
        [ { player: 'Jadah', type: 'check' }
        , { player: 'Sean007007', type: 'check' } ]
     , river:
        [ { player: 'Jadah', type: 'check' }
        , { player: 'Sean007007', type: 'check' } ]
     , showdown:
        [ { player: 'Sean007007', type: 'collect', amount: 0.95 }
        , { player: 'Jadah', type: 'collect', amount: 0.95 }
        , { player: 'Jadah', type: 'show', card1: '3c', card2: 'As' }
        , { player: 'Sean007007', type: 'show', card1: '4d', card2: 'Ah' } ]
     , summary: [ { type: 'pot', single: false, amount: 1.9 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Sean007007', chips: 46.72 }
        , { seatno: 3, player: 'StoplossNo', chips: 40 }
        , { seatno: 6, player: 'AmberSym69', chips: 105.31 }
        , { seatno: 8, player: 'medusaborb', chips: 108.61 }
        , { seatno: 10, player: 'Jadah', chips: 41.65 } ]
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
        , hour: 16
        , min: 48
        , sec: 40
        , hero: null
        , handid: '7973240275'
        , gameno: '7973240275'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 10 }
     , board: {}
     , posts:
        [ { player: 'Sean007007', type: 'sb', amount: 0.5 }
        , { player: 'StoplossNo', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'AmberSym69', type: 'fold' }
        , { player: 'medusaborb', type: 'raise', amount: 3 }
        , { player: 'Jadah', type: 'fold' }
        , { player: 'Sean007007', type: 'fold' }
        , { player: 'StoplossNo', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'medusaborb', type: 'collect', amount: 2.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 2.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Sean007007', chips: 46.22 }
        , { seatno: 3, player: 'StoplossNo', chips: 40 }
        , { seatno: 5, player: 'danikeen', chips: 108.52 }
        , { seatno: 6, player: 'AmberSym69', chips: 105.31 }
        , { seatno: 8, player: 'medusaborb', chips: 110.11 }
        , { seatno: 10, player: 'Jadah', chips: 41.65 } ]
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
        , hour: 16
        , min: 48
        , sec: 57
        , hero: null
        , handid: '7973240355'
        , gameno: '7973240355'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 1 }
     , board: { card1: 'Jd', card2: 'Js', card3: '5c', card4: 'Tc' }
     , posts:
        [ { player: 'StoplossNo', type: 'sb', amount: 0.5 }
        , { player: 'danikeen', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'AmberSym69', type: 'fold' }
        , { player: 'medusaborb', type: 'fold' }
        , { player: 'Jadah', type: 'raise', amount: 3 }
        , { player: 'Sean007007', type: 'call', amount: 3 }
        , { player: 'StoplossNo', type: 'fold' }
        , { player: 'danikeen', type: 'fold' } ]
     , flop:
        [ { player: 'Jadah', type: 'check' }
        , { player: 'Sean007007', type: 'bet', amount: 4 }
        , { player: 'Jadah', type: 'raise', amount: 8 }
        , { player: 'Sean007007', type: 'call', amount: 4 } ]
     , turn:
        [ { player: 'Jadah', type: 'bet', amount: 13 }
        , { player: 'Sean007007', type: 'fold' } ]
     , river: []
     , showdown: [ { player: 'Jadah', type: 'collect', amount: 22.33 } ]
     , summary: [ { type: 'pot', single: true, amount: 22.33 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Sean007007', chips: 35.22 }
        , { seatno: 3, player: 'StoplossNo', chips: 40 }
        , { seatno: 5, player: 'danikeen', chips: 107.52 }
        , { seatno: 6, player: 'AmberSym69', chips: 105.31 }
        , { seatno: 8, player: 'medusaborb', chips: 110.11 }
        , { seatno: 10, player: 'Jadah', chips: 52.98 } ]
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
        , hour: 16
        , min: 49
        , sec: 42
        , hero: null
        , handid: '7973240524'
        , gameno: '7973240524'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 3 }
     , board: {}
     , posts:
        [ { player: 'danikeen', type: 'sb', amount: 0.5 }
        , { player: 'AmberSym69', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'medusaborb', type: 'raise', amount: 3 }
        , { player: 'Jadah', type: 'fold' }
        , { player: 'Sean007007', type: 'fold' }
        , { player: 'StoplossNo', type: 'fold' }
        , { player: 'danikeen', type: 'fold' }
        , { player: 'AmberSym69', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'medusaborb', type: 'collect', amount: 2.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 2.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Sean007007', chips: 35.22 }
        , { seatno: 3, player: 'StoplossNo', chips: 40 }
        , { seatno: 5, player: 'danikeen', chips: 107.02 }
        , { seatno: 6, player: 'AmberSym69', chips: 104.31 }
        , { seatno: 8, player: 'medusaborb', chips: 111.61 }
        , { seatno: 10, player: 'Jadah', chips: 52.98 } ]
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
        , hour: 16
        , min: 50
        , sec: 6
        , hero: null
        , handid: '7973240611'
        , gameno: '7973240611'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 5 }
     , board:
        { card1: 'Ad', card2: '9h', card3: '7d', card4: '2s', card5: 'Jh' }
     , posts:
        [ { player: 'AmberSym69', type: 'sb', amount: 0.5 }
        , { player: 'medusaborb', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'Jadah', type: 'fold' }
        , { player: 'Sean007007', type: 'call', amount: 1 }
        , { player: 'StoplossNo', type: 'fold' }
        , { player: 'danikeen', type: 'fold' }
        , { player: 'AmberSym69', type: 'call', amount: 0.5 }
        , { player: 'medusaborb', type: 'check' } ]
     , flop:
        [ { player: 'AmberSym69', type: 'check' }
        , { player: 'medusaborb', type: 'check' }
        , { player: 'Sean007007', type: 'check' } ]
     , turn:
        [ { player: 'AmberSym69', type: 'check' }
        , { player: 'medusaborb', type: 'bet', amount: 2.1 }
        , { player: 'Sean007007', type: 'call', amount: 2.1 }
        , { player: 'AmberSym69', type: 'fold' } ]
     , river:
        [ { player: 'medusaborb', type: 'bet', amount: 4.32 }
        , { player: 'Sean007007', type: 'fold' } ]
     , showdown: [ { player: 'medusaborb', type: 'collect', amount: 6.84 } ]
     , summary: [ { type: 'pot', single: true, amount: 6.84 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Sean007007', chips: 32.12 }
        , { seatno: 3, player: 'StoplossNo', chips: 40 }
        , { seatno: 5, player: 'danikeen', chips: 107.02 }
        , { seatno: 6, player: 'AmberSym69', chips: 103.31 }
        , { seatno: 8, player: 'medusaborb', chips: 115.35 }
        , { seatno: 10, player: 'Jadah', chips: 52.98 } ]
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
        , hour: 16
        , min: 51
        , sec: 3
        , hero: null
        , handid: '7973242237'
        , gameno: '7973242237'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 6 }
     , board:
        { card1: 'Td', card2: '4c', card3: 'Qc', card4: '4s', card5: '3c' }
     , posts:
        [ { player: 'medusaborb', type: 'sb', amount: 0.5 }
        , { player: 'Jadah', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'Sean007007', type: 'call', amount: 1 }
        , { player: 'StoplossNo', type: 'fold' }
        , { player: 'danikeen', type: 'fold' }
        , { player: 'AmberSym69', type: 'raise', amount: 3 }
        , { player: 'medusaborb', type: 'fold' }
        , { player: 'Jadah', type: 'fold' }
        , { player: 'Sean007007', type: 'call', amount: 2 } ]
     , flop:
        [ { player: 'Sean007007', type: 'check' }
        , { player: 'AmberSym69', type: 'bet', amount: 3.75 }
        , { player: 'Sean007007', type: 'call', amount: 3.75 } ]
     , turn:
        [ { player: 'Sean007007', type: 'check' }
        , { player: 'AmberSym69', type: 'check' } ]
     , river:
        [ { player: 'Sean007007', type: 'check' }
        , { player: 'AmberSym69', type: 'check' } ]
     , showdown:
        [ { player: 'Sean007007', type: 'collect', amount: 7.13 }
        , { player: 'AmberSym69', type: 'collect', amount: 7.12 }
        , { player: 'Sean007007', type: 'show', card1: 'Jc', card2: '6s' }
        , { player: 'AmberSym69', type: 'show', card1: '9c', card2: 'Jh' } ]
     , summary: [ { type: 'pot', single: false, amount: 14.25 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Sean007007', chips: 32.5 }
        , { seatno: 3, player: 'StoplossNo', chips: 40 }
        , { seatno: 5, player: 'danikeen', chips: 107.02 }
        , { seatno: 6, player: 'AmberSym69', chips: 103.68 }
        , { seatno: 8, player: 'medusaborb', chips: 114.85 }
        , { seatno: 10, player: 'Jadah', chips: 51.98 } ]
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
        , hour: 16
        , min: 52
        , sec: 15
        , hero: null
        , handid: '7973243895'
        , gameno: '7973243895'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 8 }
     , board:
        { card1: '9c', card2: '8s', card3: 'Qs', card4: '2h', card5: '6d' }
     , posts:
        [ { player: 'Jadah', type: 'sb', amount: 0.5 }
        , { player: 'Sean007007', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'StoplossNo', type: 'fold' }
        , { player: 'danikeen', type: 'raise', amount: 3 }
        , { player: 'AmberSym69', type: 'fold' }
        , { player: 'medusaborb', type: 'fold' }
        , { player: 'Jadah', type: 'fold' }
        , { player: 'Sean007007', type: 'call', amount: 2 } ]
     , flop:
        [ { player: 'Sean007007', type: 'check' }
        , { player: 'danikeen', type: 'check' } ]
     , turn:
        [ { player: 'Sean007007', type: 'check' }
        , { player: 'danikeen', type: 'check' } ]
     , river:
        [ { player: 'Sean007007', type: 'check' }
        , { player: 'danikeen', type: 'check' } ]
     , showdown:
        [ { player: 'danikeen', type: 'collect', amount: 6.18 }
        , { player: 'danikeen', type: 'show', card1: 'Js', card2: 'Kh' } ]
     , summary: [ { type: 'pot', single: true, amount: 6.18 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Sean007007', chips: 29.5 }
        , { seatno: 3, player: 'StoplossNo', chips: 40 }
        , { seatno: 5, player: 'danikeen', chips: 110.2 }
        , { seatno: 6, player: 'AmberSym69', chips: 103.68 }
        , { seatno: 8, player: 'medusaborb', chips: 114.85 }
        , { seatno: 10, player: 'Jadah', chips: 51.48 } ]
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
        , hour: 16
        , min: 52
        , sec: 53
        , hero: null
        , handid: '7973244036'
        , gameno: '7973244036'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 10 }
     , board: {}
     , posts:
        [ { player: 'Sean007007', type: 'sb', amount: 0.5 }
        , { player: 'StoplossNo', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'danikeen', type: 'fold' }
        , { player: 'AmberSym69', type: 'fold' }
        , { player: 'medusaborb', type: 'fold' }
        , { player: 'Jadah', type: 'fold' }
        , { player: 'Sean007007', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'StoplossNo', type: 'collect', amount: 1 } ]
     , summary: [ { type: 'pot', single: true, amount: 1 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Sean007007', chips: 29 }
        , { seatno: 3, player: 'StoplossNo', chips: 40.5 }
        , { seatno: 5, player: 'danikeen', chips: 110.2 }
        , { seatno: 6, player: 'AmberSym69', chips: 103.68 }
        , { seatno: 8, player: 'medusaborb', chips: 114.85 }
        , { seatno: 10, player: 'Jadah', chips: 51.48 } ]
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
        , hour: 16
        , min: 53
        , sec: 12
        , hero: null
        , handid: '7973244114'
        , gameno: '7973244114'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 1 }
     , board: { card1: '9d', card2: 'Ah', card3: '2s' }
     , posts:
        [ { player: 'StoplossNo', type: 'sb', amount: 0.5 }
        , { player: 'danikeen', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'AmberSym69', type: 'raise', amount: 3 }
        , { player: 'medusaborb', type: 'fold' }
        , { player: 'Jadah', type: 'fold' }
        , { player: 'Sean007007', type: 'call', amount: 3 }
        , { player: 'StoplossNo', type: 'fold' }
        , { player: 'danikeen', type: 'call', amount: 2 } ]
     , flop:
        [ { player: 'danikeen', type: 'check' }
        , { player: 'AmberSym69', type: 'bet', amount: 2.85 }
        , { player: 'Sean007007', type: 'fold' }
        , { player: 'danikeen', type: 'fold' } ]
     , turn: []
     , river: []
     , showdown: [ { player: 'AmberSym69', type: 'collect', amount: 9.03 } ]
     , summary: [ { type: 'pot', single: true, amount: 9.03 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Sean007007', chips: 26 }
        , { seatno: 3, player: 'StoplossNo', chips: 40 }
        , { seatno: 5, player: 'danikeen', chips: 107.2 }
        , { seatno: 6, player: 'AmberSym69', chips: 109.71 }
        , { seatno: 8, player: 'medusaborb', chips: 114.85 }
        , { seatno: 10, player: 'Jadah', chips: 51.48 } ]
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
        , hour: 16
        , min: 53
        , sec: 54
        , hero: null
        , handid: '7973244425'
        , gameno: '7973244425'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 3 }
     , board:
        { card1: '9h', card2: '4s', card3: '6d', card4: 'Kh', card5: 'Qs' }
     , posts:
        [ { player: 'danikeen', type: 'sb', amount: 0.5 }
        , { player: 'AmberSym69', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'medusaborb', type: 'fold' }
        , { player: 'Jadah', type: 'fold' }
        , { player: 'Sean007007', type: 'call', amount: 1 }
        , { player: 'StoplossNo', type: 'fold' }
        , { player: 'danikeen', type: 'call', amount: 0.5 }
        , { player: 'AmberSym69', type: 'check' } ]
     , flop:
        [ { player: 'danikeen', type: 'check' }
        , { player: 'AmberSym69', type: 'bet', amount: 3 }
        , { player: 'Sean007007', type: 'raise', amount: 6 }
        , { player: 'danikeen', type: 'fold' }
        , { player: 'AmberSym69', type: 'raise', amount: 19 }
        , { player: 'Sean007007', type: 'allin', amount: 16, raiseTo: 19 }
        , { player: 'AmberSym69', type: 'call', amount: 6 } ]
     , turn: []
     , river: []
     , showdown:
        [ { player: 'AmberSym69', type: 'collect', amount: 50.35 }
        , { player: 'Sean007007', type: 'show', card1: 'Jh', card2: '9c' }
        , { player: 'AmberSym69', type: 'show', card1: '4d', card2: '6c' } ]
     , summary: [ { type: 'pot', single: true, amount: 50.35 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 3, player: 'StoplossNo', chips: 40 }
        , { seatno: 5, player: 'danikeen', chips: 106.2 }
        , { seatno: 6, player: 'AmberSym69', chips: 134.06 }
        , { seatno: 8, player: 'medusaborb', chips: 114.85 }
        , { seatno: 10, player: 'Jadah', chips: 51.48 } ]
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
        , hour: 16
        , min: 54
        , sec: 46
        , hero: null
        , handid: '7973244616'
        , gameno: '7973244616'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 5 }
     , board: { card1: 'Th', card2: 'Qc', card3: 'Jc', card4: '2c' }
     , posts:
        [ { player: 'AmberSym69', type: 'sb', amount: 0.5 }
        , { player: 'medusaborb', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'Jadah', type: 'fold' }
        , { player: 'StoplossNo', type: 'fold' }
        , { player: 'danikeen', type: 'fold' }
        , { player: 'AmberSym69', type: 'call', amount: 0.5 }
        , { player: 'medusaborb', type: 'check' } ]
     , flop:
        [ { player: 'AmberSym69', type: 'check' }
        , { player: 'medusaborb', type: 'check' } ]
     , turn:
        [ { player: 'AmberSym69', type: 'bet', amount: 2 }
        , { player: 'medusaborb', type: 'fold' } ]
     , river: []
     , showdown: [ { player: 'AmberSym69', type: 'collect', amount: 1.9 } ]
     , summary: [ { type: 'pot', single: true, amount: 1.9 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 3, player: 'StoplossNo', chips: 40 }
        , { seatno: 5, player: 'danikeen', chips: 106.2 }
        , { seatno: 6, player: 'AmberSym69', chips: 134.96 }
        , { seatno: 8, player: 'medusaborb', chips: 113.85 }
        , { seatno: 10, player: 'Jadah', chips: 51.48 } ]
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
        , hour: 16
        , min: 55
        , sec: 21
        , hero: null
        , handid: '7973245249'
        , gameno: '7973245249'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 6 }
     , board: { card1: '9c', card2: 'Kh', card3: '6s' }
     , posts:
        [ { player: 'medusaborb', type: 'sb', amount: 0.5 }
        , { player: 'Jadah', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'StoplossNo', type: 'fold' }
        , { player: 'danikeen', type: 'raise', amount: 3 }
        , { player: 'AmberSym69', type: 'fold' }
        , { player: 'medusaborb', type: 'raise', amount: 11 }
        , { player: 'Jadah', type: 'fold' }
        , { player: 'danikeen', type: 'call', amount: 8 } ]
     , flop:
        [ { player: 'medusaborb', type: 'bet', amount: 7.9 }
        , { player: 'danikeen', type: 'raise', amount: 18 }
        , { player: 'medusaborb', type: 'fold' } ]
     , turn: []
     , river: []
     , showdown: [ { player: 'danikeen', type: 'collect', amount: 36.86 } ]
     , summary: [ { type: 'pot', single: true, amount: 36.86 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Attila406', chips: 100 }
        , { seatno: 3, player: 'StoplossNo', chips: 40 }
        , { seatno: 5, player: 'danikeen', chips: 124.16 }
        , { seatno: 6, player: 'AmberSym69', chips: 134.96 }
        , { seatno: 8, player: 'medusaborb', chips: 94.95 }
        , { seatno: 10, player: 'Jadah', chips: 50.48 } ]
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
        , hour: 16
        , min: 56
        , sec: 23
        , hero: null
        , handid: '7973245478'
        , gameno: '7973245478'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 10
        , button: 8 }
     , board: {}
     , posts:
        [ { player: 'Jadah', type: 'sb', amount: 0.5 }
        , { player: 'Attila406', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'StoplossNo', type: 'fold' }
        , { player: 'danikeen', type: 'fold' }
        , { player: 'AmberSym69', type: 'raise', amount: 3 }
        , { player: 'medusaborb', type: 'fold' }
        , { player: 'Jadah', type: 'fold' }
        , { player: 'Attila406', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'AmberSym69', type: 'collect', amount: 2.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 2.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Attila406', chips: 105 }
        , { seatno: 3, player: 'K1ngMidas', chips: 100 }
        , { seatno: 8, player: 'ShOoTeR97', chips: 100 } ]
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
        , hour: 16
        , min: 57
        , sec: 49
        , hero: null
        , handid: '7973245800'
        , gameno: '7973245800'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 6
        , button: 8 }
     , board: {}
     , posts:
        [ { player: 'Attila406', type: 'sb', amount: 0.5 }
        , { player: 'K1ngMidas', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'ShOoTeR97', type: 'fold' }
        , { player: 'Attila406', type: 'raise', amount: 3.5 }
        , { player: 'K1ngMidas', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'Attila406', type: 'collect', amount: 2 } ]
     , summary: [ { type: 'pot', single: true, amount: 2 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Attila406', chips: 106 }
        , { seatno: 3, player: 'K1ngMidas', chips: 100 }
        , { seatno: 8, player: 'ShOoTeR97', chips: 100 } ]
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
        , hour: 16
        , min: 58
        , sec: 8
        , hero: null
        , handid: '7973245863'
        , gameno: '7973245863'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 6
        , button: 1 }
     , board: {}
     , posts:
        [ { player: 'K1ngMidas', type: 'sb', amount: 0.5 }
        , { player: 'ShOoTeR97', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'Attila406', type: 'fold' }
        , { player: 'K1ngMidas', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'ShOoTeR97', type: 'collect', amount: 1 } ]
     , summary: [ { type: 'pot', single: true, amount: 1 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Attila406', chips: 106 }
        , { seatno: 3, player: 'K1ngMidas', chips: 100 }
        , { seatno: 8, player: 'ShOoTeR97', chips: 100.5 } ]
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
        , hour: 16
        , min: 58
        , sec: 21
        , hero: null
        , handid: '7973245913'
        , gameno: '7973245913'
        , gametype: 'cash' }
     , table:
        { tablename: 'Crisolles'
        , tableno: 888589252
        , maxseats: 6
        , button: 3 }
     , board: {}
     , posts:
        [ { player: 'ShOoTeR97', type: 'sb', amount: 0.5 }
        , { player: 'Attila406', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'K1ngMidas', type: 'fold' }
        , { player: 'ShOoTeR97', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'Attila406', type: 'collect', amount: 1 } ]
     , summary: [ { type: 'pot', single: true, amount: 1 } ]
     , hero: null
     , holecards: null } ])
  t.end()
})
