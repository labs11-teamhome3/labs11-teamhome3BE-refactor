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
    return context.db.mutation.updateUser({
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

function addUserToOwners(parent, args, context, info) {
    return context.db.mutation.updateTodoList({
        where: {id: args.todoListId},
        data: {
            ownedBy: {
                connect: {
                    id: args.userId
                }
            }
        }
    })
}

async function addUserToAssignees(parent, args, context, info) {
    return context.db.mutation.updateTodoList({
        where: {id: args.todoListId},
        data: {
            assignedTo: {
                connect: {
                    id: args.userId
                }
            }
        }
    })
}

async function removeUserFromOwners(parent, args, context, info) {
    const todoList = await context.db.mutation.todoList({ id: args.todoListId }).ownedBy();
    if (todoList.length < 2) {
        throw new Error('You can not delete the original owner of the list')
    } else {
        return context.db.mutation.updateTodoList({
            where: { id: args.todoListId },
            data: {
                ownedBy: {
                    disconnect: {
                        id: args.userId
                    }
                }
            }
        })
    }
}

function removeUserFromAssignees(parent, args, context, info) {
    return context.db.mutation.updateTodoList({
        where: { id: args.todoListId },
        data: {
            assignedTo: {
                disconnect: {
                    id: args.userId
                }
            }
        }
    })
}

async function toggleTodoComplete(parent, args, context, info) {
    const todo = await context.db.mutation.todo({ id: args.todoId })
    return context.db.mutation.updateTodo({
        where: {id: args.todoId},
        data: {
            completed: !todo.completed
        }
    })
}

async function toggleTodoListComplete(parent, args, context, info) {
    const todoList = await context.db.mutation.todoList({ id: args.todoListId });
    return context.db.mutation.updateTodoList({
        where: {id: args.todoListId},
        data: {
            completed: !todoList.completed
        }
    })
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
   addUserToTeam,
   toggleTodoComplete,
   toggleTodoListComplete,
   addUserToOwners,
   addUserToAssignees,
   removeUserFromOwners,
   removeUserFromAssignees
};