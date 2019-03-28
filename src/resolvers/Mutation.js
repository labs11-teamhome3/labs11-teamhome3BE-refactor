function createUser(parent, args, ctx, info) {
    return ctx.db.mutation.createUser({
        data: {name: args.name}
    }, info);
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
        data: {
            description: args.description,
            partOf: {
                connect: {
                    id: args.partOf
                }
            }
        }
    }, info)
}

async function deleteTodo(parent, args, context, info) {
    return context.db.mutation.deleteTodo({where: {id: args.id}}, info)
    //return `Todo ${args.id} deleted`
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
        data: {
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
        }
    }, info)
}

async function deleteTodoList(parent, args, context , info) {
   return context.db.mutation.deleteTodoList({where: {id: args.id,}}, info)
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
    return ctx.db.mutation.createTeam({data: {
        teamName: args.teamName}
    }, info);
}

async function deleteTeam(parent, args, context, info) {
    return context.db.mutation.deleteTeam({where: {id: args.id}}, info)
    //return `Team ${args.id} deleted`
}

//needs work
async function updateTeam(parent, args, ctx, info) {
    return ctx.db.mutation.updateTeam({
        where: {id: args.teamId},
        data: {
            teamName: args.teamName,
            members: {
                connect: {
                    id: args.userId
                }
            }
        }
    }, info);
}

//works if userId and teamId are in the right order on mutation
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

//add .ownedBy() for prisma-client, the todoList is not in an array, don't know how to check if last owner
async function removeUserFromOwners(parent, args, context, info) {
    const todoList = await context.db.query.todoList({ where: {id: args.todoListId }}, info);
    console.log(todoList);
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
        }, info)
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
    }, info)
}

async function toggleTodoComplete(parent, args, context, info) {
    const todo = await context.db.query.todo({ where: {id: args.todoId} })
    return context.db.mutation.updateTodo({
        where: {id: args.todoId},
        data: {
            completed: !todo.completed
        }
    }, info)
}

async function toggleTodoListComplete(parent, args, context, info) {
    const todoList = await context.db.query.todoList({ where: {id: args.todoListId} });
    return context.db.mutation.updateTodoList({
        where: {id: args.todoListId},
        data: {
            completed: !todoList.completed
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
   addUserToTeam,
   toggleTodoComplete,
   toggleTodoListComplete,
   addUserToOwners,
   addUserToAssignees,
   removeUserFromOwners,
   removeUserFromAssignees
};