const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: String,
  age: Number,
  address: String,
});

module.exports = mongoose.model('users', userSchema);
