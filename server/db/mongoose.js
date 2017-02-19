var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
let db = {
  localhost: 'mongodb://localhost:27017/TodoApp',
  mlab: 'mongodb://tbaustin:number1twin@ds157529.mlab.com:57529/tbaustin-node-todo-api'
}

mongoose.connect(process.env.PORT ? db.mlab : db.localhost);

module.exports = {mongoose};
