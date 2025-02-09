const express = require('express')
const app = express()
// especificando o diretório onde estão os arquivos estáticos
app.use(express.static(__dirname + '/publico'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/pagina.html');
  
})

const port = 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})