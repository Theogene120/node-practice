const express = require('express') // this return the function  

const app = express() // creating an instance of the function 

// register view engine

app.set('view engine', 'ejs')

// listen to request
app.listen(3000) // 3000 is the port

app.get('/',(req, res) => { 
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    ]
    res.render('index', {title: 'Home', blogs})
})

// create about page path

app.get('/about',(req, res) => { 
    res.render('about', {title: 'About'})
})

app.get('/blogs/create',(req, res) => { 
    res.render('create', {title: 'Create'})
})

// redirect

app.get('/about-us', (req, res) => {
    res.redirect('about', {title: 'About'})
})

// 404 page

app.use((req, res) => {
    res.status(404).render('404', {title: 'Error'})
})