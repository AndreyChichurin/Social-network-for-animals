const mongoose = require('mongoose');
const User = require('../models/user.js');

mongoose.connect("mongodb+srv://admin:kAFZlQ6c9T6OK1m0@cluster0-nx2df.mongodb.net/test?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const users = [{
    
    emale: 'volodya@google.com',
    password: '123',
    userAd:[]
},
{
    
    emale: 'Misha@google.com',
    password: '123',
    userAd:[]
},
{
   
    emale: 'Kolya@google.com',
    password: '123',
    userAd:[]
},
{
    
    emale: 'Jenya@google.com',
    password: '123',
    userAd:[]
},
{
    
    emale: 'Polskiy_Knaz@google.com',
    password: '123',
    userAd:[]
},
];

User.insertMany(users).then(() => {
    console.log('Покайфу')
    mongoose.connection.close();
  });