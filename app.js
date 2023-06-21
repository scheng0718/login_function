const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const Login = require('./models/login')
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
app.engine('hbs', exphbs({
  defaultLayout: 'main',
  extname: 'hbs'
}))
app.set('view engine', 'hbs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  const error = req.query.error === 'true';
  res.render('index', { error })
})
app.post('/login', (req, res) => {
  const email = req.body.email
  const password = req.body.password
  Login.findOne({email, password})
    .lean()
    .then(user => {
      if (!user) {
        res.redirect('/?error=true')
      } else {
        const firstName = user.firstName
        res.render('welcome', { firstName })
      }
    })
})
app.listen(port, () => {
  console.log(`The server is running and listening at http://localhost:${port}`)
})