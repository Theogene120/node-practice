const express = require('express') // this return the function  

// require morgan
const morgan = require('morgan')

const app = express() // creating an instance of the function 

//  url to connect to database 
const dbURL = 'mongodb://atlas-sql-6a0645d46733ead9178291b4-b6wfmr.a.query.mongodb.net/Node-tuts?ssl=true&authSource=admin'


// register view engine

app.set('view engine', 'ejs')

// listen to request
app.listen(3000) // 3000 is the port

// middleware and static file

app.use(express.static('public')) // this the folder contain all static files

// call morgan
app.use(morgan('dev'))


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