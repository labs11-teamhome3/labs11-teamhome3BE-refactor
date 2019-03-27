const info = () => `This is the API of Manaje`

const users = (parent, args, context, info) => {
        return context.prisma.users();
}

const user = (parent, args, context, info) => {
        return context.prisma.user({ id: args.id });
}

const todoLists = (parent, args, context, info) => {
        return context.prisma.todoLists();
}

const todoList = async (parent, args, context, info) => {
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
}

const team = (parent, args, context, info) => {
        return context.prisma.team({ id: args.id });
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