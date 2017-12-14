const express = require('express')

const config = require('./config')

var app = express()
var port = config.port

app.get('/', (req, res) => {
    res.json("hello world")
})

app.listen(port, () => {
    console.log(`server is started in port ${port}`)
})