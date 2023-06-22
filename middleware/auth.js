// 將認證功能獨立成函式 auth middleware 檢查是否已經認證
function auth(req, res, next) {
  if (req.isAuthenticated()) {
    console.log('authenticated!')
    next()
  } else {
    console.log('not authenticated!')
    res.redirect('/users/login?error=true')
  }
}

module.exports = auth