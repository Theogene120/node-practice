const fs = require('fs')
const { escape } = require('querystring')

// read file

// fs.readFile('./docs/blog1.txt', (err, data) => {
//     if(err) {
//         console.log(err)
//     }
//     console.log(data.toString())
// })

// console.log('Here is the last line')

// Write on file

// fs.writeFile('./docs/blog1.txt', 'Hello, World', () => {
//     console.log('Text written succefull')
// })

// fs.writeFile('./docs/blog2.txt', 'Hello, again', () => {
//     console.log('Text written succefull')
// })

// Create folder

// if(!fs.existsSync('./assets')){
//     fs.mkdir('./assets', () => {
//         console.log('folder created succefull')
//     })
// }else{
//     fs.rmdir('./assets', (err) => {
//         if(err) 
//             console.log(err)
//         else
//             console.log('file deleted succefull')
//     })
// }

// Delete file

// if(fs.existsSync('./docs/deleteme.txt')) {
//     fs.unlink('./docs/deleteme.txt', (err) => {
//         if(err) {
//             console.log(err)
//         }else{
//             console.log('File deleted succefull')
//         }
//     })
// }else{
//     console.log("file doesn't exist")
// }

// Append on text on file

if(fs.existsSync('./docs/blog1.txt')){
    fs.appendFile('./docs/blog1.txt', '\nWelcome to node js learning with TH-I', (err) => {
        if(err){
            console.log(err)
        }
        
        console.log('Text appended succefull')
    })
}else{
    console.log('File does not exist')
}

// Read files

fs.readdir('./docs', (err, files) => {
    if(err){
        console.log(err)
    }
    console.log(files)
})

