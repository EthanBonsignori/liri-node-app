const axios = require('axios')
const fs = require('fs')

class Movie {
  constructor () {
    this.findMovie = (movie) => {
      const url = `https://www.omdbapi.com/?t=${movie}&apikey=trilogy`
      axios.get(url)
        .then(response => {
          const title = `Search for "${movie}" Using the _movie-this_ command\n`
          const divider = '\n------------------------------------------------------------\n\n'
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

          const log = title + movieData + divider
          fs.appendFile('log.txt', log, (err) => {
            if (err) throw err
            console.log(movieData)
          })
        })
    }
  }
}

module.exports = Movie
