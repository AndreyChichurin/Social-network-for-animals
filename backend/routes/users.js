const express = require('express');
const router = express.Router();

const UserAdd = require('../models/userAd');

router.get('/', async function (req, res, next) {
  const users = await UserAdd.find()
  console.log(users)
  res.json(users)
})

router.post('/like', async function (req, res, next) {
  console.log(req.body)
  const user = await UserAdd.find(req.body)
  console.log(user)
  user[0].likedBy.push()
  res.json(users)
})

router.post('/dislike', async function (req, res, next) {
  console.log(req.body)
  const user = await UserAdd.find(req.body)
  console.log(user)
  user[0].dislikedUsers.push()
  res.json(users)
})

router.post('/superlike', async function (req, res, next) {
  console.log(req.body)
  const user = await UserAdd.find(req.body)
  console.log(user)
  user[0].superLikedUsers.push()
  res.json(users)
})

module.exports = router; 

// const userReq = req.body.user
//   const passwordToSave = bcrypt.hashSync(userReq.password, bcrypt.genSaltSync(10))
//   const user = new User({
//     username: userReq.username,
//     email: userReq.email,
//     password: passwordToSave,
//   })
//   const token = jwt.encode(user.email, 'xxx');
//   const x = {
//     user: {
//       username: user.name,
//       email: user.email,
//       jwt: token
//     }
//   }
