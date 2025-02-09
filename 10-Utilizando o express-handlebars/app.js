var express = require('express');
var exphbs = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs({defaultLayout: 'principal'}));
app.set('view engine', 'handlebars');
// app.set('views', './views');

app.get('/', (req, res) => {
    res.render('inicio');
});

app.get('/sobre', (req, res) => {
    res.render('sobre');
});

app.listen(3000);