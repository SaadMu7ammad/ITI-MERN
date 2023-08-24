const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  title: {
    type: String,
    required: true,
    index: true,
    validate: {
      validator: checkTitle,
      message: 'not a valid age!',
    },
  },
  status: {
    //min 13
    type: String,
    required: false,
    default: 'TO DO',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

function checkTitle(title) {
  if (title.length >= 5 && title.length <= 20) {
    return true;
  }
  return false;
}
module.exports = mongoose.model('todo', todoSchema);
