const express = require('express')
const app = express()
// 
app.get('/hello', (req, res) => {
    const nome = req.query.nome

      return res.status(200).json({ 
        title: 'Hello Word', 
        message: 'Ola ${nome} tudo bem?'
      })

       })
app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})

