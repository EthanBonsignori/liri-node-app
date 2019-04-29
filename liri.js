const controller = require('./controller')

let command = process.argv.slice(2).join(' ')

controller(command)
