const express = require('express')
const app = express()
const bodyParser = require("body-parser")
require('./config/config')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
    // parse application/json
app.use(bodyParser.json())

// Traer Datos - SELECT
app.get('/usuarios', function(req, res) {
    res.json('get Usuarios')
})

// Insertar Datos - INSERT
app.post('/usuarios', function(req, res) {
    let body = req.body;

    if (body.Nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'EL nombre es necesario'
        });
    } else {
        res.json({
            persona: body
        });
    }
})

// Actualizar Datos - UPDATE - app.PATCH
app.put('/usuarios/:id', function(req, res) {
    let id = req.params.id;
    res.json({
        id
    })
})

// Borrado Logico Datos - DELETE
app.delete('/usuarios', function(req, res) {
    res.json('delete Usuarios')
})


app.listen(process.env.PORT, () => {
    console.log("Escuchando prueba ", process.env.PORT)
})