// Importar módulo express
var express = require('express');


const { engine } = require('express-handlebars');

const app = express();


app.engine('handlebars', engine());

app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('inicio');
});

app.get('/sobre', (req, res) => {
    res.render('sobre');
});
app.get('/formulario', (req, res) => {
    res.render('formulario');
});

app.listen(3000);