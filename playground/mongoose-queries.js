const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var idTwo = '58a9025956a39ca402932543';

// var id = '58a9c56dd64b1c30295e804c11';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

User.findById(idTwo).then((user) => {
  if(!user) {
    return console.log('User not found');
  }
  console.log(`Found ${user.email} by ID`, JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));
