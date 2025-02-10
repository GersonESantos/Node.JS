var express = require('express');
var expressHandlebars = require('express-handlebars');
var bodyParser = require('body-parser');


// App
var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.engine('handlebars', expressHandlebars({defaultLayout : 'principal'}));
app.set('view engine', 'handlebars');
app.set('views', './views');

// rotas
app.get('/', (req, res) => {
    res.render('inicio');
});
// servidor

app.listen(8080, () => {
    console.log('Rodando app listening at http://localhost:8080');
  });

