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
        [ { seatno: 3, player: 'HAZERA586', chips: 600 }
        , { seatno: 6, player: 'hulahHULAH', chips: 792.58 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 3
        , bb: 6
        , ante: 0
        , year: 2018
        , month: 6
        , day: 19
        , hour: 17
        , min: 28
        , sec: 42
        , hero: null
        , handid: '7972351305'
        , gameno: '7972351305'
        , gametype: 'cash' }
     , table:
        { tablename: 'Andeville'
        , tableno: 888539199
        , maxseats: 2
        , button: 3 }
     , board: {}
     , posts:
        [ { player: 'HAZERA586', type: 'sb', amount: 3 }
        , { player: 'hulahHULAH', type: 'bb', amount: 6 } ]
     , preflop: [ { player: 'HAZERA586', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'hulahHULAH', type: 'collect', amount: 6 } ]
     , summary: [ { type: 'pot', single: true, amount: 6 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 3, player: 'HAZERA586', chips: 597 }
        , { seatno: 6, player: 'hulahHULAH', chips: 795.58 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 3
        , bb: 6
        , ante: 0
        , year: 2018
        , month: 6
        , day: 19
        , hour: 17
        , min: 28
        , sec: 48
        , hero: null
        , handid: '7972353709'
        , gameno: '7972353709'
        , gametype: 'cash' }
     , table:
        { tablename: 'Andeville'
        , tableno: 888539199
        , maxseats: 2
        , button: 6 }
     , board: {}
     , posts:
        [ { player: 'hulahHULAH', type: 'sb', amount: 3 }
        , { player: 'HAZERA586', type: 'bb', amount: 6 } ]
     , preflop: [ { player: 'hulahHULAH', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'HAZERA586', type: 'collect', amount: 6 } ]
     , summary: [ { type: 'pot', single: true, amount: 6 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 3, player: 'HAZERA586', chips: 600 }
        , { seatno: 6, player: 'hulahHULAH', chips: 792.58 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 3
        , bb: 6
        , ante: 0
        , year: 2018
        , month: 6
        , day: 19
        , hour: 17
        , min: 28
        , sec: 57
        , hero: null
        , handid: '7972353947'
        , gameno: '7972353947'
        , gametype: 'cash' }
     , table:
        { tablename: 'Andeville'
        , tableno: 888539199
        , maxseats: 2
        , button: 3 }
     , board: {}
     , posts:
        [ { player: 'HAZERA586', type: 'sb', amount: 3 }
        , { player: 'hulahHULAH', type: 'bb', amount: 6 } ]
     , preflop:
        [ { player: 'HAZERA586', type: 'raise', amount: 12, raiseTo: 12 }
        , { player: 'hulahHULAH', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'HAZERA586', type: 'collect', amount: 12 } ]
     , summary: [ { type: 'pot', single: true, amount: 12 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 3, player: 'HAZERA586', chips: 606 }
        , { seatno: 6, player: 'hulahHULAH', chips: 786.58 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 3
        , bb: 6
        , ante: 0
        , year: 2018
        , month: 6
        , day: 19
        , hour: 17
        , min: 29
        , sec: 8
        , hero: null
        , handid: '7972353999'
        , gameno: '7972353999'
        , gametype: 'cash' }
     , table:
        { tablename: 'Andeville'
        , tableno: 888539199
        , maxseats: 2
        , button: 6 }
     , board: {}
     , posts:
        [ { player: 'hulahHULAH', type: 'sb', amount: 3 }
        , { player: 'HAZERA586', type: 'bb', amount: 6 } ]
     , preflop:
        [ { player: 'hulahHULAH', type: 'raise', amount: 13, raiseTo: 13 }
        , { player: 'HAZERA586', type: 'raise', amount: 109, raiseTo: 122 }
        , { player: 'hulahHULAH', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'HAZERA586', type: 'collect', amount: 26 } ]
     , summary: [ { type: 'pot', single: true, amount: 26 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 3, player: 'HAZERA586', chips: 619 }
        , { seatno: 6, player: 'hulahHULAH', chips: 773.58 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 3
        , bb: 6
        , ante: 0
        , year: 2018
        , month: 6
        , day: 19
        , hour: 17
        , min: 29
        , sec: 31
        , hero: null
        , handid: '7972354096'
        , gameno: '7972354096'
        , gametype: 'cash' }
     , table:
        { tablename: 'Andeville'
        , tableno: 888539199
        , maxseats: 2
        , button: 3 }
     , board: { card1: '6s', card2: 'Td', card3: '8c' }
     , posts:
        [ { player: 'HAZERA586', type: 'sb', amount: 3 }
        , { player: 'hulahHULAH', type: 'bb', amount: 6 } ]
     , preflop:
        [ { player: 'HAZERA586', type: 'call', amount: 3 }
        , { player: 'hulahHULAH', type: 'check' } ]
     , flop:
        [ { player: 'hulahHULAH', type: 'check' }
        , { player: 'HAZERA586', type: 'bet', amount: 12 }
        , { player: 'hulahHULAH', type: 'fold' } ]
     , turn: []
     , river: []
     , showdown: [ { player: 'HAZERA586', type: 'collect', amount: 11.4 } ]
     , summary: [ { type: 'pot', single: true, amount: 11.4 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 3, player: 'HAZERA586', chips: 624.4 }
        , { seatno: 6, player: 'hulahHULAH', chips: 767.58 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 3
        , bb: 6
        , ante: 0
        , year: 2018
        , month: 6
        , day: 19
        , hour: 17
        , min: 29
        , sec: 56
        , hero: null
        , handid: '7972354197'
        , gameno: '7972354197'
        , gametype: 'cash' }
     , table:
        { tablename: 'Andeville'
        , tableno: 888539199
        , maxseats: 2
        , button: 6 }
     , board:
        { card1: '2h', card2: 'Ks', card3: 'Jh', card4: '8c', card5: 'Jc' }
     , posts:
        [ { player: 'hulahHULAH', type: 'sb', amount: 3 }
        , { player: 'HAZERA586', type: 'bb', amount: 6 } ]
     , preflop:
        [ { player: 'hulahHULAH', type: 'raise', amount: 12, raiseTo: 12 }
        , { player: 'HAZERA586', type: 'raise', amount: 6, raiseTo: 18 }
        , { player: 'hulahHULAH', type: 'call', amount: 6 } ]
     , flop:
        [ { player: 'HAZERA586', type: 'bet', amount: 18 }
        , { player: 'hulahHULAH', type: 'raise', amount: 48, raiseTo: 66 }
        , { player: 'HAZERA586', type: 'raise', amount: 48, raiseTo: 114 }
        , { player: 'hulahHULAH', type: 'call', amount: 48 } ]
     , turn:
        [ { player: 'HAZERA586', type: 'bet', amount: 6 }
        , { player: 'hulahHULAH'
          , type: 'raise'
          , amount: 629.58
          , raiseTo: 635.58 }
        , { player: 'HAZERA586', type: 'call', amount: 486.4, allin: true } ]
     , river: []
     , showdown:
        [ { player: 'hulahHULAH', type: 'collect', amount: 1247.8 }
        , { player: 'hulahHULAH', type: 'show', card1: '2d', card2: '2s' }
        , { player: 'HAZERA586', type: 'show', card1: 'Th', card2: 'Kd' } ]
     , summary: [ { type: 'pot', single: true, amount: 1247.8 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 5, player: 'LuckyYellowDog', chips: 762.67 }
        , { seatno: 8, player: 'Pipitr', chips: 600 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 3
        , bb: 6
        , ante: 0
        , year: 2018
        , month: 6
        , day: 19
        , hour: 17
        , min: 32
        , sec: 31
        , hero: null
        , handid: '7972357088'
        , gameno: '7972357088'
        , gametype: 'cash' }
     , table:
        { tablename: 'Andeville'
        , tableno: 888539199
        , maxseats: 2
        , button: 5 }
     , board: {}
     , posts:
        [ { player: 'LuckyYellowDog', type: 'sb', amount: 3 }
        , { player: 'Pipitr', type: 'bb', amount: 6 } ]
     , preflop:
        [ { player: 'LuckyYellowDog'
          , type: 'raise'
          , amount: 12
          , raiseTo: 12 }
        , { player: 'Pipitr', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown:
        [ { player: 'LuckyYellowDog', type: 'collect', amount: 12 } ]
     , summary: [ { type: 'pot', single: true, amount: 12 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 5, player: 'LuckyYellowDog', chips: 768.67 }
        , { seatno: 8, player: 'Pipitr', chips: 600 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 3
        , bb: 6
        , ante: 0
        , year: 2018
        , month: 6
        , day: 19
        , hour: 17
        , min: 32
        , sec: 50
        , hero: null
        , handid: '7972357166'
        , gameno: '7972357166'
        , gametype: 'cash' }
     , table:
        { tablename: 'Andeville'
        , tableno: 888539199
        , maxseats: 2
        , button: 8 }
     , board:
        { card1: '6c', card2: 'As', card3: '7c', card4: '6h', card5: '2d' }
     , posts:
        [ { player: 'Pipitr', type: 'sb', amount: 3 }
        , { player: 'LuckyYellowDog', type: 'bb', amount: 6 } ]
     , preflop:
        [ { player: 'Pipitr', type: 'raise', amount: 15, raiseTo: 15 }
        , { player: 'LuckyYellowDog', type: 'call', amount: 9 } ]
     , flop:
        [ { player: 'LuckyYellowDog', type: 'check' }
        , { player: 'Pipitr', type: 'bet', amount: 19.5 }
        , { player: 'LuckyYellowDog', type: 'call', amount: 19.5 } ]
     , turn:
        [ { player: 'LuckyYellowDog', type: 'check' }
        , { player: 'Pipitr', type: 'check' } ]
     , river:
        [ { player: 'LuckyYellowDog', type: 'bet', amount: 48.3 }
        , { player: 'Pipitr', type: 'call', amount: 48.3 } ]
     , showdown:
        [ { player: 'Pipitr', type: 'collect', amount: 164.6 }
        , { player: 'Pipitr', type: 'show', card1: 'Ac', card2: '7s' }
        , { player: 'LuckyYellowDog'
          , type: 'show'
          , card1: 'Ah'
          , card2: '8h' } ]
     , summary: [ { type: 'pot', single: true, amount: 164.6 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 3, player: 'bob9798', chips: 600 }
        , { seatno: 5, player: 'LuckyYellowDog', chips: 702.52 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 3
        , bb: 6
        , ante: 0
        , year: 2018
        , month: 6
        , day: 19
        , hour: 17
        , min: 34
        , sec: 16
        , hero: null
        , handid: '7972357646'
        , gameno: '7972357646'
        , gametype: 'cash' }
     , table:
        { tablename: 'Andeville'
        , tableno: 888539199
        , maxseats: 2
        , button: 5 }
     , board: {}
     , posts:
        [ { player: 'LuckyYellowDog', type: 'sb', amount: 3 }
        , { player: 'bob9798', type: 'bb', amount: 6 } ]
     , preflop:
        [ { player: 'LuckyYellowDog'
          , type: 'raise'
          , amount: 12
          , raiseTo: 12 }
        , { player: 'bob9798', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown:
        [ { player: 'LuckyYellowDog', type: 'collect', amount: 12 } ]
     , summary: [ { type: 'pot', single: true, amount: 12 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 3, player: 'bob9798', chips: 600 }
        , { seatno: 5, player: 'LuckyYellowDog', chips: 708.52 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 3
        , bb: 6
        , ante: 0
        , year: 2018
        , month: 6
        , day: 19
        , hour: 17
        , min: 34
        , sec: 23
        , hero: null
        , handid: '7972357681'
        , gameno: '7972357681'
        , gametype: 'cash' }
     , table:
        { tablename: 'Andeville'
        , tableno: 888539199
        , maxseats: 2
        , button: 3 }
     , board: { card1: 'As', card2: '2s', card3: '9d' }
     , posts:
        [ { player: 'bob9798', type: 'sb', amount: 3 }
        , { player: 'LuckyYellowDog', type: 'bb', amount: 6 } ]
     , preflop:
        [ { player: 'bob9798', type: 'raise', amount: 15, raiseTo: 15 }
        , { player: 'LuckyYellowDog', type: 'call', amount: 9 } ]
     , flop:
        [ { player: 'LuckyYellowDog', type: 'check' }
        , { player: 'bob9798', type: 'bet', amount: 15 }
        , { player: 'LuckyYellowDog', type: 'fold' } ]
     , turn: []
     , river: []
     , showdown: [ { player: 'bob9798', type: 'collect', amount: 29 } ]
     , summary: [ { type: 'pot', single: true, amount: 29 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 3, player: 'bob9798', chips: 614 }
        , { seatno: 5, player: 'LuckyYellowDog', chips: 693.52 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 3
        , bb: 6
        , ante: 0
        , year: 2018
        , month: 6
        , day: 19
        , hour: 17
        , min: 34
        , sec: 50
        , hero: null
        , handid: '7972357797'
        , gameno: '7972357797'
        , gametype: 'cash' }
     , table:
        { tablename: 'Andeville'
        , tableno: 888539199
        , maxseats: 2
        , button: 5 }
     , board: {}
     , posts:
        [ { player: 'LuckyYellowDog', type: 'sb', amount: 3 }
        , { player: 'bob9798', type: 'bb', amount: 6 } ]
     , preflop:
        [ { player: 'LuckyYellowDog'
          , type: 'raise'
          , amount: 12
          , raiseTo: 12 }
        , { player: 'bob9798', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown:
        [ { player: 'LuckyYellowDog', type: 'collect', amount: 12 } ]
     , summary: [ { type: 'pot', single: true, amount: 12 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 3, player: 'bob9798', chips: 608 }
        , { seatno: 5, player: 'LuckyYellowDog', chips: 699.52 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 3
        , bb: 6
        , ante: 0
        , year: 2018
        , month: 6
        , day: 19
        , hour: 17
        , min: 35
        , sec: 1
        , hero: null
        , handid: '7972357851'
        , gameno: '7972357851'
        , gametype: 'cash' }
     , table:
        { tablename: 'Andeville'
        , tableno: 888539199
        , maxseats: 2
        , button: 3 }
     , board: {}
     , posts:
        [ { player: 'bob9798', type: 'sb', amount: 3 }
        , { player: 'LuckyYellowDog', type: 'bb', amount: 6 } ]
     , preflop: [ { player: 'bob9798', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'LuckyYellowDog', type: 'collect', amount: 6 } ]
     , summary: [ { type: 'pot', single: true, amount: 6 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 3, player: 'bob9798', chips: 605 }
        , { seatno: 5, player: 'LuckyYellowDog', chips: 702.52 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 3
        , bb: 6
        , ante: 0
        , year: 2018
        , month: 6
        , day: 19
        , hour: 17
        , min: 35
        , sec: 12
        , hero: null
        , handid: '7972357885'
        , gameno: '7972357885'
        , gametype: 'cash' }
     , table:
        { tablename: 'Andeville'
        , tableno: 888539199
        , maxseats: 2
        , button: 5 }
     , board: {}
     , posts:
        [ { player: 'LuckyYellowDog', type: 'sb', amount: 3 }
        , { player: 'bob9798', type: 'bb', amount: 6 } ]
     , preflop:
        [ { player: 'LuckyYellowDog'
          , type: 'raise'
          , amount: 12
          , raiseTo: 12 }
        , { player: 'bob9798', type: 'raise', amount: 30, raiseTo: 42 }
        , { player: 'LuckyYellowDog', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'bob9798', type: 'collect', amount: 24 } ]
     , summary: [ { type: 'pot', single: true, amount: 24 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 3, player: 'bob9798', chips: 617 }
        , { seatno: 5, player: 'LuckyYellowDog', chips: 690.52 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 3
        , bb: 6
        , ante: 0
        , year: 2018
        , month: 6
        , day: 19
        , hour: 17
        , min: 35
        , sec: 29
        , hero: null
        , handid: '7972357954'
        , gameno: '7972357954'
        , gametype: 'cash' }
     , table:
        { tablename: 'Andeville'
        , tableno: 888539199
        , maxseats: 2
        , button: 3 }
     , board: {}
     , posts:
        [ { player: 'bob9798', type: 'sb', amount: 3 }
        , { player: 'LuckyYellowDog', type: 'bb', amount: 6 } ]
     , preflop: [ { player: 'bob9798', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'LuckyYellowDog', type: 'collect', amount: 6 } ]
     , summary: [ { type: 'pot', single: true, amount: 6 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 5, player: 'RIVERFOLD92', chips: 240 }
        , { seatno: 8, player: 'SicoXXI', chips: 621.6 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 3
        , bb: 6
        , ante: 0
        , year: 2018
        , month: 6
        , day: 19
        , hour: 23
        , min: 28
        , sec: 8
        , hero: null
        , handid: '7972742501'
        , gameno: '7972742501'
        , gametype: 'cash' }
     , table:
        { tablename: 'Andeville'
        , tableno: 888539199
        , maxseats: 2
        , button: 5 }
     , board: {}
     , posts:
        [ { player: 'RIVERFOLD92', type: 'sb', amount: 3 }
        , { player: 'SicoXXI', type: 'bb', amount: 6 } ]
     , preflop:
        [ { player: 'RIVERFOLD92', type: 'raise', amount: 12, raiseTo: 12 }
        , { player: 'SicoXXI', type: 'raise', amount: 30, raiseTo: 42 }
        , { player: 'RIVERFOLD92', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'SicoXXI', type: 'collect', amount: 24 } ]
     , summary: [ { type: 'pot', single: true, amount: 24 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 5, player: 'RIVERFOLD92', chips: 240 }
        , { seatno: 8, player: 'SicoXXI', chips: 633.6 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 3
        , bb: 6
        , ante: 0
        , year: 2018
        , month: 6
        , day: 19
        , hour: 23
        , min: 28
        , sec: 32
        , hero: null
        , handid: '7972743640'
        , gameno: '7972743640'
        , gametype: 'cash' }
     , table:
        { tablename: 'Andeville'
        , tableno: 888539199
        , maxseats: 2
        , button: 8 }
     , board: {}
     , posts:
        [ { player: 'SicoXXI', type: 'sb', amount: 3 }
        , { player: 'RIVERFOLD92', type: 'bb', amount: 6 } ]
     , preflop: [ { player: 'SicoXXI', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'RIVERFOLD92', type: 'collect', amount: 6 } ]
     , summary: [ { type: 'pot', single: true, amount: 6 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 3, player: 'alittl3ch3ck13', chips: 600 }
        , { seatno: 8, player: 'SicoXXI', chips: 630.6 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 3
        , bb: 6
        , ante: 0
        , year: 2018
        , month: 6
        , day: 19
        , hour: 23
        , min: 32
        , sec: 57
        , hero: null
        , handid: '7972747201'
        , gameno: '7972747201'
        , gametype: 'cash' }
     , table:
        { tablename: 'Andeville'
        , tableno: 888539199
        , maxseats: 2
        , button: 8 }
     , board:
        { card1: '8s', card2: '8h', card3: '7s', card4: 'Ts', card5: '9h' }
     , posts:
        [ { player: 'SicoXXI', type: 'sb', amount: 3 }
        , { player: 'alittl3ch3ck13', type: 'bb', amount: 6 } ]
     , preflop:
        [ { player: 'SicoXXI', type: 'raise', amount: 12, raiseTo: 12 }
        , { player: 'alittl3ch3ck13', type: 'call', amount: 6 } ]
     , flop:
        [ { player: 'alittl3ch3ck13', type: 'check' }
        , { player: 'SicoXXI', type: 'bet', amount: 7.2 }
        , { player: 'alittl3ch3ck13', type: 'call', amount: 7.2 } ]
     , turn:
        [ { player: 'alittl3ch3ck13', type: 'check' }
        , { player: 'SicoXXI', type: 'check' } ]
     , river:
        [ { player: 'alittl3ch3ck13', type: 'check' }
        , { player: 'SicoXXI', type: 'check' } ]
     , showdown:
        [ { player: 'alittl3ch3ck13', type: 'collect', amount: 37.4 }
        , { player: 'alittl3ch3ck13'
          , type: 'show'
          , card1: '9d'
          , card2: 'Qs' } ]
     , summary: [ { type: 'pot', single: true, amount: 37.4 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 5, player: 'RIVERFOLD92', chips: 1066.15 }
        , { seatno: 10, player: 'MRWOOFY', chips: 659.9 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 3
        , bb: 6
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 0
        , min: 19
        , sec: 50
        , hero: null
        , handid: '7972787426'
        , gameno: '7972787426'
        , gametype: 'cash' }
     , table:
        { tablename: 'Andeville'
        , tableno: 888539199
        , maxseats: 2
        , button: 10 }
     , board:
        { card1: 'Tc', card2: '3d', card3: '7h', card4: '6s', card5: 'Kh' }
     , posts:
        [ { player: 'MRWOOFY', type: 'sb', amount: 3 }
        , { player: 'RIVERFOLD92', type: 'bb', amount: 6 } ]
     , preflop:
        [ { player: 'MRWOOFY', type: 'raise', amount: 15, raiseTo: 15 }
        , { player: 'RIVERFOLD92', type: 'raise', amount: 39, raiseTo: 54 }
        , { player: 'MRWOOFY', type: 'call', amount: 39 } ]
     , flop:
        [ { player: 'RIVERFOLD92', type: 'bet', amount: 48 }
        , { player: 'MRWOOFY', type: 'call', amount: 48 } ]
     , turn:
        [ { player: 'RIVERFOLD92', type: 'check' }
        , { player: 'MRWOOFY', type: 'bet', amount: 61.2 }
        , { player: 'RIVERFOLD92', type: 'call', amount: 61.2 } ]
     , river:
        [ { player: 'RIVERFOLD92', type: 'check' }
        , { player: 'MRWOOFY', type: 'check' } ]
     , showdown:
        [ { player: 'MRWOOFY', type: 'collect', amount: 325.4 }
        , { player: 'MRWOOFY', type: 'show', card1: '9s', card2: '9h' } ]
     , summary: [ { type: 'pot', single: true, amount: 325.4 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 5, player: 'RIVERFOLD92', chips: 902.95 }
        , { seatno: 10, player: 'MRWOOFY', chips: 822.1 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '€'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 3
        , bb: 6
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 0
        , min: 21
        , sec: 31
        , hero: null
        , handid: '7972787832'
        , gameno: '7972787832'
        , gametype: 'cash' }
     , table:
        { tablename: 'Andeville'
        , tableno: 888539199
        , maxseats: 2
        , button: 5 }
     , board: {}
     , posts:
        [ { player: 'RIVERFOLD92', type: 'sb', amount: 3 }
        , { player: 'MRWOOFY', type: 'bb', amount: 6 } ]
     , preflop:
        [ { player: 'RIVERFOLD92', type: 'raise', amount: 15, raiseTo: 15 }
        , { player: 'MRWOOFY', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'RIVERFOLD92', type: 'collect', amount: 12 } ]
     , summary: [ { type: 'pot', single: true, amount: 12 } ]
     , hero: null
     , holecards: null } ])
  t.end()
})
