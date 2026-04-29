let {names, age} = require('./people')

console.log(names, age) // Before export if names it was empty, but now it has value
const os = require('os')
console.log(os.platform(), os.homedir())
