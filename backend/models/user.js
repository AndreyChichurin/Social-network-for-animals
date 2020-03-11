const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserShcema = new Schema({

  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, select: false },
  userAd: [{ type: mongoose.Schema.Types.ObjectId, ref: 'UserAddShcema' }],
  picture: {type: String}

});

module.exports = mongoose.model('User', UserShcema);

