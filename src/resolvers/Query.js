const {forwardTo} = require('prisma-binding')

const info = () => `This is the API of Manaje`

const users = (parent, args, context, info) => {
        return context.db.query.users();
}

// const todoLists = (parent, args, context, info) => {
//         return context.db.query.todoLists({}, info);
// }

const todoList = (parent, args, context, info) => {
        return context.db.query.todoList({ id: args.id }, info)
}

const todoes = (parent, args, context, info) => {
        return context.db.query.todoes({}, info)
}

const todo = (parent, args, context, info) => {
        return context.db.query.todo({ id: args.id }, info)
}

module.exports = {
    info,
    todoes,
    todo,
    users,
    todoLists: forwardTo('db'),
    todoList
}