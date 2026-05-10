const express = require('express') // this return the function  

const app = express() // creating an instance of the function 

// register view engine

app.set('view engine', 'ejs')

// listen to request
app.listen(3000) // 3000 is the port

app.get('/',(req, res) => { 
    res.render('index')
})

// create about page path

app.get('/about',(req, res) => { 
    res.render('about')
})

app.get('/blogs/create',(req, res) => { 
    res.render('create')
})

// redirect

app.get('/about-us', (req, res) => {
    res.redirect('about')
})

// 404 page

app.use((req, res) => {
    res.status(404).render('404')
})