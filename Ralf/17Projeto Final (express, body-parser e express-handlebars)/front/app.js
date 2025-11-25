var express = require('express');


const { engine } = require('express-handlebars');
var bodyParser = require('body-parser');

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
    res.render('inicio');
});


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});


