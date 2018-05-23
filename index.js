module.exports = {
  generateFakePm25: require('./lib/generate-fake-pm25'),
  randomPointsInPolygon: require('./lib/random-points-in-polygon'),
  data: {
    houston: {
      boundaries: require('./data/houston-boundaries.json'),
      pm25: require('./data/houston-pm25.json')
    }
  }
}
