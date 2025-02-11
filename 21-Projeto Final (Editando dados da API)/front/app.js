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

app.post('/cadastrar', (req, res) => {
  let nome = req.body.nome;
  let idade = req.body.idade;
  let dados = {'nome': nome, 'idade': idade};
  fetch('http://localhost:3000/clientes/', {
    method: 'POST',
    body: JSON.stringify(dados),
    headers: { 'Content-Type': 'application/json' }
  })
  .then(res.redirect('/'));
}
);

app.get('/selecionar/:id', (req, res) => {
  let id = req.params.id;
  fetch('http://localhost:3000/clientes/'+id, {method: 'GET'})
  .then(response => response.json())
  .then(response => res.render('selecionar', {dados: response}))

});

app.post('/editar/', (req, res) => {
  let id = req.params.id;
  let nome = req.body.nome;
  let idade = req.body.idade;
  let dados = {'nome': nome, 'idade': idade};
  fetch('http://localhost:3000/clientes/'+id, {
    method: 'PUT',
    body: JSON.stringify({nome: nome, idade: idade}),
    headers: { 'Content-Type': 'application/json' }
  })
  .then(res.redirect('/'));
});
app.listen(8080, () => {
  console.log('Server is running on http://localhost:8080');
});


