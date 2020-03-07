const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const jwt = require('jwt-simple')
const User = require('../models/user');

// router.post('/', function (req, res, next) {
//   const userReq = req.body.user
//   const passwordToSave = bcrypt.hashSync(userReq.password, bcrypt.genSaltSync(10))
//   const user = new User({
//     name: userReq.name,
//     email: userReq.email,
//     password: passwordToSave,
//   })
//   const token = jwt.encode(user.email, 'xxx');
//   const x = {
//     user: {
//       name: user.name,
//       email: user.email
//     },
//     jwt: token
//   };
//   user.save(function (err) {
//     if (err) { res.sendStatus(500) }
//     else {
//       res.json(x)
//     }
//   }
//   )
// })

router.post('/', function (req, res, next) {
  const userReq = req.body.user

  const email = userReq.email
  const password = userReq.password
  const user = User.findOne({ email: email })
  console.log(user)
    // .select('password')
    // .exec(function (err, user) {
    //   if (err) {
    //     return res.sendStatus(500)
    //   }
    //   if (!user) { return res.sendStatus(401) }
    //   bcrypt.compare(password, user.password, function (err, valid) {
    //     if (err) {
    //       return res.sendStatus(500)
    //     }

    //     if (!valid) { return res.sendStatus(401) }
    //     const token = jwt.encode(user.email, 'xxx')
    //     const x = {
    //       user: {
    //         email: email,
    //         password: password
    //       },
    //       jwt: token
    //     };
    //     res.send(x)
    //   })
    // })

})

module.exports = router
