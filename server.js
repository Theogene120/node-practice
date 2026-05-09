const http = require('http')
const fs = require('fs')
const _ = require('lodash')

const server = http.createServer((req, res) => {
    
    // use lodash random methods

    let num = _.random(1, 20)
    console.log(num)

    // use once() method from lodash

    const greet  = _.once(() => {
        console.log('Hello')
    })

    greet()
    greet()

    // set header content type
    res.setHeader('Content-Type', 'text/html')

    // Make simple navigation
    let path = './views/'
    switch(req.url){
        case '/':
            path += 'index.html'
            res.statusCode = 200
            break;
        case '/about':
            path += 'about.html'
            res.statusCode = 200
            break;
        case '/about-theo':
            res.statusCode = 301
            res.setHeader('Location', '/about')
            res.end()
            break;
        default:
            path += '404.html'
            res.statusCode = 404
            break;
    }

    // read and response data form separate html file
    fs.readFile(path, (err, data) => {
        if(err) {
            console.log(err)
        } else {
            // res.write(data)
            res.end(data)
        }
    })
})

server.listen(3000, 'localhost', () => {
    console.log('listen for request on port 3000')
})