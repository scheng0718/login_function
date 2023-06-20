const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true  
})
const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongodb connected!')
})

app.use('/', (req, res) => {
  res.send('This is first page')
})

app.listen(port, () => {
  console.log(`The server is running and listening at http://localhost:${port}`)
})