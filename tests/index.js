var test = require('tape')
var turf = require('@turf/helpers')

var generatePm25 = require('../lib/generate-fake-pm25')

test('generates fake pm2.5 data', function (t) {
  var polygon = turf.polygon([[[-5, 52], [-4, 56], [-2, 51], [-7, 54], [-5, 52]]], { name: 'poly1' })
  var data = generatePm25(polygon)
  t.end()
})
