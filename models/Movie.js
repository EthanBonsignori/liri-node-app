const keys = require('../services/keys')
const axios = require('axios')

const fs = require('fs')

class Movie {
  findMovie (movie) {
    if (!movie) movie = 'Mr. Nobody'
    const url = `https://www.omdbapi.com/?t=${movie}&apikey=${keys.omdb.id}`
    axios.get(url)
      .then(response => {
        // Add title to console and log.txt later
        const title = `\n\nSearch for "${movie}" Using the <movie-this> command\n\n`
        console.log(title)
        // Store path for data
        const data = response.data
        // Create an array of data from the response and join with a new line for each index
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

        // Add results to log.txt and show them in the console
        const divider = '\n------------------------------------------------------------\n\n'
        const log = title + movieData + divider
        fs.appendFile('log.txt', log, (err) => {
          if (err) throw err
          console.log(`${movieData}\n\n`)
        })
      })
  }
}

module.exports = Movie
