const express = require('express')
const app = express()

app.get('/', (req, res) => {

    let salida = {
        nombre: 'Wilder',
        edad: 32,
        url: req.url
    };

    res.send(salida);
    // res.send('Hola mundo');
})

app.get('/qantu', (req, res) => {
    res.send('Hola qantuchita');
})

/*
app.listen(3000)
*/

app.listen(3000, () => {
    console.log("Escuchando peticiones en el puerto 3000");
})