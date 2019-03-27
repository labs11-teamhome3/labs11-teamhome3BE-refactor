async function createUser(parent, args, ctx, info) {
    return ctx.db.mutation.createUser({
        name: args.name,
        inTeam: {
            connect: {
                id: args.inTeam
            }
        }
    });
}

/*
async function updateUser(parent, args, context, info) {
    return context.prisma.updateUser({
        where: {id: args.id},
        data: {
            name: args.name,
            inTeam: args.inTeam,
        }
    })
} */

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
            completed: args.completed,
        }
    })
}

async function createTeam(parent, args, ctx, info) {
    return ctx.db.mutation.createTeam({
        teamName: args.teamName,
    });
}

async function deleteTeam(parent, args, context, info) {
    await context.db.mutation.deleteTeam({id: args.id})
    return `Team ${args.id} deleted`
}

async function updateTeam(parent, args, ctx, info) {
    return ctx.db.mutation.updateTeam({
        where: {id: args.id},
        data: {
            teamName: args.teamName,
            members: args.members,
        }
    });
}

function addUserToTeam(parent, args, context, info) {
    return context.db.mutation.updateTeam({
        where: {id: args.teamId},
        data: {
            members: {
                connect: {
                    id: args.userId
                }
            }
        }
    }, info)
}

module.exports = {
   createUser,
   // updateUser,
   createTodo,
   deleteTodo,
   updateTodo,
   createTodoList,
   deleteTodoList,
   updateTodoList,
   createTeam,
   deleteTeam,
   updateTeam,
   addUserToTeam
};