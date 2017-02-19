var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

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
  }
});

// var secondTodo = new Todo({
//   text: 'Something to do'
// });
//
// secondTodo.save().then((doc) => {
//   console.log('Saved 2nd todo', JSON.stringify(doc, undefined, 2));
// }, (e) => {
//   console.log(e);
// });

// User model
// email - require it - trim it - set type - set min length of 1

var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  }
});

var user1 = new User({
  email: 'tbaustin1992@gmail.com'
});

user1.save().then((doc) => {
  console.log('Saved User', JSON.stringify(doc, undefined, 2));
}, (e) => {
  console.log('Something went wrong', (e));
});
