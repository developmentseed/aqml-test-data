#! /usr/bin/env node

const MapboxClient = require('mapbox')

const getBoundaries = require('../lib/get-radius-boundary')

const client = new MapboxClient(process.env.MAPBOX_TOKEN)

const placename = process.argv[2]

getBoundaries(placename, (err, bbox) => {
  console.log(JSON.stringify(bbox))
})
