const express = require('express')
// Body parser
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// especificando o diretório onde estão os arquivos estáticos


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/formulario.html');
  
});
app.post('/receber', (req, res) => {
  
  res.write('o nome e ' + req.body.nome);
  res.end();

})


const port = 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})