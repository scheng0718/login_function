const User = require('../user')
const db = require('../../config/mongoose')

db.once('open', () => {
  const users = [
    {
      firstName: 'Tony',
      lastName: 'Madden',
      email: 'tony@stark.com',
      password: 'iamironman'
    },
    {
      firstName: 'Steve',
      lastName: 'London',
      email: 'captain@hotmail.com',
      password: 'icandothisallday'
    },
    {
      firstName: 'Peter',
      lastName: 'Scott',
      email: 'peter@parker.com',
      password: 'enajyram'
    },
    {
      firstName: 'Natasha',
      lastName: 'Tyson',
      email: 'natasha@gamil.com',
      password: '*parol#@$!'
    },
    {
      firstName: 'Nick',
      lastName: 'Yang',
      email: 'nick@shield.com',
      password: 'password'
    }
  ]
  // for (let user of users) {
  //   Login.create(user)
  // }
  User.insertMany(users).finally(() => db.close())
  console.log('Seeder data added!')
})