const Query = require('./Query.js');
const Mutation = require('./Mutation.js');
const User = require('./User.js')
const Todo = require('./Todo.js');
const TodoList = require('./TodoList.js');

const resolvers = {
    Query,
    Mutation,
    // User,
    // Todo,
    // TodoList
};

module.exports = resolvers;