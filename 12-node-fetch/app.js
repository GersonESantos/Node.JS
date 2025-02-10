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
app.get('/laco', (req, res) => {
    res.render('laco', {gostaDeNode: false});
});
app.get('/foreach', (req, res) => {

    let pessoas = [

        {nome: 'João', idade: 25},
        {nome: 'Maria', idade: 30},
        {nome: 'José', idade: 28},
        {nome: 'Ana', idade: 35},
        {nome: 'Pedro', idade: 40},
        {nome: 'Paula', idade: 22},
        {nome: 'Carlos', idade: 33}
    ];
    res.render('foreach', {dados: pessoas});
});

app.listen(8080, () => {
    console.log('Rodando app listening at http://localhost:8080');
  });