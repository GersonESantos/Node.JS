var express = require('express');


const { engine } = require('express-handlebars');
var bodyParser = require('body-parser');

var app = express();




app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.render('inicio');
});


const port = 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
