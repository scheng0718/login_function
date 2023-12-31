// 引用 Express 與 Express 路由器
const express = require('express')
const passport = require('passport')
const router = express.Router()
// 引用 User model
const User = require('../../models/user')

// 定義登入路由
router.get('/login', (req, res) => {
  const error = req.query.error === 'true'
  // console.log(req.session)
  // console.log(req.sessionID)
  res.render('login', { error })
})
// 定義註冊路由
router.get('/register', (req, res) => {
  res.render('register')
})
// 定義註冊 POST 路由
router.post('/register', (req, res) => {
  const {firstName, lastName, email, password, confirmPassword} = req.body
  // console.log(firstName, lastName, email, password, confirmPassword)
  User.findOne({email})
    .lean()
    .then(user => {
      if (user) {
        // 用戶已經註冊過
        console.log('The account is already registered!')
        res.render('register', {firstName, lastName, email, password, confirmPassword})
      } else {
        // 新用戶寫進資料庫
        User.create({firstName, lastName, email, password })
      }
    })
    .then(() => res.redirect('/users/login'))
    .catch(error => console.log(error))   
})
// 定義登入功能路由
// router.post('/login', (req, res) => {
//   const { email, password } = req.body
//   User.findOne({email, password})
//     .lean()
//     .then(user => {
//       if (!user) {
//         res.redirect('/users/login/?error=true')
//       } else {
//         const firstName = user.firstName
//         const lastName = user.lastName
//         // 在 session 中將認證通過和名字傳回給客戶端 
//         // req.session.authenticated = true
//         req.session.user = firstName + ' ' + lastName
//         console.log(req.session)
//         console.log(req.sessionID)
//         res.redirect('/welcome')
//       }
//     })
//     .catch(error => console.log(error))
// })
// 改寫登入功能路由 使用 passport 認證機制
router.post('/login', passport.authenticate('local', {
  successRedirect: '/welcome',
  failureRedirect: '/users/login/?error=true'
}))
// 自定義登出功能，加上自定義驗證的 middleware 
// app.get('/logout', auth, (req, res) => {
//   req.session.destroy(() => {
//     console.log('session destroyed')
//   })
//   res.render('index', { alert: 'You are logged out! Re-enter email and password to log in again!' })
// })
// 登出 GET 路由
router.get('/logout', (req, res) => {
  req.logout(function (error) {
    if (error) {
      console.log(error)
    }
    res.redirect('/users/login')
  })
})
// 匯出路由模組
module.exports = router