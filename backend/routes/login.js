const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const jwt = require('jwt-simple')
const UserAdd = require('../models/userAd');

router.post('/', async function (req, res, next) {

  const userReq = req.body.user
  const email = userReq.email
  const password = userReq.password
  console.log(userReq, email, password)

  const user = await UserAdd.find({ email: email });
  console.log(user[0].username)
  if (password === user[0].password) {
  // bcrypt.compare(password, user[0].password, (err, result) => {
    // if (result === true) {
      // const token = jwt.encode(email, 'xxx');
      const x = {
        user: {
          username: user[0].username,
          email: user[0].email,
          id: user[0].id
        }
      }
      res.json(x)
    } else {
      return err
    }
})

module.exports = router

// {"user":{"id":87492,
// "email":"9632778@gmail.com",
// "createdAt":"2020-03-09T19:11:04.528Z",
// "updatedAt":"2020-03-09T19:11:04.534Z",
// "username":"9632778",
// "bio":null,
// "image":null,
// "token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ODc0OTIsInVzZXJuYW1lIjoiOTYzMjc3OCIsImV4cCI6MTU4ODk2NTA2NH0.P9tf6VUgUBHi57kxxxuhSekFMoGrRXclQN8LfFlPYXU"}}
