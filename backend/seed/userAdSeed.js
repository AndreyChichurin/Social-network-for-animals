const mongoose = require('mongoose');
const UserAdd = require('../models/userAd.js');

mongoose.connect("mongodb+srv://admin:kAFZlQ6c9T6OK1m0@cluster0-nx2df.mongodb.net/test?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const userAdd = [{
    title:'Симпотичный Кабель ищет суку',
    breed: 'Питбуль',
    gender: 'Кабель',
    age: 12,
    date: Date().now ,
    user:'5e6108ff6b6bed2b3f280aeb',
    like:['5e6108ff6b6bed2b3f280aec'],
    description:'За путина',
    price: 5000,
    telephone:'89637799544'
}]

UserAdd.insertMany(userAdd).then(() => {
    console.log('Покайфу')
    mongoose.connection.close();
  });