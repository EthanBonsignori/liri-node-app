require('dotenv').config()

const checkCommand = require('./controller')

let command = process.argv.slice(2).join(' ')

// Pass user input to the checkCommand function in controller.js
checkCommand(command)
