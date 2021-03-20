/*// File: ./models/userModel.js

//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var userModelSchema = new Schema({
  _id : { type: mongoose.Schema.Types.ObjectId },
  username: String,
  email:String
});

//Export function to create "userModel" model class
module.exports = mongoose.model('user', userModelSchema );
*/