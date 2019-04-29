const Spotify = require('node-spotify-api')

const keys = require('../services/keys')
const axios = require('axios')
const fs = require('fs')

const spotify = new Spotify(keys.spotify)

class SpotifyThis {
  song () {
    console.log('finding song')
  }
}

module.exports = SpotifyThis
