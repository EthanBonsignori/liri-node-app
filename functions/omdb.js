const axios = require('axios')

const axiosOmdb = (movie) => {
  let queryUrl = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy"
  axios.get(queryUrl)
    .then(response => {
      console.log(response)
    })
}

module.exports = axiosOmdb
