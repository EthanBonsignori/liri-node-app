const fs = require('fs')

// Import each class from the models folder
const { Band, SpotifyThis, Movie } = require('./models')

// Create new instances of each class
const band = new Band()
const spotifyThis = new SpotifyThis()
const movie = new Movie()

// Run if user enters 'help'
const helpCommand = () => {
  console.log(`
  \n\nType one of the following commands:\n
  concert-this <band-or-artist> : searches for upcoming concerts\n
  spotify-this-song <song-name> : searches for info on that song\n
  movie-this <movie-name> : searches for info on that movie\n
  do-what-it-says : runs whatever command is in random.txt\n\n
  `)
}

// Reads the random.txt and runs the command that corresponds to the text
const readRandom = () => {
  fs.readFile('random.txt', 'utf8', (error, data) => {
    if (error) throw error
    console.log(`Succesfully read command <${data}> from file 'random.txt'...`)
    checkCommand(data)
  })
}

// Check user input and run a function based on user's command
const checkCommand = (command) => {
  const commandArray = command.split(' ')
  let action = commandArray[0]
  let search = commandArray.slice(1).join(' ')

  switch (action) {
    case 'help':
      helpCommand()
      break
    case 'concert-this':
      band.findBand(search)
      break
    case 'spotify-this-song':
      spotifyThis.song(search)
      break
    case 'movie-this':
      movie.findMovie(search)
      break
    case 'do-what-it-says':
      readRandom()
      break
    default:
      console.log(`\n\n Unrecognized command. Type 'liri help' for available commands\n\n`)
  }
}

module.exports = checkCommand
