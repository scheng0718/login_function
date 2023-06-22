const passport = require('passport')
const localStrategy = require('passport-local').Strategy
const User = require('../models/user')

module.exports = app => {
  // 初始化
  app.use(passport.initialize())
  app.use(passport.session())
  // 設定本地策略
  passport.use(new localStrategy({ usernameField: 'email' }, (email, password, done) => {
    User.findOne({ email })
      .lean()
      .then(user => {
        // console.log(user)
        if (!user) {
          return done(null, false, {message: 'The email is not registered!'})
        }
        if (user.password !== password) {
          return done(null, false, {message: 'Email or password is incorrect!'})
        }
        return done(null, user)
      })
      .catch(error => console.log(error))
  }))
  // 設定序列化與反序列化
  passport.serializeUser((user, done) => {
    done(null, user._id)
  })
  passport.deserializeUser((id, done) => {
    User.findById(id)
      .lean()
      .then(user => done(null, user))
      .catch(error => done(error, null))
  })
}