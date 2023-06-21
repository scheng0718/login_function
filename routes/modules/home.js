// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
// 引用 Login model
const Login = require('../../models/login')
// 定義首頁路由
router.get('/', (req, res) => {
  const error = req.query.error === 'true';
  res.render('index', { error })
})
// 匯出路由模組
module.exports = router