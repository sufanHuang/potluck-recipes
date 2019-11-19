const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = process.env.PORT || 5000

app.use(express.json())

const mongoURI = 'mongodb://localhost:32769'

mongoose
    .connect(
        mongoURI,
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err))

const Users = require('./routes/Users')
const Recipes = require('./routes/Recipes')

app.use('/users', Users)
app.use('/recipes', Recipes)

app.listen(port, function() {
    console.log('Server is running on port: ' + port)
})
