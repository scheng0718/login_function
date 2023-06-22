// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
// 引用 User model
const User = require('../../models/user')

// router.get('/', auth, (req, res) => {
//   // if (req.session.authenticated) {
//   //   console.log('authenticated)
//   //   const name = req.session.user
//   //   res.render('welcome', {name})
//   // } else {
//   //   res.redirect('/login')
//   // }
//   const name = req.session.user
//   res.render('welcome', {name})
// })
router.get('/', (req, res) => {
  const name = req.user.firstName + ' ' + req.user.lastName
  // console.log(req)
  res.render('welcome', {name})
})

// 匯出路由模組
module.exports = router