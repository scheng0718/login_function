// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
// 引用 Login model
const Login = require('../../models/login')
// 定義登入路由
router.get('/login', (req, res) => {
  const error = req.query.error === 'true';
  res.render('login', { error })
})
// 定義註冊路由
router.get('/register', (req, res) => {
  res.render('register')
})

// 定義登入功能路由
router.post('/login', (req, res) => {
  const email = req.body.email
  const password = req.body.password
  Login.findOne({email, password})
    .lean()
    .then(user => {
      if (!user) {
        res.redirect('/users/login/?error=true')
      } else {
        const firstName = user.firstName
        res.render('welcome', { firstName })
      }
    })
})
// 匯出路由模組
module.exports = router