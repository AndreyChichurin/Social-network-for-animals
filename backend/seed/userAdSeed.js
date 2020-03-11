const mongoose = require('mongoose');
const UserAdd = require('../models/userAd.js');

mongoose.connect("mongodb+srv://admin:kAFZlQ6c9T6OK1m0@cluster0-nx2df.mongodb.net/test?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const userAdd = [{
  "id": 0,
  "name": 'Мартин',
  "desc": 'Симпотичный Cat ищет суку',
  "age": 2,
  "image": "https://firebasestorage.googleapis.com/v0/b/meowyao-6468e.appspot.com/o/images%2Fcat124.jpeg?alt=media&token=1f94a078-b781-4572-9fbf-9e2ffd66e6b3",
  "likedUsers": [],
  "superLikedUsers": [],
  "dislikedUsers": [],
  "likedBy": [],
  "email": '9632779@gmail.com',
  "password": '123',
},
{
  "id": 1,
  "name": 'Алиса',
  "desc": 'Симпотичная сучка',
  "age": 17,
  "image": "https://firebasestorage.googleapis.com/v0/b/meowyao-6468e.appspot.com/o/images%2Fcat123.jpeg?alt=media&token=aed7715a-839d-435d-9b28-db3b25b58765",
  "likedUsers": [],
  "superLikedUsers": [],
  "dislikedUsers": [],
  "likedBy": [],
  "email": '9632778@gmail.com',
  "password": '123',
},
{
  "id": 2,
  "name": 'Сук',
  "desc": 'Заточи мой фетч',
  "age": 6,
  "image": "https://firebasestorage.googleapis.com/v0/b/meowyao-6468e.appspot.com/o/images%2Fcat126.jpeg?alt=media&token=641215a3-bf9b-402f-a968-357a6336ef71",
  "likedUsers": [],
  "superLikedUsers": [],
  "dislikedUsers": [],
  "likedBy": [],
  "email": '9632777@gmail.com',
  "password": '123',
},
{
  "id": 3,
  "name": 'За путина',
  "desc": 'Салам, всем православным!',
  "age": 8,
  "image": "https://firebasestorage.googleapis.com/v0/b/meowyao-6468e.appspot.com/o/images%2Fcat125.jpeg?alt=media&token=31b4ed5b-6dce-48c4-a009-53555c623602",
  "likedUsers": [],
  "superLikedUsers": [],
  "dislikedUsers": [],
  "likedBy": [],
  "email": '9632776@gmail.com',
  "password": '123',
},
{
  "id": 4,
  "name": 'Джеки',
  "desc": 'Подставляй свою миску, закину свою сосиску',
  "age": 9,
  "image": "https://firebasestorage.googleapis.com/v0/b/meowyao-6468e.appspot.com/o/images%2Fdog123.jpeg?alt=media&token=4bf5640d-81aa-481c-98cb-fae0307c0a28",
  "likedUsers": [],
  "superLikedUsers": [],
  "dislikedUsers": [],
  "likedBy": [],
  "email": '9632775@gmail.com',
  "password": '123',
},
]

UserAdd.insertMany(userAdd).then(() => {
    console.log('Покайфу')
    mongoose.connection.close();
  });

  // "id": {type: Number},
  // "name": {type: String},
  // "desc": {type: String},
  // "age": {type: Number},
  // "image": {type: String},
  // "likedUsers": {type: Array},
  // "superLikedUsers": {type: Array},
  // "dislikedUsers": {type: Array},
  // "likedBy": {type: Array},
