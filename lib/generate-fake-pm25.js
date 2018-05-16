var turf = require('@turf/helpers')
var randomPoints = require('./random-points-in-polygon')

module.exports = function generateFakePm25 (polygon, concentration) {
  var points = randomPoints(polygon, {
    count: 500,
    properties: {
      time: new Date().toISOString()
    }
  })

  for (var i = 0; i < points.length; i++) {
    points[i].properties.concentration = randomInt(1, 500)
  }

  return turf.featureCollection(points)
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
