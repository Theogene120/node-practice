const express = require('express') // this return the function  

const app = express() // creating an instance of the function 

// listen to request
app.listen(3000) // 3000 is the port

app.get('/',(req, res) => {  // get method respond to a get request
    //res.send('<p>Home Page</p>') // In express no need of specifying the content header
    res.sendFile('./views/index.html', {root: __dirname})
})

// create about page path

app.get('/about',(req, res) => { 
    //res.send('<p>About Page</p>')
    res.sendFile('./views/about.html', {root: __dirname})
})

// redirect

app.get('/about-us', (req, res) => {
    res.redirect('/about')
})

// 404 page

app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', {root: __dirname})
})