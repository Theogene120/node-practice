const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req.url, req.method)
    res.end('Hello from backend')
})

server.listen(3000, 'localhost', () => {
    console.log('listen for request on port 3000')
})