const {forwardTo} = require('prisma-binding')

const info = () => `This is the API of Manaje`

const users = (parent, args, context, info) => {
        return context.db.query.users();
}

<<<<<<< HEAD
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
=======
const user = (parent, args, context, info) => {
        return context.prisma.user({ id: args.id });
}

const todoLists = (parent, args, context, info) => {
        return context.prisma.todoLists();
}

const todoList = (parent, args, context, info) => {
        return context.prisma.todoList({ id: args.id });
}

const todoes = (parent, args, context, info) => {
        return context.prisma.todoes();
}

const todo = (parent, args, context, info) => {
        return context.prisma.todo({ id: args.id });
}

const teams = (parent, args, context, info) => {
        return context.prisma.teams();
>>>>>>> 33668c2df01ec71e2cad97cf5e28c003ed6460af
}

const team = (parent, args, context, info) => {
        return context.prisma.team({ id: args.id });
}


module.exports = {
    info,
    todoes,
    todo,
    users,
<<<<<<< HEAD
    todoLists: forwardTo('db'),
    todoList
=======
    user,
    todoLists,
    todoList,
    teams,
    team
>>>>>>> 33668c2df01ec71e2cad97cf5e28c003ed6460af
}