const express = require('express')
const exphbs = require('express-handlebars')
const session = require('express-session')
// const cookieParser = require('cookie-parser')
const routes = require('./routes')
const usePassport = require('./config/passport')
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
// 在 passport 之前要先啟用 session 
app.use(session({
  secret: 'ThisIsMySecret',
  resave: true,
  saveUninitialized: false,
  name: 'user'
}))
// 呼叫 Passport 函式並傳入 app，寫在路由之前
usePassport(app)
app.use(routes)

app.listen(port, () => {
  console.log(`The server is running and listening at http://localhost:${port}`)
})