'use strict'

function roundAmount(n) {
  return Math.round(n * 100) / 100
}

function adaptAction(x) {
  const ctx = this
  const { currentAmount } = ctx

  if (x.type === 'fold' || x.type === 'check') {
    return { player: x.player, type: x.type }
  }
  if (x.type === 'call' || x.type === 'bet') {
    ctx.currentAmount = x.amount
    return x
  }
  if (x.type === 'raise') {
    const amount = x.amount
    x.raiseTo = amount
    x.amount = roundAmount(amount - currentAmount)
    ctx.currentAmount = amount
    return x
  }
  return x
}

function adaptActions(actions) {
  return actions.map(adaptAction, { currentAmount: 0 })
}

function adaptShowdown(wins, playerCards) {
  const showdowns = []
  for (const [ player, amount ] of wins) {
    if (amount > 0) {
        showdowns.push({
          player
        , type: 'collect'
        , amount
      })
    }
  }
  for (const [ player, cards ] of playerCards) {
    showdowns.push({
        player
      , type: 'show'
      , card1: cards.card1
      , card2: cards.card2
    })
  }
  return showdowns
}

function adaptSummary(wins) {
  let winners = 0
  let totalAmount = 0
  for (const amount of wins.values()) {
    if (amount === 0) continue
    winners++
    totalAmount += amount
  }
  return [{
      type: 'pot'
    , single: winners < 2
    , amount: roundAmount(totalAmount)
  }]
}

function adaptHolecards(hero, playerCards) {
  if (hero == null) return null
  if (!playerCards.has(hero)) return null
  return playerCards.get(hero)
}

function adapt(data) {
  const preflop = adaptActions(data.preflop)
  const flop = adaptActions(data.flop)
  const turn = adaptActions(data.turn)
  const river = adaptActions(data.river)
  const info = Object.assign({
      room: 'ipoker'
    , timezone: null
  }, data.info)
  const showdown = adaptShowdown(data.wins, data.playerCards)
  const summary = adaptSummary(data.wins)
  const holecards = adaptHolecards(info.hero, data.playerCards)

  return {
      seats: data.seats
    , info
    , table: data.table
    , board: data.board
    , posts: data.posts
    , preflop
    , flop
    , turn
    , river
    , showdown
    , summary
    , hero: info.hero
    , holecards
  }
}

module.exports = adapt
