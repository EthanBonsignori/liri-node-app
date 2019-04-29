const keys = require('../services/keys')
const axios = require('axios')
const fs = require('fs')
const moment = require('moment')

class Band {
  findBand (band) {
    let url = `https://rest.bandsintown.com/artists/${band}/events?app_id=${keys.bandsInTown}`
    axios.get(url)
      .then(response => {
        const data = response.data
        const title = `\n\nSearch for "${band}" using the _concert-this_ command found ${data.length} results\n\n`
        console.log(title)
        fs.appendFile('log.txt', title, (err) => {
          if (err) throw err
        })
        for (let i = 0; i < data.length; i++) {
          let venue = data[i].venue
          const bandData = [
            `Venue: ${venue.name}`,
            `Location: ${venue.city}, ${venue.country}`,
            `Date: ${moment(data[i].datetime).format('MM/DD/YYYY')}`
          ].join('\n')

          // Add results to log.txt
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
