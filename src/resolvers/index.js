const Query = require('./Query.js');
const Mutation = require('./Mutation.js');
const User = require('./User.js')
const Todo = require('./Todo.js');
const TodoList = require('./TodoList.js');
const Team = require('./Team.js');
const Message = require('./Message.js');
const Event = require('./Event.js')
const MessageComment = require('./MessageComment.js');
const Tag = require('./Tag.js');
const Document = require('./Document.js');
const Folder = require('./Folder.js');
const DocumentComment = require('./DocumentComment.js');

const resolvers = {
    Query,
    Mutation,
    User,
    Todo,
    TodoList,
    Team,
    Message,
    Event,
    MessageComment,
    Tag,
    Document,
    Folder,
    DocumentComment
};

module.exports = resolvers;