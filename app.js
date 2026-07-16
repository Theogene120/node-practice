const express = require('express') // this return the function  
const morgan = require('morgan')
const mongoose = require('mongoose')

const blogRoutes = require("./routes/blogRoutes")

const app = express() // creating an instance of the function 

//  url to connect to database 
const dbURI = 'mongodb+srv://igiranezatheogene4_db_user:smart.theo@node-practice.ejagfpx.mongodb.net/Node-tuts?appName=Node-practice'

mongoose.connect(dbURI)
.then(res => app.listen(3000))
.catch(err => console.log(err))

// mongoose and mongo sandbox routes

/* app.get('/add-blog', (req, res) => {
    const blog = new Blog({
        title: 'New blog 2',
        snippet: 'About my new blog',
        body: 'More about my new blog'
    })

    blog.save()  //  for saving data to database and it is promise
    .then(result => {
        res.send(result)
    })
    .catch(err => {
        console.log(err)
    })
})

// get the blog stored

app.get('/all-blog', (req, res) => {
    Blog.find()
    .then(result => {
        res.send(result)
    })
    .catch(err => {
        console.log(err)
    })
})

// get single blog
app.get('/single-blog', (req, res) => {
    Blog.findById('6a08a5e595cc238dc58d7d81')
    .then(result => {
        res.send(result)
    })
    .catch(err => {
        console.log(err)
    })
}) 
    
*/


// register view engine
app.set('view engine', 'ejs')

// listen to request
// app.listen(3000) 

// middleware and static file

app.use(express.static('public')) // this the folder contain all static files
app.use(express.urlencoded({extended: true}))

// call morgan
app.use(morgan('dev'))


app.get('/',(req, res) => { 
    // const blogs = [
    //     {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    //     {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    //     {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    // ]
    // res.render('index', {title: 'Home', blogs})
    res.redirect('/blogs')
})


// blog routes

app.use("/blogs", blogRoutes)

app.get('/about',(req, res) => { 
    res.render('about', {title: 'About'})
})

// redirect

app.get('/about-us', (req, res) => {
    res.redirect('about', {title: 'About'})
})

// 404 page
app.use((req, res) => {
    res.status(404).render('404', {title: 'Error'})
})