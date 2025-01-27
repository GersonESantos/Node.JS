const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Seja bem-vindo ao meu app!');
  });


  app.get('/sob', (req, res) => {
    res.send('sobre o que eu vou falar     ' );
  });


app.listen(8080, () => {
    console.log('Rodando app listening at http://localhost:8080');
  });
