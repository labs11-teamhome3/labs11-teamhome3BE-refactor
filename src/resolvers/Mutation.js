async function createUser(parent, args, ctx, info) {
    return ctx.prisma.createUser({
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
        },
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
            completed: args.completed,
        }
    })
}

async function createTeam(parent, args, ctx, info) {
    return ctx.prisma.createTeam({
        teamName: args.teamName,
    });
}

async function deleteTeam(parent, args, context, info) {
    await context.prisma.deleteTeam({id: args.id})
    return `Team ${args.id} deleted`
}

async function updateTeamName(parent, args, ctx, info) {
    return ctx.prisma.updateTeam({
        where: {id: args.id},
        data: {
            teamName: args.teamName,
        }
    });
}

function addUserToTeam(parent, args, context, info) {
    return context.prisma.updateTeam({
        where: {id: args.teamId},
        data: {
            members: {
                connect: {
                    id: args.userId
                }
            }
        }
    })
}

function addTodoListToTeam(parent, args, context, info) {
    return context.prisma.updateTeam({
        where: {id: args.teamId},
        data: {
            todoLists: {
                connect: {
                    id: args.todoListId
                }
            }
        }
    })
}

function removeTodoListFromTeam(parent, args, context, info) {
    return context.prisma.updateTeam({
        where: {id: args.teamId},
        data: {
            todoLists: {
                disconnect: {
                    id: args.todoListId
                }
            }
        }
    })
}

function removeUserFromTeam(parent, args, context, info) {
    return context.prisma.updateTeam({
        where: {id: args.teamId},
        data: {
            members: {
                disconnect: {
                    id: args.userId
                }
            }
        }
    })
}

function addUserToOwners(parent, args, context, info) {
    return context.prisma.updateTodoList({
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
    return context.prisma.updateTodoList({
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
    const todoList = await context.prisma.todoList({ id: args.todoListId }).ownedBy();
    if (todoList.length < 2) {
        throw new Error('You can not delete the original owner of the list')
    } else {
        return context.prisma.updateTodoList({
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
    return context.prisma.updateTodoList({
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
    const todo = await context.prisma.todo({ id: args.todoId })
    return context.prisma.updateTodo({
        where: {id: args.todoId},
        data: {
            completed: !todo.completed
        }
    })
}

async function toggleTodoListComplete(parent, args, context, info) {
    const todoList = await context.prisma.todoList({ id: args.todoListId });
    return context.prisma.updateTodoList({
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
   updateTeamName,

   addUserToTeam,
   addTodoListToTeam,
   removeTodoListFromTeam,
   removeUserFromTeam,

   toggleTodoComplete,
   toggleTodoListComplete,
   addUserToOwners,
   addUserToAssignees,
   removeUserFromOwners,
   removeUserFromAssignees
};

// Need to make users unique by adding email and phone numbers, finish CRUD on users