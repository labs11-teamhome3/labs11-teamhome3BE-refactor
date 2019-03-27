const {forwardTo} = require('prisma-binding')

const info = () => `This is the API of Manaje`

const users = (parent, args, context, info) => {
        return context.db.query.users();
}

const user = (parent, args, context, info) => {
        return context.db.query.user({ id: args.id });
}

const todoLists = (parent, args, context, info) => {
        return context.db.query.todoLists();
}

const todoList = (parent, args, context, info) => {
        return context.db.query.todoList({ id: args.id });
}

const todoes = (parent, args, context, info) => {
        return context.db.query.todoes();
}

const todo = (parent, args, context, info) => {
        return context.db.query.todo({ id: args.id });
}

const teams = (parent, args, context, info) => {
        return context.db.query.teams();
}

const team = (parent, args, context, info) => {
        return context.db.query.team({ id: args.id });
}


module.exports = {
    info,
    todoes,
    todo,
    users,
    user,
    todoLists,
    todoList,
    teams,
    team
}