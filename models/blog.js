const mongoose = require('mongoose')

const Schema = mongoose.Schema

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, { timestamps: true })

// timestamps: true if for tracking when update, addition or other 
// changes happened, it is an option


// model

const Blog = mongoose.model('Blog', blogSchema)

// export model

module.exports = Blog;