const keys = require('../services/keys')
const Spotify = require('node-spotify-api')

const fs = require('fs')

const spotify = new Spotify(keys.spotify)

class SpotifyThis {
  song (song) {
    // Set song to 'The Sign' if user enters no song
    if (!song) song = 'The Sign'
    // Search spotify for song
    spotify.search({
      type: 'track',
      query: song
    }, (err, data) => {
      if (err) throw err
      // Store the path in a variable
      const songPath = data.tracks.items[0]
      // Add title to log.txt and console
      const title = `\n\nSearch for '${song}' using the command <spotify-this-song>\n`
      console.log(title)
      // Create array of data and join it with a new line
      const songData = [
        `Artist(s): ${songPath.artists[0].name}`,
        `Song Name: ${songPath.name}`,
        `Album: ${songPath.album.name}`,
        `Preview: ${songPath.preview_url}`
      ].join('\n')

      // Add results to log.txt and show them in the console
      const divider = '\n------------------------------------------------------------\n\n'
      const log = title + songData + divider
      fs.appendFile('log.txt', log, (err) => {
        if (err) throw err
        console.log(`${songData}\n\n`)
      })
    })
  }
}

module.exports = SpotifyThis
