const express = require('express')
const app = express()
const port = 3000

app.use('/', (req, res) => {
  res.send('This is first page')
})

app.listen(port, () => {
  console.log(`The server is running and listening at http://localhost:${port}`)
})