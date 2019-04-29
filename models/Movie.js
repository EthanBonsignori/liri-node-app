const keys = require('../services/keys')
const axios = require('axios')
const fs = require('fs')

class Movie {
  findMovie (movie) {
    const url = `https://www.omdbapi.com/?t=${movie}&apikey=${keys.omdb.id}`
    axios.get(url)
      .then(response => {
        const title = `Search for "${movie}" Using the _movie-this_ command\n`
        const data = response.data
        const movieData = [
          `Title: ${data.Title}`,
          `Released: ${data.Year}`,
          `IMDB Rating: ${data.Ratings[0].Value}`,
          `Rotten Tomatoes Rating: ${data.Ratings[1].Value}`,
          `Country: ${data.Country}`,
          `Language: ${data.Language}`,
          `Plot: ${data.Plot}`,
          `Actors: ${data.Actors}`
        ].join('\n')

        // Add results to log.txt
        const divider = '\n------------------------------------------------------------\n\n'
        const log = title + movieData + divider
        fs.appendFile('log.txt', log, (err) => {
          if (err) throw err
          console.log(movieData)
        })
      })
      .catch(err => { console.log(err.response.data) })
  }
}

module.exports = Movie
