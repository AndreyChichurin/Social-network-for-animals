const express = require('express');
const router = express.Router();

const UserAdd = require('../models/userAd');

router.post('/', async function (req, res, next) {
  const users = await UserAdd.find({ id: { $ne: req.body.currentUserId } })
  res.json(users)
})

router.post('/like', async function (req, res, next) {
  // const user = await UserAdd.find({id:req.body.id})
  await UserAdd.updateOne({ id: req.body.id }, { $push: { likedBy: req.body.currentUserId } })
})

router.post('/dislike', async function (req, res, next) {
  // const user = await UserAdd.find({id:req.body.id})
  await UserAdd.updateOne({ id: req.body.id }, { $push: { dislikedUsers: req.body.currentUserId } })
})

router.post('/likedby', async function (req, res, next) {
  // console.log(req.body.currentUserId)
  const currentUser = await UserAdd.find({ id: req.body.currentUserId })
  console.log(currentUser[0].id)
  const users = [];
  for (let i = 0; i < currentUser[0].likedBy.length; i++) {
    // const user = await UserAdd.find({ id: currentUser[0].likedBy[i] })
    const user = await UserAdd.find(
      { $and: [
        { id: currentUser[0].likedBy[i] }, 
        { likedBy: {$nin:['5'] }}
      ] })
    users.push(user)
  }
  const userss = users.flat(1)
  console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', userss)
  res.json(userss)
})

// router.post('/match', async function (req, res, next) {
//   // console.log(req.body.currentUserId)
//   const currentUser = await UserAdd.find({ id: req.body.currentUserId })
//   // console.log(currentUser[0].id)
//   const users = [];
//   for (let i = 0; i < currentUser[0].likedBy.length; i++){
//     const user = await UserAdd.find({ $and : [{id: currentUser[0].likedBy[i]}, {likedBy: currentUser[0].id}] })
//     users.push(user)
//   }
//   const userss = users.flat(1)
//   console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', userss)
//   res.json(userss)
// })

// router.post('/superlike', async function (req, res, next) {
//   console.log(req.body)
//   const user = await UserAdd.find(req.body)
//   console.log(user)
//   user[0].superLikedUsers.push()
//   res.json(users)
// })

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
