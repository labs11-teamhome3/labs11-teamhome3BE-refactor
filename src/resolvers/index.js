const Query = require('./Query.js');
const Mutation = require('./Mutation.js');
const User = require('./User.js')
const Todo = require('./Todo.js');
const TodoList = require('./TodoList.js');
const Team = require('./Team.js');
const Message = require('./Message.js');

const resolvers = {
    Query,
    Mutation,
    User,
    Todo,
    TodoList,
    Team,
    Message,
};

module.exports = resolvers;