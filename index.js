const express = require('express')
const app = express()
const port = 3000
const info = require('./info')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/info', info)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})