const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result)
// });

//Todo.findOneAndRemove({_id: '58a9ef039937c8340f645763'}).then((todo) => {
// console.log(todo);
// });

Todo.findByIdAndRemove('58a9ef039937c8340f645763').then((todo) => {
  console.log(todo);
});
