const { User } = require('../models');

const userData = [
  {
    username: 'gbailey617',
    email: 'gbailey617@gmail.com',
    password: 'catfish#23D'
  },
  {
    username: 'mtro',
    email: 'mtrocek@gmail.com',
    password: 'tro#@df32D$%'
  },
  {
    username: 'Cookie',
    email: 'marge1@yahoo.com',
    password: 'CookieSmith23@@'
  },
  {
    username: 'Farmer-Brown',
    email: 'organicfarms@hotmail.com',
    password: 'YourFarms@#127'
  },
  {
    username: 'Organic Lover',
    email: 'organiclover@gmail.com',
    password: 'organic#@12food'
  },
  {
    username: 'Youngs Farm Outlet',
    email: 'BSanders@youngs.com',
    password: 'paswword2352'
  },
  {
    username: 'Flower and Spice',
    email: 'cathy45@gmail.com',
    password: 'P893FC3@!'
  },
 
]



const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;