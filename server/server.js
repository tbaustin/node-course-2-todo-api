var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
  text: {
    type: String
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
});

// var newTodo = new Todo({
//   text: 'Cook dinner'
// });
//
// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc);
// }, (e) => {
//   console.log('Unable to save todo', e);
// });

var secondTodo = new Todo({
  text: 'Go to school',
  completed: false,
  completedAt: 123
});

secondTodo.save().then((doc)=> {
  console.log('Saved 2nd todo', JSON.stringify(doc, undefined, 2));
}, (e) => {
  console.log(e);
})
