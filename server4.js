const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000 //variable global para determinar el puerto

// const { registerPartials } = require('hbs');

app.use(express.static(__dirname + '/public'));

//EXPRESS HBS ENGINE
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

////////////////////////////HELPERS//////////////////////////////////////////
/*
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (texto) => {

    let palabras = texto.split(' ');

    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()
    });

    return palabras.join(' ');
});
*/
/////////////////////////////////FIN HELPERS////////////////////////////////

app.get('/', (req, res) => {

    res.render('home', {

        nombre: 'wilDer rojas',
        //   anio: new Date().getFullYear()
    });
});

/*
app.get('/home', (req, res) => {
    res.render('home', {
        nombre: 'Wilder',
        anio: new Date().getFullYear()
    })
})
*/

app.get('/saludo', (req, res) => {
    res.render('saludo', {
        anio: new Date().getFullYear()
    });
});


app.get('/qantu', (req, res) => {
    res.send("Hola qantucita");
})

app.listen(port, () => {
    console.log(`Escuchando desde el puerto ${port}`);
})