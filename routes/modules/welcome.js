// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
// 引用 Login model
const Login = require('../../models/login')
// 定義登入功能路由
router.post('/', (req, res) => {
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
// 匯出路由模組
module.exports = router