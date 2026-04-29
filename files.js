const fs = require('fs')

// read file

// fs.readFile('./docs/blog1.txt', (err, data) => {
//     if(err) {
//         console.log(err)
//     }
//     console.log(data.toString())
// })

// console.log('Here is the last line')

// Write on file

fs.writeFile('./docs/blog1.txt', 'Hello, World', () => {
    console.log('Text written succefull')
})