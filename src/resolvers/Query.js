const info = () => `This is the API of Manaje`

const users = (parent, args, context, info) => {
        return context.prisma.users();
}

const todoLists = (parent, args, context, info) => {
        return context.prisma.todoLists();
}

const todoList = (parent, args, context, info) => {
        return context.prisma.todoList({ id: args.id })
}

const todoes = (parent, args, context, info) => {
        return context.prisma.todoes()
}

const todo = (parent, args, context, info) => {
        return context.prisma.todo({ id: args.id })
}

module.exports = {
    info,
    todoes,
    todo,
    users,
    todoLists,
    todoList
}