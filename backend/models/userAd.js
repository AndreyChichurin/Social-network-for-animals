const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const addShcema = new Schema({
  "id": {type: Number},
  "name": {type: String},
  "desc": {type: String},
  "age": {type: Number},
  "image": {type: String},
  "likedUsers": {type: Array},
  "superLikedUsers": {type: Array},
  "dislikedUsers": {type: Array},
  "likedBy": {type: Array},
  "email": {type: String},
  "password": {type: String},
});


module.exports = mongoose.model('UserAdd',addShcema);

// title:{type: String, required: true},
// breed:{type: String, required: true},
// gender:{type: String, required: true},
// age:{type: String, required: true},
// date:{type: Date, required: true, default:Date.now()},
// user:{type:mongoose.Schema.Types.ObjectId, ref:'User'},
// like:[{type:mongoose.Schema.Types.ObjectId, ref:'User'}],
// description:{type: String, required: true},
// price:{type: Number, required: true},
// telephone:{type: Number, required: true}
