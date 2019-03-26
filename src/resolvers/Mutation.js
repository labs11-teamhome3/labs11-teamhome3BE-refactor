async function createUser(parent, args, ctx, info) {
    return ctx.prisma.createUser(args);
}

async function createTodo(parent, args, context, info) {
    return context.prisma.createTodo({
        description: args.description,
        partOf: {
            connect: {
                id: args.partOf
            }
        }
    })
}

async function deleteTodo(parent, args, context, info) {
    await context.prisma.deleteTodo({id: args.id})
    return `Todo ${args.id} deleted`
}

async function updateTodo(parent, args, context, info) {
    return context.prisma.updateTodo({
        where: {id: args.id},
        data: {
            description: args.description,
            completed: args.completed
        }
    })
}

async function createTodoList(parent, args, context, info) {
    return context.prisma.createTodoList({
        description: args.description,
        ownedBy: {
            connect: {
                id: args.ownedBy
            }
        },
        assignedTo: {
            connect: {
                id: args.assignedTo
            }
        }
    })
}

async function deleteTodoList(parent, args, context , info) {
   await context.prisma.deleteTodoList({id: args.id,})
   return `TodoList ${args.id} deleted`
}

async function updateTodoList(parent, args, context, info) {
    return context.prisma.updateTodoList({
        where: {id: args.id},
        data: {
            description: args.description,
            completed: args.completed
        }
    })
}

module.exports = {
   createUser,
   createTodo,
   deleteTodo,
   updateTodo,
   createTodoList,
   deleteTodoList,
   updateTodoList
};