// Importar os módulos
var express = require('express');
var fetch = require('node-fetch');

// App
var app = express();

// Rota
app.get('/', function(req, res){

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(resposta => resposta.json())
    .then(resposta => console.table(resposta))

    res.end();
});

// Servidor
listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});