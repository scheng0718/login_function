// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
// 引用 User model
const User = require('../../models/user')

router.get('/', (req, res) => {
  if (req.session.authenticated) {
    const name = req.session.name
    res.render('welcome', {name})
  } else {
    res.redirect('/login')
  }
})

// 匯出路由模組
module.exports = router