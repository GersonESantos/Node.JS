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


app.listen(3000);