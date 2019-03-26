async function createUser(parent, args, ctx, info) {
    return ctx.prisma.createUser(args);
}

async function createTodo(parent, args, context, info) {
    return context.prisma.createTodo({
        description: args.description,
        partOf: {
            connect: {
                description: args.partOf
            }
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

module.exports = {
   createUser,
   createTodo,
   createTodoList,
   deleteTodoList,
};