const Spotify = require('node-spotify-api')

const keys = require('../services/keys')
const axios = require('axios')
const fs = require('fs')

console.log(keys.spotify)
// const spotify = new Spotify(keys.spotify)

class SpotifyThis {
  song (song) {
    if (!song) song = 'The Sign'
    console.log(song)

  //   spotify.search({
  //     type: 'track',
  //     query: 'song'
  //   }, (err, data) => {
  //     if (err) throw err
  //     console.log(data)
  //   })
  }
}

module.exports = SpotifyThis
