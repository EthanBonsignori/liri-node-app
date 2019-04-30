const keys = require('../services/keys')
const axios = require('axios')
const moment = require('moment')

const fs = require('fs')

class Band {
  findBand (band) {
    // Set band to 'Skrillex if user enters no band
    if (!band) band = 'Skrillex'
    // Create url and API query
    const url = `https://rest.bandsintown.com/artists/${band}/events?app_id=${keys.bandsInTown}`
    axios.get(url)
      .then(response => {
        // Add title to console and log.txt (before the other info is appended)
        const title = `\n\nSearch for "${band}" using the command <concert-this> found ${response.data.length} results\n\n`
        console.log(title)
        fs.appendFile('log.txt', title, (err) => {
          if (err) throw err
        })
        const data = response.data
        // Create an array of data and join with a new line for each venue in the response
        for (let i = 0; i < data.length; i++) {
          // Update the path for venue on each loop
          const venue = data[i].venue
          const bandData = [
            `Venue: ${venue.name}`,
            `Location: ${venue.city}, ${venue.country}`,
            `Date: ${moment(data[i].datetime).format('MM/DD/YYYY')}`
          ].join('\n')

          // Add results to log.txt and show them in the console
          const divider = '\n------------------------------------------------------------\n\n'
          const log = bandData + divider
          fs.appendFile('log.txt', log, (err) => {
            if (err) throw err
            console.log(bandData, '\n\n')
          })
        }
      })
  }
}

module.exports = Band
