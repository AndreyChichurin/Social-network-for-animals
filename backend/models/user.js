const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserShcema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  userAd:[{type:mongoose.Schema.Types.ObjectId, ref:'UserAddShcema'}]
});


module.exports = mongoose.model('User',UserShcema);

