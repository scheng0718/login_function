// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('home')
})

// 匯出路由模組
module.exports = router