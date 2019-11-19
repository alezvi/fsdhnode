const express = require('express')
const app = express()
let heroesRoutes = require('./heroesRoutes.js')

app.use('/heroes', heroesRoutes)

app.get('/', function (req, res) {
    res.send(saludo)
})

app.listen(3000, function () {
    console.log('http://localhost:3000')
})
