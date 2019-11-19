const express = require('express')
const router = express.Router()
let heroesController = require('./controllers/heroesController')

router.get('/', heroesController.findAll)
router.get('/detalle/:id', heroesController.findById)

module.exports = router