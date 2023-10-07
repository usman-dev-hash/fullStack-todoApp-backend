const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const path = require('path')
const todoRoutes = require('./routes/todo');
const PORT = process.env.port || 5000

require('dotenv').config()

app.use(express.json())
app.use(cors())

mongoose
    .connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log(`mongo db connected successfully!`)
    })
    .catch((error) => {
        console.log('Error while connecting mongodb', error)
    })

app.use(todoRoutes);

app.listen(PORT, () => {
    console.log(`app is listening on port ${PORT}`)
})