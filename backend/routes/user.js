var express = require('express');
var bcrypt = require('bcrypt');
var router = express.Router();
var jwt = require('jwt-simple')
const User = require('../models/user');

router.post('/', function (req, res, next) {
  const userReq = req.body.user
  const passwordToSave = bcrypt.hashSync(userReq.password, bcrypt.genSaltSync(10))
  const user = new User({
    name: userReq.name,
    email: userReq.email,
    password: passwordToSave,
  })
  const token = jwt.encode(user.email, 'xxx');
  const x = {
    user: {
      name: user.name,
      email: user.email
    },
    jwt: token
  };
  user.save(function (err) {
    if (err) { res.sendStatus(500) }
    else {
      res.json(x)
    }
  }
  )
})

module.exports = router;
