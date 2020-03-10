const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const jwt = require('jwt-simple')
const User = require('../models/user');

router.post('/', async function (req, res, next) {
  const userReq = req.body.user
  const email = userReq.email
  const password = userReq.password

  const user = await User.find({ email: email }, { email: 1, password: 1 });

  bcrypt.compare(password, user[0].password, (err, result) => {
    if (result === true) {
      const token = jwt.encode(email, 'xxx');
      const x = {
        user: {
          name: user.name,
          email: user.email
        },
        jwt: token
      };
      res.json(x)
    } else {
      return err
    }
  })

})

module.exports = router
