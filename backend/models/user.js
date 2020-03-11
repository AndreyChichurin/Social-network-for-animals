const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserShcema = new Schema({
  username: { type: String, lowercase: true, unique: true, required: true, match: [/^[a-zA-Z0-9]+$/, 'is invalid'], index: true },
  email: { type: String, lowercase: true, required: true, unique: true, match: [/\S+@\S+\.\S+/, 'is invalid'], index: true },
  password: { type: String, required: true },
  userAd: [{ type: mongoose.Schema.Types.ObjectId, ref: 'UserAddShcema' }],
  hash: String,
});

module.exports = mongoose.model('User', UserShcema);

