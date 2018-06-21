'use strict'

const test = require('tape')
const ocat = require('ocat').applyRes5Opts()
const processFile = require('./util/process-ipoker')
const hha = require('hha')
const fs = require('fs')

const PRINT = null // 'cash.fpdb.LHE-10max-USD-0.10-0.20-201107.player.sitting.out'

const files = fs.readdirSync(__dirname)
  .filter(x => x !== 'ipoker.smoke.js')
  .filter(x => x.startsWith('ipoker'))
  .map(x => x.slice('ipoker.'.length, -3))

test('\nipoker: parsing + analyzing', function(t) {
  files.forEach(run)

  function run(file) {
    t.comment(`+++ ${file} +++`)
    const res = processFile(file)
    const analyzeds = res.map(hha)
    for (const x of analyzeds) t.ok(x != null, 'analyzed non null')
    if (PRINT === file) {
      ocat.log({ file, analyzeds, res })
    }
  }

  t.end()
})
