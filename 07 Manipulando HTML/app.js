const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/pagina.html')
  
})

const port = 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})