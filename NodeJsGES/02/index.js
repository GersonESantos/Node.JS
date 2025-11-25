const express = require('express')
const app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
    // res.send('hello world German')
    // res.send('<h1>Hello Gerson</h1>')
    res.json({
              title: 'Hello Word', 
              message: 'This is a JSON response'
             })
})
app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})

// 