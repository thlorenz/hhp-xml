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
        [ { seatno: 1, player: 'Player1', chips: 19.75 }
        , { seatno: 2, player: 'Hero', chips: 10 }
        , { seatno: 3, player: 'Player3', chips: 21.64 }
        , { seatno: 4, player: 'Player4', chips: 2.26 }
        , { seatno: 5, player: 'Player5', chips: 1.17 }
        , { seatno: 6, player: 'seat6', chips: 0 }
        , { seatno: 7, player: 'Player6', chips: 2.79 }
        , { seatno: 8, player: 'Player7', chips: 3.39 }
        , { seatno: 9, player: 'Player9', chips: 9 }
        , { seatno: 10, player: 'Player10', chips: 4.03 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'limit'
        , currency: '$'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.1
        , bb: 0.2
        , ante: 0
        , year: 2011
        , month: 7
        , day: 22
        , hour: 17
        , min: 31
        , sec: 11
        , hero: 'Hero'
        , handid: '2855468557'
        , gameno: '2855468557'
        , gametype: 'cash' }
     , table: { tablename: 'Gary', tableno: null, maxseats: 10, button: 3 }
     , board: { card1: '8s', card2: '3s', card3: '8d', card4: '8c', card5: '5h' }
     , posts:
        [ { player: 'Player4', type: 'sb', amount: 0.05 }
        , { player: 'Player5', type: 'bb', amount: 0.1 }
        , { player: 'Hero', type: 'sitout', amount: 0 } ]
     , preflop:
        [ { player: 'Player6', type: 'fold' }
        , { player: 'Player7', type: 'call', amount: 0.1 }
        , { player: 'Player9', type: 'call', amount: 0.1 }
        , { player: 'Player10', type: 'raise', amount: 0.2 }
        , { player: 'Player1', type: 'fold' }
        , { player: 'Player3', type: 'raise', amount: 0.3 }
        , { player: 'Player4', type: 'fold' }
        , { player: 'Player5', type: 'fold' }
        , { player: 'Player7', type: 'call', amount: 0.2 }
        , { player: 'Player9', type: 'call', amount: 0.2 }
        , { player: 'Player10', type: 'raise', amount: 0.4 }
        , { player: 'Player3', type: 'call', amount: 0.1 }
        , { player: 'Player7', type: 'call', amount: 0.1 }
        , { player: 'Player9', type: 'call', amount: 0.1 } ]
     , flop:
        [ { player: 'Player7', type: 'check' }
        , { player: 'Player9', type: 'check' }
        , { player: 'Player10', type: 'check' }
        , { player: 'Player3', type: 'bet', amount: 0.1 }
        , { player: 'Player7', type: 'call', amount: 0.1 }
        , { player: 'Player9', type: 'call', amount: 0.1 }
        , { player: 'Player10', type: 'call', amount: 0.1 } ]
     , turn:
        [ { player: 'Player7', type: 'check' }
        , { player: 'Player9', type: 'check' }
        , { player: 'Player10', type: 'bet', amount: 0.2 }
        , { player: 'Player3', type: 'raise', amount: 0.4 }
        , { player: 'Player7', type: 'call', amount: 0.4 }
        , { player: 'Player9', type: 'fold' }
        , { player: 'Player10', type: 'call', amount: 0.2 } ]
     , river:
        [ { player: 'Player7', type: 'check' }
        , { player: 'Player10', type: 'check' }
        , { player: 'Player3', type: 'bet', amount: 0.2 }
        , { player: 'Player7', type: 'call', amount: 0.2 }
        , { player: 'Player10', type: 'call', amount: 0.2 } ]
     , showdown:
        [ { player: 'Player3', type: 'collect', amount: 3.76 }
        , { player: 'Player3', type: 'show', card1: 'Qh', card2: 'Qd' }
        , { player: 'Player7', type: 'show', card1: 'Jc', card2: 'Ac' }
        , { player: 'Player10', type: 'show', card1: 'Ah', card2: '9h' } ]
     , summary: [ { type: 'pot', single: true, amount: 3.76 } ]
     , hero: 'Hero'
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Player1', chips: 19.75 }
        , { seatno: 2, player: 'Hero', chips: 10 }
        , { seatno: 3, player: 'Player3', chips: 24.3 }
        , { seatno: 4, player: 'Player4', chips: 2.21 }
        , { seatno: 5, player: 'Player5', chips: 1.07 }
        , { seatno: 6, player: 'Player11', chips: 4.51 }
        , { seatno: 7, player: 'Player6', chips: 2.79 }
        , { seatno: 8, player: 'Player7', chips: 2.29 }
        , { seatno: 9, player: 'Player9', chips: 8.5 }
        , { seatno: 10, player: 'Player10', chips: 2.93 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'limit'
        , currency: '$'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.1
        , bb: 0.2
        , ante: 0
        , year: 2011
        , month: 7
        , day: 22
        , hour: 17
        , min: 32
        , sec: 47
        , hero: 'Hero'
        , handid: '2855470872'
        , gameno: '2855470872'
        , gametype: 'cash' }
     , table: { tablename: 'Gary', tableno: null, maxseats: 10, button: 4 }
     , board: { card1: '9c', card2: '3c', card3: '7c', card4: '2s', card5: '7h' }
     , posts:
        [ { player: 'Player5', type: 'sb', amount: 0.05 }
        , { player: 'Player11', type: 'bb', amount: 0.1 } ]
     , preflop:
        [ { player: 'Player6', type: 'fold' }
        , { player: 'Player7', type: 'fold' }
        , { player: 'Player9', type: 'fold' }
        , { player: 'Player10', type: 'raise', amount: 0.2 }
        , { player: 'Player1', type: 'fold' }
        , { player: 'Player3', type: 'fold' }
        , { player: 'Player4', type: 'fold' }
        , { player: 'Player5', type: 'call', amount: 0.15 }
        , { player: 'Player11', type: 'call', amount: 0.1 } ]
     , flop:
        [ { player: 'Player5', type: 'check' }
        , { player: 'Player11', type: 'check' }
        , { player: 'Player10', type: 'check' } ]
     , turn:
        [ { player: 'Player5', type: 'check' }
        , { player: 'Player11', type: 'check' }
        , { player: 'Player10', type: 'bet', amount: 0.2 }
        , { player: 'Player5', type: 'call', amount: 0.2 }
        , { player: 'Player11', type: 'call', amount: 0.2 } ]
     , river:
        [ { player: 'Player5', type: 'check' }
        , { player: 'Player11', type: 'check' }
        , { player: 'Player10', type: 'check' } ]
     , showdown:
        [ { player: 'Player5', type: 'collect', amount: 1.14 }
        , { player: 'Player5', type: 'show', card1: '9d', card2: '4h' }
        , { player: 'Player11', type: 'show', card1: 'Kd', card2: 'Ah' }
        , { player: 'Player10', type: 'show', card1: 'Kh', card2: 'Jd' } ]
     , summary: [ { type: 'pot', single: true, amount: 1.14 } ]
     , hero: 'Hero'
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Player1', chips: 19.75 }
        , { seatno: 2, player: 'Hero', chips: 10 }
        , { seatno: 3, player: 'Player3', chips: 24.3 }
        , { seatno: 4, player: 'Player4', chips: 2.21 }
        , { seatno: 5, player: 'Player5', chips: 1.81 }
        , { seatno: 6, player: 'Player11', chips: 4.11 }
        , { seatno: 7, player: 'Player6', chips: 2.79 }
        , { seatno: 8, player: 'Player7', chips: 2.29 }
        , { seatno: 9, player: 'Player9', chips: 8.5 }
        , { seatno: 10, player: 'Player10', chips: 2.53 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'limit'
        , currency: '$'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.1
        , bb: 0.2
        , ante: 0
        , year: 2011
        , month: 7
        , day: 22
        , hour: 17
        , min: 33
        , sec: 48
        , hero: 'Hero'
        , handid: '2855472319'
        , gameno: '2855472319'
        , gametype: 'cash' }
     , table: { tablename: 'Gary', tableno: null, maxseats: 10, button: 5 }
     , board: { card1: '4d', card2: '7h', card3: 'As', card4: '5c', card5: '9h' }
     , posts:
        [ { player: 'Player11', type: 'sb', amount: 0.05 }
        , { player: 'Player6', type: 'bb', amount: 0.1 } ]
     , preflop:
        [ { player: 'Player7', type: 'raise', amount: 0.2 }
        , { player: 'Player9', type: 'fold' }
        , { player: 'Player10', type: 'fold' }
        , { player: 'Player1', type: 'fold' }
        , { player: 'Player3', type: 'fold' }
        , { player: 'Player4', type: 'raise', amount: 0.3 }
        , { player: 'Player5', type: 'call', amount: 0.3 }
        , { player: 'Player11', type: 'fold' }
        , { player: 'Player6', type: 'fold' }
        , { player: 'Player7', type: 'allin', amount: -0.3, raiseTo: 0 } ]
     , flop:
        [ { player: 'Player4', type: 'check' }
        , { player: 'Player5', type: 'check' } ]
     , turn:
        [ { player: 'Player4', type: 'bet', amount: 0.2 }
        , { player: 'Player5', type: 'fold' } ]
     , river: []
     , showdown:
        [ { player: 'Player4', type: 'collect', amount: 0.39 }
        , { player: 'Player7', type: 'collect', amount: 0.72 }
        , { player: 'Player4', type: 'show', card1: 'Jd', card2: 'Qh' }
        , { player: 'Player7', type: 'show', card1: 'Js', card2: 'Jh' } ]
     , summary: [ { type: 'pot', single: false, amount: 1.1099999999999999 } ]
     , hero: 'Hero'
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Player1', chips: 19.75 }
        , { seatno: 2, player: 'Hero', chips: 10 }
        , { seatno: 3, player: 'Player3', chips: 24.3 }
        , { seatno: 4, player: 'Player4', chips: 2.1 }
        , { seatno: 5, player: 'Player5', chips: 1.51 }
        , { seatno: 6, player: 'Player11', chips: 4.06 }
        , { seatno: 7, player: 'Player6', chips: 2.69 }
        , { seatno: 8, player: 'Player7', chips: 2.81 }
        , { seatno: 9, player: 'Player9', chips: 8.5 }
        , { seatno: 10, player: 'Player10', chips: 2.53 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'limit'
        , currency: '$'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.1
        , bb: 0.2
        , ante: 0
        , year: 2011
        , month: 7
        , day: 22
        , hour: 17
        , min: 35
        , sec: 11
        , hero: 'Hero'
        , handid: '2855474281'
        , gameno: '2855474281'
        , gametype: 'cash' }
     , table: { tablename: 'Gary', tableno: null, maxseats: 10, button: 6 }
     , board: { card1: '2d', card2: '9h', card3: '2h', card4: '6h', card5: '8c' }
     , posts:
        [ { player: 'Player6', type: 'sb', amount: 0.05 }
        , { player: 'Player10', type: 'bb', amount: 0.1 } ]
     , preflop:
        [ { player: 'Player9', type: 'sitout', amount: 0, raiseTo: 0 }
        , { player: 'Player1', type: 'fold' }
        , { player: 'Player3', type: 'call', amount: 0.1 }
        , { player: 'Player4', type: 'raise', amount: 0.2 }
        , { player: 'Player5', type: 'call', amount: 0.2 }
        , { player: 'Player11', type: 'fold' }
        , { player: 'Player6', type: 'fold' }
        , { player: 'Player10', type: 'raise', amount: 0.3 }
        , { player: 'Player3', type: 'call', amount: 0.2 }
        , { player: 'Player4', type: 'call', amount: 0.1 }
        , { player: 'Player5', type: 'call', amount: 0.1 } ]
     , flop:
        [ { player: 'Player10', type: 'bet', amount: 0.1 }
        , { player: 'Player3', type: 'fold' }
        , { player: 'Player4', type: 'call', amount: 0.1 }
        , { player: 'Player5', type: 'call', amount: 0.1 } ]
     , turn:
        [ { player: 'Player10', type: 'bet', amount: 0.2 }
        , { player: 'Player4', type: 'call', amount: 0.2 }
        , { player: 'Player5', type: 'call', amount: 0.2 } ]
     , river:
        [ { player: 'Player10', type: 'bet', amount: 0.2 }
        , { player: 'Player4', type: 'fold' }
        , { player: 'Player5', type: 'call', amount: 0.2 } ]
     , showdown:
        [ { player: 'Player10', type: 'collect', amount: 2.43 }
        , { player: 'Player5', type: 'show', card1: '9d', card2: '6c' }
        , { player: 'Player10', type: 'show', card1: '6s', card2: '6d' } ]
     , summary: [ { type: 'pot', single: true, amount: 2.43 } ]
     , hero: 'Hero'
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Player1', chips: 19.75 }
        , { seatno: 2, player: 'Hero', chips: 10 }
        , { seatno: 3, player: 'Player3', chips: 24 }
        , { seatno: 4, player: 'Player4', chips: 1.5 }
        , { seatno: 5, player: 'Player5', chips: 0.71 }
        , { seatno: 6, player: 'Player11', chips: 4.06 }
        , { seatno: 7, player: 'Player6', chips: 2.64 }
        , { seatno: 8, player: 'Player7', chips: 2.81 }
        , { seatno: 9, player: 'Player9', chips: 8.5 }
        , { seatno: 10, player: 'Player10', chips: 4.16 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'limit'
        , currency: '$'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.1
        , bb: 0.2
        , ante: 0
        , year: 2011
        , month: 7
        , day: 22
        , hour: 17
        , min: 36
        , sec: 53
        , hero: 'Hero'
        , handid: '2855476711'
        , gameno: '2855476711'
        , gametype: 'cash' }
     , table: { tablename: 'Gary', tableno: null, maxseats: 10, button: 7 }
     , board: { card1: '4h', card2: 'Ks', card3: '3c', card4: '3s', card5: '9h' }
     , posts:
        [ { player: 'Player10', type: 'sb', amount: 0.05 }
        , { player: 'Player1', type: 'bb', amount: 0.1 } ]
     , preflop:
        [ { player: 'Player3', type: 'fold' }
        , { player: 'Player4', type: 'fold' }
        , { player: 'Player5', type: 'fold' }
        , { player: 'Player11', type: 'call', amount: 0.1 }
        , { player: 'Player6', type: 'fold' }
        , { player: 'Player10', type: 'call', amount: 0.05 }
        , { player: 'Player1', type: 'check' } ]
     , flop:
        [ { player: 'Player10', type: 'check' }
        , { player: 'Player1', type: 'check' }
        , { player: 'Player11', type: 'bet', amount: 0.1 }
        , { player: 'Player10', type: 'raise', amount: 0.2 }
        , { player: 'Player1', type: 'fold' }
        , { player: 'Player11', type: 'call', amount: 0.1 } ]
     , turn:
        [ { player: 'Player10', type: 'bet', amount: 0.2 }
        , { player: 'Player11', type: 'call', amount: 0.2 } ]
     , river:
        [ { player: 'Player10', type: 'bet', amount: 0.2 }
        , { player: 'Player11', type: 'raise', amount: 0.4 }
        , { player: 'Player10', type: 'call', amount: 0.2 } ]
     , showdown:
        [ { player: 'Player11', type: 'collect', amount: 1.81 }
        , { player: 'Player11', type: 'show', card1: '9s', card2: '9c' }
        , { player: 'Player10', type: 'show', card1: '4d', card2: 'Qh' } ]
     , summary: [ { type: 'pot', single: true, amount: 1.81 } ]
     , hero: 'Hero'
     , holecards: null }
    , { seats:
        [ { seatno: 1, player: 'Player1', chips: 19.65 }
        , { seatno: 2, player: 'Hero', chips: 10 }
        , { seatno: 3, player: 'Player3', chips: 24 }
        , { seatno: 4, player: 'Player4', chips: 1.5 }
        , { seatno: 5, player: 'Player5', chips: 0.71 }
        , { seatno: 6, player: 'Player11', chips: 4.97 }
        , { seatno: 7, player: 'Player6', chips: 2.64 }
        , { seatno: 8, player: 'Player7', chips: 2.81 }
        , { seatno: 9, player: 'Player9', chips: 8.5 }
        , { seatno: 10, player: 'Player10', chips: 3.26 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'limit'
        , currency: '$'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.1
        , bb: 0.2
        , ante: 0
        , year: 2011
        , month: 7
        , day: 22
        , hour: 17
        , min: 37
        , sec: 45
        , hero: 'Hero'
        , handid: '2855477956'
        , gameno: '2855477956'
        , gametype: 'cash' }
     , table: { tablename: 'Gary', tableno: null, maxseats: 10, button: 10 }
     , board: { card1: '2d', card2: 'Kh', card3: '3d', card4: '2h', card5: '6d' }
     , posts:
        [ { player: 'Player1', type: 'sb', amount: 0.05 }
        , { player: 'Hero', type: 'bb', amount: 0.1 }
        , { player: 'Player7', type: 'bb', amount: 0.15 } ]
     , preflop:
        [ { player: 'Player3', type: 'fold' }
        , { player: 'Player4', type: 'raise', amount: 0.2 }
        , { player: 'Player5', type: 'call', amount: 0.2 }
        , { player: 'Player11', type: 'fold' }
        , { player: 'Player6', type: 'fold' }
        , { player: 'Player7', type: 'call', amount: 0.1 }
        , { player: 'Player10', type: 'fold' }
        , { player: 'Player1', type: 'raise', amount: 0.3 }
        , { player: 'Hero', type: 'fold' }
        , { player: 'Player4', type: 'raise', amount: 0.4 }
        , { player: 'Player5', type: 'call', amount: 0.2 }
        , { player: 'Player7', type: 'call', amount: 0.2 }
        , { player: 'Player1', type: 'call', amount: 0.1 } ]
     , flop:
        [ { player: 'Player1', type: 'check' }
        , { player: 'Player4', type: 'bet', amount: 0.1 }
        , { player: 'Player5', type: 'fold' }
        , { player: 'Player7', type: 'call', amount: 0.1 }
        , { player: 'Player1', type: 'call', amount: 0.1 } ]
     , turn:
        [ { player: 'Player1', type: 'check' }
        , { player: 'Player4', type: 'bet', amount: 0.2 }
        , { player: 'Player7', type: 'call', amount: 0.2 }
        , { player: 'Player1', type: 'call', amount: 0.2 } ]
     , river:
        [ { player: 'Player1', type: 'check' }
        , { player: 'Player4', type: 'bet', amount: 0.2 }
        , { player: 'Player7', type: 'fold' }
        , { player: 'Player1', type: 'call', amount: 0.2 } ]
     , showdown:
        [ { player: 'Player1', type: 'collect', amount: 2.9 }
        , { player: 'Player1', type: 'show', card1: 'Qd', card2: 'Qc' }
        , { player: 'Hero', type: 'show', card1: '3s', card2: '6c' }
        , { player: 'Player4', type: 'show', card1: 'Jd', card2: 'Qs' } ]
     , summary: [ { type: 'pot', single: true, amount: 2.9 } ]
     , hero: 'Hero'
     , holecards: { card1: '3s', card2: '6c' } }
    , { seats:
        [ { seatno: 1, player: 'Player1', chips: 21.65 }
        , { seatno: 2, player: 'Hero', chips: 9.9 }
        , { seatno: 3, player: 'Player3', chips: 24 }
        , { seatno: 4, player: 'Player4', chips: 0.6 }
        , { seatno: 5, player: 'Player5', chips: 0.31 }
        , { seatno: 6, player: 'Player11', chips: 4.97 }
        , { seatno: 7, player: 'Player6', chips: 2.64 }
        , { seatno: 8, player: 'Player7', chips: 2.06 }
        , { seatno: 9, player: 'seat9', chips: 0 }
        , { seatno: 10, player: 'Player10', chips: 3.26 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'limit'
        , currency: '$'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.1
        , bb: 0.2
        , ante: 0
        , year: 2011
        , month: 7
        , day: 22
        , hour: 17
        , min: 39
        , sec: 16
        , hero: 'Hero'
        , handid: '2855480126'
        , gameno: '2855480126'
        , gametype: 'cash' }
     , table: { tablename: 'Gary', tableno: null, maxseats: 10, button: 1 }
     , board: { card1: 'Js', card2: '5c', card3: '7c', card4: '7d', card5: '3s' }
     , posts:
        [ { player: 'Hero', type: 'sb', amount: 0.05 }
        , { player: 'Player3', type: 'bb', amount: 0.1 } ]
     , preflop:
        [ { player: 'Player4', type: 'fold' }
        , { player: 'Player5', type: 'call', amount: 0.1 }
        , { player: 'Player11', type: 'call', amount: 0.1 }
        , { player: 'Player6', type: 'call', amount: 0.1 }
        , { player: 'Player7', type: 'fold' }
        , { player: 'Player10', type: 'fold' }
        , { player: 'Player1', type: 'raise', amount: 0.2 }
        , { player: 'Hero', type: 'fold' }
        , { player: 'Player3', type: 'fold' }
        , { player: 'Player5', type: 'call', amount: 0.1 }
        , { player: 'Player11', type: 'call', amount: 0.1 }
        , { player: 'Player6', type: 'call', amount: 0.1 } ]
     , flop:
        [ { player: 'Player5', type: 'check' }
        , { player: 'Player11', type: 'bet', amount: 0.1 }
        , { player: 'Player6', type: 'raise', amount: 0.2 }
        , { player: 'Player1', type: 'fold' }
        , { player: 'Player5'
          , type: 'allin'
          , amount: 0.009999999999999995
          , raiseTo: 0.11 }
        , { player: 'Player11', type: 'call', amount: 0.1 } ]
     , turn:
        [ { player: 'Player11', type: 'check' }
        , { player: 'Player6', type: 'bet', amount: 0.2 }
        , { player: 'Player11', type: 'call', amount: 0.2 } ]
     , river:
        [ { player: 'Player11', type: 'check' }
        , { player: 'Player6', type: 'bet', amount: 0.2 }
        , { player: 'Player11', type: 'call', amount: 0.2 } ]
     , showdown:
        [ { player: 'Player6', type: 'collect', amount: 2.15 }
        , { player: 'Hero', type: 'show', card1: '2c', card2: '8h' }
        , { player: 'Player5', type: 'show', card1: '2s', card2: '4s' }
        , { player: 'Player11', type: 'show', card1: 'Th', card2: 'Ts' }
        , { player: 'Player6', type: 'show', card1: 'Jh', card2: '9h' } ]
     , summary: [ { type: 'pot', single: true, amount: 2.15 } ]
     , hero: 'Hero'
     , holecards: { card1: '2c', card2: '8h' } }
    , { seats:
        [ { seatno: 1, player: 'Player1', chips: 21.45 }
        , { seatno: 2, player: 'Hero', chips: 9.85 }
        , { seatno: 3, player: 'Player3', chips: 23.9 }
        , { seatno: 4, player: 'Player4', chips: 0.6 }
        , { seatno: 5, player: 'Player5', chips: 0 }
        , { seatno: 6, player: 'Player11', chips: 4.17 }
        , { seatno: 7, player: 'Player6', chips: 3.99 }
        , { seatno: 8, player: 'Player7', chips: 2.06 }
        , { seatno: 9, player: 'seat9', chips: 0 }
        , { seatno: 10, player: 'Player10', chips: 3.26 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'limit'
        , currency: '$'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.1
        , bb: 0.2
        , ante: 0
        , year: 2011
        , month: 7
        , day: 22
        , hour: 17
        , min: 40
        , sec: 59
        , hero: 'Hero'
        , handid: '2855482647'
        , gameno: '2855482647'
        , gametype: 'cash' }
     , table: { tablename: 'Gary', tableno: null, maxseats: 10, button: 2 }
     , board: { card1: '8c', card2: '3d', card3: '3h' }
     , posts:
        [ { player: 'Player3', type: 'sb', amount: 0.05 }
        , { player: 'Player4', type: 'bb', amount: 0.1 } ]
     , preflop:
        [ { player: 'Player11', type: 'call', amount: 0.1 }
        , { player: 'Player6', type: 'fold' }
        , { player: 'Player10', type: 'fold' }
        , { player: 'Player1', type: 'fold' }
        , { player: 'Hero', type: 'call', amount: 0.1 }
        , { player: 'Player3', type: 'fold' }
        , { player: 'Player4', type: 'check' } ]
     , flop:
        [ { player: 'Player4', type: 'check' }
        , { player: 'Player11', type: 'check' }
        , { player: 'Hero', type: 'bet', amount: 0.1 }
        , { player: 'Player4', type: 'fold' }
        , { player: 'Player11', type: 'fold' } ]
     , turn: []
     , river: []
     , showdown:
        [ { player: 'Hero', type: 'collect', amount: 0.44 }
        , { player: 'Hero', type: 'show', card1: '9s', card2: 'Td' } ]
     , summary: [ { type: 'pot', single: true, amount: 0.44 } ]
     , hero: 'Hero'
     , holecards: { card1: '9s', card2: 'Td' } }
    , { seats:
        [ { seatno: 1, player: 'Player1', chips: 21.45 }
        , { seatno: 2, player: 'Hero', chips: 10.09 }
        , { seatno: 3, player: 'Player3', chips: 23.85 }
        , { seatno: 4, player: 'Player4', chips: 0.5 }
        , { seatno: 5, player: 'seat5', chips: 0 }
        , { seatno: 6, player: 'Player11', chips: 4.07 }
        , { seatno: 7, player: 'Player6', chips: 3.99 }
        , { seatno: 8, player: 'Player7', chips: 2.06 }
        , { seatno: 9, player: 'seat9', chips: 0 }
        , { seatno: 10, player: 'Player10', chips: 3.26 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'limit'
        , currency: '$'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.1
        , bb: 0.2
        , ante: 0
        , year: 2011
        , month: 7
        , day: 22
        , hour: 17
        , min: 42
        , sec: 4
        , hero: 'Hero'
        , handid: '2855484207'
        , gameno: '2855484207'
        , gametype: 'cash' }
     , table: { tablename: 'Gary', tableno: null, maxseats: 10, button: 3 }
     , board: { card1: '2s', card2: 'Jh', card3: '5c', card4: '6h', card5: '7c' }
     , posts:
        [ { player: 'Player4', type: 'sb', amount: 0.05 }
        , { player: 'Player11', type: 'bb', amount: 0.1 } ]
     , preflop:
        [ { player: 'Player6', type: 'raise', amount: 0.2 }
        , { player: 'Player7', type: 'raise', amount: 0.3 }
        , { player: 'Player10', type: 'call', amount: 0.3 }
        , { player: 'Player1', type: 'fold' }
        , { player: 'Hero', type: 'fold' }
        , { player: 'Player3', type: 'fold' }
        , { player: 'Player4', type: 'raise', amount: 0.4 }
        , { player: 'Player11', type: 'fold' }
        , { player: 'Player6', type: 'call', amount: 0.2 }
        , { player: 'Player7', type: 'call', amount: 0.1 }
        , { player: 'Player10', type: 'call', amount: 0.1 } ]
     , flop:
        [ { player: 'Player4', type: 'allin', amount: 0.1, raiseTo: 0.1 }
        , { player: 'Player6', type: 'call', amount: 0.1 }
        , { player: 'Player7', type: 'raise', amount: 0.2 }
        , { player: 'Player10', type: 'fold' }
        , { player: 'Player6', type: 'call', amount: 0.1 } ]
     , turn:
        [ { player: 'Player6', type: 'check' }
        , { player: 'Player7', type: 'bet', amount: 0.2 }
        , { player: 'Player6', type: 'fold' } ]
     , river: []
     , showdown:
        [ { player: 'Player4', type: 'collect', amount: 1.9 }
        , { player: 'Player7', type: 'collect', amount: 0.39 }
        , { player: 'Hero', type: 'show', card1: '4s', card2: '3d' }
        , { player: 'Player4', type: 'show', card1: '6c', card2: '6s' }
        , { player: 'Player7', type: 'show', card1: 'Jc', card2: 'Ad' } ]
     , summary: [ { type: 'pot', single: false, amount: 2.29 } ]
     , hero: 'Hero'
     , holecards: { card1: '4s', card2: '3d' } }
    , { seats:
        [ { seatno: 1, player: 'Player1', chips: 21.45 }
        , { seatno: 2, player: 'Hero', chips: 10.09 }
        , { seatno: 3, player: 'Player3', chips: 23.85 }
        , { seatno: 4, player: 'Player4', chips: 1.9 }
        , { seatno: 5, player: 'seat5', chips: 0 }
        , { seatno: 6, player: 'Player11', chips: 3.97 }
        , { seatno: 7, player: 'Player6', chips: 3.39 }
        , { seatno: 8, player: 'Player7', chips: 1.65 }
        , { seatno: 9, player: 'seat9', chips: 0 }
        , { seatno: 10, player: 'Player10', chips: 2.86 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'limit'
        , currency: '$'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.1
        , bb: 0.2
        , ante: 0
        , year: 2011
        , month: 7
        , day: 22
        , hour: 17
        , min: 44
        , sec: 13
        , hero: 'Hero'
        , handid: '2855487325'
        , gameno: '2855487325'
        , gametype: 'cash' }
     , table: { tablename: 'Gary', tableno: null, maxseats: 10, button: 4 }
     , board: {}
     , posts:
        [ { player: 'Player11', type: 'sb', amount: 0.05 }
        , { player: 'Player6', type: 'bb', amount: 0.1 } ]
     , preflop:
        [ { player: 'Player7', type: 'fold' }
        , { player: 'Player10', type: 'fold' }
        , { player: 'Player1', type: 'fold' }
        , { player: 'Hero', type: 'fold' }
        , { player: 'Player3', type: 'fold' }
        , { player: 'Player4', type: 'raise', amount: 0.2 }
        , { player: 'Player11', type: 'fold' }
        , { player: 'Player6', type: 'fold' } ]
     , flop: []
     , turn: []
     , river: []
     , showdown:
        [ { player: 'Player4', type: 'collect', amount: 0.35 }
        , { player: 'Hero', type: 'show', card1: 'Th', card2: '3c' } ]
     , summary: [ { type: 'pot', single: true, amount: 0.35 } ]
     , hero: 'Hero'
     , holecards: { card1: 'Th', card2: '3c' } }
    , { seats:
        [ { seatno: 1, player: 'Player1', chips: 21.45 }
        , { seatno: 2, player: 'Hero', chips: 10.09 }
        , { seatno: 3, player: 'Player3', chips: 23.85 }
        , { seatno: 4, player: 'Player4', chips: 2.05 }
        , { seatno: 5, player: 'Player12', chips: 2 }
        , { seatno: 6, player: 'Player11', chips: 3.92 }
        , { seatno: 7, player: 'Player6', chips: 3.29 }
        , { seatno: 8, player: 'Player7', chips: 1.65 }
        , { seatno: 9, player: 'seat9', chips: 0 }
        , { seatno: 10, player: 'Player10', chips: 2.86 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'limit'
        , currency: '$'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.1
        , bb: 0.2
        , ante: 0
        , year: 2011
        , month: 7
        , day: 22
        , hour: 17
        , min: 44
        , sec: 45
        , hero: 'Hero'
        , handid: '2855488108'
        , gameno: '2855488108'
        , gametype: 'cash' }
     , table: { tablename: 'Gary', tableno: null, maxseats: 10, button: 6 }
     , board: { card1: 'Ks', card2: '9c', card3: '8s', card4: '4h', card5: '2s' }
     , posts:
        [ { player: 'Player6', type: 'sb', amount: 0.05 }
        , { player: 'Player7', type: 'bb', amount: 0.1 }
        , { player: 'Player12', type: 'bb', amount: 0.1 } ]
     , preflop:
        [ { player: 'Player10', type: 'raise', amount: 0.2 }
        , { player: 'Player1', type: 'fold' }
        , { player: 'Hero', type: 'fold' }
        , { player: 'Player3', type: 'fold' }
        , { player: 'Player4', type: 'fold' }
        , { player: 'Player12', type: 'fold' }
        , { player: 'Player11', type: 'raise', amount: 0.3 }
        , { player: 'Player6', type: 'fold' }
        , { player: 'Player7', type: 'call', amount: 0.2 }
        , { player: 'Player10', type: 'call', amount: 0.1 } ]
     , flop:
        [ { player: 'Player7', type: 'bet', amount: 0.1 }
        , { player: 'Player10', type: 'call', amount: 0.1 }
        , { player: 'Player11', type: 'call', amount: 0.1 } ]
     , turn:
        [ { player: 'Player7', type: 'bet', amount: 0.2 }
        , { player: 'Player10', type: 'call', amount: 0.2 }
        , { player: 'Player11', type: 'call', amount: 0.2 } ]
     , river:
        [ { player: 'Player7', type: 'bet', amount: 0.2 }
        , { player: 'Player10', type: 'fold' }
        , { player: 'Player11', type: 'call', amount: 0.2 } ]
     , showdown:
        [ { player: 'Player11', type: 'collect', amount: 2.24 }
        , { player: 'Hero', type: 'show', card1: 'Kc', card2: '3h' }
        , { player: 'Player11', type: 'show', card1: 'Jc', card2: 'Js' }
        , { player: 'Player7', type: 'show', card1: '9s', card2: 'Qh' } ]
     , summary: [ { type: 'pot', single: true, amount: 2.24 } ]
     , hero: 'Hero'
     , holecards: { card1: 'Kc', card2: '3h' } }
    , { seats:
        [ { seatno: 1, player: 'Player1', chips: 21.45 }
        , { seatno: 2, player: 'Hero', chips: 10.09 }
        , { seatno: 3, player: 'Player3', chips: 23.85 }
        , { seatno: 4, player: 'Player4', chips: 2.05 }
        , { seatno: 5, player: 'Player12', chips: 1.9 }
        , { seatno: 6, player: 'Player11', chips: 5.36 }
        , { seatno: 7, player: 'Player6', chips: 3.24 }
        , { seatno: 8, player: 'Player7', chips: 0.85 }
        , { seatno: 9, player: 'seat9', chips: 0 }
        , { seatno: 10, player: 'Player10', chips: 2.26 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'limit'
        , currency: '$'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.1
        , bb: 0.2
        , ante: 0
        , year: 2011
        , month: 7
        , day: 22
        , hour: 17
        , min: 45
        , sec: 48
        , hero: 'Hero'
        , handid: '2855489645'
        , gameno: '2855489645'
        , gametype: 'cash' }
     , table: { tablename: 'Gary', tableno: null, maxseats: 10, button: 7 }
     , board: { card1: '8d', card2: '4s', card3: '2s', card4: 'Qc', card5: 'Ts' }
     , posts:
        [ { player: 'Player7', type: 'sb', amount: 0.05 }
        , { player: 'Player10', type: 'bb', amount: 0.1 } ]
     , preflop:
        [ { player: 'Player1', type: 'call', amount: 0.1 }
        , { player: 'Hero', type: 'fold' }
        , { player: 'Player3', type: 'raise', amount: 0.2 }
        , { player: 'Player4', type: 'fold' }
        , { player: 'Player12', type: 'fold' }
        , { player: 'Player11', type: 'fold' }
        , { player: 'Player6', type: 'fold' }
        , { player: 'Player7', type: 'call', amount: 0.15 }
        , { player: 'Player10', type: 'call', amount: 0.1 }
        , { player: 'Player1', type: 'call', amount: 0.1 } ]
     , flop:
        [ { player: 'Player7', type: 'check' }
        , { player: 'Player10', type: 'check' }
        , { player: 'Player1', type: 'bet', amount: 0.1 }
        , { player: 'Player3', type: 'raise', amount: 0.2 }
        , { player: 'Player7', type: 'fold' }
        , { player: 'Player10', type: 'call', amount: 0.2 }
        , { player: 'Player1', type: 'call', amount: 0.1 } ]
     , turn:
        [ { player: 'Player10', type: 'check' }
        , { player: 'Player1', type: 'check' }
        , { player: 'Player3', type: 'bet', amount: 0.2 }
        , { player: 'Player10', type: 'call', amount: 0.2 }
        , { player: 'Player1', type: 'fold' } ]
     , river:
        [ { player: 'Player10', type: 'check' }
        , { player: 'Player3', type: 'check' } ]
     , showdown:
        [ { player: 'Player3', type: 'collect', amount: 1.71 }
        , { player: 'Hero', type: 'show', card1: 'Ac', card2: '5s' }
        , { player: 'Player3', type: 'show', card1: 'Jc', card2: 'Jd' }
        , { player: 'Player10', type: 'show', card1: 'Kd', card2: '4c' } ]
     , summary: [ { type: 'pot', single: true, amount: 1.71 } ]
     , hero: 'Hero'
     , holecards: { card1: 'Ac', card2: '5s' } }
    , { seats:
        [ { seatno: 1, player: 'Player1', chips: 21.05 }
        , { seatno: 2, player: 'Hero', chips: 10.09 }
        , { seatno: 3, player: 'Player3', chips: 24.96 }
        , { seatno: 4, player: 'Player4', chips: 2.05 }
        , { seatno: 5, player: 'Player12', chips: 1.9 }
        , { seatno: 6, player: 'Player11', chips: 5.36 }
        , { seatno: 7, player: 'Player6', chips: 3.24 }
        , { seatno: 8, player: 'Player7', chips: 0.65 }
        , { seatno: 9, player: 'Player13', chips: 2 }
        , { seatno: 10, player: 'Player10', chips: 1.66 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'limit'
        , currency: '$'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.1
        , bb: 0.2
        , ante: 0
        , year: 2011
        , month: 7
        , day: 22
        , hour: 17
        , min: 47
        , sec: 32
        , hero: 'Hero'
        , handid: '2855492126'
        , gameno: '2855492126'
        , gametype: 'cash' }
     , table: { tablename: 'Gary', tableno: null, maxseats: 10, button: 8 }
     , board: { card1: '7h', card2: 'Ts', card3: 'Qs', card4: '8s', card5: 'Qd' }
     , posts:
        [ { player: 'Player10', type: 'sb', amount: 0.05 }
        , { player: 'Player1', type: 'bb', amount: 0.1 } ]
     , preflop:
        [ { player: 'Hero', type: 'fold' }
        , { player: 'Player3', type: 'fold' }
        , { player: 'Player4', type: 'raise', amount: 0.2 }
        , { player: 'Player12', type: 'fold' }
        , { player: 'Player11', type: 'fold' }
        , { player: 'Player6', type: 'fold' }
        , { player: 'Player7', type: 'fold' }
        , { player: 'Player10', type: 'fold' }
        , { player: 'Player1', type: 'call', amount: 0.1 } ]
     , flop:
        [ { player: 'Player1', type: 'check' }
        , { player: 'Player4', type: 'bet', amount: 0.1 }
        , { player: 'Player1', type: 'call', amount: 0.1 } ]
     , turn:
        [ { player: 'Player1', type: 'bet', amount: 0.2 }
        , { player: 'Player4', type: 'raise', amount: 0.4 }
        , { player: 'Player1', type: 'call', amount: 0.2 } ]
     , river:
        [ { player: 'Player1', type: 'check' }
        , { player: 'Player4', type: 'bet', amount: 0.2 }
        , { player: 'Player1', type: 'fold' } ]
     , showdown:
        [ { player: 'Player4', type: 'collect', amount: 1.58 }
        , { player: 'Hero', type: 'show', card1: '2s', card2: '2c' } ]
     , summary: [ { type: 'pot', single: true, amount: 1.58 } ]
     , hero: 'Hero'
     , holecards: { card1: '2s', card2: '2c' } }
    , { seats:
        [ { seatno: 1, player: 'Player1', chips: 20.35 }
        , { seatno: 2, player: 'Hero', chips: 10.09 }
        , { seatno: 3, player: 'Player3', chips: 24.96 }
        , { seatno: 4, player: 'Player4', chips: 2.73 }
        , { seatno: 5, player: 'Player12', chips: 1.9 }
        , { seatno: 6, player: 'Player11', chips: 5.36 }
        , { seatno: 7, player: 'Player6', chips: 3.24 }
        , { seatno: 8, player: 'Player14', chips: 0 }
        , { seatno: 9, player: 'Player13', chips: 2 }
        , { seatno: 10, player: 'Player10', chips: 1.61 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'limit'
        , currency: '$'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.1
        , bb: 0.2
        , ante: 0
        , year: 2011
        , month: 7
        , day: 22
        , hour: 17
        , min: 48
        , sec: 35
        , hero: 'Hero'
        , handid: '2855493682'
        , gameno: '2855493682'
        , gametype: 'cash' }
     , table: { tablename: 'Gary', tableno: null, maxseats: 10, button: 10 }
     , board: { card1: '8h', card2: '2c', card3: '9h', card4: 'Ks', card5: '6c' }
     , posts:
        [ { player: 'Player1', type: 'sb', amount: 0.05 }
        , { player: 'Hero', type: 'bb', amount: 0.1 }
        , { player: 'Player13', type: 'bb', amount: 0.1 } ]
     , preflop:
        [ { player: 'Player3', type: 'fold' }
        , { player: 'Player4', type: 'raise', amount: 0.2 }
        , { player: 'Player12', type: 'fold' }
        , { player: 'Player11', type: 'fold' }
        , { player: 'Player6', type: 'fold' }
        , { player: 'Player13', type: 'fold' }
        , { player: 'Player10', type: 'raise', amount: 0.3 }
        , { player: 'Player1', type: 'fold' }
        , { player: 'Hero', type: 'fold' }
        , { player: 'Player4', type: 'call', amount: 0.1 } ]
     , flop:
        [ { player: 'Player4', type: 'bet', amount: 0.1 }
        , { player: 'Player10', type: 'raise', amount: 0.2 }
        , { player: 'Player4', type: 'raise', amount: 0.3 }
        , { player: 'Player10', type: 'raise', amount: 0.4 }
        , { player: 'Player4', type: 'call', amount: 0.1 } ]
     , turn:
        [ { player: 'Player4', type: 'check' }
        , { player: 'Player10', type: 'bet', amount: 0.2 }
        , { player: 'Player4', type: 'call', amount: 0.2 } ]
     , river:
        [ { player: 'Player4', type: 'check' }
        , { player: 'Player10', type: 'bet', amount: 0.2 }
        , { player: 'Player4', type: 'call', amount: 0.2 } ]
     , showdown:
        [ { player: 'Player10', type: 'collect', amount: 2.33 }
        , { player: 'Hero', type: 'show', card1: 'Qs', card2: 'Jh' }
        , { player: 'Player4', type: 'show', card1: '9s', card2: 'Td' }
        , { player: 'Player10', type: 'show', card1: '9c', card2: '9d' } ]
     , summary: [ { type: 'pot', single: true, amount: 2.33 } ]
     , hero: 'Hero'
     , holecards: { card1: 'Qs', card2: 'Jh' } }
    , { seats:
        [ { seatno: 1, player: 'Player1', chips: 20.3 }
        , { seatno: 2, player: 'Hero', chips: 9.99 }
        , { seatno: 3, player: 'Player3', chips: 24.96 }
        , { seatno: 4, player: 'Player4', chips: 1.63 }
        , { seatno: 5, player: 'Player12', chips: 1.9 }
        , { seatno: 6, player: 'Player11', chips: 5.36 }
        , { seatno: 7, player: 'Player6', chips: 3.24 }
        , { seatno: 8, player: 'Player14', chips: 5 }
        , { seatno: 9, player: 'Player13', chips: 1.9 }
        , { seatno: 10, player: 'Player10', chips: 2.84 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'limit'
        , currency: '$'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.1
        , bb: 0.2
        , ante: 0
        , year: 2011
        , month: 7
        , day: 22
        , hour: 17
        , min: 49
        , sec: 46
        , hero: 'Hero'
        , handid: '2855495357'
        , gameno: '2855495357'
        , gametype: 'cash' }
     , table: { tablename: 'Gary', tableno: null, maxseats: 10, button: 1 }
     , board: { card1: 'Ad', card2: '2c', card3: '7s' }
     , posts:
        [ { player: 'Hero', type: 'sb', amount: 0.05 }
        , { player: 'Player3', type: 'bb', amount: 0.1 }
        , { player: 'Player14', type: 'sitout', amount: 0 } ]
     , preflop:
        [ { player: 'Player4', type: 'raise', amount: 0.2 }
        , { player: 'Player12', type: 'call', amount: 0.2 }
        , { player: 'Player11', type: 'fold' }
        , { player: 'Player6', type: 'fold' }
        , { player: 'Player13', type: 'fold' }
        , { player: 'Player10', type: 'fold' }
        , { player: 'Player1', type: 'fold' }
        , { player: 'Hero', type: 'fold' }
        , { player: 'Player3', type: 'fold' } ]
     , flop:
        [ { player: 'Player4', type: 'check' }
        , { player: 'Player12', type: 'bet', amount: 0.1 }
        , { player: 'Player4', type: 'fold' } ]
     , turn: []
     , river: []
     , showdown:
        [ { player: 'Player12', type: 'collect', amount: 0.63 }
        , { player: 'Hero', type: 'show', card1: '4s', card2: '3h' } ]
     , summary: [ { type: 'pot', single: true, amount: 0.63 } ]
     , hero: 'Hero'
     , holecards: { card1: '4s', card2: '3h' } }
    , { seats:
        [ { seatno: 1, player: 'Player1', chips: 20.3 }
        , { seatno: 2, player: 'Hero', chips: 9.94 }
        , { seatno: 3, player: 'Player3', chips: 24.86 }
        , { seatno: 4, player: 'Player4', chips: 1.43 }
        , { seatno: 5, player: 'Player12', chips: 2.23 }
        , { seatno: 6, player: 'Player11', chips: 5.36 }
        , { seatno: 7, player: 'Player6', chips: 3.24 }
        , { seatno: 8, player: 'Player14', chips: 5 }
        , { seatno: 9, player: 'Player13', chips: 1.9 }
        , { seatno: 10, player: 'Player10', chips: 2.84 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'limit'
        , currency: '$'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.1
        , bb: 0.2
        , ante: 0
        , year: 2011
        , month: 7
        , day: 22
        , hour: 17
        , min: 50
        , sec: 56
        , hero: 'Hero'
        , handid: '2855497080'
        , gameno: '2855497080'
        , gametype: 'cash' }
     , table: { tablename: 'Gary', tableno: null, maxseats: 10, button: 2 }
     , board: { card1: 'Ac', card2: 'Jd', card3: '5h', card4: 'Ah' }
     , posts:
        [ { player: 'Player3', type: 'sb', amount: 0.05 }
        , { player: 'Player4', type: 'bb', amount: 0.1 } ]
     , preflop:
        [ { player: 'Player12', type: 'fold' }
        , { player: 'Player11', type: 'fold' }
        , { player: 'Player6', type: 'fold' }
        , { player: 'Player13', type: 'call', amount: 0.1 }
        , { player: 'Player10', type: 'fold' }
        , { player: 'Player1', type: 'fold' }
        , { player: 'Hero', type: 'call', amount: 0.1 }
        , { player: 'Player3', type: 'call', amount: 0.05 }
        , { player: 'Player4', type: 'check' } ]
     , flop:
        [ { player: 'Player3', type: 'check' }
        , { player: 'Player4', type: 'check' }
        , { player: 'Player13', type: 'check' }
        , { player: 'Hero', type: 'check' } ]
     , turn:
        [ { player: 'Player3', type: 'bet', amount: 0.2 }
        , { player: 'Player4', type: 'fold' }
        , { player: 'Player13', type: 'fold' }
        , { player: 'Hero', type: 'fold' } ]
     , river: []
     , showdown:
        [ { player: 'Player3', type: 'collect', amount: 0.58 }
        , { player: 'Hero', type: 'show', card1: '7c', card2: '8s' } ]
     , summary: [ { type: 'pot', single: true, amount: 0.58 } ]
     , hero: 'Hero'
     , holecards: { card1: '7c', card2: '8s' } }
    , { seats:
        [ { seatno: 1, player: 'Player1', chips: 20.3 }
        , { seatno: 2, player: 'Hero', chips: 9.84 }
        , { seatno: 3, player: 'Player3', chips: 25.14 }
        , { seatno: 4, player: 'Player4', chips: 1.33 }
        , { seatno: 5, player: 'Player12', chips: 2.23 }
        , { seatno: 6, player: 'Player11', chips: 5.36 }
        , { seatno: 7, player: 'Player6', chips: 3.24 }
        , { seatno: 8, player: 'Player14', chips: 5 }
        , { seatno: 9, player: 'Player13', chips: 1.8 }
        , { seatno: 10, player: 'Player10', chips: 2.84 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'limit'
        , currency: '$'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.1
        , bb: 0.2
        , ante: 0
        , year: 2011
        , month: 7
        , day: 22
        , hour: 17
        , min: 52
        , sec: 15
        , hero: 'Hero'
        , handid: '2855498914'
        , gameno: '2855498914'
        , gametype: 'cash' }
     , table: { tablename: 'Gary', tableno: null, maxseats: 10, button: 3 }
     , board: { card1: 'Js', card2: '6h', card3: 'Ts', card4: 'Qc', card5: 'As' }
     , posts:
        [ { player: 'Player4', type: 'sb', amount: 0.05 }
        , { player: 'Player12', type: 'bb', amount: 0.1 } ]
     , preflop:
        [ { player: 'Player11', type: 'fold' }
        , { player: 'Player6', type: 'fold' }
        , { player: 'Player13', type: 'call', amount: 0.1 }
        , { player: 'Player10', type: 'fold' }
        , { player: 'Player1', type: 'fold' }
        , { player: 'Hero', type: 'fold' }
        , { player: 'Player3', type: 'fold' }
        , { player: 'Player4', type: 'raise', amount: 0.2 }
        , { player: 'Player12', type: 'call', amount: 0.1 }
        , { player: 'Player13', type: 'call', amount: 0.1 } ]
     , flop:
        [ { player: 'Player4', type: 'bet', amount: 0.1 }
        , { player: 'Player12', type: 'call', amount: 0.1 }
        , { player: 'Player13', type: 'call', amount: 0.1 } ]
     , turn:
        [ { player: 'Player4', type: 'bet', amount: 0.2 }
        , { player: 'Player12', type: 'call', amount: 0.2 }
        , { player: 'Player13', type: 'fold' } ]
     , river:
        [ { player: 'Player4', type: 'check' }
        , { player: 'Player12', type: 'bet', amount: 0.2 }
        , { player: 'Player4', type: 'fold' } ]
     , showdown:
        [ { player: 'Player12', type: 'collect', amount: 1.44 }
        , { player: 'Hero', type: 'show', card1: '8d', card2: '9h' } ]
     , summary: [ { type: 'pot', single: true, amount: 1.44 } ]
     , hero: 'Hero'
     , holecards: { card1: '8d', card2: '9h' } }
    , { seats:
        [ { seatno: 1, player: 'Player1', chips: 20.3 }
        , { seatno: 2, player: 'Hero', chips: 9.84 }
        , { seatno: 3, player: 'Player3', chips: 25.14 }
        , { seatno: 4, player: 'Player4', chips: 0.83 }
        , { seatno: 5, player: 'Player12', chips: 2.97 }
        , { seatno: 6, player: 'seat6', chips: 0 }
        , { seatno: 7, player: 'Player6', chips: 3.24 }
        , { seatno: 8, player: 'Player14', chips: 5 }
        , { seatno: 9, player: 'Player13', chips: 1.5 }
        , { seatno: 10, player: 'Player10', chips: 2.84 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'limit'
        , currency: '$'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.1
        , bb: 0.2
        , ante: 0
        , year: 2011
        , month: 7
        , day: 22
        , hour: 17
        , min: 53
        , sec: 42
        , hero: 'Hero'
        , handid: '2855501026'
        , gameno: '2855501026'
        , gametype: 'cash' }
     , table: { tablename: 'Gary', tableno: null, maxseats: 10, button: 4 }
     , board: { card1: '3h', card2: '8s', card3: '4h', card4: '2d', card5: 'Ad' }
     , posts:
        [ { player: 'Player12', type: 'sb', amount: 0.05 }
        , { player: 'Player14', type: 'bb', amount: 0.1 } ]
     , preflop:
        [ { player: 'Player6', type: 'sitout', amount: 0, raiseTo: 0 }
        , { player: 'Player13', type: 'call', amount: 0.1 }
        , { player: 'Player10', type: 'raise', amount: 0.2 }
        , { player: 'Player1', type: 'fold' }
        , { player: 'Hero', type: 'fold' }
        , { player: 'Player3', type: 'fold' }
        , { player: 'Player4', type: 'call', amount: 0.2 }
        , { player: 'Player12', type: 'fold' }
        , { player: 'Player14', type: 'call', amount: 0.1 }
        , { player: 'Player13', type: 'call', amount: 0.1 } ]
     , flop:
        [ { player: 'Player14', type: 'check' }
        , { player: 'Player13', type: 'check' }
        , { player: 'Player10', type: 'bet', amount: 0.1 }
        , { player: 'Player4', type: 'call', amount: 0.1 }
        , { player: 'Player14', type: 'fold' }
        , { player: 'Player13', type: 'call', amount: 0.1 } ]
     , turn:
        [ { player: 'Player13', type: 'check' }
        , { player: 'Player10', type: 'bet', amount: 0.2 }
        , { player: 'Player4', type: 'raise', amount: 0.4 }
        , { player: 'Player13', type: 'call', amount: 0.4 }
        , { player: 'Player10', type: 'call', amount: 0.2 } ]
     , river:
        [ { player: 'Player13', type: 'check' }
        , { player: 'Player10', type: 'check' }
        , { player: 'Player4', type: 'allin', amount: 0.13, raiseTo: 0.13 }
        , { player: 'Player13', type: 'raise', amount: 0.4 }
        , { player: 'Player10', type: 'fold' } ]
     , showdown:
        [ { player: 'Player13', type: 'collect', amount: 2.75 }
        , { player: 'Hero', type: 'show', card1: 'Jc', card2: '5h' }
        , { player: 'Player4', type: 'show', card1: '4d', card2: '4s' }
        , { player: 'Player13', type: 'show', card1: '5c', card2: '7d' } ]
     , summary: [ { type: 'pot', single: true, amount: 2.75 } ]
     , hero: 'Hero'
     , holecards: { card1: 'Jc', card2: '5h' } }
    , { seats:
        [ { seatno: 1, player: 'Player1', chips: 20.3 }
        , { seatno: 2, player: 'Hero', chips: 9.84 }
        , { seatno: 3, player: 'Player3', chips: 25.14 }
        , { seatno: 4, player: 'Player4', chips: 0 }
        , { seatno: 5, player: 'Player12', chips: 2.92 }
        , { seatno: 6, player: 'seat6', chips: 0 }
        , { seatno: 7, player: 'Player6', chips: 3.24 }
        , { seatno: 8, player: 'Player14', chips: 4.8 }
        , { seatno: 9, player: 'Player13', chips: 3.15 }
        , { seatno: 10, player: 'Player10', chips: 2.14 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'limit'
        , currency: '$'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.1
        , bb: 0.2
        , ante: 0
        , year: 2011
        , month: 7
        , day: 22
        , hour: 17
        , min: 55
        , sec: 8
        , hero: 'Hero'
        , handid: '2855503061'
        , gameno: '2855503061'
        , gametype: 'cash' }
     , table: { tablename: 'Gary', tableno: null, maxseats: 10, button: 5 }
     , board: { card1: 'Jd', card2: '5d', card3: '8s', card4: '3d' }
     , posts:
        [ { player: 'Player14', type: 'sb', amount: 0.05 }
        , { player: 'Player13', type: 'bb', amount: 0.1 } ]
     , preflop:
        [ { player: 'Player10', type: 'call', amount: 0.1 }
        , { player: 'Player1', type: 'fold' }
        , { player: 'Hero', type: 'fold' }
        , { player: 'Player3', type: 'fold' }
        , { player: 'Player12', type: 'fold' }
        , { player: 'Player14', type: 'fold' }
        , { player: 'Player13', type: 'check' } ]
     , flop:
        [ { player: 'Player13', type: 'check' }
        , { player: 'Player10', type: 'bet', amount: 0.1 }
        , { player: 'Player13', type: 'call', amount: 0.1 } ]
     , turn:
        [ { player: 'Player13', type: 'check' }
        , { player: 'Player10', type: 'bet', amount: 0.2 }
        , { player: 'Player13', type: 'fold' } ]
     , river: []
     , showdown:
        [ { player: 'Player10', type: 'collect', amount: 0.63 }
        , { player: 'Hero', type: 'show', card1: '3c', card2: 'Kh' } ]
     , summary: [ { type: 'pot', single: true, amount: 0.63 } ]
     , hero: 'Hero'
     , holecards: { card1: '3c', card2: 'Kh' } }
    , { seats:
        [ { seatno: 1, player: 'Player1', chips: 20.3 }
        , { seatno: 2, player: 'Hero', chips: 9.84 }
        , { seatno: 3, player: 'Player3', chips: 25.14 }
        , { seatno: 4, player: 'Player4', chips: 2 }
        , { seatno: 5, player: 'Player12', chips: 2.92 }
        , { seatno: 6, player: 'seat6', chips: 0 }
        , { seatno: 7, player: 'Player6', chips: 3.24 }
        , { seatno: 8, player: 'Player14', chips: 4.75 }
        , { seatno: 9, player: 'Player13', chips: 2.95 }
        , { seatno: 10, player: 'Player10', chips: 2.37 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'limit'
        , currency: '$'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.1
        , bb: 0.2
        , ante: 0
        , year: 2011
        , month: 7
        , day: 22
        , hour: 17
        , min: 56
        , sec: 15
        , hero: 'Hero'
        , handid: '2855504646'
        , gameno: '2855504646'
        , gametype: 'cash' }
     , table: { tablename: 'Gary', tableno: null, maxseats: 10, button: 8 }
     , board: { card1: '2d', card2: 'Qh', card3: 'Kh', card4: 'Qd' }
     , posts:
        [ { player: 'Player13', type: 'sb', amount: 0.05 }
        , { player: 'Player10', type: 'bb', amount: 0.1 } ]
     , preflop:
        [ { player: 'Player6', type: 'sitout', amount: 0, raiseTo: 0 }
        , { player: 'Player1', type: 'fold' }
        , { player: 'Hero', type: 'fold' }
        , { player: 'Player3', type: 'raise', amount: 0.2 }
        , { player: 'Player4', type: 'call', amount: 0.2 }
        , { player: 'Player12', type: 'fold' }
        , { player: 'Player14', type: 'fold' }
        , { player: 'Player13', type: 'fold' }
        , { player: 'Player10', type: 'fold' } ]
     , flop:
        [ { player: 'Player3', type: 'bet', amount: 0.1 }
        , { player: 'Player4', type: 'call', amount: 0.1 } ]
     , turn:
        [ { player: 'Player3', type: 'bet', amount: 0.2 }
        , { player: 'Player4', type: 'fold' } ]
     , river: []
     , showdown:
        [ { player: 'Player3', type: 'collect', amount: 0.92 }
        , { player: 'Hero', type: 'show', card1: '5h', card2: '7d' } ]
     , summary: [ { type: 'pot', single: true, amount: 0.92 } ]
     , hero: 'Hero'
     , holecards: { card1: '5h', card2: '7d' } }
    , { seats:
        [ { seatno: 1, player: 'Player1', chips: 20.3 }
        , { seatno: 2, player: 'Hero', chips: 9.84 }
        , { seatno: 3, player: 'Player3', chips: 25.56 }
        , { seatno: 4, player: 'Player4', chips: 1.7 }
        , { seatno: 5, player: 'Player12', chips: 2.92 }
        , { seatno: 6, player: 'Player15', chips: 0 }
        , { seatno: 7, player: 'Player6', chips: 3.24 }
        , { seatno: 8, player: 'Player14', chips: 4.75 }
        , { seatno: 9, player: 'Player13', chips: 2.9 }
        , { seatno: 10, player: 'Player10', chips: 2.27 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'limit'
        , currency: '$'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.1
        , bb: 0.2
        , ante: 0
        , year: 2011
        , month: 7
        , day: 22
        , hour: 17
        , min: 57
        , sec: 26
        , hero: 'Hero'
        , handid: '2855506317'
        , gameno: '2855506317'
        , gametype: 'cash' }
     , table: { tablename: 'Gary', tableno: null, maxseats: 10, button: 9 }
     , board: { card1: 'Qd', card2: '6d', card3: 'Kh', card4: '2h', card5: '9h' }
     , posts:
        [ { player: 'Player10', type: 'sb', amount: 0.05 }
        , { player: 'Player1', type: 'bb', amount: 0.1 }
        , { player: 'Player6', type: 'sitout', amount: 0 } ]
     , preflop:
        [ { player: 'Hero', type: 'fold' }
        , { player: 'Player3', type: 'raise', amount: 0.2 }
        , { player: 'Player4', type: 'raise', amount: 0.3 }
        , { player: 'Player12', type: 'fold' }
        , { player: 'Player14', type: 'fold' }
        , { player: 'Player13', type: 'fold' }
        , { player: 'Player10', type: 'call', amount: 0.25 }
        , { player: 'Player1', type: 'fold' }
        , { player: 'Player3', type: 'call', amount: 0.1 } ]
     , flop:
        [ { player: 'Player10', type: 'check' }
        , { player: 'Player3', type: 'bet', amount: 0.1 }
        , { player: 'Player4', type: 'call', amount: 0.1 }
        , { player: 'Player10', type: 'fold' } ]
     , turn:
        [ { player: 'Player3', type: 'bet', amount: 0.2 }
        , { player: 'Player4', type: 'call', amount: 0.2 } ]
     , river:
        [ { player: 'Player3', type: 'check' }
        , { player: 'Player4', type: 'check' } ]
     , showdown:
        [ { player: 'Player3', type: 'collect', amount: 1.52 }
        , { player: 'Hero', type: 'show', card1: '9d', card2: '3s' }
        , { player: 'Player3', type: 'show', card1: 'Ah', card2: 'Qs' }
        , { player: 'Player4', type: 'show', card1: 'Ad', card2: '9c' } ]
     , summary: [ { type: 'pot', single: true, amount: 1.52 } ]
     , hero: 'Hero'
     , holecards: { card1: '9d', card2: '3s' } }
    , { seats:
        [ { seatno: 1, player: 'Player1', chips: 20.2 }
        , { seatno: 2, player: 'Hero', chips: 9.84 }
        , { seatno: 3, player: 'Player3', chips: 26.48 }
        , { seatno: 4, player: 'Player4', chips: 1.1 }
        , { seatno: 5, player: 'Player12', chips: 2.92 }
        , { seatno: 6, player: 'Player15', chips: 5 }
        , { seatno: 7, player: 'seat7', chips: 0 }
        , { seatno: 8, player: 'Player14', chips: 4.75 }
        , { seatno: 9, player: 'Player13', chips: 2.9 }
        , { seatno: 10, player: 'Player10', chips: 1.97 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'limit'
        , currency: '$'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.1
        , bb: 0.2
        , ante: 0
        , year: 2011
        , month: 7
        , day: 22
        , hour: 17
        , min: 58
        , sec: 18
        , hero: 'Hero'
        , handid: '2855507498'
        , gameno: '2855507498'
        , gametype: 'cash' }
     , table: { tablename: 'Gary', tableno: null, maxseats: 10, button: 10 }
     , board: { card1: '3d', card2: 'Jc', card3: '7d', card4: 'Jh', card5: '2h' }
     , posts:
        [ { player: 'Player1', type: 'sb', amount: 0.05 }
        , { player: 'Hero', type: 'bb', amount: 0.1 }
        , { player: 'Player15', type: 'bb', amount: 0.1 } ]
     , preflop:
        [ { player: 'Player3', type: 'fold' }
        , { player: 'Player4', type: 'raise', amount: 0.2 }
        , { player: 'Player12', type: 'fold' }
        , { player: 'Player15', type: 'call', amount: 0.1 }
        , { player: 'Player14', type: 'fold' }
        , { player: 'Player13', type: 'call', amount: 0.2 }
        , { player: 'Player10', type: 'raise', amount: 0.3 }
        , { player: 'Player1', type: 'fold' }
        , { player: 'Hero', type: 'call', amount: 0.2 }
        , { player: 'Player4', type: 'call', amount: 0.1 }
        , { player: 'Player15', type: 'call', amount: 0.1 }
        , { player: 'Player13', type: 'call', amount: 0.1 } ]
     , flop:
        [ { player: 'Hero', type: 'check' }
        , { player: 'Player4', type: 'bet', amount: 0.1 }
        , { player: 'Player15', type: 'call', amount: 0.1 }
        , { player: 'Player13', type: 'fold' }
        , { player: 'Player10', type: 'raise', amount: 0.2 }
        , { player: 'Hero', type: 'raise', amount: 0.3 }
        , { player: 'Player4', type: 'call', amount: 0.2 }
        , { player: 'Player15', type: 'fold' }
        , { player: 'Player10', type: 'raise', amount: 0.4 }
        , { player: 'Hero', type: 'call', amount: 0.1 }
        , { player: 'Player4', type: 'call', amount: 0.1 } ]
     , turn:
        [ { player: 'Hero', type: 'check' }
        , { player: 'Player4', type: 'bet', amount: 0.2 }
        , { player: 'Player10', type: 'raise', amount: 0.4 }
        , { player: 'Hero', type: 'raise', amount: 0.6 }
        , { player: 'Player4', type: 'allin', amount: 0, raiseTo: 0.2 }
        , { player: 'Player10', type: 'call', amount: 0.2 } ]
     , river:
        [ { player: 'Hero', type: 'bet', amount: 0.2 }
        , { player: 'Player10', type: 'call', amount: 0.2 } ]
     , showdown:
        [ { player: 'Hero', type: 'collect', amount: 4.61 }
        , { player: 'Hero', type: 'show', card1: 'Ks', card2: 'Js' }
        , { player: 'Player4', type: 'show', card1: 'As', card2: '4s' }
        , { player: 'Player10', type: 'show', card1: 'Ad', card2: 'Td' } ]
     , summary: [ { type: 'pot', single: true, amount: 4.61 } ]
     , hero: 'Hero'
     , holecards: { card1: 'Ks', card2: 'Js' } }
    , { seats:
        [ { seatno: 1, player: 'Player1', chips: 20.15 }
        , { seatno: 2, player: 'Hero', chips: 12.95 }
        , { seatno: 3, player: 'Player3', chips: 26.48 }
        , { seatno: 4, player: 'seat4', chips: 0 }
        , { seatno: 5, player: 'Player12', chips: 2.92 }
        , { seatno: 6, player: 'Player15', chips: 4.6 }
        , { seatno: 7, player: 'seat7', chips: 0 }
        , { seatno: 8, player: 'Player14', chips: 4.75 }
        , { seatno: 9, player: 'Player13', chips: 2.6 }
        , { seatno: 10, player: 'Player10', chips: 0.47 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'limit'
        , currency: '$'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.1
        , bb: 0.2
        , ante: 0
        , year: 2011
        , month: 7
        , day: 22
        , hour: 18
        , min: 0
        , sec: 38
        , hero: 'Hero'
        , handid: '2855510785'
        , gameno: '2855510785'
        , gametype: 'cash' }
     , table: { tablename: 'Gary', tableno: null, maxseats: 10, button: 1 }
     , board: { card1: '4d', card2: '9h', card3: 'Qc', card4: '9d', card5: 'Ts' }
     , posts:
        [ { player: 'Hero', type: 'sb', amount: 0.05 }
        , { player: 'Player3', type: 'bb', amount: 0.1 } ]
     , preflop:
        [ { player: 'Player12', type: 'call', amount: 0.1 }
        , { player: 'Player15', type: 'call', amount: 0.1 }
        , { player: 'Player14', type: 'fold' }
        , { player: 'Player13', type: 'raise', amount: 0.2 }
        , { player: 'Player10', type: 'raise', amount: 0.3 }
        , { player: 'Player1', type: 'fold' }
        , { player: 'Hero', type: 'fold' }
        , { player: 'Player3', type: 'fold' }
        , { player: 'Player12', type: 'fold' }
        , { player: 'Player15', type: 'call', amount: 0.2 }
        , { player: 'Player13', type: 'raise', amount: 0.4 }
        , { player: 'Player10', type: 'call', amount: 0.1 }
        , { player: 'Player15', type: 'call', amount: 0.1 } ]
     , flop:
        [ { player: 'Player15', type: 'check' }
        , { player: 'Player13', type: 'bet', amount: 0.1 }
        , { player: 'Player10'
          , type: 'allin'
          , amount: -0.03
          , raiseTo: 0.07 }
        , { player: 'Player15', type: 'call', amount: 0.1 } ]
     , turn:
        [ { player: 'Player15', type: 'check' }
        , { player: 'Player13', type: 'bet', amount: 0.2 }
        , { player: 'Player15', type: 'fold' } ]
     , river: []
     , showdown:
        [ { player: 'Player13', type: 'collect', amount: 0.26 }
        , { player: 'Player10', type: 'collect', amount: 1.58 }
        , { player: 'Hero', type: 'show', card1: '6c', card2: '7h' }
        , { player: 'Player13', type: 'show', card1: 'Kh', card2: 'Ah' }
        , { player: 'Player10', type: 'show', card1: 'Td', card2: '3d' } ]
     , summary: [ { type: 'pot', single: false, amount: 1.84 } ]
     , hero: 'Hero'
     , holecards: { card1: '6c', card2: '7h' } }
    , { seats:
        [ { seatno: 1, player: 'Player1', chips: 20.15 }
        , { seatno: 2, player: 'Hero', chips: 12.9 }
        , { seatno: 3, player: 'Player3', chips: 26.38 }
        , { seatno: 4, player: 'seat4', chips: 0 }
        , { seatno: 5, player: 'Player12', chips: 2.82 }
        , { seatno: 6, player: 'Player15', chips: 4.1 }
        , { seatno: 7, player: 'seat7', chips: 0 }
        , { seatno: 8, player: 'Player14', chips: 4.75 }
        , { seatno: 9, player: 'Player13', chips: 2.16 }
        , { seatno: 10, player: 'Player10', chips: 1.58 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'limit'
        , currency: '$'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.1
        , bb: 0.2
        , ante: 0
        , year: 2011
        , month: 7
        , day: 22
        , hour: 18
        , min: 1
        , sec: 34
        , hero: 'Hero'
        , handid: '2855512094'
        , gameno: '2855512094'
        , gametype: 'cash' }
     , table: { tablename: 'Gary', tableno: null, maxseats: 10, button: 2 }
     , board: { card1: 'Th', card2: 'As', card3: '8d', card4: '6h', card5: '2d' }
     , posts:
        [ { player: 'Player3', type: 'sb', amount: 0.05 }
        , { player: 'Player12', type: 'bb', amount: 0.1 } ]
     , preflop:
        [ { player: 'Player15', type: 'call', amount: 0.1 }
        , { player: 'Player14', type: 'fold' }
        , { player: 'Player13', type: 'call', amount: 0.1 }
        , { player: 'Player10', type: 'call', amount: 0.1 }
        , { player: 'Player1', type: 'fold' }
        , { player: 'Hero', type: 'call', amount: 0.1 }
        , { player: 'Player3', type: 'call', amount: 0.05 }
        , { player: 'Player12', type: 'check' } ]
     , flop:
        [ { player: 'Player3', type: 'check' }
        , { player: 'Player12', type: 'check' }
        , { player: 'Player15', type: 'check' }
        , { player: 'Player13', type: 'check' }
        , { player: 'Player10', type: 'check' }
        , { player: 'Hero', type: 'bet', amount: 0.1 }
        , { player: 'Player3', type: 'fold' }
        , { player: 'Player12', type: 'fold' }
        , { player: 'Player15', type: 'call', amount: 0.1 }
        , { player: 'Player13', type: 'fold' }
        , { player: 'Player10', type: 'call', amount: 0.1 } ]
     , turn:
        [ { player: 'Player15', type: 'check' }
        , { player: 'Player10', type: 'check' }
        , { player: 'Hero', type: 'bet', amount: 0.2 }
        , { player: 'Player15', type: 'call', amount: 0.2 }
        , { player: 'Player10', type: 'call', amount: 0.2 } ]
     , river:
        [ { player: 'Player15', type: 'check' }
        , { player: 'Player10', type: 'check' }
        , { player: 'Hero', type: 'bet', amount: 0.2 }
        , { player: 'Player15', type: 'fold' }
        , { player: 'Player10', type: 'call', amount: 0.2 } ]
     , showdown:
        [ { player: 'Hero', type: 'collect', amount: 1.81 }
        , { player: 'Hero', type: 'show', card1: 'Ah', card2: 'Js' }
        , { player: 'Player10', type: 'show', card1: '7h', card2: '6s' } ]
     , summary: [ { type: 'pot', single: true, amount: 1.81 } ]
     , hero: 'Hero'
     , holecards: { card1: 'Ah', card2: 'Js' } }
    , { seats:
        [ { seatno: 1, player: 'Player1', chips: 20.15 }
        , { seatno: 2, player: 'Hero', chips: 14.11 }
        , { seatno: 3, player: 'Player3', chips: 26.28 }
        , { seatno: 4, player: 'Player16', chips: 2 }
        , { seatno: 5, player: 'Player12', chips: 2.72 }
        , { seatno: 6, player: 'Player15', chips: 3.7 }
        , { seatno: 7, player: 'Player17', chips: 30.47 }
        , { seatno: 8, player: 'Player14', chips: 4.75 }
        , { seatno: 9, player: 'Player13', chips: 2.06 }
        , { seatno: 10, player: 'Player10', chips: 0.98 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'limit'
        , currency: '$'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.1
        , bb: 0.2
        , ante: 0
        , year: 2011
        , month: 7
        , day: 22
        , hour: 18
        , min: 3
        , sec: 22
        , hero: 'Hero'
        , handid: '2855514655'
        , gameno: '2855514655'
        , gametype: 'cash' }
     , table: { tablename: 'Gary', tableno: null, maxseats: 10, button: 3 }
     , board: { card1: '9s', card2: '9c', card3: '7c', card4: '2c' }
     , posts:
        [ { player: 'Player12', type: 'sb', amount: 0.05 }
        , { player: 'Player15', type: 'bb', amount: 0.1 } ]
     , preflop:
        [ { player: 'Player17', type: 'sitout', amount: 0, raiseTo: 0 }
        , { player: 'Player14', type: 'fold' }
        , { player: 'Player13', type: 'call', amount: 0.1 }
        , { player: 'Player10', type: 'call', amount: 0.1 }
        , { player: 'Player1', type: 'fold' }
        , { player: 'Hero', type: 'fold' }
        , { player: 'Player3', type: 'raise', amount: 0.2 }
        , { player: 'Player12', type: 'call', amount: 0.15 }
        , { player: 'Player15', type: 'fold' }
        , { player: 'Player13', type: 'call', amount: 0.1 }
        , { player: 'Player10', type: 'call', amount: 0.1 } ]
     , flop:
        [ { player: 'Player12', type: 'check' }
        , { player: 'Player13', type: 'check' }
        , { player: 'Player10', type: 'check' }
        , { player: 'Player3', type: 'bet', amount: 0.1 }
        , { player: 'Player12', type: 'call', amount: 0.1 }
        , { player: 'Player13', type: 'fold' }
        , { player: 'Player10', type: 'call', amount: 0.1 } ]
     , turn:
        [ { player: 'Player12', type: 'check' }
        , { player: 'Player10', type: 'check' }
        , { player: 'Player3', type: 'bet', amount: 0.2 }
        , { player: 'Player12', type: 'fold' }
        , { player: 'Player10', type: 'fold' } ]
     , river: []
     , showdown:
        [ { player: 'Player3', type: 'collect', amount: 1.34 }
        , { player: 'Hero', type: 'show', card1: 'Qs', card2: '5s' } ]
     , summary: [ { type: 'pot', single: true, amount: 1.34 } ]
     , hero: 'Hero'
     , holecards: { card1: 'Qs', card2: '5s' } }
    , { seats:
        [ { seatno: 1, player: 'Player1', chips: 20.15 }
        , { seatno: 2, player: 'Hero', chips: 14.11 }
        , { seatno: 3, player: 'Player3', chips: 27.12 }
        , { seatno: 4, player: 'Player16', chips: 2 }
        , { seatno: 5, player: 'Player12', chips: 2.42 }
        , { seatno: 6, player: 'Player15', chips: 3.6 }
        , { seatno: 7, player: 'Player17', chips: 30.47 }
        , { seatno: 8, player: 'Player14', chips: 4.75 }
        , { seatno: 9, player: 'Player13', chips: 1.86 }
        , { seatno: 10, player: 'Player10', chips: 0.68 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'limit'
        , currency: '$'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.1
        , bb: 0.2
        , ante: 0
        , year: 2011
        , month: 7
        , day: 22
        , hour: 18
        , min: 5
        , sec: 24
        , hero: 'Hero'
        , handid: '2855517619'
        , gameno: '2855517619'
        , gametype: 'cash' }
     , table: { tablename: 'Gary', tableno: null, maxseats: 10, button: 5 }
     , board: { card1: '2c', card2: '5h', card3: 'Ah', card4: '4h', card5: 'Ad' }
     , posts:
        [ { player: 'Player15', type: 'sb', amount: 0.05 }
        , { player: 'Player17', type: 'bb', amount: 0.1 }
        , { player: 'Player16', type: 'sitout', amount: 0 } ]
     , preflop:
        [ { player: 'Player14', type: 'fold' }
        , { player: 'Player13', type: 'raise', amount: 0.2 }
        , { player: 'Player10', type: 'call', amount: 0.2 }
        , { player: 'Player1', type: 'fold' }
        , { player: 'Hero', type: 'fold' }
        , { player: 'Player3', type: 'fold' }
        , { player: 'Player12', type: 'fold' }
        , { player: 'Player15', type: 'fold' }
        , { player: 'Player17', type: 'fold' } ]
     , flop:
        [ { player: 'Player13', type: 'check' }
        , { player: 'Player10', type: 'check' } ]
     , turn:
        [ { player: 'Player13', type: 'bet', amount: 0.2 }
        , { player: 'Player10', type: 'call', amount: 0.2 } ]
     , river:
        [ { player: 'Player13', type: 'check' }
        , { player: 'Player10', type: 'bet', amount: 0.2 }
        , { player: 'Player13', type: 'fold' } ]
     , showdown:
        [ { player: 'Player10', type: 'collect', amount: 1.11 }
        , { player: 'Hero', type: 'show', card1: 'Tc', card2: 'Qs' } ]
     , summary: [ { type: 'pot', single: true, amount: 1.11 } ]
     , hero: 'Hero'
     , holecards: { card1: 'Tc', card2: 'Qs' } }
    , { seats:
        [ { seatno: 1, player: 'Player1', chips: 20.15 }
        , { seatno: 2, player: 'Hero', chips: 14.11 }
        , { seatno: 3, player: 'Player3', chips: 27.12 }
        , { seatno: 4, player: 'Player16', chips: 2 }
        , { seatno: 5, player: 'Player12', chips: 2.42 }
        , { seatno: 6, player: 'Player15', chips: 3.55 }
        , { seatno: 7, player: 'Player17', chips: 30.37 }
        , { seatno: 8, player: 'Player14', chips: 4.75 }
        , { seatno: 9, player: 'Player13', chips: 1.46 }
        , { seatno: 10, player: 'Player10', chips: 1.19 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'limit'
        , currency: '$'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.1
        , bb: 0.2
        , ante: 0
        , year: 2011
        , month: 7
        , day: 22
        , hour: 18
        , min: 6
        , sec: 16
        , hero: 'Hero'
        , handid: '2855518923'
        , gameno: '2855518923'
        , gametype: 'cash' }
     , table: { tablename: 'Gary', tableno: null, maxseats: 10, button: 6 }
     , board: { card1: 'Td', card2: '2c', card3: '4d', card4: 'Jc', card5: 'Ah' }
     , posts:
        [ { player: 'Player17', type: 'sb', amount: 0.05 }
        , { player: 'Player14', type: 'bb', amount: 0.1 } ]
     , preflop:
        [ { player: 'Player13', type: 'raise', amount: 0.2 }
        , { player: 'Player10', type: 'fold' }
        , { player: 'Player1', type: 'raise', amount: 0.3 }
        , { player: 'Hero', type: 'fold' }
        , { player: 'Player3', type: 'fold' }
        , { player: 'Player12', type: 'call', amount: 0.3 }
        , { player: 'Player15', type: 'fold' }
        , { player: 'Player17', type: 'fold' }
        , { player: 'Player14', type: 'fold' }
        , { player: 'Player13', type: 'raise', amount: 0.4 }
        , { player: 'Player1', type: 'call', amount: 0.1 }
        , { player: 'Player12', type: 'call', amount: 0.1 } ]
     , flop:
        [ { player: 'Player13', type: 'bet', amount: 0.1 }
        , { player: 'Player1', type: 'raise', amount: 0.2 }
        , { player: 'Player12', type: 'fold' }
        , { player: 'Player13', type: 'call', amount: 0.1 } ]
     , turn:
        [ { player: 'Player13', type: 'bet', amount: 0.2 }
        , { player: 'Player1', type: 'call', amount: 0.2 } ]
     , river:
        [ { player: 'Player13', type: 'check' }
        , { player: 'Player1', type: 'check' } ]
     , showdown:
        [ { player: 'Player1', type: 'collect', amount: 2.05 }
        , { player: 'Player1', type: 'show', card1: 'Qd', card2: 'Qs' }
        , { player: 'Hero', type: 'show', card1: '6s', card2: '4s' }
        , { player: 'Player13', type: 'show', card1: 'Tc', card2: 'Kc' } ]
     , summary: [ { type: 'pot', single: true, amount: 2.05 } ]
     , hero: 'Hero'
     , holecards: { card1: '6s', card2: '4s' } }
    , { seats:
        [ { seatno: 1, player: 'Player1', chips: 21.4 }
        , { seatno: 2, player: 'Hero', chips: 14.11 }
        , { seatno: 3, player: 'Player3', chips: 27.12 }
        , { seatno: 4, player: 'Player16', chips: 2 }
        , { seatno: 5, player: 'Player12', chips: 2.02 }
        , { seatno: 6, player: 'Player15', chips: 3.55 }
        , { seatno: 7, player: 'Player17', chips: 30.32 }
        , { seatno: 8, player: 'Player14', chips: 4.65 }
        , { seatno: 9, player: 'Player13', chips: 0.66 }
        , { seatno: 10, player: 'Player10', chips: 1.19 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'limit'
        , currency: '$'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.1
        , bb: 0.2
        , ante: 0
        , year: 2011
        , month: 7
        , day: 22
        , hour: 18
        , min: 7
        , sec: 17
        , hero: 'Hero'
        , handid: '2855520330'
        , gameno: '2855520330'
        , gametype: 'cash' }
     , table: { tablename: 'Gary', tableno: null, maxseats: 10, button: 7 }
     , board: { card1: '9c', card2: '7h', card3: 'Qc', card4: 'Ts', card5: '2d' }
     , posts:
        [ { player: 'Player14', type: 'sb', amount: 0.05 }
        , { player: 'Player13', type: 'bb', amount: 0.1 } ]
     , preflop:
        [ { player: 'Player10', type: 'call', amount: 0.1 }
        , { player: 'Player1', type: 'fold' }
        , { player: 'Hero', type: 'raise', amount: 0.2 }
        , { player: 'Player3', type: 'fold' }
        , { player: 'Player12', type: 'fold' }
        , { player: 'Player15', type: 'fold' }
        , { player: 'Player17', type: 'fold' }
        , { player: 'Player14', type: 'fold' }
        , { player: 'Player13', type: 'call', amount: 0.1 }
        , { player: 'Player10', type: 'call', amount: 0.1 } ]
     , flop:
        [ { player: 'Player13', type: 'check' }
        , { player: 'Player10', type: 'bet', amount: 0.1 }
        , { player: 'Hero', type: 'raise', amount: 0.2 }
        , { player: 'Player13', type: 'fold' }
        , { player: 'Player10', type: 'call', amount: 0.1 } ]
     , turn:
        [ { player: 'Player10', type: 'check' }
        , { player: 'Hero', type: 'bet', amount: 0.2 }
        , { player: 'Player10', type: 'call', amount: 0.2 } ]
     , river:
        [ { player: 'Player10', type: 'check' }
        , { player: 'Hero', type: 'bet', amount: 0.2 }
        , { player: 'Player10', type: 'fold' } ]
     , showdown:
        [ { player: 'Hero', type: 'collect', amount: 1.58 }
        , { player: 'Hero', type: 'show', card1: 'Kc', card2: 'Ks' } ]
     , summary: [ { type: 'pot', single: true, amount: 1.58 } ]
     , hero: 'Hero'
     , holecards: { card1: 'Kc', card2: 'Ks' } }
    , { seats:
        [ { seatno: 1, player: 'Player1', chips: 21.4 }
        , { seatno: 2, player: 'Hero', chips: 14.89 }
        , { seatno: 3, player: 'Player3', chips: 27.12 }
        , { seatno: 4, player: 'Player16', chips: 2 }
        , { seatno: 5, player: 'Player12', chips: 2.02 }
        , { seatno: 6, player: 'Player15', chips: 3.55 }
        , { seatno: 7, player: 'Player17', chips: 30.32 }
        , { seatno: 8, player: 'Player14', chips: 4.6 }
        , { seatno: 9, player: 'Player13', chips: 0.46 }
        , { seatno: 10, player: 'Player10', chips: 0.59 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'limit'
        , currency: '$'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.1
        , bb: 0.2
        , ante: 0
        , year: 2011
        , month: 7
        , day: 22
        , hour: 18
        , min: 8
        , sec: 48
        , hero: 'Hero'
        , handid: '2855522525'
        , gameno: '2855522525'
        , gametype: 'cash' }
     , table: { tablename: 'Gary', tableno: null, maxseats: 10, button: 8 }
     , board: { card1: '4h', card2: '7h', card3: '4s', card4: '9h', card5: 'Qc' }
     , posts:
        [ { player: 'Player13', type: 'sb', amount: 0.05 }
        , { player: 'Player10', type: 'bb', amount: 0.1 } ]
     , preflop:
        [ { player: 'Player1', type: 'fold' }
        , { player: 'Hero', type: 'raise', amount: 0.2 }
        , { player: 'Player3', type: 'fold' }
        , { player: 'Player12', type: 'fold' }
        , { player: 'Player15', type: 'fold' }
        , { player: 'Player17', type: 'fold' }
        , { player: 'Player14', type: 'fold' }
        , { player: 'Player13', type: 'fold' }
        , { player: 'Player10', type: 'raise', amount: 0.3 }
        , { player: 'Hero', type: 'call', amount: 0.1 } ]
     , flop:
        [ { player: 'Player10', type: 'bet', amount: 0.1 }
        , { player: 'Hero', type: 'call', amount: 0.1 } ]
     , turn:
        [ { player: 'Player10', type: 'allin', amount: 0.19, raiseTo: 0.19 }
        , { player: 'Hero', type: 'call', amount: 0.19 } ]
     , river: []
     , showdown:
        [ { player: 'Player10', type: 'collect', amount: 1.17 }
        , { player: 'Hero', type: 'show', card1: 'Tc', card2: 'Ad' }
        , { player: 'Player10', type: 'show', card1: 'Th', card2: 'Ah' } ]
     , summary: [ { type: 'pot', single: true, amount: 1.17 } ]
     , hero: 'Hero'
     , holecards: { card1: 'Tc', card2: 'Ad' } }
    , { seats:
        [ { seatno: 1, player: 'Player1', chips: 21.4 }
        , { seatno: 2, player: 'Hero', chips: 14.3 }
        , { seatno: 3, player: 'Player3', chips: 27.12 }
        , { seatno: 4, player: 'Player16', chips: 2 }
        , { seatno: 5, player: 'Player12', chips: 2.02 }
        , { seatno: 6, player: 'Player15', chips: 3.55 }
        , { seatno: 7, player: 'Player17', chips: 30.32 }
        , { seatno: 8, player: 'Player14', chips: 4.6 }
        , { seatno: 9, player: 'Player13', chips: 0.41 }
        , { seatno: 10, player: 'Player10', chips: 1.17 } ]
     , info:
        { room: 'ipoker'
        , timezone: null
        , pokertype: 'holdem'
        , limit: 'limit'
        , currency: '$'
        , donation: null
        , rake: null
        , buyin: null
        , sb: 0.1
        , bb: 0.2
        , ante: 0
        , year: 2011
        , month: 7
        , day: 22
        , hour: 18
        , min: 10
        , sec: 9
        , hero: 'Hero'
        , handid: '2855524447'
        , gameno: '2855524447'
        , gametype: 'cash' }
     , table: { tablename: 'Gary', tableno: null, maxseats: 10, button: 9 }
     , board: { card1: '4h', card2: 'Jd', card3: 'Ts', card4: '5c', card5: '6h' }
     , posts:
        [ { player: 'Player10', type: 'sb', amount: 0.05 }
        , { player: 'Player1', type: 'bb', amount: 0.1 } ]
     , preflop:
        [ { player: 'Hero', type: 'fold' }
        , { player: 'Player3', type: 'fold' }
        , { player: 'Player12', type: 'fold' }
        , { player: 'Player15', type: 'fold' }
        , { player: 'Player17', type: 'raise', amount: 0.2 }
        , { player: 'Player14', type: 'fold' }
        , { player: 'Player13', type: 'call', amount: 0.2 }
        , { player: 'Player10', type: 'call', amount: 0.15 }
        , { player: 'Player1', type: 'fold' } ]
     , flop:
        [ { player: 'Player10', type: 'check' }
        , { player: 'Player17', type: 'bet', amount: 0.1 }
        , { player: 'Player13', type: 'fold' }
        , { player: 'Player10', type: 'call', amount: 0.1 } ]
     , turn:
        [ { player: 'Player10', type: 'bet', amount: 0.2 }
        , { player: 'Player17', type: 'call', amount: 0.2 } ]
     , river:
        [ { player: 'Player10', type: 'bet', amount: 0.2 }
        , { player: 'Player17', type: 'fold' } ]
     , showdown:
        [ { player: 'Player10', type: 'collect', amount: 1.44 }
        , { player: 'Hero', type: 'show', card1: '2c', card2: 'Js' } ]
     , summary: [ { type: 'pot', single: true, amount: 1.44 } ]
     , hero: 'Hero'
     , holecards: { card1: '2c', card2: 'Js' } } ])
  t.end()
})
