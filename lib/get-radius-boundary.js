const MapboxClient = require('mapbox')
const transformScale = require('@turf/transform-scale')
const turf = require('@turf/helpers')
const buffer = require('@turf/buffer')
const client = new MapboxClient(process.env.MAPBOX_TOKEN)

module.exports = function getRadiusBoundary (placename, callback) {
  client.geocodeForward(placename, function (err, data, res) {
    const place = data.features.find((feature) => {
      return feature.bbox
    })

    const center = place.center
    const radius = buffer(turf.point(center), 100)
    callback(null, radius)
  })
}
