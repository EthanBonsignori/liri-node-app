const Band = require('./Band')
// const Spotify = require('./Spotify')
const Movie = require('./Movie')
// const Random = require('./Random')

const band = new Band()
// const spotify = new Spotify()
const movie = new Movie()
// const random = new Random()

const checkCommand = (command) => {
  const commandArray = command.split(' ')
  let action = commandArray[0]
  let search = commandArray.slice(1).join(' ')

  switch (action) {
    case 'concert-this':
      band.findBand(search)
      break
    case 'spotify-this-song':
      spotify.findSong(search)
      break
    case 'movie-this':
      movie.findMovie(search)
      break
    case 'do-what-it-says':
      random.readText()
      break
  }
}

module.exports = checkCommand
