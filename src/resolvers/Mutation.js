async function createUser(parent, args, ctx, info) {
    return ctx.db.mutation.createUser({args}, info);
}

async function createTodo(parent, args, context, info) {
    return context.db.mutation.createTodo({
        description: args.description,
        partOf: {
            connect: {
                id: args.partOf
            }
        }
    }, info)
}

async function deleteTodo(parent, args, context, info) {
    await context.db.mutation.deleteTodo({id: args.id}, info)
    return `Todo ${args.id} deleted`
}

async function updateTodo(parent, args, context, info) {
    return context.db.mutation.updateTodo({
        where: {id: args.id},
        data: {
            description: args.description,
            completed: args.completed
        }
    }, info)
}

async function createTodoList(parent, args, context, info) {
    return context.db.mutation.createTodoList({
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
    }, info)
}

async function deleteTodoList(parent, args, context , info) {
   await context.db.mutation.deleteTodoList({id: args.id,}, info)
   return `TodoList ${args.id} deleted`
}

async function updateTodoList(parent, args, context, info) {
    return context.db.mutation.updateTodoList({
        where: {id: args.id},
        data: {
            description: args.description,
            completed: args.completed
        }
    }, info)
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