const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: {
    type: String,
    unique: true,
  },
  password: {
    type: Number,
    required: true,
  },
  age: {
    //min 13
    type: Number,
    required: true,
    validate: {
      validator: checkAge,
      message: 'not a valid age!',
    },
  },
  firstName: {
    // min length 3, max length 15
    type: String,
    validate: {
      validator: checkFirstName,
      message: 'not in range length from 3 to 15',
    },
  },
});
function checkAge(age) {
  if (age < 13) {
    return false;
  }
  return true;
}
function checkFirstName(fName) {
  if (fName.length >= 3 && fName.length <= 15) {
    return true;
  }
  return false;
}
module.exports = mongoose.model('users', userSchema);
