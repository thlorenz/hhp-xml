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
        [ { seatno: 3, player: '1576893454', chips: 50 }
        , { seatno: 5, player: 'StoplossNo', chips: 20 }
        , { seatno: 6, player: 'sollert', chips: 47.28 }
        , { seatno: 8, player: '1ntr4nce', chips: 52 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 34
        , hero: null
        , handid: '7973189877'
        , gameno: '7973189877'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 6
        , button: 6 }
     , board:
        { card1: 'Jc', card2: '6c', card3: '2s', card4: '5c', card5: 'Jd' }
     , posts:
        [ { player: '1ntr4nce', type: 'sb', amount: 0.5 }
        , { player: '1576893454', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'StoplossNo', type: 'fold' }
        , { player: 'sollert', type: 'fold' }
        , { player: '1ntr4nce', type: 'call', amount: 0.5 }
        , { player: '1576893454', type: 'raise', amount: 4 }
        , { player: '1ntr4nce', type: 'raise', amount: 12 }
        , { player: '1576893454', type: 'raise', amount: 50 }
        , { player: '1ntr4nce', type: 'call', amount: 38 } ]
     , flop: []
     , turn: []
     , river: []
     , showdown:
        [ { player: '1ntr4nce', type: 'collect', amount: 96 }
        , { player: '1ntr4nce', type: 'show', card1: 'As', card2: 'Ah' }
        , { player: '1576893454', type: 'show', card1: 'Ks', card2: 'Kd' } ]
     , summary: [ { type: 'pot', single: true, amount: 96 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 3, player: '1576893454', chips: 50 }
        , { seatno: 5, player: 'StoplossNo', chips: 20 }
        , { seatno: 6, player: 'sollert', chips: 47.28 }
        , { seatno: 8, player: '1ntr4nce', chips: 98 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , min: 39
        , sec: 18
        , hero: null
        , handid: '7973190048'
        , gameno: '7973190048'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 6
        , button: 8 }
     , board: {}
     , posts:
        [ { player: '1576893454', type: 'sb', amount: 0.5 }
        , { player: 'StoplossNo', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'sollert', type: 'raise', amount: 3 }
        , { player: '1ntr4nce', type: 'fold' }
        , { player: '1576893454', type: 'fold' }
        , { player: 'StoplossNo', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'sollert', type: 'collect', amount: 2.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 2.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 3, player: '1576893454', chips: 50 }
        , { seatno: 5, player: 'StoplossNo', chips: 20 }
        , { seatno: 6, player: 'sollert', chips: 48.78 }
        , { seatno: 8, player: '1ntr4nce', chips: 98 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , min: 39
        , sec: 32
        , hero: null
        , handid: '7973190103'
        , gameno: '7973190103'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 6
        , button: 3 }
     , board: {}
     , posts:
        [ { player: 'StoplossNo', type: 'sb', amount: 0.5 }
        , { player: 'sollert', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: '1ntr4nce', type: 'fold' }
        , { player: '1576893454', type: 'fold' }
        , { player: 'StoplossNo', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'sollert', type: 'collect', amount: 1 } ]
     , summary: [ { type: 'pot', single: true, amount: 1 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 3, player: '1576893454', chips: 50 }
        , { seatno: 5, player: 'StoplossNo', chips: 20 }
        , { seatno: 6, player: 'sollert', chips: 49.28 }
        , { seatno: 8, player: '1ntr4nce', chips: 98 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , min: 39
        , sec: 46
        , hero: null
        , handid: '7973190156'
        , gameno: '7973190156'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 6
        , button: 5 }
     , board: {}
     , posts:
        [ { player: 'sollert', type: 'sb', amount: 0.5 }
        , { player: '1ntr4nce', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: '1576893454', type: 'fold' }
        , { player: 'StoplossNo', type: 'fold' }
        , { player: 'sollert', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: '1ntr4nce', type: 'collect', amount: 1 } ]
     , summary: [ { type: 'pot', single: true, amount: 1 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 3, player: '1576893454', chips: 50 }
        , { seatno: 5, player: 'StoplossNo', chips: 20 }
        , { seatno: 6, player: 'sollert', chips: 48.78 }
        , { seatno: 8, player: '1ntr4nce', chips: 98.5 }
        , { seatno: 10, player: 'FENIX505', chips: 50 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 13
        , hero: null
        , handid: '7973190258'
        , gameno: '7973190258'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 6 }
     , board: {}
     , posts:
        [ { player: '1ntr4nce', type: 'sb', amount: 0.5 }
        , { player: 'FENIX505', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: '1576893454', type: 'fold' }
        , { player: 'StoplossNo', type: 'raise', amount: 2.5 }
        , { player: 'sollert', type: 'fold' }
        , { player: '1ntr4nce', type: 'fold' }
        , { player: 'FENIX505', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'StoplossNo', type: 'collect', amount: 2.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 2.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 3, player: '1576893454', chips: 50 }
        , { seatno: 5, player: 'StoplossNo', chips: 21.5 }
        , { seatno: 6, player: 'sollert', chips: 48.78 }
        , { seatno: 8, player: '1ntr4nce', chips: 98 }
        , { seatno: 10, player: 'FENIX505', chips: 50 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 30
        , hero: null
        , handid: '7973190341'
        , gameno: '7973190341'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 8 }
     , board: {}
     , posts:
        [ { player: 'FENIX505', type: 'sb', amount: 0.5 }
        , { player: '1576893454', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'StoplossNo', type: 'fold' }
        , { player: 'sollert', type: 'fold' }
        , { player: '1ntr4nce', type: 'raise', amount: 2.5 }
        , { player: 'FENIX505', type: 'fold' }
        , { player: '1576893454', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: '1ntr4nce', type: 'collect', amount: 2.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 2.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 3, player: '1576893454', chips: 50 }
        , { seatno: 5, player: 'StoplossNo', chips: 21.5 }
        , { seatno: 6, player: 'sollert', chips: 48.78 }
        , { seatno: 8, player: '1ntr4nce', chips: 99.5 }
        , { seatno: 10, player: 'FENIX505', chips: 50 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 46
        , hero: null
        , handid: '7973190406'
        , gameno: '7973190406'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 10 }
     , board: { card1: 'Qh', card2: 'Ac', card3: '5c' }
     , posts:
        [ { player: '1576893454', type: 'sb', amount: 0.5 }
        , { player: 'StoplossNo', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'sollert', type: 'fold' }
        , { player: '1ntr4nce', type: 'raise', amount: 2.5 }
        , { player: 'FENIX505', type: 'call', amount: 2.5 }
        , { player: '1576893454', type: 'fold' }
        , { player: 'StoplossNo', type: 'fold' } ]
     , flop:
        [ { player: '1ntr4nce', type: 'check' }
        , { player: 'FENIX505', type: 'bet', amount: 3.25 }
        , { player: '1ntr4nce', type: 'fold' } ]
     , turn: []
     , river: []
     , showdown: [ { player: 'FENIX505', type: 'collect', amount: 6.18 } ]
     , summary: [ { type: 'pot', single: true, amount: 6.18 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 3, player: '1576893454', chips: 50 }
        , { seatno: 5, player: 'StoplossNo', chips: 20.5 }
        , { seatno: 6, player: 'sollert', chips: 48.78 }
        , { seatno: 8, player: '1ntr4nce', chips: 97 }
        , { seatno: 10, player: 'FENIX505', chips: 53.68 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , min: 41
        , sec: 20
        , hero: null
        , handid: '7973190541'
        , gameno: '7973190541'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 3 }
     , board: {}
     , posts:
        [ { player: 'StoplossNo', type: 'sb', amount: 0.5 }
        , { player: 'sollert', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: '1ntr4nce', type: 'fold' }
        , { player: 'FENIX505', type: 'fold' }
        , { player: '1576893454', type: 'raise', amount: 2.5 }
        , { player: 'StoplossNo', type: 'fold' }
        , { player: 'sollert', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: '1576893454', type: 'collect', amount: 2.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 2.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 3, player: '1576893454', chips: 51.5 }
        , { seatno: 5, player: 'StoplossNo', chips: 20 }
        , { seatno: 6, player: 'sollert', chips: 47.78 }
        , { seatno: 8, player: '1ntr4nce', chips: 97 }
        , { seatno: 10, player: 'FENIX505', chips: 53.68 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , min: 41
        , sec: 40
        , hero: null
        , handid: '7973190713'
        , gameno: '7973190713'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 5 }
     , board: {}
     , posts:
        [ { player: 'sollert', type: 'sb', amount: 0.5 }
        , { player: '1ntr4nce', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'FENIX505', type: 'fold' }
        , { player: '1576893454', type: 'fold' }
        , { player: 'StoplossNo', type: 'fold' }
        , { player: 'sollert', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: '1ntr4nce', type: 'collect', amount: 1 } ]
     , summary: [ { type: 'pot', single: true, amount: 1 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 3, player: '1576893454', chips: 51.5 }
        , { seatno: 5, player: 'StoplossNo', chips: 20 }
        , { seatno: 6, player: 'sollert', chips: 47.28 }
        , { seatno: 8, player: '1ntr4nce', chips: 97.5 }
        , { seatno: 10, player: 'FENIX505', chips: 53.68 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 7
        , hero: null
        , handid: '7973192750'
        , gameno: '7973192750'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 6 }
     , board: {}
     , posts:
        [ { player: '1ntr4nce', type: 'sb', amount: 0.5 }
        , { player: 'FENIX505', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: '1576893454', type: 'fold' }
        , { player: 'StoplossNo', type: 'fold' }
        , { player: 'sollert', type: 'raise', amount: 3 }
        , { player: '1ntr4nce', type: 'fold' }
        , { player: 'FENIX505', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'sollert', type: 'collect', amount: 2.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 2.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 3, player: '1576893454', chips: 51.5 }
        , { seatno: 5, player: 'StoplossNo', chips: 20 }
        , { seatno: 6, player: 'sollert', chips: 48.78 }
        , { seatno: 8, player: '1ntr4nce', chips: 97 }
        , { seatno: 10, player: 'FENIX505', chips: 52.68 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 21
        , hero: null
        , handid: '7973192887'
        , gameno: '7973192887'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 8 }
     , board: {}
     , posts:
        [ { player: 'FENIX505', type: 'sb', amount: 0.5 }
        , { player: '1576893454', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'StoplossNo', type: 'fold' }
        , { player: 'sollert', type: 'raise', amount: 3.5 }
        , { player: '1ntr4nce', type: 'fold' }
        , { player: 'FENIX505', type: 'fold' }
        , { player: '1576893454', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'sollert', type: 'collect', amount: 2.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 2.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 3, player: '1576893454', chips: 50.5 }
        , { seatno: 5, player: 'StoplossNo', chips: 20 }
        , { seatno: 6, player: 'sollert', chips: 50.28 }
        , { seatno: 8, player: '1ntr4nce', chips: 97 }
        , { seatno: 10, player: 'FENIX505', chips: 52.18 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 41
        , hero: null
        , handid: '7973194615'
        , gameno: '7973194615'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 10 }
     , board: {}
     , posts:
        [ { player: '1576893454', type: 'sb', amount: 0.5 }
        , { player: 'StoplossNo', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'sollert', type: 'fold' }
        , { player: '1ntr4nce', type: 'fold' }
        , { player: 'FENIX505', type: 'fold' }
        , { player: '1576893454', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'StoplossNo', type: 'collect', amount: 1 } ]
     , summary: [ { type: 'pot', single: true, amount: 1 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 3, player: '1576893454', chips: 50 }
        , { seatno: 5, player: 'StoplossNo', chips: 20.5 }
        , { seatno: 6, player: 'sollert', chips: 50.28 }
        , { seatno: 8, player: '1ntr4nce', chips: 97 }
        , { seatno: 10, player: 'FENIX505', chips: 52.18 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 54
        , hero: null
        , handid: '7973194664'
        , gameno: '7973194664'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 3 }
     , board: {}
     , posts:
        [ { player: 'StoplossNo', type: 'sb', amount: 0.5 }
        , { player: 'sollert', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: '1ntr4nce', type: 'fold' }
        , { player: 'FENIX505', type: 'fold' }
        , { player: '1576893454', type: 'raise', amount: 2.5 }
        , { player: 'StoplossNo', type: 'fold' }
        , { player: 'sollert', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: '1576893454', type: 'collect', amount: 2.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 2.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 3, player: '1576893454', chips: 51.5 }
        , { seatno: 5, player: 'StoplossNo', chips: 20 }
        , { seatno: 6, player: 'sollert', chips: 49.28 }
        , { seatno: 8, player: '1ntr4nce', chips: 97 }
        , { seatno: 10, player: 'FENIX505', chips: 52.18 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 18
        , hero: null
        , handid: '7973194771'
        , gameno: '7973194771'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 5 }
     , board: { card1: '6c', card2: '2d', card3: '7s', card4: '6d' }
     , posts:
        [ { player: 'sollert', type: 'sb', amount: 0.5 }
        , { player: '1ntr4nce', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'FENIX505', type: 'fold' }
        , { player: '1576893454', type: 'fold' }
        , { player: 'StoplossNo', type: 'fold' }
        , { player: 'sollert', type: 'raise', amount: 2.5 }
        , { player: '1ntr4nce', type: 'call', amount: 1.5 } ]
     , flop:
        [ { player: 'sollert', type: 'check' }
        , { player: '1ntr4nce', type: 'bet', amount: 2 }
        , { player: 'sollert', type: 'call', amount: 2 } ]
     , turn:
        [ { player: 'sollert', type: 'check' }
        , { player: '1ntr4nce', type: 'bet', amount: 11 }
        , { player: 'sollert', type: 'fold' } ]
     , river: []
     , showdown: [ { player: '1ntr4nce', type: 'collect', amount: 8.55 } ]
     , summary: [ { type: 'pot', single: true, amount: 8.55 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 3, player: '1576893454', chips: 51.5 }
        , { seatno: 5, player: 'StoplossNo', chips: 20 }
        , { seatno: 6, player: 'sollert', chips: 44.78 }
        , { seatno: 8, player: '1ntr4nce', chips: 101.05 }
        , { seatno: 10, player: 'FENIX505', chips: 52.18 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 21
        , hero: null
        , handid: '7973195031'
        , gameno: '7973195031'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 6 }
     , board: {}
     , posts:
        [ { player: '1ntr4nce', type: 'sb', amount: 0.5 }
        , { player: 'FENIX505', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: '1576893454', type: 'fold' }
        , { player: 'StoplossNo', type: 'fold' }
        , { player: 'sollert', type: 'raise', amount: 3 }
        , { player: '1ntr4nce', type: 'fold' }
        , { player: 'FENIX505', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'sollert', type: 'collect', amount: 2.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 2.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 3, player: '1576893454', chips: 51.5 }
        , { seatno: 5, player: 'StoplossNo', chips: 20 }
        , { seatno: 6, player: 'sollert', chips: 46.28 }
        , { seatno: 8, player: '1ntr4nce', chips: 100.55 }
        , { seatno: 10, player: 'FENIX505', chips: 51.18 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , handid: '7973195088'
        , gameno: '7973195088'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 8 }
     , board: { card1: '2c', card2: '8s', card3: '6c', card4: '2s' }
     , posts:
        [ { player: 'FENIX505', type: 'sb', amount: 0.5 }
        , { player: '1576893454', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'StoplossNo', type: 'fold' }
        , { player: 'sollert', type: 'raise', amount: 2.5 }
        , { player: '1ntr4nce', type: 'call', amount: 2.5 }
        , { player: 'FENIX505', type: 'fold' }
        , { player: '1576893454', type: 'call', amount: 1.5 } ]
     , flop:
        [ { player: '1576893454', type: 'check' }
        , { player: 'sollert', type: 'check' }
        , { player: '1ntr4nce', type: 'check' } ]
     , turn:
        [ { player: '1576893454', type: 'check' }
        , { player: 'sollert', type: 'bet', amount: 4.4 }
        , { player: '1ntr4nce', type: 'fold' }
        , { player: '1576893454', type: 'fold' } ]
     , river: []
     , showdown: [ { player: 'sollert', type: 'collect', amount: 7.6 } ]
     , summary: [ { type: 'pot', single: true, amount: 7.6 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 3, player: '1576893454', chips: 50 }
        , { seatno: 5, player: 'StoplossNo', chips: 20 }
        , { seatno: 6, player: 'sollert', chips: 51.38 }
        , { seatno: 8, player: '1ntr4nce', chips: 98.05 }
        , { seatno: 10, player: 'FENIX505', chips: 50.68 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 24
        , hero: null
        , handid: '7973195597'
        , gameno: '7973195597'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 10 }
     , board: {}
     , posts:
        [ { player: '1576893454', type: 'sb', amount: 0.5 }
        , { player: 'StoplossNo', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'sollert', type: 'fold' }
        , { player: '1ntr4nce', type: 'fold' }
        , { player: 'FENIX505', type: 'fold' }
        , { player: '1576893454', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'StoplossNo', type: 'collect', amount: 1 } ]
     , summary: [ { type: 'pot', single: true, amount: 1 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 3, player: '1576893454', chips: 50 }
        , { seatno: 5, player: 'StoplossNo', chips: 20.5 }
        , { seatno: 6, player: 'sollert', chips: 51.38 }
        , { seatno: 8, player: '1ntr4nce', chips: 98.05 }
        , { seatno: 10, player: 'FENIX505', chips: 50.68 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 33
        , hero: null
        , handid: '7973195637'
        , gameno: '7973195637'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 3 }
     , board:
        { card1: '5h', card2: '2s', card3: '3h', card4: '6s', card5: 'Jh' }
     , posts:
        [ { player: 'StoplossNo', type: 'sb', amount: 0.5 }
        , { player: 'sollert', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: '1ntr4nce', type: 'raise', amount: 2.5 }
        , { player: 'FENIX505', type: 'fold' }
        , { player: '1576893454', type: 'fold' }
        , { player: 'StoplossNo', type: 'fold' }
        , { player: 'sollert', type: 'call', amount: 1.5 } ]
     , flop:
        [ { player: 'sollert', type: 'check' }
        , { player: '1ntr4nce', type: 'check' } ]
     , turn:
        [ { player: 'sollert', type: 'check' }
        , { player: '1ntr4nce', type: 'check' } ]
     , river:
        [ { player: 'sollert', type: 'bet', amount: 2.6 }
        , { player: '1ntr4nce', type: 'call', amount: 2.6 } ]
     , showdown:
        [ { player: '1ntr4nce', type: 'collect', amount: 10.17 }
        , { player: '1ntr4nce', type: 'show', card1: 'Ah', card2: 'Js' }
        , { player: 'sollert', type: 'show', card1: 'Ks', card2: 'Jc' } ]
     , summary: [ { type: 'pot', single: true, amount: 10.17 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 3, player: '1576893454', chips: 50 }
        , { seatno: 5, player: 'StoplossNo', chips: 20 }
        , { seatno: 6, player: 'sollert', chips: 46.28 }
        , { seatno: 8, player: '1ntr4nce', chips: 103.12 }
        , { seatno: 10, player: 'FENIX505', chips: 50.68 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 14
        , hero: null
        , handid: '7973195790'
        , gameno: '7973195790'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 5 }
     , board: {}
     , posts:
        [ { player: 'sollert', type: 'sb', amount: 0.5 }
        , { player: '1ntr4nce', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'FENIX505', type: 'fold' }
        , { player: '1576893454', type: 'fold' }
        , { player: 'StoplossNo', type: 'fold' }
        , { player: 'sollert', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: '1ntr4nce', type: 'collect', amount: 1 } ]
     , summary: [ { type: 'pot', single: true, amount: 1 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 3, player: '1576893454', chips: 50 }
        , { seatno: 5, player: 'StoplossNo', chips: 20 }
        , { seatno: 6, player: 'sollert', chips: 45.78 }
        , { seatno: 8, player: '1ntr4nce', chips: 103.62 }
        , { seatno: 10, player: 'FENIX505', chips: 50.68 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 27
        , hero: null
        , handid: '7973195850'
        , gameno: '7973195850'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 6 }
     , board: {}
     , posts:
        [ { player: '1ntr4nce', type: 'sb', amount: 0.5 }
        , { player: 'FENIX505', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: '1576893454', type: 'fold' }
        , { player: 'StoplossNo', type: 'fold' }
        , { player: 'sollert', type: 'raise', amount: 3 }
        , { player: '1ntr4nce', type: 'raise', amount: 10 }
        , { player: 'FENIX505', type: 'fold' }
        , { player: 'sollert', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: '1ntr4nce', type: 'collect', amount: 7 } ]
     , summary: [ { type: 'pot', single: true, amount: 7 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Imfairminded', chips: 50 }
        , { seatno: 3, player: '1576893454', chips: 50 }
        , { seatno: 5, player: 'StoplossNo', chips: 20 }
        , { seatno: 6, player: 'sollert', chips: 42.78 }
        , { seatno: 8, player: '1ntr4nce', chips: 107.62 }
        , { seatno: 10, player: 'FENIX505', chips: 50 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 52
        , hero: null
        , handid: '7973195955'
        , gameno: '7973195955'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 8 }
     , board: {}
     , posts:
        [ { player: 'FENIX505', type: 'sb', amount: 0.5 }
        , { player: 'Imfairminded', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: '1576893454', type: 'fold' }
        , { player: 'StoplossNo', type: 'fold' }
        , { player: 'sollert', type: 'fold' }
        , { player: '1ntr4nce', type: 'raise', amount: 2.5 }
        , { player: 'FENIX505', type: 'fold' }
        , { player: 'Imfairminded', type: 'raise', amount: 7 }
        , { player: '1ntr4nce', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'Imfairminded', type: 'collect', amount: 5.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 5.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Imfairminded', chips: 53 }
        , { seatno: 3, player: '1576893454', chips: 50 }
        , { seatno: 5, player: 'StoplossNo', chips: 20 }
        , { seatno: 6, player: 'sollert', chips: 42.78 }
        , { seatno: 8, player: '1ntr4nce', chips: 105.12 }
        , { seatno: 10, player: 'FENIX505', chips: 50 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 16
        , hero: null
        , handid: '7973196045'
        , gameno: '7973196045'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 10 }
     , board: { card1: '8s', card2: 'Kh', card3: '6s' }
     , posts:
        [ { player: 'Imfairminded', type: 'sb', amount: 0.5 }
        , { player: '1576893454', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'StoplossNo', type: 'fold' }
        , { player: 'sollert', type: 'raise', amount: 3 }
        , { player: '1ntr4nce', type: 'fold' }
        , { player: 'FENIX505', type: 'fold' }
        , { player: 'Imfairminded', type: 'call', amount: 2.5 }
        , { player: '1576893454', type: 'fold' } ]
     , flop:
        [ { player: 'Imfairminded', type: 'check' }
        , { player: 'sollert', type: 'bet', amount: 3.3 }
        , { player: 'Imfairminded', type: 'fold' } ]
     , turn: []
     , river: []
     , showdown: [ { player: 'sollert', type: 'collect', amount: 6.65 } ]
     , summary: [ { type: 'pot', single: true, amount: 6.65 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Imfairminded', chips: 50 }
        , { seatno: 3, player: '1576893454', chips: 50 }
        , { seatno: 5, player: 'StoplossNo', chips: 20 }
        , { seatno: 6, player: 'sollert', chips: 46.43 }
        , { seatno: 8, player: '1ntr4nce', chips: 105.12 }
        , { seatno: 10, player: 'FENIX505', chips: 50 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 7
        , hero: null
        , handid: '7973196251'
        , gameno: '7973196251'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 1 }
     , board:
        { card1: 'Ah', card2: 'Th', card3: '7h', card4: 'Qc', card5: '3s' }
     , posts:
        [ { player: '1576893454', type: 'sb', amount: 0.5 }
        , { player: 'StoplossNo', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'sollert', type: 'call', amount: 1 }
        , { player: '1ntr4nce', type: 'fold' }
        , { player: 'FENIX505', type: 'fold' }
        , { player: 'Imfairminded', type: 'raise', amount: 3 }
        , { player: '1576893454', type: 'fold' }
        , { player: 'StoplossNo', type: 'fold' }
        , { player: 'sollert', type: 'call', amount: 2 } ]
     , flop:
        [ { player: 'sollert', type: 'check' }
        , { player: 'Imfairminded', type: 'bet', amount: 4 }
        , { player: 'sollert', type: 'raise', amount: 14.4 }
        , { player: 'Imfairminded', type: 'call', amount: 10.4 } ]
     , turn:
        [ { player: 'sollert', type: 'bet', amount: 29.03 }
        , { player: 'Imfairminded', type: 'call', amount: 29.03 } ]
     , river: []
     , showdown:
        [ { player: 'Imfairminded', type: 'collect', amount: 90.36 }
        , { player: 'sollert', type: 'show', card1: '7d', card2: 'As' }
        , { player: 'Imfairminded', type: 'show', card1: 'Ac', card2: 'Qh' } ]
     , summary: [ { type: 'pot', single: true, amount: 90.36 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Imfairminded', chips: 93.93 }
        , { seatno: 3, player: '1576893454', chips: 50 }
        , { seatno: 5, player: 'StoplossNo', chips: 20 }
        , { seatno: 8, player: '1ntr4nce', chips: 105.12 }
        , { seatno: 10, player: 'FENIX505', chips: 50 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 55
        , hero: null
        , handid: '7973197654'
        , gameno: '7973197654'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 3 }
     , board: {}
     , posts:
        [ { player: 'StoplossNo', type: 'sb', amount: 0.5 }
        , { player: '1ntr4nce', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'FENIX505', type: 'fold' }
        , { player: 'Imfairminded', type: 'fold' }
        , { player: '1576893454', type: 'fold' }
        , { player: 'StoplossNo', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: '1ntr4nce', type: 'collect', amount: 1 } ]
     , summary: [ { type: 'pot', single: true, amount: 1 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Imfairminded', chips: 93.93 }
        , { seatno: 3, player: '1576893454', chips: 50 }
        , { seatno: 5, player: 'StoplossNo', chips: 20 }
        , { seatno: 8, player: '1ntr4nce', chips: 105.62 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 5
        , hero: null
        , handid: '7973197699'
        , gameno: '7973197699'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 6
        , button: 5 }
     , board: {}
     , posts:
        [ { player: '1ntr4nce', type: 'sb', amount: 0.5 }
        , { player: 'Imfairminded', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: '1576893454', type: 'fold' }
        , { player: 'StoplossNo', type: 'raise', amount: 2.5 }
        , { player: '1ntr4nce', type: 'fold' }
        , { player: 'Imfairminded', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'StoplossNo', type: 'collect', amount: 2.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 2.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Imfairminded', chips: 92.93 }
        , { seatno: 3, player: '1576893454', chips: 50 }
        , { seatno: 5, player: 'StoplossNo', chips: 21.5 }
        , { seatno: 8, player: '1ntr4nce', chips: 105.12 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 23
        , hero: null
        , handid: '7973197774'
        , gameno: '7973197774'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 6
        , button: 8 }
     , board: {}
     , posts:
        [ { player: 'Imfairminded', type: 'sb', amount: 0.5 }
        , { player: '1576893454', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'StoplossNo', type: 'fold' }
        , { player: '1ntr4nce', type: 'raise', amount: 2.5 }
        , { player: 'Imfairminded', type: 'fold' }
        , { player: '1576893454', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: '1ntr4nce', type: 'collect', amount: 2.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 2.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Imfairminded', chips: 92.43 }
        , { seatno: 3, player: '1576893454', chips: 50 }
        , { seatno: 5, player: 'StoplossNo', chips: 21.5 }
        , { seatno: 8, player: '1ntr4nce', chips: 106.62 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 43
        , hero: null
        , handid: '7973197857'
        , gameno: '7973197857'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 6
        , button: 1 }
     , board: {}
     , posts:
        [ { player: '1576893454', type: 'sb', amount: 0.5 }
        , { player: 'StoplossNo', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: '1ntr4nce', type: 'fold' }
        , { player: 'Imfairminded', type: 'fold' }
        , { player: '1576893454', type: 'raise', amount: 3 }
        , { player: 'StoplossNo', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: '1576893454', type: 'collect', amount: 2 } ]
     , summary: [ { type: 'pot', single: true, amount: 2 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Imfairminded', chips: 92.43 }
        , { seatno: 3, player: '1576893454', chips: 51 }
        , { seatno: 5, player: 'StoplossNo', chips: 20.5 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , min: 50
        , sec: 10
        , hero: null
        , handid: '7973197976'
        , gameno: '7973197976'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 6
        , button: 3 }
     , board: { card1: '2c', card2: 'As', card3: '3d', card4: 'Qh' }
     , posts:
        [ { player: 'StoplossNo', type: 'sb', amount: 0.5 }
        , { player: 'Imfairminded', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: '1576893454', type: 'fold' }
        , { player: 'StoplossNo', type: 'raise', amount: 2.5 }
        , { player: 'Imfairminded', type: 'call', amount: 1.5 } ]
     , flop:
        [ { player: 'StoplossNo', type: 'bet', amount: 2.5 }
        , { player: 'Imfairminded', type: 'call', amount: 2.5 } ]
     , turn:
        [ { player: 'StoplossNo', type: 'check' }
        , { player: 'Imfairminded', type: 'bet', amount: 3 }
        , { player: 'StoplossNo', type: 'fold' } ]
     , river: []
     , showdown: [ { player: 'Imfairminded', type: 'collect', amount: 9.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 9.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Imfairminded', chips: 96.93 }
        , { seatno: 3, player: '1576893454', chips: 51 }
        , { seatno: 5, player: 'StoplossNo', chips: 20 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , min: 50
        , sec: 57
        , hero: null
        , handid: '7973198154'
        , gameno: '7973198154'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 6
        , button: 5 }
     , board: {}
     , posts:
        [ { player: 'Imfairminded', type: 'sb', amount: 0.5 }
        , { player: '1576893454', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'StoplossNo', type: 'fold' }
        , { player: 'Imfairminded', type: 'raise', amount: 3 }
        , { player: '1576893454', type: 'raise', amount: 9 }
        , { player: 'Imfairminded', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: '1576893454', type: 'collect', amount: 6 } ]
     , summary: [ { type: 'pot', single: true, amount: 6 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Imfairminded', chips: 93.93 }
        , { seatno: 3, player: '1576893454', chips: 54 }
        , { seatno: 5, player: 'StoplossNo', chips: 20 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 27
        , hero: null
        , handid: '7973198270'
        , gameno: '7973198270'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 6
        , button: 1 }
     , board: {}
     , posts:
        [ { player: '1576893454', type: 'sb', amount: 0.5 }
        , { player: 'StoplossNo', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'Imfairminded', type: 'raise', amount: 2 }
        , { player: '1576893454', type: 'fold' }
        , { player: 'StoplossNo', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'Imfairminded', type: 'collect', amount: 2.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 2.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Imfairminded', chips: 95.43 }
        , { seatno: 3, player: '1576893454', chips: 53.5 }
        , { seatno: 5, player: 'StoplossNo', chips: 20 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 40
        , hero: null
        , handid: '7973198324'
        , gameno: '7973198324'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 6
        , button: 3 }
     , board: {}
     , posts:
        [ { player: 'StoplossNo', type: 'sb', amount: 0.5 }
        , { player: 'Imfairminded', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: '1576893454', type: 'raise', amount: 2.5 }
        , { player: 'StoplossNo', type: 'fold' }
        , { player: 'Imfairminded', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: '1576893454', type: 'collect', amount: 2.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 2.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Imfairminded', chips: 94.43 }
        , { seatno: 3, player: '1576893454', chips: 55 }
        , { seatno: 5, player: 'StoplossNo', chips: 20 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 56
        , hero: null
        , handid: '7973198397'
        , gameno: '7973198397'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 6
        , button: 5 }
     , board: {}
     , posts:
        [ { player: 'Imfairminded', type: 'sb', amount: 0.5 }
        , { player: '1576893454', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'StoplossNo', type: 'raise', amount: 2 }
        , { player: 'Imfairminded', type: 'fold' }
        , { player: '1576893454', type: 'raise', amount: 7 }
        , { player: 'StoplossNo', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: '1576893454', type: 'collect', amount: 4.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 4.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 61.7 }
        , { seatno: 3, player: 'OwenHa', chips: 55.48 }
        , { seatno: 5, player: 'StoplossNo', chips: 20 }
        , { seatno: 6, player: 'steve8197', chips: 52.78 }
        , { seatno: 8, player: '1ntr4nce', chips: 107.42 }
        , { seatno: 10, player: 'FENIX505', chips: 50 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 7
        , hero: null
        , handid: '7973223370'
        , gameno: '7973223370'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 1 }
     , board:
        { card1: 'Kc', card2: 'Kh', card3: '7c', card4: 'Jd', card5: '2h' }
     , posts:
        [ { player: 'OwenHa', type: 'sb', amount: 0.5 }
        , { player: 'StoplossNo', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'steve8197', type: 'fold' }
        , { player: '1ntr4nce', type: 'fold' }
        , { player: 'FENIX505', type: 'fold' }
        , { player: 'FRENCHJS88', type: 'fold' }
        , { player: 'OwenHa', type: 'raise', amount: 2 }
        , { player: 'StoplossNo', type: 'call', amount: 1 } ]
     , flop:
        [ { player: 'OwenHa', type: 'bet', amount: 3 }
        , { player: 'StoplossNo', type: 'call', amount: 3 } ]
     , turn:
        [ { player: 'OwenHa', type: 'check' }
        , { player: 'StoplossNo', type: 'check' } ]
     , river:
        [ { player: 'OwenHa', type: 'bet', amount: 3 }
        , { player: 'StoplossNo', type: 'call', amount: 3 } ]
     , showdown:
        [ { player: 'StoplossNo', type: 'collect', amount: 15.2 }
        , { player: 'OwenHa', type: 'show', card1: '4c', card2: 'Qh' }
        , { player: 'StoplossNo', type: 'show', card1: 'Jc', card2: '5c' } ]
     , summary: [ { type: 'pot', single: true, amount: 15.2 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 61.7 }
        , { seatno: 3, player: 'OwenHa', chips: 47.48 }
        , { seatno: 5, player: 'StoplossNo', chips: 27.2 }
        , { seatno: 6, player: 'steve8197', chips: 52.78 }
        , { seatno: 8, player: '1ntr4nce', chips: 107.42 }
        , { seatno: 10, player: 'FENIX505', chips: 50 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 57
        , hero: null
        , handid: '7973223529'
        , gameno: '7973223529'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 3 }
     , board: {}
     , posts:
        [ { player: 'StoplossNo', type: 'sb', amount: 0.5 }
        , { player: 'steve8197', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: '1ntr4nce', type: 'fold' }
        , { player: 'FENIX505', type: 'fold' }
        , { player: 'FRENCHJS88', type: 'fold' }
        , { player: 'OwenHa', type: 'fold' }
        , { player: 'StoplossNo', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'steve8197', type: 'collect', amount: 1 } ]
     , summary: [ { type: 'pot', single: true, amount: 1 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 61.7 }
        , { seatno: 3, player: 'OwenHa', chips: 47.48 }
        , { seatno: 5, player: 'StoplossNo', chips: 26.7 }
        , { seatno: 6, player: 'steve8197', chips: 53.28 }
        , { seatno: 8, player: '1ntr4nce', chips: 107.42 }
        , { seatno: 10, player: 'FENIX505', chips: 50 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 12
        , hero: null
        , handid: '7973223975'
        , gameno: '7973223975'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 5 }
     , board: {}
     , posts:
        [ { player: 'steve8197', type: 'sb', amount: 0.5 }
        , { player: '1ntr4nce', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'FENIX505', type: 'fold' }
        , { player: 'FRENCHJS88', type: 'fold' }
        , { player: 'OwenHa', type: 'fold' }
        , { player: 'StoplossNo', type: 'fold' }
        , { player: 'steve8197', type: 'raise', amount: 2 }
        , { player: '1ntr4nce', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'steve8197', type: 'collect', amount: 2 } ]
     , summary: [ { type: 'pot', single: true, amount: 2 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 61.7 }
        , { seatno: 3, player: 'OwenHa', chips: 47.48 }
        , { seatno: 5, player: 'StoplossNo', chips: 26.7 }
        , { seatno: 6, player: 'steve8197', chips: 54.28 }
        , { seatno: 8, player: '1ntr4nce', chips: 106.42 }
        , { seatno: 10, player: 'FENIX505', chips: 50 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 30
        , hero: null
        , handid: '7973224041'
        , gameno: '7973224041'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 6 }
     , board: {}
     , posts:
        [ { player: '1ntr4nce', type: 'sb', amount: 0.5 }
        , { player: 'FENIX505', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'FRENCHJS88', type: 'fold' }
        , { player: 'OwenHa', type: 'fold' }
        , { player: 'StoplossNo', type: 'fold' }
        , { player: 'steve8197', type: 'fold' }
        , { player: '1ntr4nce', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'FENIX505', type: 'collect', amount: 1 } ]
     , summary: [ { type: 'pot', single: true, amount: 1 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 61.7 }
        , { seatno: 3, player: 'OwenHa', chips: 47.48 }
        , { seatno: 5, player: 'StoplossNo', chips: 26.7 }
        , { seatno: 6, player: 'steve8197', chips: 54.28 }
        , { seatno: 8, player: '1ntr4nce', chips: 105.92 }
        , { seatno: 10, player: 'FENIX505', chips: 50.5 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 49
        , hero: null
        , handid: '7973224111'
        , gameno: '7973224111'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 8 }
     , board: {}
     , posts:
        [ { player: 'FENIX505', type: 'sb', amount: 0.5 }
        , { player: 'FRENCHJS88', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'OwenHa', type: 'fold' }
        , { player: 'StoplossNo', type: 'fold' }
        , { player: 'steve8197', type: 'fold' }
        , { player: '1ntr4nce', type: 'raise', amount: 2.5 }
        , { player: 'FENIX505', type: 'fold' }
        , { player: 'FRENCHJS88', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: '1ntr4nce', type: 'collect', amount: 2.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 2.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 60.7 }
        , { seatno: 3, player: 'OwenHa', chips: 47.48 }
        , { seatno: 5, player: 'StoplossNo', chips: 26.7 }
        , { seatno: 6, player: 'steve8197', chips: 54.28 }
        , { seatno: 8, player: '1ntr4nce', chips: 107.42 }
        , { seatno: 10, player: 'FENIX505', chips: 50 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 16
        , hero: null
        , handid: '7973224193'
        , gameno: '7973224193'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 10 }
     , board: { card1: '2s', card2: '7s', card3: '9c' }
     , posts:
        [ { player: 'FRENCHJS88', type: 'sb', amount: 0.5 }
        , { player: 'OwenHa', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'StoplossNo', type: 'fold' }
        , { player: 'steve8197', type: 'fold' }
        , { player: '1ntr4nce', type: 'fold' }
        , { player: 'FENIX505', type: 'raise', amount: 2.5 }
        , { player: 'FRENCHJS88', type: 'fold' }
        , { player: 'OwenHa', type: 'call', amount: 1.5 } ]
     , flop:
        [ { player: 'OwenHa', type: 'bet', amount: 4 }
        , { player: 'FENIX505', type: 'fold' } ]
     , turn: []
     , river: []
     , showdown: [ { player: 'OwenHa', type: 'collect', amount: 5.23 } ]
     , summary: [ { type: 'pot', single: true, amount: 5.23 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 60.2 }
        , { seatno: 3, player: 'OwenHa', chips: 50.21 }
        , { seatno: 5, player: 'StoplossNo', chips: 26.7 }
        , { seatno: 6, player: 'steve8197', chips: 54.28 }
        , { seatno: 8, player: '1ntr4nce', chips: 107.42 }
        , { seatno: 10, player: 'FENIX505', chips: 50 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 0
        , hero: null
        , handid: '7973224506'
        , gameno: '7973224506'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 1 }
     , board:
        { card1: '4s', card2: 'Th', card3: '6h', card4: 'Qh', card5: '8s' }
     , posts:
        [ { player: 'OwenHa', type: 'sb', amount: 0.5 }
        , { player: 'StoplossNo', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'steve8197', type: 'raise', amount: 2 }
        , { player: '1ntr4nce', type: 'raise', amount: 6 }
        , { player: 'FENIX505', type: 'fold' }
        , { player: 'FRENCHJS88', type: 'fold' }
        , { player: 'OwenHa', type: 'fold' }
        , { player: 'StoplossNo', type: 'raise', amount: 26.7 }
        , { player: 'steve8197', type: 'fold' }
        , { player: '1ntr4nce', type: 'call', amount: 20.7 } ]
     , flop: []
     , turn: []
     , river: []
     , showdown:
        [ { player: '1ntr4nce', type: 'collect', amount: 53.11 }
        , { player: '1ntr4nce', type: 'show', card1: 'Kd', card2: 'Ks' }
        , { player: 'StoplossNo', type: 'show', card1: 'Kh', card2: 'Ac' } ]
     , summary: [ { type: 'pot', single: true, amount: 53.11 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 60.2 }
        , { seatno: 3, player: 'OwenHa', chips: 49.71 }
        , { seatno: 5, player: 'StoplossNo', chips: 20 }
        , { seatno: 6, player: 'steve8197', chips: 52.28 }
        , { seatno: 8, player: '1ntr4nce', chips: 133.83 }
        , { seatno: 10, player: 'FENIX505', chips: 50 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 38
        , hero: null
        , handid: '7973224648'
        , gameno: '7973224648'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 3 }
     , board: {}
     , posts:
        [ { player: 'StoplossNo', type: 'sb', amount: 0.5 }
        , { player: 'steve8197', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: '1ntr4nce', type: 'fold' }
        , { player: 'FENIX505', type: 'fold' }
        , { player: 'FRENCHJS88', type: 'fold' }
        , { player: 'OwenHa', type: 'fold' }
        , { player: 'StoplossNo', type: 'raise', amount: 2.5 }
        , { player: 'steve8197', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'StoplossNo', type: 'collect', amount: 2 } ]
     , summary: [ { type: 'pot', single: true, amount: 2 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 60.2 }
        , { seatno: 3, player: 'OwenHa', chips: 49.71 }
        , { seatno: 5, player: 'StoplossNo', chips: 21 }
        , { seatno: 6, player: 'steve8197', chips: 51.28 }
        , { seatno: 8, player: '1ntr4nce', chips: 133.83 }
        , { seatno: 10, player: 'FENIX505', chips: 50 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 7
        , hero: null
        , handid: '7973224762'
        , gameno: '7973224762'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 5 }
     , board: { card1: '6h', card2: '7d', card3: 'Qd', card4: 'Jh' }
     , posts:
        [ { player: 'steve8197', type: 'sb', amount: 0.5 }
        , { player: '1ntr4nce', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'FENIX505', type: 'fold' }
        , { player: 'FRENCHJS88', type: 'call', amount: 1 }
        , { player: 'OwenHa', type: 'fold' }
        , { player: 'StoplossNo', type: 'raise', amount: 4 }
        , { player: 'steve8197', type: 'call', amount: 3.5 }
        , { player: '1ntr4nce', type: 'fold' }
        , { player: 'FRENCHJS88', type: 'call', amount: 3 } ]
     , flop:
        [ { player: 'steve8197', type: 'bet', amount: 6.5 }
        , { player: 'FRENCHJS88', type: 'fold' }
        , { player: 'StoplossNo', type: 'call', amount: 6.5 } ]
     , turn:
        [ { player: 'steve8197', type: 'bet', amount: 15 }
        , { player: 'StoplossNo', type: 'fold' } ]
     , river: []
     , showdown: [ { player: 'steve8197', type: 'collect', amount: 24.7 } ]
     , summary: [ { type: 'pot', single: true, amount: 24.7 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 56.2 }
        , { seatno: 3, player: 'OwenHa', chips: 49.71 }
        , { seatno: 5, player: 'StoplossNo', chips: 20 }
        , { seatno: 6, player: 'steve8197', chips: 65.48 }
        , { seatno: 8, player: '1ntr4nce', chips: 132.83 }
        , { seatno: 10, player: 'FENIX505', chips: 50 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , handid: '7973227640'
        , gameno: '7973227640'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 6 }
     , board: {}
     , posts:
        [ { player: '1ntr4nce', type: 'sb', amount: 0.5 }
        , { player: 'FENIX505', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'FRENCHJS88', type: 'fold' }
        , { player: 'OwenHa', type: 'fold' }
        , { player: 'StoplossNo', type: 'fold' }
        , { player: 'steve8197', type: 'raise', amount: 2 }
        , { player: '1ntr4nce', type: 'fold' }
        , { player: 'FENIX505', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'steve8197', type: 'collect', amount: 2.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 2.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 56.2 }
        , { seatno: 3, player: 'OwenHa', chips: 49.71 }
        , { seatno: 5, player: 'StoplossNo', chips: 20 }
        , { seatno: 6, player: 'steve8197', chips: 66.98 }
        , { seatno: 8, player: '1ntr4nce', chips: 132.33 }
        , { seatno: 10, player: 'FENIX505', chips: 50 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 36
        , hero: null
        , handid: '7973227733'
        , gameno: '7973227733'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 8 }
     , board: {}
     , posts:
        [ { player: 'FENIX505', type: 'sb', amount: 0.5 }
        , { player: 'FRENCHJS88', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'OwenHa', type: 'fold' }
        , { player: 'StoplossNo', type: 'raise', amount: 2.5 }
        , { player: 'steve8197', type: 'fold' }
        , { player: '1ntr4nce', type: 'fold' }
        , { player: 'FENIX505', type: 'fold' }
        , { player: 'FRENCHJS88', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'StoplossNo', type: 'collect', amount: 2.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 2.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 55.2 }
        , { seatno: 3, player: 'OwenHa', chips: 49.71 }
        , { seatno: 5, player: 'StoplossNo', chips: 21.5 }
        , { seatno: 6, player: 'steve8197', chips: 66.98 }
        , { seatno: 8, player: '1ntr4nce', chips: 132.33 }
        , { seatno: 10, player: 'FENIX505', chips: 50 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 54
        , hero: null
        , handid: '7973227802'
        , gameno: '7973227802'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 10 }
     , board: { card1: '9d', card2: '5d', card3: '8c', card4: 'Jd' }
     , posts:
        [ { player: 'FRENCHJS88', type: 'sb', amount: 0.5 }
        , { player: 'OwenHa', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'StoplossNo', type: 'fold' }
        , { player: 'steve8197', type: 'fold' }
        , { player: '1ntr4nce', type: 'raise', amount: 2.5 }
        , { player: 'FENIX505', type: 'fold' }
        , { player: 'FRENCHJS88', type: 'call', amount: 2 }
        , { player: 'OwenHa', type: 'fold' } ]
     , flop:
        [ { player: 'FRENCHJS88', type: 'check' }
        , { player: '1ntr4nce', type: 'check' } ]
     , turn:
        [ { player: 'FRENCHJS88', type: 'check' }
        , { player: '1ntr4nce', type: 'bet', amount: 3 }
        , { player: 'FRENCHJS88', type: 'fold' } ]
     , river: []
     , showdown: [ { player: '1ntr4nce', type: 'collect', amount: 5.7 } ]
     , summary: [ { type: 'pot', single: true, amount: 5.7 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 52.7 }
        , { seatno: 3, player: 'OwenHa', chips: 48.71 }
        , { seatno: 5, player: 'StoplossNo', chips: 21.5 }
        , { seatno: 6, player: 'steve8197', chips: 66.98 }
        , { seatno: 8, player: '1ntr4nce', chips: 135.53 }
        , { seatno: 10, player: 'FENIX505', chips: 50 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 38
        , hero: null
        , handid: '7973228083'
        , gameno: '7973228083'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 1 }
     , board: { card1: '3d', card2: '7d', card3: 'Kh' }
     , posts:
        [ { player: 'OwenHa', type: 'sb', amount: 0.5 }
        , { player: 'StoplossNo', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'steve8197', type: 'raise', amount: 2 }
        , { player: '1ntr4nce', type: 'fold' }
        , { player: 'FENIX505', type: 'fold' }
        , { player: 'FRENCHJS88', type: 'fold' }
        , { player: 'OwenHa', type: 'fold' }
        , { player: 'StoplossNo', type: 'call', amount: 1 } ]
     , flop:
        [ { player: 'StoplossNo', type: 'check' }
        , { player: 'steve8197', type: 'bet', amount: 3 }
        , { player: 'StoplossNo', type: 'fold' } ]
     , turn: []
     , river: []
     , showdown: [ { player: 'steve8197', type: 'collect', amount: 4.28 } ]
     , summary: [ { type: 'pot', single: true, amount: 4.28 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 52.7 }
        , { seatno: 3, player: 'OwenHa', chips: 48.21 }
        , { seatno: 5, player: 'StoplossNo', chips: 20 }
        , { seatno: 6, player: 'steve8197', chips: 69.26 }
        , { seatno: 8, player: '1ntr4nce', chips: 135.53 }
        , { seatno: 10, player: 'FENIX505', chips: 50 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , min: 32
        , sec: 25
        , hero: null
        , handid: '7973228250'
        , gameno: '7973228250'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 3 }
     , board: { card1: '8d', card2: '8h', card3: '8s' }
     , posts:
        [ { player: 'StoplossNo', type: 'sb', amount: 0.5 }
        , { player: 'steve8197', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: '1ntr4nce', type: 'fold' }
        , { player: 'FENIX505', type: 'raise', amount: 2.5 }
        , { player: 'FRENCHJS88', type: 'call', amount: 2.5 }
        , { player: 'OwenHa', type: 'fold' }
        , { player: 'StoplossNo', type: 'fold' }
        , { player: 'steve8197', type: 'call', amount: 1.5 } ]
     , flop:
        [ { player: 'steve8197', type: 'check' }
        , { player: 'FENIX505', type: 'bet', amount: 4 }
        , { player: 'FRENCHJS88', type: 'fold' }
        , { player: 'steve8197', type: 'fold' } ]
     , turn: []
     , river: []
     , showdown: [ { player: 'FENIX505', type: 'collect', amount: 7.6 } ]
     , summary: [ { type: 'pot', single: true, amount: 7.6 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 50.2 }
        , { seatno: 3, player: 'OwenHa', chips: 48.21 }
        , { seatno: 5, player: 'StoplossNo', chips: 20 }
        , { seatno: 6, player: 'steve8197', chips: 66.76 }
        , { seatno: 8, player: '1ntr4nce', chips: 135.53 }
        , { seatno: 10, player: 'FENIX505', chips: 55.1 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 5
        , hero: null
        , handid: '7973228390'
        , gameno: '7973228390'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 5 }
     , board:
        { card1: '6s', card2: 'Ad', card3: '6c', card4: '9s', card5: '2d' }
     , posts:
        [ { player: 'steve8197', type: 'sb', amount: 0.5 }
        , { player: '1ntr4nce', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'FENIX505', type: 'fold' }
        , { player: 'FRENCHJS88', type: 'raise', amount: 3 }
        , { player: 'OwenHa', type: 'call', amount: 3 }
        , { player: 'StoplossNo', type: 'fold' }
        , { player: 'steve8197', type: 'call', amount: 2.5 }
        , { player: '1ntr4nce', type: 'call', amount: 2 } ]
     , flop:
        [ { player: 'steve8197', type: 'check' }
        , { player: '1ntr4nce', type: 'check' }
        , { player: 'FRENCHJS88', type: 'check' }
        , { player: 'OwenHa', type: 'bet', amount: 3 }
        , { player: 'steve8197', type: 'fold' }
        , { player: '1ntr4nce', type: 'fold' }
        , { player: 'FRENCHJS88', type: 'call', amount: 3 } ]
     , turn:
        [ { player: 'FRENCHJS88', type: 'check' }
        , { player: 'OwenHa', type: 'check' } ]
     , river:
        [ { player: 'FRENCHJS88', type: 'check' }
        , { player: 'OwenHa', type: 'check' } ]
     , showdown:
        [ { player: 'FRENCHJS88', type: 'collect', amount: 17.1 }
        , { player: 'FRENCHJS88', type: 'show', card1: 'As', card2: 'Jc' } ]
     , summary: [ { type: 'pot', single: true, amount: 17.1 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 61.3 }
        , { seatno: 3, player: 'OwenHa', chips: 42.21 }
        , { seatno: 5, player: 'StoplossNo', chips: 20 }
        , { seatno: 6, player: 'steve8197', chips: 63.76 }
        , { seatno: 8, player: '1ntr4nce', chips: 132.53 }
        , { seatno: 10, player: 'FENIX505', chips: 55.1 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 54
        , hero: null
        , handid: '7973228826'
        , gameno: '7973228826'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 6 }
     , board: { card1: 'Ad', card2: 'Js', card3: 'As' }
     , posts:
        [ { player: '1ntr4nce', type: 'sb', amount: 0.5 }
        , { player: 'FENIX505', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'FRENCHJS88', type: 'call', amount: 1 }
        , { player: 'OwenHa', type: 'call', amount: 1 }
        , { player: 'StoplossNo', type: 'fold' }
        , { player: 'steve8197', type: 'raise', amount: 2 }
        , { player: '1ntr4nce', type: 'fold' }
        , { player: 'FENIX505', type: 'fold' }
        , { player: 'FRENCHJS88', type: 'call', amount: 1 }
        , { player: 'OwenHa', type: 'call', amount: 1 } ]
     , flop:
        [ { player: 'FRENCHJS88', type: 'check' }
        , { player: 'OwenHa', type: 'check' }
        , { player: 'steve8197', type: 'bet', amount: 7.5 }
        , { player: 'FRENCHJS88', type: 'fold' }
        , { player: 'OwenHa', type: 'fold' } ]
     , turn: []
     , river: []
     , showdown: [ { player: 'steve8197', type: 'collect', amount: 7.13 } ]
     , summary: [ { type: 'pot', single: true, amount: 7.13 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 59.3 }
        , { seatno: 3, player: 'OwenHa', chips: 40.21 }
        , { seatno: 5, player: 'StoplossNo', chips: 20 }
        , { seatno: 6, player: 'steve8197', chips: 68.89 }
        , { seatno: 8, player: '1ntr4nce', chips: 132.03 }
        , { seatno: 10, player: 'FENIX505', chips: 54.1 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 35
        , hero: null
        , handid: '7973229397'
        , gameno: '7973229397'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 8 }
     , board: { card1: '5s', card2: '6d', card3: 'Qc' }
     , posts:
        [ { player: 'FENIX505', type: 'sb', amount: 0.5 }
        , { player: 'FRENCHJS88', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'OwenHa', type: 'fold' }
        , { player: 'StoplossNo', type: 'fold' }
        , { player: 'steve8197', type: 'fold' }
        , { player: '1ntr4nce', type: 'raise', amount: 2.5 }
        , { player: 'FENIX505', type: 'fold' }
        , { player: 'FRENCHJS88', type: 'call', amount: 1.5 } ]
     , flop:
        [ { player: 'FRENCHJS88', type: 'check' }
        , { player: '1ntr4nce', type: 'bet', amount: 2 }
        , { player: 'FRENCHJS88', type: 'fold' } ]
     , turn: []
     , river: []
     , showdown: [ { player: '1ntr4nce', type: 'collect', amount: 5.23 } ]
     , summary: [ { type: 'pot', single: true, amount: 5.23 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 56.8 }
        , { seatno: 3, player: 'OwenHa', chips: 40.21 }
        , { seatno: 5, player: 'StoplossNo', chips: 20 }
        , { seatno: 6, player: 'steve8197', chips: 68.89 }
        , { seatno: 8, player: '1ntr4nce', chips: 134.76 }
        , { seatno: 10, player: 'FENIX505', chips: 53.6 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 3
        , hero: null
        , handid: '7973229684'
        , gameno: '7973229684'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 10 }
     , board: { card1: 'Ad', card2: '6h', card3: '2h' }
     , posts:
        [ { player: 'FRENCHJS88', type: 'sb', amount: 0.5 }
        , { player: 'OwenHa', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'StoplossNo', type: 'fold' }
        , { player: 'steve8197', type: 'raise', amount: 2 }
        , { player: '1ntr4nce', type: 'fold' }
        , { player: 'FENIX505', type: 'fold' }
        , { player: 'FRENCHJS88', type: 'fold' }
        , { player: 'OwenHa', type: 'call', amount: 1 } ]
     , flop:
        [ { player: 'OwenHa', type: 'check' }
        , { player: 'steve8197', type: 'bet', amount: 4.5 }
        , { player: 'OwenHa', type: 'fold' } ]
     , turn: []
     , river: []
     , showdown: [ { player: 'steve8197', type: 'collect', amount: 4.28 } ]
     , summary: [ { type: 'pot', single: true, amount: 4.28 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 56.3 }
        , { seatno: 3, player: 'OwenHa', chips: 38.21 }
        , { seatno: 5, player: 'StoplossNo', chips: 20 }
        , { seatno: 6, player: 'steve8197', chips: 71.17 }
        , { seatno: 8, player: '1ntr4nce', chips: 134.76 }
        , { seatno: 10, player: 'FENIX505', chips: 53.6 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 25
        , hero: null
        , handid: '7973231614'
        , gameno: '7973231614'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 1 }
     , board:
        { card1: '9s', card2: 'As', card3: '8d', card4: '3d', card5: '5h' }
     , posts:
        [ { player: 'OwenHa', type: 'sb', amount: 0.5 }
        , { player: 'StoplossNo', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'steve8197', type: 'call', amount: 1 }
        , { player: '1ntr4nce', type: 'fold' }
        , { player: 'FENIX505', type: 'fold' }
        , { player: 'FRENCHJS88', type: 'fold' }
        , { player: 'OwenHa', type: 'call', amount: 0.5 }
        , { player: 'StoplossNo', type: 'check' } ]
     , flop:
        [ { player: 'OwenHa', type: 'check' }
        , { player: 'StoplossNo', type: 'check' }
        , { player: 'steve8197', type: 'bet', amount: 1.5 }
        , { player: 'OwenHa', type: 'call', amount: 1.5 }
        , { player: 'StoplossNo', type: 'fold' } ]
     , turn:
        [ { player: 'OwenHa', type: 'check' }
        , { player: 'steve8197', type: 'check' } ]
     , river:
        [ { player: 'OwenHa', type: 'check' }
        , { player: 'steve8197', type: 'check' } ]
     , showdown:
        [ { player: 'steve8197', type: 'collect', amount: 5.7 }
        , { player: 'steve8197', type: 'show', card1: '9c', card2: 'Qc' } ]
     , summary: [ { type: 'pot', single: true, amount: 5.7 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 56.3 }
        , { seatno: 3, player: 'OwenHa', chips: 35.71 }
        , { seatno: 5, player: 'StoplossNo', chips: 20 }
        , { seatno: 6, player: 'steve8197', chips: 74.37 }
        , { seatno: 8, player: '1ntr4nce', chips: 134.76 }
        , { seatno: 10, player: 'FENIX505', chips: 53.6 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 15
        , hero: null
        , handid: '7973231789'
        , gameno: '7973231789'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 3 }
     , board: { card1: '3c', card2: '7s', card3: '3h' }
     , posts:
        [ { player: 'StoplossNo', type: 'sb', amount: 0.5 }
        , { player: 'steve8197', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: '1ntr4nce', type: 'fold' }
        , { player: 'FENIX505', type: 'fold' }
        , { player: 'FRENCHJS88', type: 'fold' }
        , { player: 'OwenHa', type: 'raise', amount: 3 }
        , { player: 'StoplossNo', type: 'fold' }
        , { player: 'steve8197', type: 'call', amount: 2 } ]
     , flop:
        [ { player: 'steve8197', type: 'check' }
        , { player: 'OwenHa', type: 'bet', amount: 6.5 }
        , { player: 'steve8197', type: 'fold' } ]
     , turn: []
     , river: []
     , showdown: [ { player: 'OwenHa', type: 'collect', amount: 6.18 } ]
     , summary: [ { type: 'pot', single: true, amount: 6.18 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 56.3 }
        , { seatno: 3, player: 'OwenHa', chips: 38.89 }
        , { seatno: 5, player: 'StoplossNo', chips: 20 }
        , { seatno: 6, player: 'steve8197', chips: 71.37 }
        , { seatno: 8, player: '1ntr4nce', chips: 134.76 }
        , { seatno: 10, player: 'FENIX505', chips: 53.6 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 51
        , hero: null
        , handid: '7973232072'
        , gameno: '7973232072'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 5 }
     , board: {}
     , posts:
        [ { player: 'steve8197', type: 'sb', amount: 0.5 }
        , { player: '1ntr4nce', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'FENIX505', type: 'fold' }
        , { player: 'FRENCHJS88', type: 'fold' }
        , { player: 'OwenHa', type: 'raise', amount: 2 }
        , { player: 'StoplossNo', type: 'fold' }
        , { player: 'steve8197', type: 'fold' }
        , { player: '1ntr4nce', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'OwenHa', type: 'collect', amount: 2.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 2.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 56.3 }
        , { seatno: 3, player: 'OwenHa', chips: 40.39 }
        , { seatno: 5, player: 'StoplossNo', chips: 20 }
        , { seatno: 8, player: '1ntr4nce', chips: 133.76 }
        , { seatno: 10, player: 'FENIX505', chips: 53.6 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 55
        , hero: null
        , handid: '7973232317'
        , gameno: '7973232317'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 8 }
     , board: {}
     , posts:
        [ { player: 'FENIX505', type: 'sb', amount: 0.5 }
        , { player: 'FRENCHJS88', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'OwenHa', type: 'fold' }
        , { player: 'StoplossNo', type: 'fold' }
        , { player: '1ntr4nce', type: 'raise', amount: 2.5 }
        , { player: 'FENIX505', type: 'fold' }
        , { player: 'FRENCHJS88', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: '1ntr4nce', type: 'collect', amount: 2.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 2.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 55.3 }
        , { seatno: 3, player: 'OwenHa', chips: 40.39 }
        , { seatno: 5, player: 'StoplossNo', chips: 20 }
        , { seatno: 8, player: '1ntr4nce', chips: 135.26 }
        , { seatno: 10, player: 'FENIX505', chips: 53.1 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 12
        , hero: null
        , handid: '7973232383'
        , gameno: '7973232383'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 10 }
     , board:
        { card1: '5c', card2: '5h', card3: 'Ad', card4: 'Qh', card5: '2h' }
     , posts:
        [ { player: 'FRENCHJS88', type: 'sb', amount: 0.5 }
        , { player: 'OwenHa', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'StoplossNo', type: 'raise', amount: 2.5 }
        , { player: '1ntr4nce', type: 'fold' }
        , { player: 'FENIX505', type: 'fold' }
        , { player: 'FRENCHJS88', type: 'fold' }
        , { player: 'OwenHa', type: 'call', amount: 1.5 } ]
     , flop:
        [ { player: 'OwenHa', type: 'check' }
        , { player: 'StoplossNo', type: 'bet', amount: 2.75 }
        , { player: 'OwenHa', type: 'call', amount: 2.75 } ]
     , turn:
        [ { player: 'OwenHa', type: 'check' }
        , { player: 'StoplossNo', type: 'check' } ]
     , river:
        [ { player: 'OwenHa', type: 'bet', amount: 4 }
        , { player: 'StoplossNo', type: 'fold' } ]
     , showdown: [ { player: 'OwenHa', type: 'collect', amount: 10.45 } ]
     , summary: [ { type: 'pot', single: true, amount: 10.45 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 54.8 }
        , { seatno: 3, player: 'OwenHa', chips: 45.59 }
        , { seatno: 5, player: 'StoplossNo', chips: 20 }
        , { seatno: 8, player: '1ntr4nce', chips: 135.26 }
        , { seatno: 10, player: 'FENIX505', chips: 53.1 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 59
        , hero: null
        , handid: '7973234100'
        , gameno: '7973234100'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 1 }
     , board:
        { card1: 'As', card2: 'Qh', card3: '9c', card4: '4d', card5: 'Th' }
     , posts:
        [ { player: 'OwenHa', type: 'sb', amount: 0.5 }
        , { player: 'StoplossNo', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: '1ntr4nce', type: 'fold' }
        , { player: 'FENIX505', type: 'fold' }
        , { player: 'FRENCHJS88', type: 'fold' }
        , { player: 'OwenHa', type: 'call', amount: 0.5 }
        , { player: 'StoplossNo', type: 'check' } ]
     , flop:
        [ { player: 'OwenHa', type: 'bet', amount: 2 }
        , { player: 'StoplossNo', type: 'call', amount: 2 } ]
     , turn:
        [ { player: 'OwenHa', type: 'bet', amount: 6 }
        , { player: 'StoplossNo', type: 'call', amount: 6 } ]
     , river:
        [ { player: 'OwenHa', type: 'bet', amount: 18 }
        , { player: 'StoplossNo', type: 'allin', amount: -7, raiseTo: 11 } ]
     , showdown:
        [ { player: 'StoplossNo', type: 'collect', amount: 38 }
        , { player: 'OwenHa', type: 'show', card1: 'Ts', card2: '6d' }
        , { player: 'StoplossNo', type: 'show', card1: '3c', card2: 'Ah' } ]
     , summary: [ { type: 'pot', single: true, amount: 38 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 54.8 }
        , { seatno: 3, player: 'OwenHa', chips: 25.59 }
        , { seatno: 5, player: 'StoplossNo', chips: 38 }
        , { seatno: 8, player: '1ntr4nce', chips: 135.26 }
        , { seatno: 10, player: 'FENIX505', chips: 53.1 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 3
        , hero: null
        , handid: '7973235656'
        , gameno: '7973235656'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 3 }
     , board: {}
     , posts:
        [ { player: 'StoplossNo', type: 'sb', amount: 0.5 }
        , { player: '1ntr4nce', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'FENIX505', type: 'fold' }
        , { player: 'FRENCHJS88', type: 'call', amount: 1 }
        , { player: 'OwenHa', type: 'raise', amount: 25.59 }
        , { player: 'StoplossNo', type: 'fold' }
        , { player: '1ntr4nce', type: 'fold' }
        , { player: 'FRENCHJS88', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'OwenHa', type: 'collect', amount: 3.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 3.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 53.8 }
        , { seatno: 3, player: 'OwenHa', chips: 28.09 }
        , { seatno: 5, player: 'StoplossNo', chips: 37.5 }
        , { seatno: 8, player: '1ntr4nce', chips: 134.26 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 27
        , hero: null
        , handid: '7973235751'
        , gameno: '7973235751'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 6
        , button: 5 }
     , board: { card1: '8c', card2: '8d', card3: 'Ks' }
     , posts:
        [ { player: '1ntr4nce', type: 'sb', amount: 0.5 }
        , { player: 'FRENCHJS88', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'OwenHa', type: 'fold' }
        , { player: 'StoplossNo', type: 'raise', amount: 2.5 }
        , { player: '1ntr4nce', type: 'fold' }
        , { player: 'FRENCHJS88', type: 'call', amount: 1.5 } ]
     , flop:
        [ { player: 'FRENCHJS88', type: 'check' }
        , { player: 'StoplossNo', type: 'bet', amount: 1.87 }
        , { player: 'FRENCHJS88', type: 'fold' } ]
     , turn: []
     , river: []
     , showdown: [ { player: 'StoplossNo', type: 'collect', amount: 5.23 } ]
     , summary: [ { type: 'pot', single: true, amount: 5.23 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 51.3 }
        , { seatno: 3, player: 'OwenHa', chips: 28.09 }
        , { seatno: 5, player: 'StoplossNo', chips: 40.23 }
        , { seatno: 8, player: '1ntr4nce', chips: 133.76 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 54
        , hero: null
        , handid: '7973235844'
        , gameno: '7973235844'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 6
        , button: 8 }
     , board: {}
     , posts:
        [ { player: 'FRENCHJS88', type: 'sb', amount: 0.5 }
        , { player: 'OwenHa', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'StoplossNo', type: 'fold' }
        , { player: '1ntr4nce', type: 'raise', amount: 2.5 }
        , { player: 'FRENCHJS88', type: 'fold' }
        , { player: 'OwenHa', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: '1ntr4nce', type: 'collect', amount: 2.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 2.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 50.8 }
        , { seatno: 3, player: 'OwenHa', chips: 27.09 }
        , { seatno: 5, player: 'StoplossNo', chips: 40.23 }
        , { seatno: 8, player: '1ntr4nce', chips: 135.26 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 15
        , hero: null
        , handid: '7973235934'
        , gameno: '7973235934'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 6
        , button: 1 }
     , board: {}
     , posts:
        [ { player: 'OwenHa', type: 'sb', amount: 0.5 }
        , { player: 'StoplossNo', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: '1ntr4nce', type: 'fold' }
        , { player: 'FRENCHJS88', type: 'fold' }
        , { player: 'OwenHa', type: 'raise', amount: 2 }
        , { player: 'StoplossNo', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'OwenHa', type: 'collect', amount: 2 } ]
     , summary: [ { type: 'pot', single: true, amount: 2 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 50.8 }
        , { seatno: 3, player: 'OwenHa', chips: 28.09 }
        , { seatno: 5, player: 'StoplossNo', chips: 39.23 }
        , { seatno: 10, player: 'danikeen', chips: 50 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 36
        , hero: null
        , handid: '7973236072'
        , gameno: '7973236072'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 3 }
     , board: {}
     , posts:
        [ { player: 'StoplossNo', type: 'sb', amount: 0.5 }
        , { player: 'danikeen', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'FRENCHJS88', type: 'fold' }
        , { player: 'OwenHa', type: 'fold' }
        , { player: 'StoplossNo', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'danikeen', type: 'collect', amount: 1 } ]
     , summary: [ { type: 'pot', single: true, amount: 1 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 50.8 }
        , { seatno: 3, player: 'OwenHa', chips: 28.09 }
        , { seatno: 5, player: 'StoplossNo', chips: 38.73 }
        , { seatno: 10, player: 'danikeen', chips: 50.5 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 47
        , hero: null
        , handid: '7973236117'
        , gameno: '7973236117'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 5 }
     , board: { card1: 'Kc', card2: 'Td', card3: '6d' }
     , posts:
        [ { player: 'danikeen', type: 'sb', amount: 0.5 }
        , { player: 'FRENCHJS88', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'OwenHa', type: 'fold' }
        , { player: 'StoplossNo', type: 'fold' }
        , { player: 'danikeen', type: 'raise', amount: 2.5 }
        , { player: 'FRENCHJS88', type: 'call', amount: 1.5 } ]
     , flop:
        [ { player: 'danikeen', type: 'bet', amount: 2.5 }
        , { player: 'FRENCHJS88', type: 'fold' } ]
     , turn: []
     , river: []
     , showdown: [ { player: 'danikeen', type: 'collect', amount: 4.75 } ]
     , summary: [ { type: 'pot', single: true, amount: 4.75 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 48.3 }
        , { seatno: 3, player: 'OwenHa', chips: 28.09 }
        , { seatno: 5, player: 'StoplossNo', chips: 38.73 }
        , { seatno: 10, player: 'danikeen', chips: 52.75 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 12
        , hero: null
        , handid: '7973236340'
        , gameno: '7973236340'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 10 }
     , board:
        { card1: 'Td', card2: '4c', card3: '3s', card4: '7d', card5: '5h' }
     , posts:
        [ { player: 'FRENCHJS88', type: 'sb', amount: 0.5 }
        , { player: 'OwenHa', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'StoplossNo', type: 'fold' }
        , { player: 'danikeen', type: 'fold' }
        , { player: 'FRENCHJS88', type: 'call', amount: 0.5 }
        , { player: 'OwenHa', type: 'check' } ]
     , flop:
        [ { player: 'FRENCHJS88', type: 'check' }
        , { player: 'OwenHa', type: 'check' } ]
     , turn:
        [ { player: 'FRENCHJS88', type: 'check' }
        , { player: 'OwenHa', type: 'bet', amount: 1 }
        , { player: 'FRENCHJS88', type: 'call', amount: 1 } ]
     , river:
        [ { player: 'FRENCHJS88', type: 'bet', amount: 3 }
        , { player: 'OwenHa', type: 'raise', amount: 26.09 }
        , { player: 'FRENCHJS88', type: 'fold' } ]
     , showdown: [ { player: 'OwenHa', type: 'collect', amount: 9.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 9.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 43.3 }
        , { seatno: 3, player: 'OwenHa', chips: 32.59 }
        , { seatno: 5, player: 'StoplossNo', chips: 38.73 }
        , { seatno: 10, player: 'danikeen', chips: 52.75 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 5
        , hero: null
        , handid: '7973236650'
        , gameno: '7973236650'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 1 }
     , board: {}
     , posts:
        [ { player: 'OwenHa', type: 'sb', amount: 0.5 }
        , { player: 'StoplossNo', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'danikeen', type: 'fold' }
        , { player: 'FRENCHJS88', type: 'fold' }
        , { player: 'OwenHa', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'StoplossNo', type: 'collect', amount: 1 } ]
     , summary: [ { type: 'pot', single: true, amount: 1 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 43.3 }
        , { seatno: 3, player: 'OwenHa', chips: 32.09 }
        , { seatno: 5, player: 'StoplossNo', chips: 39.23 }
        , { seatno: 10, player: 'danikeen', chips: 52.75 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 15
        , hero: null
        , handid: '7973236680'
        , gameno: '7973236680'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 3 }
     , board: {}
     , posts:
        [ { player: 'StoplossNo', type: 'sb', amount: 0.5 }
        , { player: 'danikeen', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'FRENCHJS88', type: 'call', amount: 1 }
        , { player: 'OwenHa', type: 'raise', amount: 32.09 }
        , { player: 'StoplossNo', type: 'fold' }
        , { player: 'danikeen', type: 'fold' }
        , { player: 'FRENCHJS88', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'OwenHa', type: 'collect', amount: 3.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 3.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 42.3 }
        , { seatno: 3, player: 'OwenHa', chips: 34.59 }
        , { seatno: 5, player: 'StoplossNo', chips: 38.73 }
        , { seatno: 10, player: 'danikeen', chips: 51.75 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 34
        , hero: null
        , handid: '7973237189'
        , gameno: '7973237189'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 5 }
     , board: {}
     , posts:
        [ { player: 'danikeen', type: 'sb', amount: 0.5 }
        , { player: 'FRENCHJS88', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'OwenHa', type: 'fold' }
        , { player: 'StoplossNo', type: 'raise', amount: 2.5 }
        , { player: 'danikeen', type: 'fold' }
        , { player: 'FRENCHJS88', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'StoplossNo', type: 'collect', amount: 2.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 2.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 41.3 }
        , { seatno: 3, player: 'OwenHa', chips: 34.59 }
        , { seatno: 5, player: 'StoplossNo', chips: 40.23 }
        , { seatno: 10, player: 'danikeen', chips: 51.25 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 46
        , hero: null
        , handid: '7973237238'
        , gameno: '7973237238'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 10 }
     , board: {}
     , posts:
        [ { player: 'FRENCHJS88', type: 'sb', amount: 0.5 }
        , { player: 'OwenHa', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'StoplossNo', type: 'fold' }
        , { player: 'danikeen', type: 'fold' }
        , { player: 'FRENCHJS88', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'OwenHa', type: 'collect', amount: 1 } ]
     , summary: [ { type: 'pot', single: true, amount: 1 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 40.8 }
        , { seatno: 3, player: 'OwenHa', chips: 35.09 }
        , { seatno: 5, player: 'StoplossNo', chips: 40.23 }
        , { seatno: 10, player: 'danikeen', chips: 51.25 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 56
        , hero: null
        , handid: '7973237278'
        , gameno: '7973237278'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 1 }
     , board:
        { card1: 'Jd', card2: 'Ks', card3: '6s', card4: 'Qs', card5: '6c' }
     , posts:
        [ { player: 'OwenHa', type: 'sb', amount: 0.5 }
        , { player: 'StoplossNo', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'danikeen', type: 'fold' }
        , { player: 'FRENCHJS88', type: 'fold' }
        , { player: 'OwenHa', type: 'raise', amount: 2 }
        , { player: 'StoplossNo', type: 'call', amount: 1 } ]
     , flop:
        [ { player: 'OwenHa', type: 'bet', amount: 4 }
        , { player: 'StoplossNo', type: 'call', amount: 4 } ]
     , turn:
        [ { player: 'OwenHa', type: 'bet', amount: 12 }
        , { player: 'StoplossNo', type: 'call', amount: 12 } ]
     , river:
        [ { player: 'OwenHa', type: 'bet', amount: 17.09 }
        , { player: 'StoplossNo', type: 'call', amount: 17.09 } ]
     , showdown:
        [ { player: 'StoplossNo', type: 'collect', amount: 66.68 }
        , { player: 'OwenHa', type: 'show', card1: 'Th', card2: '8d' }
        , { player: 'StoplossNo', type: 'show', card1: 'Kh', card2: '2s' } ]
     , summary: [ { type: 'pot', single: true, amount: 66.68 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 40.8 }
        , { seatno: 5, player: 'StoplossNo', chips: 71.82 }
        , { seatno: 10, player: 'danikeen', chips: 51.25 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 39
        , hero: null
        , handid: '7973237437'
        , gameno: '7973237437'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 5 }
     , board: {}
     , posts:
        [ { player: 'danikeen', type: 'sb', amount: 0.5 }
        , { player: 'FRENCHJS88', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'StoplossNo', type: 'fold' }
        , { player: 'danikeen', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'FRENCHJS88', type: 'collect', amount: 1 } ]
     , summary: [ { type: 'pot', single: true, amount: 1 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 41.3 }
        , { seatno: 5, player: 'StoplossNo', chips: 71.82 }
        , { seatno: 10, player: 'danikeen', chips: 50.75 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 47
        , hero: null
        , handid: '7973237470'
        , gameno: '7973237470'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 10 }
     , board: { card1: '5s', card2: 'Kd', card3: '3c' }
     , posts:
        [ { player: 'FRENCHJS88', type: 'sb', amount: 0.5 }
        , { player: 'StoplossNo', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'danikeen', type: 'fold' }
        , { player: 'FRENCHJS88', type: 'call', amount: 0.5 }
        , { player: 'StoplossNo', type: 'check' } ]
     , flop:
        [ { player: 'FRENCHJS88', type: 'check' }
        , { player: 'StoplossNo', type: 'bet', amount: 1 }
        , { player: 'FRENCHJS88', type: 'raise', amount: 5 }
        , { player: 'StoplossNo', type: 'fold' } ]
     , turn: []
     , river: []
     , showdown: [ { player: 'FRENCHJS88', type: 'collect', amount: 3.8 } ]
     , summary: [ { type: 'pot', single: true, amount: 3.8 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 43.1 }
        , { seatno: 5, player: 'StoplossNo', chips: 69.82 }
        , { seatno: 8, player: 'Attila406', chips: 50 }
        , { seatno: 10, player: 'danikeen', chips: 50.75 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 21
        , hero: null
        , handid: '7973237831'
        , gameno: '7973237831'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 1 }
     , board: {}
     , posts:
        [ { player: 'StoplossNo', type: 'sb', amount: 0.5 }
        , { player: 'Attila406', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'danikeen', type: 'fold' }
        , { player: 'FRENCHJS88', type: 'fold' }
        , { player: 'StoplossNo', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'Attila406', type: 'collect', amount: 1 } ]
     , summary: [ { type: 'pot', single: true, amount: 1 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 43.1 }
        , { seatno: 5, player: 'StoplossNo', chips: 69.32 }
        , { seatno: 8, player: 'Attila406', chips: 50.5 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 37
        , hero: null
        , handid: '7973237914'
        , gameno: '7973237914'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 6
        , button: 5 }
     , board: {}
     , posts:
        [ { player: 'Attila406', type: 'sb', amount: 0.5 }
        , { player: 'FRENCHJS88', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'StoplossNo', type: 'fold' }
        , { player: 'Attila406', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'FRENCHJS88', type: 'collect', amount: 1 } ]
     , summary: [ { type: 'pot', single: true, amount: 1 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 43.6 }
        , { seatno: 5, player: 'StoplossNo', chips: 69.32 }
        , { seatno: 8, player: 'Attila406', chips: 50 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 46
        , hero: null
        , handid: '7973237948'
        , gameno: '7973237948'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 6
        , button: 8 }
     , board: { card1: 'Th', card2: '7d', card3: 'Ac' }
     , posts:
        [ { player: 'FRENCHJS88', type: 'sb', amount: 0.5 }
        , { player: 'StoplossNo', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'Attila406', type: 'raise', amount: 2 }
        , { player: 'FRENCHJS88', type: 'fold' }
        , { player: 'StoplossNo', type: 'call', amount: 1 } ]
     , flop:
        [ { player: 'StoplossNo', type: 'check' }
        , { player: 'Attila406', type: 'bet', amount: 2 }
        , { player: 'StoplossNo', type: 'fold' } ]
     , turn: []
     , river: []
     , showdown: [ { player: 'Attila406', type: 'collect', amount: 4.28 } ]
     , summary: [ { type: 'pot', single: true, amount: 4.28 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 43.1 }
        , { seatno: 5, player: 'StoplossNo', chips: 67.32 }
        , { seatno: 8, player: 'Attila406', chips: 52.28 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 9
        , hero: null
        , handid: '7973238047'
        , gameno: '7973238047'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 6
        , button: 1 }
     , board: { card1: 'Td', card2: 'Qc', card3: '7d' }
     , posts:
        [ { player: 'StoplossNo', type: 'sb', amount: 0.5 }
        , { player: 'Attila406', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'FRENCHJS88', type: 'fold' }
        , { player: 'StoplossNo', type: 'raise', amount: 2.5 }
        , { player: 'Attila406', type: 'call', amount: 1.5 } ]
     , flop:
        [ { player: 'StoplossNo', type: 'bet', amount: 2.5 }
        , { player: 'Attila406', type: 'fold' } ]
     , turn: []
     , river: []
     , showdown: [ { player: 'StoplossNo', type: 'collect', amount: 4.75 } ]
     , summary: [ { type: 'pot', single: true, amount: 4.75 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 43.1 }
        , { seatno: 5, player: 'StoplossNo', chips: 69.57 }
        , { seatno: 8, player: 'Attila406', chips: 50 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 35
        , hero: null
        , handid: '7973238139'
        , gameno: '7973238139'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 6
        , button: 5 }
     , board: { card1: '2h', card2: 'Qs', card3: '7c' }
     , posts:
        [ { player: 'Attila406', type: 'sb', amount: 0.5 }
        , { player: 'FRENCHJS88', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'StoplossNo', type: 'raise', amount: 2.5 }
        , { player: 'Attila406', type: 'fold' }
        , { player: 'FRENCHJS88', type: 'call', amount: 1.5 } ]
     , flop:
        [ { player: 'FRENCHJS88', type: 'check' }
        , { player: 'StoplossNo', type: 'bet', amount: 1.87 }
        , { player: 'FRENCHJS88', type: 'fold' } ]
     , turn: []
     , river: []
     , showdown: [ { player: 'StoplossNo', type: 'collect', amount: 5.23 } ]
     , summary: [ { type: 'pot', single: true, amount: 5.23 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 40.6 }
        , { seatno: 5, player: 'StoplossNo', chips: 72.3 }
        , { seatno: 8, player: 'Attila406', chips: 50 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 6
        , hero: null
        , handid: '7973238258'
        , gameno: '7973238258'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 6
        , button: 8 }
     , board:
        { card1: '2d', card2: '7d', card3: 'Ah', card4: '6h', card5: 'Kd' }
     , posts:
        [ { player: 'FRENCHJS88', type: 'sb', amount: 0.5 }
        , { player: 'StoplossNo', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'Attila406', type: 'raise', amount: 2 }
        , { player: 'FRENCHJS88', type: 'fold' }
        , { player: 'StoplossNo', type: 'call', amount: 1 } ]
     , flop:
        [ { player: 'StoplossNo', type: 'check' }
        , { player: 'Attila406', type: 'bet', amount: 2 }
        , { player: 'StoplossNo', type: 'call', amount: 2 } ]
     , turn:
        [ { player: 'StoplossNo', type: 'check' }
        , { player: 'Attila406', type: 'check' } ]
     , river:
        [ { player: 'StoplossNo', type: 'check' }
        , { player: 'Attila406', type: 'check' } ]
     , showdown:
        [ { player: 'StoplossNo', type: 'collect', amount: 8.08 }
        , { player: 'StoplossNo', type: 'show', card1: '2h', card2: 'Ad' } ]
     , summary: [ { type: 'pot', single: true, amount: 8.08 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 40.1 }
        , { seatno: 5, player: 'StoplossNo', chips: 76.38 }
        , { seatno: 8, player: 'Attila406', chips: 50 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 41
        , hero: null
        , handid: '7973240277'
        , gameno: '7973240277'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 6
        , button: 1 }
     , board: { card1: '4d', card2: 'Kc', card3: '2h' }
     , posts:
        [ { player: 'StoplossNo', type: 'sb', amount: 0.5 }
        , { player: 'Attila406', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'FRENCHJS88', type: 'call', amount: 1 }
        , { player: 'StoplossNo', type: 'fold' }
        , { player: 'Attila406', type: 'check' } ]
     , flop:
        [ { player: 'Attila406', type: 'bet', amount: 1 }
        , { player: 'FRENCHJS88', type: 'fold' } ]
     , turn: []
     , river: []
     , showdown: [ { player: 'Attila406', type: 'collect', amount: 2.38 } ]
     , summary: [ { type: 'pot', single: true, amount: 2.38 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 39.1 }
        , { seatno: 5, player: 'StoplossNo', chips: 75.88 }
        , { seatno: 8, player: 'Attila406', chips: 51.38 }
        , { seatno: 10, player: 'danikeen', chips: 50.75 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 4
        , hero: null
        , handid: '7973240381'
        , gameno: '7973240381'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 5 }
     , board: { card1: '2h', card2: '6d', card3: '2s', card4: 'Jd' }
     , posts:
        [ { player: 'Attila406', type: 'sb', amount: 0.5 }
        , { player: 'danikeen', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'FRENCHJS88', type: 'fold' }
        , { player: 'StoplossNo', type: 'fold' }
        , { player: 'Attila406', type: 'raise', amount: 2 }
        , { player: 'danikeen', type: 'call', amount: 1 } ]
     , flop:
        [ { player: 'Attila406', type: 'check' }
        , { player: 'danikeen', type: 'check' } ]
     , turn:
        [ { player: 'Attila406', type: 'bet', amount: 2 }
        , { player: 'danikeen', type: 'fold' } ]
     , river: []
     , showdown: [ { player: 'Attila406', type: 'collect', amount: 3.8 } ]
     , summary: [ { type: 'pot', single: true, amount: 3.8 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 39.1 }
        , { seatno: 5, player: 'StoplossNo', chips: 75.88 }
        , { seatno: 8, player: 'Attila406', chips: 53.18 }
        , { seatno: 10, player: 'danikeen', chips: 50 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 34
        , hero: null
        , handid: '7973240490'
        , gameno: '7973240490'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 8 }
     , board: { card1: '9d', card2: 'Js', card3: '8c' }
     , posts:
        [ { player: 'danikeen', type: 'sb', amount: 0.5 }
        , { player: 'FRENCHJS88', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'StoplossNo', type: 'fold' }
        , { player: 'Attila406', type: 'raise', amount: 2 }
        , { player: 'danikeen', type: 'fold' }
        , { player: 'FRENCHJS88', type: 'call', amount: 1 } ]
     , flop:
        [ { player: 'FRENCHJS88', type: 'check' }
        , { player: 'Attila406', type: 'bet', amount: 2 }
        , { player: 'FRENCHJS88', type: 'fold' } ]
     , turn: []
     , river: []
     , showdown: [ { player: 'Attila406', type: 'collect', amount: 4.28 } ]
     , summary: [ { type: 'pot', single: true, amount: 4.28 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 37.1 }
        , { seatno: 5, player: 'StoplossNo', chips: 75.88 }
        , { seatno: 8, player: 'Attila406', chips: 55.46 }
        , { seatno: 10, player: 'danikeen', chips: 50 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 7
        , hero: null
        , handid: '7973240618'
        , gameno: '7973240618'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 10 }
     , board: {}
     , posts:
        [ { player: 'FRENCHJS88', type: 'sb', amount: 0.5 }
        , { player: 'StoplossNo', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'Attila406', type: 'fold' }
        , { player: 'danikeen', type: 'fold' }
        , { player: 'FRENCHJS88', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'StoplossNo', type: 'collect', amount: 1 } ]
     , summary: [ { type: 'pot', single: true, amount: 1 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 36.6 }
        , { seatno: 5, player: 'StoplossNo', chips: 76.38 }
        , { seatno: 8, player: 'Attila406', chips: 55.46 }
        , { seatno: 10, player: 'danikeen', chips: 50 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 20
        , hero: null
        , handid: '7973240674'
        , gameno: '7973240674'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 1 }
     , board: {}
     , posts:
        [ { player: 'StoplossNo', type: 'sb', amount: 0.5 }
        , { player: 'Attila406', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'danikeen', type: 'fold' }
        , { player: 'FRENCHJS88', type: 'fold' }
        , { player: 'StoplossNo', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'Attila406', type: 'collect', amount: 1 } ]
     , summary: [ { type: 'pot', single: true, amount: 1 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 36.6 }
        , { seatno: 5, player: 'StoplossNo', chips: 75.88 }
        , { seatno: 8, player: 'Attila406', chips: 55.96 }
        , { seatno: 10, player: 'danikeen', chips: 50 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 34
        , hero: null
        , handid: '7973241437'
        , gameno: '7973241437'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 5 }
     , board: {}
     , posts:
        [ { player: 'Attila406', type: 'sb', amount: 0.5 }
        , { player: 'danikeen', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'FRENCHJS88', type: 'fold' }
        , { player: 'StoplossNo', type: 'fold' }
        , { player: 'Attila406', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'danikeen', type: 'collect', amount: 1 } ]
     , summary: [ { type: 'pot', single: true, amount: 1 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 36.6 }
        , { seatno: 5, player: 'StoplossNo', chips: 75.88 }
        , { seatno: 8, player: 'Attila406', chips: 55.46 }
        , { seatno: 10, player: 'danikeen', chips: 50.5 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 55
        , hero: null
        , handid: '7973242200'
        , gameno: '7973242200'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 8 }
     , board: {}
     , posts:
        [ { player: 'danikeen', type: 'sb', amount: 0.5 }
        , { player: 'FRENCHJS88', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'StoplossNo', type: 'fold' }
        , { player: 'Attila406', type: 'fold' }
        , { player: 'danikeen', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'FRENCHJS88', type: 'collect', amount: 1 } ]
     , summary: [ { type: 'pot', single: true, amount: 1 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 37.1 }
        , { seatno: 5, player: 'StoplossNo', chips: 75.88 }
        , { seatno: 8, player: 'Attila406', chips: 55.46 }
        , { seatno: 10, player: 'danikeen', chips: 50 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 7
        , hero: null
        , handid: '7973242257'
        , gameno: '7973242257'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 10 }
     , board: { card1: '2c', card2: '5c', card3: '5h' }
     , posts:
        [ { player: 'FRENCHJS88', type: 'sb', amount: 0.5 }
        , { player: 'StoplossNo', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'Attila406', type: 'raise', amount: 2 }
        , { player: 'danikeen', type: 'fold' }
        , { player: 'FRENCHJS88', type: 'call', amount: 1.5 }
        , { player: 'StoplossNo', type: 'fold' } ]
     , flop:
        [ { player: 'FRENCHJS88', type: 'check' }
        , { player: 'Attila406', type: 'bet', amount: 2 }
        , { player: 'FRENCHJS88', type: 'fold' } ]
     , turn: []
     , river: []
     , showdown: [ { player: 'Attila406', type: 'collect', amount: 4.75 } ]
     , summary: [ { type: 'pot', single: true, amount: 4.75 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 35.1 }
        , { seatno: 5, player: 'StoplossNo', chips: 74.88 }
        , { seatno: 8, player: 'Attila406', chips: 58.21 }
        , { seatno: 10, player: 'danikeen', chips: 50 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 39
        , hero: null
        , handid: '7973243759'
        , gameno: '7973243759'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 1 }
     , board:
        { card1: '3s', card2: '5c', card3: '3c', card4: '7s', card5: '6d' }
     , posts:
        [ { player: 'StoplossNo', type: 'sb', amount: 0.5 }
        , { player: 'Attila406', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'danikeen', type: 'fold' }
        , { player: 'FRENCHJS88', type: 'call', amount: 1 }
        , { player: 'StoplossNo', type: 'raise', amount: 4 }
        , { player: 'Attila406', type: 'fold' }
        , { player: 'FRENCHJS88', type: 'call', amount: 3 } ]
     , flop:
        [ { player: 'StoplossNo', type: 'bet', amount: 4.5 }
        , { player: 'FRENCHJS88', type: 'raise', amount: 31.1 }
        , { player: 'StoplossNo', type: 'call', amount: 26.6 } ]
     , turn: []
     , river: []
     , showdown:
        [ { player: 'FRENCHJS88', type: 'collect', amount: 67.64 }
        , { player: 'FRENCHJS88', type: 'show', card1: '5s', card2: '4s' }
        , { player: 'StoplossNo', type: 'show', card1: '9d', card2: '9c' } ]
     , summary: [ { type: 'pot', single: true, amount: 67.64 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 67.64 }
        , { seatno: 5, player: 'StoplossNo', chips: 39.78 }
        , { seatno: 8, player: 'Attila406', chips: 57.21 }
        , { seatno: 10, player: 'danikeen', chips: 50 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 16
        , hero: null
        , handid: '7973243896'
        , gameno: '7973243896'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 5 }
     , board: { card1: 'Qd', card2: '7s', card3: 'Js', card4: '3s' }
     , posts:
        [ { player: 'Attila406', type: 'sb', amount: 0.5 }
        , { player: 'danikeen', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'FRENCHJS88', type: 'call', amount: 1 }
        , { player: 'StoplossNo', type: 'raise', amount: 3 }
        , { player: 'Attila406', type: 'call', amount: 2.5 }
        , { player: 'danikeen', type: 'fold' }
        , { player: 'FRENCHJS88', type: 'call', amount: 2 } ]
     , flop:
        [ { player: 'Attila406', type: 'check' }
        , { player: 'FRENCHJS88', type: 'check' }
        , { player: 'StoplossNo', type: 'check' } ]
     , turn:
        [ { player: 'Attila406', type: 'bet', amount: 4 }
        , { player: 'FRENCHJS88', type: 'fold' }
        , { player: 'StoplossNo', type: 'fold' } ]
     , river: []
     , showdown: [ { player: 'Attila406', type: 'collect', amount: 9.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 9.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 64.64 }
        , { seatno: 5, player: 'StoplossNo', chips: 36.78 }
        , { seatno: 8, player: 'Attila406', chips: 63.71 }
        , { seatno: 10, player: 'danikeen', chips: 50 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 56
        , hero: null
        , handid: '7973244045'
        , gameno: '7973244045'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 8 }
     , board:
        { card1: '9s', card2: '4s', card3: 'Th', card4: '3h', card5: 'Jc' }
     , posts:
        [ { player: 'danikeen', type: 'sb', amount: 0.5 }
        , { player: 'FRENCHJS88', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'StoplossNo', type: 'raise', amount: 2.5 }
        , { player: 'Attila406', type: 'call', amount: 2.5 }
        , { player: 'danikeen', type: 'fold' }
        , { player: 'FRENCHJS88', type: 'fold' } ]
     , flop:
        [ { player: 'StoplossNo', type: 'bet', amount: 3.25 }
        , { player: 'Attila406', type: 'call', amount: 3.25 } ]
     , turn:
        [ { player: 'StoplossNo', type: 'bet', amount: 7 }
        , { player: 'Attila406', type: 'call', amount: 7 } ]
     , river:
        [ { player: 'StoplossNo', type: 'bet', amount: 24.03 }
        , { player: 'Attila406', type: 'fold' } ]
     , showdown: [ { player: 'StoplossNo', type: 'collect', amount: 25.65 } ]
     , summary: [ { type: 'pot', single: true, amount: 25.65 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 63.64 }
        , { seatno: 5, player: 'StoplossNo', chips: 49.68 }
        , { seatno: 8, player: 'Attila406', chips: 50.96 }
        , { seatno: 10, player: 'danikeen', chips: 50 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 46
        , hero: null
        , handid: '7973244396'
        , gameno: '7973244396'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 10 }
     , board: { card1: 'Td', card2: 'Qd', card3: '6c' }
     , posts:
        [ { player: 'FRENCHJS88', type: 'sb', amount: 0.5 }
        , { player: 'StoplossNo', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'Attila406', type: 'raise', amount: 2 }
        , { player: 'danikeen', type: 'fold' }
        , { player: 'FRENCHJS88', type: 'fold' }
        , { player: 'StoplossNo', type: 'call', amount: 1 } ]
     , flop:
        [ { player: 'StoplossNo', type: 'check' }
        , { player: 'Attila406', type: 'bet', amount: 2 }
        , { player: 'StoplossNo', type: 'fold' } ]
     , turn: []
     , river: []
     , showdown: [ { player: 'Attila406', type: 'collect', amount: 4.28 } ]
     , summary: [ { type: 'pot', single: true, amount: 4.28 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 63.14 }
        , { seatno: 5, player: 'StoplossNo', chips: 47.68 }
        , { seatno: 8, player: 'Attila406', chips: 53.24 }
        , { seatno: 10, player: 'danikeen', chips: 50 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 7
        , hero: null
        , handid: '7973244470'
        , gameno: '7973244470'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 1 }
     , board: { card1: '8d', card2: 'Ks', card3: '8s' }
     , posts:
        [ { player: 'StoplossNo', type: 'sb', amount: 0.5 }
        , { player: 'Attila406', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'danikeen', type: 'fold' }
        , { player: 'FRENCHJS88', type: 'call', amount: 1 }
        , { player: 'StoplossNo', type: 'fold' }
        , { player: 'Attila406', type: 'check' } ]
     , flop:
        [ { player: 'Attila406', type: 'bet', amount: 1 }
        , { player: 'FRENCHJS88', type: 'fold' } ]
     , turn: []
     , river: []
     , showdown: [ { player: 'Attila406', type: 'collect', amount: 2.38 } ]
     , summary: [ { type: 'pot', single: true, amount: 2.38 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 62.14 }
        , { seatno: 5, player: 'StoplossNo', chips: 47.18 }
        , { seatno: 8, player: 'Attila406', chips: 54.62 }
        , { seatno: 10, player: 'danikeen', chips: 50 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 30
        , hero: null
        , handid: '7973244549'
        , gameno: '7973244549'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 5 }
     , board: { card1: '8s', card2: '5c', card3: 'Js' }
     , posts:
        [ { player: 'Attila406', type: 'sb', amount: 0.5 }
        , { player: 'danikeen', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'FRENCHJS88', type: 'call', amount: 1 }
        , { player: 'StoplossNo', type: 'fold' }
        , { player: 'Attila406', type: 'fold' }
        , { player: 'danikeen', type: 'check' } ]
     , flop:
        [ { player: 'danikeen', type: 'check' }
        , { player: 'FRENCHJS88', type: 'bet', amount: 2.5 }
        , { player: 'danikeen', type: 'fold' } ]
     , turn: []
     , river: []
     , showdown: [ { player: 'FRENCHJS88', type: 'collect', amount: 2.38 } ]
     , summary: [ { type: 'pot', single: true, amount: 2.38 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 63.52 }
        , { seatno: 5, player: 'StoplossNo', chips: 47.18 }
        , { seatno: 8, player: 'Attila406', chips: 54.12 }
        , { seatno: 10, player: 'danikeen', chips: 50 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 59
        , hero: null
        , handid: '7973244659'
        , gameno: '7973244659'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 8 }
     , board: {}
     , posts:
        [ { player: 'danikeen', type: 'sb', amount: 0.5 }
        , { player: 'FRENCHJS88', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'StoplossNo', type: 'raise', amount: 2.5 }
        , { player: 'Attila406', type: 'fold' }
        , { player: 'danikeen', type: 'fold' }
        , { player: 'FRENCHJS88', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'StoplossNo', type: 'collect', amount: 2.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 2.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 62.52 }
        , { seatno: 5, player: 'StoplossNo', chips: 48.68 }
        , { seatno: 8, player: 'Attila406', chips: 54.12 }
        , { seatno: 10, player: 'danikeen', chips: 50 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 12
        , hero: null
        , handid: '7973245213'
        , gameno: '7973245213'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 10 }
     , board: { card1: '7h', card2: 'Jc', card3: '3d' }
     , posts:
        [ { player: 'FRENCHJS88', type: 'sb', amount: 0.5 }
        , { player: 'StoplossNo', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'Attila406', type: 'fold' }
        , { player: 'danikeen', type: 'fold' }
        , { player: 'FRENCHJS88', type: 'call', amount: 0.5 }
        , { player: 'StoplossNo', type: 'check' } ]
     , flop:
        [ { player: 'FRENCHJS88', type: 'bet', amount: 1 }
        , { player: 'StoplossNo', type: 'fold' } ]
     , turn: []
     , river: []
     , showdown: [ { player: 'FRENCHJS88', type: 'collect', amount: 1.9 } ]
     , summary: [ { type: 'pot', single: true, amount: 1.9 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 63.42 }
        , { seatno: 5, player: 'StoplossNo', chips: 47.68 }
        , { seatno: 8, player: 'Attila406', chips: 54.12 }
        , { seatno: 10, player: 'danikeen', chips: 50 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 41
        , hero: null
        , handid: '7973245311'
        , gameno: '7973245311'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 1 }
     , board: {}
     , posts:
        [ { player: 'StoplossNo', type: 'sb', amount: 0.5 }
        , { player: 'Attila406', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'danikeen', type: 'raise', amount: 3 }
        , { player: 'FRENCHJS88', type: 'fold' }
        , { player: 'StoplossNo', type: 'fold' }
        , { player: 'Attila406', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'danikeen', type: 'collect', amount: 2.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 2.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 63.42 }
        , { seatno: 5, player: 'StoplossNo', chips: 47.18 }
        , { seatno: 8, player: 'Attila406', chips: 53.12 }
        , { seatno: 10, player: 'danikeen', chips: 51.5 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 53
        , hero: null
        , handid: '7973245364'
        , gameno: '7973245364'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 5 }
     , board: {}
     , posts:
        [ { player: 'Attila406', type: 'sb', amount: 0.5 }
        , { player: 'danikeen', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'FRENCHJS88', type: 'fold' }
        , { player: 'StoplossNo', type: 'raise', amount: 2.5 }
        , { player: 'Attila406', type: 'fold' }
        , { player: 'danikeen', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'StoplossNo', type: 'collect', amount: 2.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 2.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 63.42 }
        , { seatno: 3, player: 'DEVINSINGH123', chips: 20 }
        , { seatno: 5, player: 'StoplossNo', chips: 48.68 }
        , { seatno: 8, player: 'Attila406', chips: 52.62 }
        , { seatno: 10, player: 'danikeen', chips: 50.5 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 19
        , hero: null
        , handid: '7973245462'
        , gameno: '7973245462'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 8 }
     , board:
        { card1: '2d', card2: '4h', card3: '9h', card4: '2s', card5: 'Th' }
     , posts:
        [ { player: 'danikeen', type: 'sb', amount: 0.5 }
        , { player: 'FRENCHJS88', type: 'bb', amount: 1 }
        , { player: 'DEVINSINGH123', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'DEVINSINGH123', type: 'check' }
        , { player: 'StoplossNo', type: 'fold' }
        , { player: 'Attila406', type: 'raise', amount: 3 }
        , { player: 'danikeen', type: 'raise', amount: 9 }
        , { player: 'FRENCHJS88', type: 'fold' }
        , { player: 'DEVINSINGH123', type: 'fold' }
        , { player: 'Attila406', type: 'raise', amount: 52.62 }
        , { player: 'danikeen', type: 'allin', amount: 41.5, raiseTo: 41.5 } ]
     , flop: []
     , turn: []
     , river: []
     , showdown:
        [ { player: 'Attila406', type: 'collect', amount: 99 }
        , { player: 'Attila406', type: 'show', card1: '9d', card2: '9c' }
        , { player: 'danikeen', type: 'show', card1: 'Ad', card2: 'Qh' } ]
     , summary: [ { type: 'pot', single: true, amount: 99 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 62.42 }
        , { seatno: 3, player: 'DEVINSINGH123', chips: 19 }
        , { seatno: 5, player: 'StoplossNo', chips: 48.68 }
        , { seatno: 8, player: 'Attila406', chips: 101.12 }
        , { seatno: 10, player: 'danikeen', chips: 50 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 59
        , hero: null
        , handid: '7973245613'
        , gameno: '7973245613'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 10 }
     , board: { card1: '4c', card2: '3c', card3: '2c', card4: 'Qh' }
     , posts:
        [ { player: 'FRENCHJS88', type: 'sb', amount: 0.5 }
        , { player: 'DEVINSINGH123', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'StoplossNo', type: 'fold' }
        , { player: 'Attila406', type: 'fold' }
        , { player: 'danikeen', type: 'fold' }
        , { player: 'FRENCHJS88', type: 'call', amount: 0.5 }
        , { player: 'DEVINSINGH123', type: 'check' } ]
     , flop:
        [ { player: 'FRENCHJS88', type: 'check' }
        , { player: 'DEVINSINGH123', type: 'bet', amount: 2 }
        , { player: 'FRENCHJS88', type: 'call', amount: 2 } ]
     , turn:
        [ { player: 'FRENCHJS88', type: 'check' }
        , { player: 'DEVINSINGH123', type: 'bet', amount: 3 }
        , { player: 'FRENCHJS88', type: 'raise', amount: 59.42 }
        , { player: 'DEVINSINGH123', type: 'fold' } ]
     , river: []
     , showdown: [ { player: 'FRENCHJS88', type: 'collect', amount: 11.4 } ]
     , summary: [ { type: 'pot', single: true, amount: 11.4 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 67.82 }
        , { seatno: 3, player: 'DEVINSINGH123', chips: 13 }
        , { seatno: 5, player: 'StoplossNo', chips: 48.68 }
        , { seatno: 8, player: 'Attila406', chips: 101.12 }
        , { seatno: 10, player: 'danikeen', chips: 50 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 57
        , hero: null
        , handid: '7973245824'
        , gameno: '7973245824'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 1 }
     , board:
        { card1: 'Ac', card2: '5h', card3: '5c', card4: 'Kc', card5: 'Jc' }
     , posts:
        [ { player: 'DEVINSINGH123', type: 'sb', amount: 0.5 }
        , { player: 'StoplossNo', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'Attila406', type: 'fold' }
        , { player: 'danikeen', type: 'raise', amount: 3.5 }
        , { player: 'FRENCHJS88', type: 'fold' }
        , { player: 'DEVINSINGH123', type: 'call', amount: 3 }
        , { player: 'StoplossNo', type: 'fold' } ]
     , flop:
        [ { player: 'DEVINSINGH123', type: 'bet', amount: 4 }
        , { player: 'danikeen', type: 'call', amount: 4 } ]
     , turn:
        [ { player: 'DEVINSINGH123', type: 'bet', amount: 5.5 }
        , { player: 'danikeen', type: 'call', amount: 5.5 } ]
     , river: []
     , showdown:
        [ { player: 'DEVINSINGH123', type: 'collect', amount: 25.65 }
        , { player: 'danikeen', type: 'show', card1: 'Ah', card2: '9d' }
        , { player: 'DEVINSINGH123'
          , type: 'show'
          , card1: 'Th'
          , card2: 'Qc' } ]
     , summary: [ { type: 'pot', single: true, amount: 25.65 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 67.82 }
        , { seatno: 3, player: 'DEVINSINGH123', chips: 25.65 }
        , { seatno: 5, player: 'StoplossNo', chips: 47.68 }
        , { seatno: 6, player: 'Jadah', chips: 40 }
        , { seatno: 8, player: 'Attila406', chips: 101.12 }
        , { seatno: 10, player: 'danikeen', chips: 50 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 36
        , hero: null
        , handid: '7973245965'
        , gameno: '7973245965'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 3 }
     , board: {}
     , posts:
        [ { player: 'StoplossNo', type: 'sb', amount: 0.5 }
        , { player: 'Jadah', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'Attila406', type: 'raise', amount: 2 }
        , { player: 'danikeen', type: 'fold' }
        , { player: 'FRENCHJS88', type: 'fold' }
        , { player: 'DEVINSINGH123', type: 'fold' }
        , { player: 'StoplossNo', type: 'fold' }
        , { player: 'Jadah', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'Attila406', type: 'collect', amount: 2.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 2.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 67.82 }
        , { seatno: 3, player: 'DEVINSINGH123', chips: 25.65 }
        , { seatno: 5, player: 'StoplossNo', chips: 47.18 }
        , { seatno: 6, player: 'Jadah', chips: 40 }
        , { seatno: 8, player: 'Attila406', chips: 102.62 }
        , { seatno: 10, player: 'danikeen', chips: 50 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , sec: 51
        , hero: null
        , handid: '7973246021'
        , gameno: '7973246021'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 5 }
     , board: {}
     , posts:
        [ { player: 'Jadah', type: 'sb', amount: 0.5 }
        , { player: 'Attila406', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'danikeen', type: 'fold' }
        , { player: 'FRENCHJS88', type: 'fold' }
        , { player: 'DEVINSINGH123', type: 'fold' }
        , { player: 'StoplossNo', type: 'raise', amount: 2.5 }
        , { player: 'Jadah', type: 'fold' }
        , { player: 'Attila406', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'StoplossNo', type: 'collect', amount: 2.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 2.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 67.82 }
        , { seatno: 3, player: 'DEVINSINGH123', chips: 25.65 }
        , { seatno: 5, player: 'StoplossNo', chips: 48.68 }
        , { seatno: 6, player: 'Jadah', chips: 40 }
        , { seatno: 8, player: 'Attila406', chips: 101.62 }
        , { seatno: 10, player: 'danikeen', chips: 50 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , min: 59
        , sec: 22
        , hero: null
        , handid: '7973246143'
        , gameno: '7973246143'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 6 }
     , board:
        { card1: 'Kd', card2: '3s', card3: '4d', card4: '8c', card5: '3h' }
     , posts:
        [ { player: 'Attila406', type: 'sb', amount: 0.5 }
        , { player: 'danikeen', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'FRENCHJS88', type: 'fold' }
        , { player: 'DEVINSINGH123', type: 'raise', amount: 2 }
        , { player: 'StoplossNo', type: 'fold' }
        , { player: 'Jadah', type: 'fold' }
        , { player: 'Attila406', type: 'fold' }
        , { player: 'danikeen', type: 'call', amount: 1 } ]
     , flop:
        [ { player: 'danikeen', type: 'check' }
        , { player: 'DEVINSINGH123', type: 'check' } ]
     , turn:
        [ { player: 'danikeen', type: 'check' }
        , { player: 'DEVINSINGH123', type: 'check' } ]
     , river:
        [ { player: 'danikeen', type: 'bet', amount: 3.15 }
        , { player: 'DEVINSINGH123', type: 'fold' } ]
     , showdown: [ { player: 'danikeen', type: 'collect', amount: 4.28 } ]
     , summary: [ { type: 'pot', single: true, amount: 4.28 } ]
     , hero: null
     , holecards: null } ])
  t.end()
})

test(`ipoker: ${file} remaining`, function(t) {
  const res = processFile(file)
  spok(t, res.slice(100),
    [ { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 67.82 }
        , { seatno: 3, player: 'DEVINSINGH123', chips: 23.65 }
        , { seatno: 5, player: 'StoplossNo', chips: 48.68 }
        , { seatno: 6, player: 'Jadah', chips: 40 }
        , { seatno: 8, player: 'Attila406', chips: 101.12 }
        , { seatno: 10, player: 'danikeen', chips: 52.28 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
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
        , min: 59
        , sec: 58
        , hero: null
        , handid: '7973248335'
        , gameno: '7973248335'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 8 }
     , board: { card1: '5d', card2: 'Ah', card3: 'Qs' }
     , posts:
        [ { player: 'danikeen', type: 'sb', amount: 0.5 }
        , { player: 'FRENCHJS88', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'DEVINSINGH123', type: 'raise', amount: 4 }
        , { player: 'StoplossNo', type: 'fold' }
        , { player: 'Jadah', type: 'raise', amount: 13.5 }
        , { player: 'Attila406', type: 'fold' }
        , { player: 'danikeen', type: 'fold' }
        , { player: 'FRENCHJS88', type: 'fold' }
        , { player: 'DEVINSINGH123', type: 'call', amount: 9.5 } ]
     , flop:
        [ { player: 'DEVINSINGH123', type: 'check' }
        , { player: 'Jadah', type: 'bet', amount: 14.25 }
        , { player: 'DEVINSINGH123', type: 'fold' } ]
     , turn: []
     , river: []
     , showdown: [ { player: 'Jadah', type: 'collect', amount: 27.08 } ]
     , summary: [ { type: 'pot', single: true, amount: 27.08 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 66.82 }
        , { seatno: 3, player: 'DEVINSINGH123', chips: 10.15 }
        , { seatno: 5, player: 'StoplossNo', chips: 48.68 }
        , { seatno: 6, player: 'Jadah', chips: 53.58 }
        , { seatno: 8, player: 'Attila406', chips: 101.12 }
        , { seatno: 10, player: 'danikeen', chips: 51.78 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 17
        , min: 0
        , sec: 28
        , hero: null
        , handid: '7973248773'
        , gameno: '7973248773'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 10 }
     , board:
        { card1: '6h', card2: '2d', card3: '2c', card4: '5h', card5: '8c' }
     , posts:
        [ { player: 'FRENCHJS88', type: 'sb', amount: 0.5 }
        , { player: 'DEVINSINGH123', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'StoplossNo', type: 'raise', amount: 2.5 }
        , { player: 'Jadah', type: 'call', amount: 2.5 }
        , { player: 'Attila406', type: 'fold' }
        , { player: 'danikeen', type: 'fold' }
        , { player: 'FRENCHJS88', type: 'fold' }
        , { player: 'DEVINSINGH123', type: 'call', amount: 1.5 } ]
     , flop:
        [ { player: 'DEVINSINGH123', type: 'check' }
        , { player: 'StoplossNo', type: 'bet', amount: 5 }
        , { player: 'Jadah', type: 'call', amount: 5 }
        , { player: 'DEVINSINGH123', type: 'fold' } ]
     , turn:
        [ { player: 'StoplossNo', type: 'check' }
        , { player: 'Jadah', type: 'check' } ]
     , river:
        [ { player: 'StoplossNo', type: 'check' }
        , { player: 'Jadah', type: 'bet', amount: 10 }
        , { player: 'StoplossNo', type: 'fold' } ]
     , showdown: [ { player: 'Jadah', type: 'collect', amount: 17.1 } ]
     , summary: [ { type: 'pot', single: true, amount: 17.1 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 66.32 }
        , { seatno: 3, player: 'DEVINSINGH123', chips: 7.65 }
        , { seatno: 5, player: 'StoplossNo', chips: 41.18 }
        , { seatno: 6, player: 'Jadah', chips: 63.18 }
        , { seatno: 8, player: 'Attila406', chips: 101.12 }
        , { seatno: 10, player: 'danikeen', chips: 51.78 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 17
        , min: 1
        , sec: 51
        , hero: null
        , handid: '7973249812'
        , gameno: '7973249812'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 1 }
     , board: {}
     , posts:
        [ { player: 'DEVINSINGH123', type: 'sb', amount: 0.5 }
        , { player: 'StoplossNo', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'Jadah', type: 'fold' }
        , { player: 'Attila406', type: 'fold' }
        , { player: 'danikeen', type: 'fold' }
        , { player: 'FRENCHJS88', type: 'fold' }
        , { player: 'DEVINSINGH123', type: 'call', amount: 0.5 }
        , { player: 'StoplossNo', type: 'raise', amount: 8 }
        , { player: 'DEVINSINGH123', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'StoplossNo', type: 'collect', amount: 2 } ]
     , summary: [ { type: 'pot', single: true, amount: 2 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 66.32 }
        , { seatno: 3, player: 'DEVINSINGH123', chips: 6.65 }
        , { seatno: 5, player: 'StoplossNo', chips: 42.18 }
        , { seatno: 6, player: 'Jadah', chips: 63.18 }
        , { seatno: 8, player: 'Attila406', chips: 101.12 }
        , { seatno: 10, player: 'danikeen', chips: 51.78 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 17
        , min: 2
        , sec: 40
        , hero: null
        , handid: '7973249991'
        , gameno: '7973249991'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 3 }
     , board: {}
     , posts:
        [ { player: 'StoplossNo', type: 'sb', amount: 0.5 }
        , { player: 'Jadah', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'Attila406', type: 'fold' }
        , { player: 'danikeen', type: 'fold' }
        , { player: 'FRENCHJS88', type: 'fold' }
        , { player: 'DEVINSINGH123', type: 'fold' }
        , { player: 'StoplossNo', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'Jadah', type: 'collect', amount: 1 } ]
     , summary: [ { type: 'pot', single: true, amount: 1 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 66.32 }
        , { seatno: 3, player: 'DEVINSINGH123', chips: 6.65 }
        , { seatno: 5, player: 'StoplossNo', chips: 41.68 }
        , { seatno: 6, player: 'Jadah', chips: 63.68 }
        , { seatno: 8, player: 'Attila406', chips: 101.12 }
        , { seatno: 10, player: 'danikeen', chips: 51.78 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 17
        , min: 2
        , sec: 58
        , hero: null
        , handid: '7973251375'
        , gameno: '7973251375'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 5 }
     , board: { card1: 'Qs', card2: 'Tc', card3: 'As' }
     , posts:
        [ { player: 'Jadah', type: 'sb', amount: 0.5 }
        , { player: 'Attila406', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'danikeen', type: 'raise', amount: 3 }
        , { player: 'FRENCHJS88', type: 'fold' }
        , { player: 'DEVINSINGH123', type: 'fold' }
        , { player: 'StoplossNo', type: 'call', amount: 3 }
        , { player: 'Jadah', type: 'fold' }
        , { player: 'Attila406', type: 'fold' } ]
     , flop:
        [ { player: 'danikeen', type: 'bet', amount: 3.75 }
        , { player: 'StoplossNo', type: 'fold' } ]
     , turn: []
     , river: []
     , showdown: [ { player: 'danikeen', type: 'collect', amount: 7.13 } ]
     , summary: [ { type: 'pot', single: true, amount: 7.13 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 66.32 }
        , { seatno: 3, player: 'DEVINSINGH123', chips: 6.65 }
        , { seatno: 5, player: 'StoplossNo', chips: 38.68 }
        , { seatno: 6, player: 'Jadah', chips: 63.18 }
        , { seatno: 8, player: 'Attila406', chips: 100.12 }
        , { seatno: 10, player: 'danikeen', chips: 55.91 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 17
        , min: 3
        , sec: 43
        , hero: null
        , handid: '7973251531'
        , gameno: '7973251531'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 6 }
     , board:
        { card1: '2s', card2: '5h', card3: '7c', card4: 'Td', card5: '3d' }
     , posts:
        [ { player: 'Attila406', type: 'sb', amount: 0.5 }
        , { player: 'danikeen', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'FRENCHJS88', type: 'call', amount: 1 }
        , { player: 'DEVINSINGH123', type: 'raise', amount: 6.65 }
        , { player: 'StoplossNo', type: 'fold' }
        , { player: 'Jadah', type: 'fold' }
        , { player: 'Attila406', type: 'raise', amount: 16.46 }
        , { player: 'danikeen', type: 'fold' }
        , { player: 'FRENCHJS88', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown:
        [ { player: 'Attila406', type: 'collect', amount: 14.54 }
        , { player: 'DEVINSINGH123'
          , type: 'show'
          , card1: 'Qs'
          , card2: 'Ks' }
        , { player: 'Attila406', type: 'show', card1: 'Kc', card2: 'Ad' } ]
     , summary: [ { type: 'pot', single: true, amount: 14.54 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 65.32 }
        , { seatno: 5, player: 'StoplossNo', chips: 38.68 }
        , { seatno: 6, player: 'Jadah', chips: 63.18 }
        , { seatno: 8, player: 'Attila406', chips: 108.01 }
        , { seatno: 10, player: 'danikeen', chips: 54.91 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 17
        , min: 4
        , sec: 21
        , hero: null
        , handid: '7973252921'
        , gameno: '7973252921'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 8 }
     , board: { card1: 'Ac', card2: '7d', card3: '5d' }
     , posts:
        [ { player: 'danikeen', type: 'sb', amount: 0.5 }
        , { player: 'FRENCHJS88', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'StoplossNo', type: 'fold' }
        , { player: 'Jadah', type: 'fold' }
        , { player: 'Attila406', type: 'raise', amount: 2 }
        , { player: 'danikeen', type: 'fold' }
        , { player: 'FRENCHJS88', type: 'call', amount: 1 } ]
     , flop:
        [ { player: 'FRENCHJS88', type: 'check' }
        , { player: 'Attila406', type: 'bet', amount: 2 }
        , { player: 'FRENCHJS88', type: 'fold' } ]
     , turn: []
     , river: []
     , showdown: [ { player: 'Attila406', type: 'collect', amount: 4.28 } ]
     , summary: [ { type: 'pot', single: true, amount: 4.28 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 63.32 }
        , { seatno: 5, player: 'StoplossNo', chips: 38.68 }
        , { seatno: 6, player: 'Jadah', chips: 63.18 }
        , { seatno: 8, player: 'Attila406', chips: 110.29 }
        , { seatno: 10, player: 'danikeen', chips: 54.41 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 17
        , min: 4
        , sec: 47
        , hero: null
        , handid: '7973253017'
        , gameno: '7973253017'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 10 }
     , board: { card1: '2s', card2: '2h', card3: '6s', card4: '4h' }
     , posts:
        [ { player: 'FRENCHJS88', type: 'sb', amount: 0.5 }
        , { player: 'StoplossNo', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'Jadah', type: 'fold' }
        , { player: 'Attila406', type: 'fold' }
        , { player: 'danikeen', type: 'fold' }
        , { player: 'FRENCHJS88', type: 'call', amount: 0.5 }
        , { player: 'StoplossNo', type: 'check' } ]
     , flop:
        [ { player: 'FRENCHJS88', type: 'bet', amount: 1 }
        , { player: 'StoplossNo', type: 'call', amount: 1 } ]
     , turn:
        [ { player: 'FRENCHJS88', type: 'check' }
        , { player: 'StoplossNo', type: 'bet', amount: 3 }
        , { player: 'FRENCHJS88', type: 'fold' } ]
     , river: []
     , showdown: [ { player: 'StoplossNo', type: 'collect', amount: 3.8 } ]
     , summary: [ { type: 'pot', single: true, amount: 3.8 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 61.32 }
        , { seatno: 5, player: 'StoplossNo', chips: 40.48 }
        , { seatno: 8, player: 'Attila406', chips: 110.29 }
        , { seatno: 10, player: 'danikeen', chips: 54.41 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 17
        , min: 5
        , sec: 17
        , hero: null
        , handid: '7973253136'
        , gameno: '7973253136'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 1 }
     , board:
        { card1: '6s', card2: 'Kh', card3: '7h', card4: 'Ac', card5: 'Kd' }
     , posts:
        [ { player: 'StoplossNo', type: 'sb', amount: 0.5 }
        , { player: 'Attila406', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'danikeen', type: 'fold' }
        , { player: 'FRENCHJS88', type: 'call', amount: 1 }
        , { player: 'StoplossNo', type: 'fold' }
        , { player: 'Attila406', type: 'check' } ]
     , flop:
        [ { player: 'Attila406', type: 'bet', amount: 2 }
        , { player: 'FRENCHJS88', type: 'call', amount: 2 } ]
     , turn:
        [ { player: 'Attila406', type: 'bet', amount: 3 }
        , { player: 'FRENCHJS88', type: 'call', amount: 3 } ]
     , river:
        [ { player: 'Attila406', type: 'check' }
        , { player: 'FRENCHJS88', type: 'bet', amount: 2 }
        , { player: 'Attila406', type: 'fold' } ]
     , showdown: [ { player: 'FRENCHJS88', type: 'collect', amount: 11.88 } ]
     , summary: [ { type: 'pot', single: true, amount: 11.88 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 67.2 }
        , { seatno: 5, player: 'StoplossNo', chips: 39.98 }
        , { seatno: 8, player: 'Attila406', chips: 104.29 }
        , { seatno: 10, player: 'danikeen', chips: 54.41 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 17
        , min: 6
        , sec: 1
        , hero: null
        , handid: '7973253287'
        , gameno: '7973253287'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 5 }
     , board: {}
     , posts:
        [ { player: 'Attila406', type: 'sb', amount: 0.5 }
        , { player: 'danikeen', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'FRENCHJS88', type: 'fold' }
        , { player: 'StoplossNo', type: 'raise', amount: 2.5 }
        , { player: 'Attila406', type: 'fold' }
        , { player: 'danikeen', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'StoplossNo', type: 'collect', amount: 2.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 2.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 67.2 }
        , { seatno: 5, player: 'StoplossNo', chips: 41.48 }
        , { seatno: 8, player: 'Attila406', chips: 103.79 }
        , { seatno: 10, player: 'danikeen', chips: 53.41 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 17
        , min: 6
        , sec: 16
        , hero: null
        , handid: '7973253342'
        , gameno: '7973253342'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 8 }
     , board:
        { card1: '7c', card2: '9d', card3: '7h', card4: 'Jc', card5: 'Kh' }
     , posts:
        [ { player: 'danikeen', type: 'sb', amount: 0.5 }
        , { player: 'FRENCHJS88', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'StoplossNo', type: 'fold' }
        , { player: 'Attila406', type: 'raise', amount: 2 }
        , { player: 'danikeen', type: 'fold' }
        , { player: 'FRENCHJS88', type: 'call', amount: 1 } ]
     , flop:
        [ { player: 'FRENCHJS88', type: 'check' }
        , { player: 'Attila406', type: 'bet', amount: 2 }
        , { player: 'FRENCHJS88', type: 'call', amount: 2 } ]
     , turn:
        [ { player: 'FRENCHJS88', type: 'check' }
        , { player: 'Attila406', type: 'bet', amount: 4 }
        , { player: 'FRENCHJS88', type: 'call', amount: 4 } ]
     , river:
        [ { player: 'FRENCHJS88', type: 'bet', amount: 6 }
        , { player: 'Attila406', type: 'fold' } ]
     , showdown: [ { player: 'FRENCHJS88', type: 'collect', amount: 15.68 } ]
     , summary: [ { type: 'pot', single: true, amount: 15.68 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 74.88 }
        , { seatno: 5, player: 'StoplossNo', chips: 41.48 }
        , { seatno: 8, player: 'Attila406', chips: 95.79 }
        , { seatno: 10, player: 'danikeen', chips: 52.91 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 17
        , min: 7
        , sec: 3
        , hero: null
        , handid: '7973253582'
        , gameno: '7973253582'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 10 }
     , board: { card1: 'Th', card2: 'Qh', card3: '5h' }
     , posts:
        [ { player: 'FRENCHJS88', type: 'sb', amount: 0.5 }
        , { player: 'StoplossNo', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'Attila406', type: 'fold' }
        , { player: 'danikeen', type: 'fold' }
        , { player: 'FRENCHJS88', type: 'call', amount: 0.5 }
        , { player: 'StoplossNo', type: 'check' } ]
     , flop:
        [ { player: 'FRENCHJS88', type: 'bet', amount: 1 }
        , { player: 'StoplossNo', type: 'fold' } ]
     , turn: []
     , river: []
     , showdown: [ { player: 'FRENCHJS88', type: 'collect', amount: 1.9 } ]
     , summary: [ { type: 'pot', single: true, amount: 1.9 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 75.78 }
        , { seatno: 5, player: 'StoplossNo', chips: 40.48 }
        , { seatno: 8, player: 'Attila406', chips: 95.79 }
        , { seatno: 10, player: 'danikeen', chips: 52.91 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 17
        , min: 7
        , sec: 29
        , hero: null
        , handid: '7973253688'
        , gameno: '7973253688'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 1 }
     , board: {}
     , posts:
        [ { player: 'StoplossNo', type: 'sb', amount: 0.5 }
        , { player: 'Attila406', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'danikeen', type: 'fold' }
        , { player: 'FRENCHJS88', type: 'fold' }
        , { player: 'StoplossNo', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'Attila406', type: 'collect', amount: 1 } ]
     , summary: [ { type: 'pot', single: true, amount: 1 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 75.78 }
        , { seatno: 5, player: 'StoplossNo', chips: 39.98 }
        , { seatno: 8, player: 'Attila406', chips: 96.29 }
        , { seatno: 10, player: 'danikeen', chips: 52.91 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 17
        , min: 7
        , sec: 44
        , hero: null
        , handid: '7973253867'
        , gameno: '7973253867'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 5 }
     , board: {}
     , posts:
        [ { player: 'Attila406', type: 'sb', amount: 0.5 }
        , { player: 'danikeen', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'FRENCHJS88', type: 'fold' }
        , { player: 'StoplossNo', type: 'raise', amount: 2.5 }
        , { player: 'Attila406', type: 'fold' }
        , { player: 'danikeen', type: 'raise', amount: 8 }
        , { player: 'StoplossNo', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'danikeen', type: 'collect', amount: 5.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 5.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 75.78 }
        , { seatno: 5, player: 'StoplossNo', chips: 37.48 }
        , { seatno: 8, player: 'Attila406', chips: 95.79 }
        , { seatno: 10, player: 'danikeen', chips: 55.91 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 17
        , min: 8
        , sec: 13
        , hero: null
        , handid: '7973253975'
        , gameno: '7973253975'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 8 }
     , board:
        { card1: '9c', card2: '9s', card3: '2s', card4: '4s', card5: '4h' }
     , posts:
        [ { player: 'danikeen', type: 'sb', amount: 0.5 }
        , { player: 'FRENCHJS88', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'StoplossNo', type: 'fold' }
        , { player: 'Attila406', type: 'raise', amount: 2 }
        , { player: 'danikeen', type: 'call', amount: 1.5 }
        , { player: 'FRENCHJS88', type: 'call', amount: 1 } ]
     , flop:
        [ { player: 'danikeen', type: 'check' }
        , { player: 'FRENCHJS88', type: 'check' }
        , { player: 'Attila406', type: 'bet', amount: 2 }
        , { player: 'danikeen', type: 'call', amount: 2 }
        , { player: 'FRENCHJS88', type: 'fold' } ]
     , turn:
        [ { player: 'danikeen', type: 'check' }
        , { player: 'Attila406', type: 'check' } ]
     , river:
        [ { player: 'danikeen', type: 'bet', amount: 10 }
        , { player: 'Attila406', type: 'call', amount: 10 } ]
     , showdown:
        [ { player: 'Attila406', type: 'collect', amount: 28.5 }
        , { player: 'Attila406', type: 'show', card1: 'Ad', card2: '4d' }
        , { player: 'danikeen', type: 'show', card1: '7c', card2: '6c' } ]
     , summary: [ { type: 'pot', single: true, amount: 28.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 73.78 }
        , { seatno: 5, player: 'StoplossNo', chips: 37.48 }
        , { seatno: 8, player: 'Attila406', chips: 110.29 }
        , { seatno: 10, player: 'danikeen', chips: 50 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 17
        , min: 9
        , sec: 4
        , hero: null
        , handid: '7973254158'
        , gameno: '7973254158'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 10 }
     , board: {}
     , posts:
        [ { player: 'FRENCHJS88', type: 'sb', amount: 0.5 }
        , { player: 'StoplossNo', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'Attila406', type: 'fold' }
        , { player: 'danikeen', type: 'fold' }
        , { player: 'FRENCHJS88', type: 'call', amount: 0.5 }
        , { player: 'StoplossNo', type: 'raise', amount: 4 }
        , { player: 'FRENCHJS88', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'StoplossNo', type: 'collect', amount: 2 } ]
     , summary: [ { type: 'pot', single: true, amount: 2 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 72.78 }
        , { seatno: 5, player: 'StoplossNo', chips: 38.48 }
        , { seatno: 8, player: 'Attila406', chips: 110.29 }
        , { seatno: 10, player: 'danikeen', chips: 50 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 17
        , min: 9
        , sec: 25
        , hero: null
        , handid: '7973254224'
        , gameno: '7973254224'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 1 }
     , board: {}
     , posts:
        [ { player: 'StoplossNo', type: 'sb', amount: 0.5 }
        , { player: 'Attila406', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'danikeen', type: 'fold' }
        , { player: 'FRENCHJS88', type: 'fold' }
        , { player: 'StoplossNo', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'Attila406', type: 'collect', amount: 1 } ]
     , summary: [ { type: 'pot', single: true, amount: 1 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 72.78 }
        , { seatno: 5, player: 'StoplossNo', chips: 37.98 }
        , { seatno: 8, player: 'Attila406', chips: 110.79 }
        , { seatno: 10, player: 'danikeen', chips: 50 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 17
        , min: 9
        , sec: 36
        , hero: null
        , handid: '7973254269'
        , gameno: '7973254269'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 5 }
     , board: { card1: '5s', card2: 'Th', card3: '6s', card4: 'Ks' }
     , posts:
        [ { player: 'Attila406', type: 'sb', amount: 0.5 }
        , { player: 'danikeen', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'FRENCHJS88', type: 'fold' }
        , { player: 'StoplossNo', type: 'raise', amount: 2.5 }
        , { player: 'Attila406', type: 'call', amount: 2 }
        , { player: 'danikeen', type: 'call', amount: 1.5 } ]
     , flop:
        [ { player: 'Attila406', type: 'check' }
        , { player: 'danikeen', type: 'check' }
        , { player: 'StoplossNo', type: 'check' } ]
     , turn:
        [ { player: 'Attila406', type: 'check' }
        , { player: 'danikeen', type: 'check' }
        , { player: 'StoplossNo', type: 'bet', amount: 4.5 }
        , { player: 'Attila406', type: 'fold' }
        , { player: 'danikeen', type: 'fold' } ]
     , river: []
     , showdown: [ { player: 'StoplossNo', type: 'collect', amount: 7.13 } ]
     , summary: [ { type: 'pot', single: true, amount: 7.13 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 72.78 }
        , { seatno: 5, player: 'StoplossNo', chips: 42.61 }
        , { seatno: 8, player: 'Attila406', chips: 108.29 }
        , { seatno: 10, player: 'danikeen', chips: 50 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 17
        , min: 10
        , sec: 30
        , hero: null
        , handid: '7973254464'
        , gameno: '7973254464'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 8 }
     , board: {}
     , posts:
        [ { player: 'danikeen', type: 'sb', amount: 0.5 }
        , { player: 'FRENCHJS88', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'StoplossNo', type: 'fold' }
        , { player: 'Attila406', type: 'fold' }
        , { player: 'danikeen', type: 'raise', amount: 3 }
        , { player: 'FRENCHJS88', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'danikeen', type: 'collect', amount: 2 } ]
     , summary: [ { type: 'pot', single: true, amount: 2 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 71.78 }
        , { seatno: 5, player: 'StoplossNo', chips: 42.61 }
        , { seatno: 8, player: 'Attila406', chips: 108.29 }
        , { seatno: 10, player: 'danikeen', chips: 51 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 17
        , min: 10
        , sec: 43
        , hero: null
        , handid: '7973254503'
        , gameno: '7973254503'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 10 }
     , board: {}
     , posts:
        [ { player: 'FRENCHJS88', type: 'sb', amount: 0.5 }
        , { player: 'StoplossNo', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'Attila406', type: 'fold' }
        , { player: 'danikeen', type: 'fold' }
        , { player: 'FRENCHJS88', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'StoplossNo', type: 'collect', amount: 1 } ]
     , summary: [ { type: 'pot', single: true, amount: 1 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 71.28 }
        , { seatno: 5, player: 'StoplossNo', chips: 43.11 }
        , { seatno: 8, player: 'Attila406', chips: 108.29 }
        , { seatno: 10, player: 'danikeen', chips: 51 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 17
        , min: 10
        , sec: 51
        , hero: null
        , handid: '7973254863'
        , gameno: '7973254863'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 1 }
     , board: { card1: '2s', card2: '4c', card3: 'Kc', card4: '7s' }
     , posts:
        [ { player: 'StoplossNo', type: 'sb', amount: 0.5 }
        , { player: 'Attila406', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'danikeen', type: 'raise', amount: 3 }
        , { player: 'FRENCHJS88', type: 'fold' }
        , { player: 'StoplossNo', type: 'fold' }
        , { player: 'Attila406', type: 'call', amount: 2 } ]
     , flop:
        [ { player: 'Attila406', type: 'check' }
        , { player: 'danikeen', type: 'bet', amount: 2.6 }
        , { player: 'Attila406', type: 'call', amount: 2.6 } ]
     , turn:
        [ { player: 'Attila406', type: 'check' }
        , { player: 'danikeen', type: 'bet', amount: 5.85 }
        , { player: 'Attila406', type: 'fold' } ]
     , river: []
     , showdown: [ { player: 'danikeen', type: 'collect', amount: 11.12 } ]
     , summary: [ { type: 'pot', single: true, amount: 11.12 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 71.28 }
        , { seatno: 5, player: 'StoplossNo', chips: 42.61 }
        , { seatno: 8, player: 'Attila406', chips: 102.69 }
        , { seatno: 10, player: 'danikeen', chips: 56.52 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 17
        , min: 11
        , sec: 29
        , hero: null
        , handid: '7973255022'
        , gameno: '7973255022'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 5 }
     , board: { card1: 'Qh', card2: 'Jd', card3: 'Jh' }
     , posts:
        [ { player: 'Attila406', type: 'sb', amount: 0.5 }
        , { player: 'danikeen', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'FRENCHJS88', type: 'fold' }
        , { player: 'StoplossNo', type: 'fold' }
        , { player: 'Attila406', type: 'raise', amount: 2 }
        , { player: 'danikeen', type: 'call', amount: 1 } ]
     , flop:
        [ { player: 'Attila406', type: 'bet', amount: 2 }
        , { player: 'danikeen', type: 'fold' } ]
     , turn: []
     , river: []
     , showdown: [ { player: 'Attila406', type: 'collect', amount: 3.8 } ]
     , summary: [ { type: 'pot', single: true, amount: 3.8 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 71.28 }
        , { seatno: 5, player: 'StoplossNo', chips: 42.61 }
        , { seatno: 8, player: 'Attila406', chips: 104.49 }
        , { seatno: 10, player: 'danikeen', chips: 54.52 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 17
        , min: 11
        , sec: 50
        , hero: null
        , handid: '7973255094'
        , gameno: '7973255094'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 8 }
     , board:
        { card1: 'Js', card2: '2h', card3: 'Qd', card4: 'Kc', card5: '7d' }
     , posts:
        [ { player: 'danikeen', type: 'sb', amount: 0.5 }
        , { player: 'FRENCHJS88', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'StoplossNo', type: 'raise', amount: 2.5 }
        , { player: 'Attila406', type: 'fold' }
        , { player: 'danikeen', type: 'fold' }
        , { player: 'FRENCHJS88', type: 'call', amount: 1.5 } ]
     , flop:
        [ { player: 'FRENCHJS88', type: 'check' }
        , { player: 'StoplossNo', type: 'check' } ]
     , turn:
        [ { player: 'FRENCHJS88', type: 'check' }
        , { player: 'StoplossNo', type: 'check' } ]
     , river:
        [ { player: 'FRENCHJS88', type: 'check' }
        , { player: 'StoplossNo', type: 'check' } ]
     , showdown:
        [ { player: 'StoplossNo', type: 'collect', amount: 5.23 }
        , { player: 'StoplossNo', type: 'show', card1: '4h', card2: '4s' } ]
     , summary: [ { type: 'pot', single: true, amount: 5.23 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 68.78 }
        , { seatno: 5, player: 'StoplossNo', chips: 45.34 }
        , { seatno: 8, player: 'Attila406', chips: 104.49 }
        , { seatno: 10, player: 'danikeen', chips: 54.02 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 17
        , min: 12
        , sec: 22
        , hero: null
        , handid: '7973255214'
        , gameno: '7973255214'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 10 }
     , board: { card1: '5s', card2: '9c', card3: '7c' }
     , posts:
        [ { player: 'FRENCHJS88', type: 'sb', amount: 0.5 }
        , { player: 'StoplossNo', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'Attila406', type: 'raise', amount: 2 }
        , { player: 'danikeen', type: 'fold' }
        , { player: 'FRENCHJS88', type: 'raise', amount: 7 }
        , { player: 'StoplossNo', type: 'fold' }
        , { player: 'Attila406', type: 'call', amount: 5 } ]
     , flop:
        [ { player: 'FRENCHJS88', type: 'bet', amount: 61.78 }
        , { player: 'Attila406', type: 'fold' } ]
     , turn: []
     , river: []
     , showdown: [ { player: 'FRENCHJS88', type: 'collect', amount: 14.25 } ]
     , summary: [ { type: 'pot', single: true, amount: 14.25 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 76.03 }
        , { seatno: 5, player: 'StoplossNo', chips: 44.34 }
        , { seatno: 8, player: 'Attila406', chips: 97.49 }
        , { seatno: 10, player: 'danikeen', chips: 54.02 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 17
        , min: 12
        , sec: 56
        , hero: null
        , handid: '7973255328'
        , gameno: '7973255328'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 1 }
     , board:
        { card1: '5h', card2: '3s', card3: '7c', card4: 'Jc', card5: 'Qd' }
     , posts:
        [ { player: 'StoplossNo', type: 'sb', amount: 0.5 }
        , { player: 'Attila406', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'danikeen', type: 'raise', amount: 3 }
        , { player: 'FRENCHJS88', type: 'fold' }
        , { player: 'StoplossNo', type: 'fold' }
        , { player: 'Attila406', type: 'raise', amount: 12 }
        , { player: 'danikeen', type: 'call', amount: 9 } ]
     , flop:
        [ { player: 'Attila406', type: 'bet', amount: 17.15 }
        , { player: 'danikeen', type: 'raise', amount: 42 }
        , { player: 'Attila406', type: 'call', amount: 24.85 } ]
     , turn:
        [ { player: 'Attila406', type: 'check' }
        , { player: 'danikeen', type: 'allin', amount: 0.02, raiseTo: 0.02 }
        , { player: 'Attila406', type: 'call', amount: 0.02 } ]
     , river: []
     , showdown:
        [ { player: 'danikeen', type: 'collect', amount: 104.54 }
        , { player: 'danikeen', type: 'show', card1: 'Kd', card2: 'Kh' }
        , { player: 'Attila406', type: 'show', card1: '9s', card2: 'Kc' } ]
     , summary: [ { type: 'pot', single: true, amount: 104.54 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 76.03 }
        , { seatno: 5, player: 'StoplossNo', chips: 43.84 }
        , { seatno: 8, player: 'Attila406', chips: 50 }
        , { seatno: 10, player: 'danikeen', chips: 104.54 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 17
        , min: 13
        , sec: 43
        , hero: null
        , handid: '7973257541'
        , gameno: '7973257541'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 5 }
     , board: {}
     , posts:
        [ { player: 'Attila406', type: 'sb', amount: 0.5 }
        , { player: 'danikeen', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'FRENCHJS88', type: 'fold' }
        , { player: 'StoplossNo', type: 'raise', amount: 2.5 }
        , { player: 'Attila406', type: 'fold' }
        , { player: 'danikeen', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'StoplossNo', type: 'collect', amount: 2.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 2.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 76.03 }
        , { seatno: 5, player: 'StoplossNo', chips: 45.34 }
        , { seatno: 8, player: 'Attila406', chips: 50 }
        , { seatno: 10, player: 'danikeen', chips: 103.54 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 17
        , min: 13
        , sec: 55
        , hero: null
        , handid: '7973257590'
        , gameno: '7973257590'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 8 }
     , board: {}
     , posts:
        [ { player: 'danikeen', type: 'sb', amount: 0.5 }
        , { player: 'FRENCHJS88', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'StoplossNo', type: 'fold' }
        , { player: 'Attila406', type: 'fold' }
        , { player: 'danikeen', type: 'raise', amount: 2.5 }
        , { player: 'FRENCHJS88', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'danikeen', type: 'collect', amount: 2 } ]
     , summary: [ { type: 'pot', single: true, amount: 2 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 75.03 }
        , { seatno: 5, player: 'StoplossNo', chips: 45.34 }
        , { seatno: 8, player: 'Attila406', chips: 50 }
        , { seatno: 10, player: 'danikeen', chips: 104.54 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 17
        , min: 14
        , sec: 8
        , hero: null
        , handid: '7973258621'
        , gameno: '7973258621'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 10 }
     , board:
        { card1: '6c', card2: 'Ts', card3: 'Jh', card4: '8d', card5: '2h' }
     , posts:
        [ { player: 'FRENCHJS88', type: 'sb', amount: 0.5 }
        , { player: 'StoplossNo', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'Attila406', type: 'raise', amount: 2 }
        , { player: 'danikeen', type: 'fold' }
        , { player: 'FRENCHJS88', type: 'call', amount: 1.5 }
        , { player: 'StoplossNo', type: 'call', amount: 1 } ]
     , flop:
        [ { player: 'FRENCHJS88', type: 'check' }
        , { player: 'StoplossNo', type: 'check' }
        , { player: 'Attila406', type: 'bet', amount: 3 }
        , { player: 'FRENCHJS88', type: 'fold' }
        , { player: 'StoplossNo', type: 'raise', amount: 10 }
        , { player: 'Attila406', type: 'call', amount: 7 } ]
     , turn:
        [ { player: 'StoplossNo', type: 'bet', amount: 33.34 }
        , { player: 'Attila406', type: 'call', amount: 33.34 } ]
     , river: []
     , showdown:
        [ { player: 'StoplossNo', type: 'collect', amount: 88.68 }
        , { player: 'Attila406', type: 'show', card1: 'As', card2: 'Ah' }
        , { player: 'StoplossNo', type: 'show', card1: '6d', card2: 'Jd' } ]
     , summary: [ { type: 'pot', single: true, amount: 88.68 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 73.03 }
        , { seatno: 5, player: 'StoplossNo', chips: 88.68 }
        , { seatno: 8, player: 'Attila406', chips: 50 }
        , { seatno: 10, player: 'danikeen', chips: 104.54 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 17
        , min: 15
        , sec: 10
        , hero: null
        , handid: '7973259866'
        , gameno: '7973259866'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 1 }
     , board: {}
     , posts:
        [ { player: 'StoplossNo', type: 'sb', amount: 0.5 }
        , { player: 'Attila406', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'danikeen', type: 'fold' }
        , { player: 'FRENCHJS88', type: 'fold' }
        , { player: 'StoplossNo', type: 'raise', amount: 2.5 }
        , { player: 'Attila406', type: 'raise', amount: 7 }
        , { player: 'StoplossNo', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'Attila406', type: 'collect', amount: 5 } ]
     , summary: [ { type: 'pot', single: true, amount: 5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'FRENCHJS88', chips: 73.03 }
        , { seatno: 5, player: 'StoplossNo', chips: 86.18 }
        , { seatno: 8, player: 'Attila406', chips: 52.5 }
        , { seatno: 10, player: 'danikeen', chips: 104.54 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 17
        , min: 15
        , sec: 30
        , hero: null
        , handid: '7973259936'
        , gameno: '7973259936'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 5 }
     , board:
        { card1: 'Td', card2: '7c', card3: '7d', card4: '8c', card5: '6c' }
     , posts:
        [ { player: 'Attila406', type: 'sb', amount: 0.5 }
        , { player: 'danikeen', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'FRENCHJS88', type: 'fold' }
        , { player: 'StoplossNo', type: 'fold' }
        , { player: 'Attila406', type: 'raise', amount: 2 }
        , { player: 'danikeen', type: 'call', amount: 1 } ]
     , flop:
        [ { player: 'Attila406', type: 'bet', amount: 3 }
        , { player: 'danikeen', type: 'call', amount: 3 } ]
     , turn:
        [ { player: 'Attila406', type: 'bet', amount: 5 }
        , { player: 'danikeen', type: 'call', amount: 5 } ]
     , river:
        [ { player: 'Attila406', type: 'bet', amount: 18 }
        , { player: 'danikeen', type: 'fold' } ]
     , showdown: [ { player: 'Attila406', type: 'collect', amount: 19 } ]
     , summary: [ { type: 'pot', single: true, amount: 19 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 3, player: 'Cantonius', chips: 50 }
        , { seatno: 5, player: 'StoplossNo', chips: 86.18 }
        , { seatno: 8, player: 'Attila406', chips: 61.5 }
        , { seatno: 10, player: 'danikeen', chips: 94.54 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 17
        , min: 16
        , sec: 35
        , hero: null
        , handid: '7973261477'
        , gameno: '7973261477'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 8 }
     , board: {}
     , posts:
        [ { player: 'danikeen', type: 'sb', amount: 0.5 }
        , { player: 'Cantonius', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'StoplossNo', type: 'raise', amount: 2.5 }
        , { player: 'Attila406', type: 'fold' }
        , { player: 'danikeen', type: 'fold' }
        , { player: 'Cantonius', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'StoplossNo', type: 'collect', amount: 2.5 } ]
     , summary: [ { type: 'pot', single: true, amount: 2.5 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 3, player: 'Cantonius', chips: 50 }
        , { seatno: 8, player: 'Attila406', chips: 61.5 }
        , { seatno: 10, player: 'danikeen', chips: 94.04 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 17
        , min: 16
        , sec: 51
        , hero: null
        , handid: '7973261746'
        , gameno: '7973261746'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 10 }
     , board: {}
     , posts:
        [ { player: 'Cantonius', type: 'sb', amount: 0.5 }
        , { player: 'Attila406', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'danikeen', type: 'fold' }
        , { player: 'Cantonius', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'Attila406', type: 'collect', amount: 1 } ]
     , summary: [ { type: 'pot', single: true, amount: 1 } ]
     , hero: null
     , holecards: null }
    , { seats:
        [ { seatno: 3, player: 'Cantonius', chips: 50 }
        , { seatno: 8, player: 'Attila406', chips: 62 }
        , { seatno: 10, player: 'danikeen', chips: 94.04 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'nolimit'
        , currency: '£'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.5
        , bb: 1
        , ante: 0
        , year: 2018
        , month: 6
        , day: 20
        , hour: 17
        , min: 17
        , sec: 3
        , hero: null
        , handid: '7973261800'
        , gameno: '7973261800'
        , gametype: 'cash' }
     , table:
        { tablename: 'Ebenthal'
        , tableno: 901952806
        , maxseats: 10
        , button: 3 }
     , board: {}
     , posts:
        [ { player: 'Attila406', type: 'sb', amount: 0.5 }
        , { player: 'danikeen', type: 'bb', amount: 1 } ]
     , preflop:
        [ { player: 'Cantonius', type: 'fold' }
        , { player: 'Attila406', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown: [ { player: 'danikeen', type: 'collect', amount: 1 } ]
     , summary: [ { type: 'pot', single: true, amount: 1 } ]
     , hero: null
     , holecards: null } ])
  t.end()
})
