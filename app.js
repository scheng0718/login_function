const express = require('express')

const exphbs = require('express-handlebars')
const routes = require('./routes')
const app = express()
const port = 3000
require('./config/mongoose')
app.engine('hbs', exphbs({
  defaultLayout: 'main',
  extname: 'hbs'
}))
app.set('view engine', 'hbs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(routes)

app.listen(port, () => {
  console.log(`The server is running and listening at http://localhost:${port}`)
})