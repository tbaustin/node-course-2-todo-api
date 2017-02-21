var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 500,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  },
  _creater: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  }
});

module.exports = {Todo};
