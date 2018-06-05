#! /usr/bin/env node

var generateFakePm25 = require('../lib/generate-fake-pm25')

var boundaries = require('../data/houston-boundaries.json')

var polygon = {
  type: 'Feature',
  geometry: boundaries.geometries[0]
}

var points = generateFakePm25(polygon)

console.log(JSON.stringify(points))
