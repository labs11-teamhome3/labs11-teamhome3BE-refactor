const {forwardTo} = require('prisma-binding')

const info = () => `This is the API of Manaje`

const users = (parent, args, context, info) => {
        return context.db.query.users();
}

const user = (parent, args, context, info) => {
        return context.db.query.user({where:{ id: args.id }}, info);
}

const todoLists = (parent, args, context, info) => {
        return context.db.query.todoLists();
}

const todoList = (parent, args, context, info) => {
        return context.db.query.todoList({where:{ id: args.id }}, info);
}

const todoes = (parent, args, context, info) => {
        return context.db.query.todoes();
}

const todo = (parent, args, context, info) => {
        return context.db.query.todo({where:{ id: args.id }}, info);
}

const teams = (parent, args, context, info) => {
        return context.db.query.teams();
}

const team = (parent, args, context, info) => {
        return context.db.query.team({where: {id: args.id }}, info);
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