const express = require('express')
const path = require('path')
const child_process = require('child_process')
const PIMaker = child_process.fork(__dirname + '/PI-maker')
let { PI } = require('./PI-maker')

PIMaker.on('message', function (latestPI) {
    PI = latestPI
})

const app = express()
app.use(express.static(path.join(__dirname, 'build')))

app.get('/pi', function (req, res) {
    return res.status(200).json({ PI })
})

// For production - serve client bundle from '/'
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(process.env.PORT || 8080)
