var express = require('express');


const { engine } = require('express-handlebars');
var bodyParser = require('body-parser');

var fetch = require('node-fetch');

var app = express();




app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static(__dirname + '/publico'));


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
    fetch('http://localhost:3000/clientes',{method: 'GET'})
    .then(response => response.json())
    .then(response => res.render('inicio', {dados: response}))
});


app.listen(8080, () => {
  console.log('Server is running on http://localhost:8080');
});


