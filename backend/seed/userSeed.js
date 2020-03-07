const mongoose = require('mongoose');
const User = require('../models/user.js');

mongoose.connect("mongodb+srv://admin:kAFZlQ6c9T6OK1m0@cluster0-nx2df.mongodb.net/test?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const users = [{
  name: 'vova',
  email: 'volodya@google.com',
  password: '123',
  userAd: []
},
{
  name: 'vova',
  email: 'Misha@google.com',
  password: '123',
  userAd: []
},
{
  name: 'vova',
  email: 'Kolya@google.com',
  password: '123',
  userAd: []
},
{
  name: 'vova',
  email: 'Jenya@google.com',
  password: '123',
  userAd: []
},
{
  name: 'vova',
  email: 'Polskiy_Knaz@google.com',
  password: '123',
  userAd: []
},
];

User.insertMany(users).then(() => {
  console.log('Покайфу')
  mongoose.connection.close();
});
