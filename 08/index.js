const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Seja bem-vindo ao meu app!');
  });


  app.get('/sob', (req, res) => {
    res.send('sobre o que eu vou falar     ' );
  });

  app.get('/ola', (req, res) => {
    res.send('ola' );
  });

  app.get('/ola/:cargo/:nome/:cor', (req, res) => {
    res.send('<h1>ola '+req.params.nome+"</h1>"+'<h2>seu cargo é: '+req.params.cargo+"</h2>"+'<h3>sua cor favorita é: '+req.params.cor+"</h3>");
  });

app.listen(8080, () => {
    console.log('Rodando app listening at http://localhost:8080');
  });
