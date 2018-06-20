'use strict'

const test = require('tape')
const ocat = require('ocat').applyRes5Opts()
const processFile = require('./util/process-ipoker')
const hha = require('hha')

const PRINT = null // 'cash.usd.players-showed'

test('\nipoker: parsing + analyzing', function(t) {
  [ 'cash.pounds.no-hero'
  , 'cash.usd.players-showed'
  ].forEach(run)

  function run(file) {
    t.comment(`+++ ${file} +++`)
    const res = processFile(file)
    const analyzeds = res.map(hha)
    for (const x of analyzeds) t.ok(x != null, 'analyzed non null')
    if (PRINT === file) {
      ocat.log({ file, analyzeds })
    }
  }

  t.end()
})
