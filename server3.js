const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/qantu', (req, res) => {

    res.send('Hola qantucita');
})

app.listen(3000, () => {
    console.log('Escuchando desde el puerto 3000');
})