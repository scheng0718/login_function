// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
// 引入 user 模組程式碼
const users = require('./modules/users')
const welcome = require('./modules/welcome')
// 將網址結構符合 / 字串的 request 導向 home 模組 
router.use('/users', users)
router.use('/welcome', welcome)

// 匯出路由器
module.exports = router