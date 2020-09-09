const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

// app.use(express.static(__dirname + '/ho'))

/*
app.get('/', (req, res) => {

    let salida = {
        nombre: 'Wilder',
        edad: 32,
        url: req.url
    };

    res.send(salida);
})
*/

app.get('/qantu', (req, res) => {
    res.send('Hola qantuchita');
})

app.listen(3000, () => {
    console.log("Escuchando desde el puerto 3000");
})