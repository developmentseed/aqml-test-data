var booleanPointInPolygon = require('@turf/boolean-point-in-polygon').default
var random = require('@turf/random')
var extent = require('turf-extent')

module.exports = function randomPointsInPolygon (polygon, options) {
  var bbox = extent(polygon)
  var count = options.count
  var points = []

  for (var i = 0; i <= count; i++) {
    if (i === count) {
      return points
    }

    var point = random.randomPoint(1, { bbox: bbox });

    if (booleanPointInPolygon(point.features[0], polygon) === false) {
      --i
    } else {
      point.features[0].properties = Object.assign({}, options.properties || {});
      points.push(point.features[0]);
    }
  }
}
