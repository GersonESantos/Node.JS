var express = require('express');
var fetch = require('node-fetch');
var app = express();


app.get('/', function (req, res) {
    
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(responsta => responsta.json())
    // .then(responsta => console.log(responsta))
    .then(responsta => console.table(responsta))
    res.end();
});



app.listen(8080, () => {
    console.log('Rodando app listening at http://localhost:8080');
  });