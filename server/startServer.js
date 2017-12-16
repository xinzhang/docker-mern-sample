const express = require('express')

const config = require('./config')

var app = express()
var port = config.port

const userRoutes = require('../routes/user')

app.get('/', (req, res) => {
    res.json("hello world")
})

app.use('/user', userRoute);

app.listen(port, () => {
    console.log(`server is started in port ${port}`)
})