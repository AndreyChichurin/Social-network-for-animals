const express = require('express');
const router = express.Router();

const UserAdd = require('../models/userAd');

router.post('/', async function (req, res, next) {
  const users = await UserAdd.find(
    {
      $and: [
        { id: { $ne: req.body.currentUserId } },
        { likedBy: { $nin: [`${req.body.currentUserId}`] } },
        { dislikedUsers: { $nin: [`${req.body.currentUserId}`] } }
      ]
    })
  console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>ALL', users)
  res.json(users)
})

router.post('/sort', async function (req, res, next) {
  const users = await UserAdd.find(
    {
      $and: [
        { id: { $ne: req.body.currentUserId } },
        { likedBy: { $nin: [`${req.body.currentUserId}`] } },
        { dislikedUsers: { $nin: [`${req.body.currentUserId}`] } },
        { breed: req.body.breed  },
        { gender: req.body.gender  },
        { age: req.body.age  },
      ]
    })
  console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>SORT', users)
  res.json(users)
})

router.post('/like', async function (req, res, next) {
  await UserAdd.updateOne({ id: req.body.id }, { $push: { likedBy: req.body.currentUserId } })
})

router.post('/dislike', async function (req, res, next) {
  await UserAdd.updateOne({ id: req.body.id }, { $push: { dislikedUsers: req.body.currentUserId } })
})

router.post('/likedby', async function (req, res, next) {
  const currentUser = await UserAdd.find({ id: req.body.currentUserId })
  const users = [];
  for (let i = 0; i < currentUser[0].likedBy.length; i++) {
    const user = await UserAdd.find(
      {
        $and: [
          { id: currentUser[0].likedBy[i] },
          { likedBy: { $nin: [`${currentUser[0].id}`] } },
          { dislikedUsers: { $nin: [`${req.body.currentUserId}`] } }
        ]
      })
    users.push(user)
  }
  const userss = users.flat(1)
  console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>LIKEDBY', userss)
  res.json(userss)
})

router.post('/match', async function (req, res, next) {
  const currentUser = await UserAdd.find({ id: req.body.currentUserId })
  const users = [];
  for (let i = 0; i < currentUser[0].likedBy.length; i++) {
    const user = await UserAdd.find(
      {
        $and: [
          { id: currentUser[0].likedBy[i] },
          { likedBy: { $in: [`${currentUser[0].id}`] } },
          { dislikedUsers: { $nin: [`${req.body.currentUserId}`] } }
        ]
      })
    users.push(user)
  }
  const userss = users.flat(1)
  console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>MATCH', userss)
  res.json(userss)
})

router.post('/profileEdit', async function (req, res, next) {
  const user = await UserAdd.find({ id: req.body.currentUserId })
  console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>PROFILEEDIT', user)
  res.json(user)
})

router.post('/profileEdited', async function (req, res, next) {
  const user = await UserAdd.find({ id: req.body.currentUserId })
  // console.log(user)
  user[0].phone = req.body.phone
  user[0].desc = req.body.desc
  user[0].image = req.body.image
  console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>PROFILEEDIT', user)
  user.save()
})



module.exports = router;

