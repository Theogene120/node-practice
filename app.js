const express = require('express') // this return the function  

const app = express() // creating an instance of the function 

// listen to request
app.listen(3000) // 3000 is the port

app.get('/',(req, res) => {  // get method respond to a get request
    res.send('<p>Home Page</p>') // In express no need of specifying the content header
})

