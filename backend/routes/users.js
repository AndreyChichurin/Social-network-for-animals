var router = express.Router();
const User = require('../models/user');

router.post('/api/v1/users', function (req, res, next) {
  
  let user = new User({
    username: req.body.user.username,
    password: req.body.user.password,
  })
  user.save()
  let x = {};
  x.user = user;
  x.jwt = "aaaaaaa.bbbbbbbb.ccccccc"
  res.json(x);
  return
})

module.exports = router;
