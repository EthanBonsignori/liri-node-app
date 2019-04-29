const axios = require('axios')
const fs = require('fs')
const moment = require('moment')

class Band {
  constructor () {
    this.findBand = (band) => {
      let url = `https://rest.bandsintown.com/artists/${band}/events?app_id=codingbootcamp`
      axios.get(url)
        .then(response => {
          const logTitle = `Search for "${band}" using the _concert-this_ command\n`
          const divider = '\n------------------------------------------------------------\n\n'
          const data = response.data
          console.log(`\n\nFound ${data.length} venues for this artist!\n\n`)
          for (let i = 0; i < data.length; i++) {
            let venue = data[i].venue
            const bandData = [
              `Venue: ${venue.name}`,
              `Location: ${venue.city}, ${venue.country}`,
              `Date: ${moment(data[i].datetime).format('MM/DD/YYYY')}`
            ].join('\n')
            console.log(bandData, '\n\n')
          }
          // Will log this in a better format
        })
    }
  }
}

module.exports = Band
