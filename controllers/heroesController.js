let heroes = require('../heroes.json')

function findAll(req, res) {
    res.send(heroes)
}

function findById(req, res) {
    let resultado = heroes.find(function (heroe) {
        return heroe.id == req.params.id
    })

    if (resultado) {
        res.send(`Hola, me llamo ${resultado.nombre} y soy ${resultado.profesion}`)
    } else {
        res.send('No lo encontre')
    }
}

module.exports = {findById, findAll}