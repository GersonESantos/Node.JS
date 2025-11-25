const express = require('express')
const app = express()

app.get('/hello', (req, res) => {
     //  return res.send('Hello World!')
    // return res.json({ message: 'Hello World!' })
      return res.status(200).json({ 
        title: 'Hello Word', 
        message: 'This is a JSON response'
      })

       })
app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})

