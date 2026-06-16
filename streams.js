const fs = require('fs')

const readStream = fs.createReadStream('./docs/blog3.txt', {encoding: 'utf-8'}) // encoding let text comes in readable form

//  instead of using toString()

const writeStream = fs.createWriteStream('./docs/blog4.txt')

// readStream.on('data', (chunk) => { // on is event listener and data is the event name

//     // console.log('-- NEW CHUNK --')
//     // console.log(chunk)
//     writeStream.write('\n\n\n\nNEW CHUNK\n\n\n')
//     writeStream.write(chunk)
// })

// PIPING

readStream.pipe(writeStream)
