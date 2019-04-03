const validateAndParseToken = require('../helpers/validateAndParseToken');

async function createUser(parent, args, ctx, info) {
  return ctx.prisma.createUser({
    //name: args.name,
    //identity: args.sub.split('|')[0],
    authId: args.sub.split('|')[1]
  });
}

async function authenticateUser(parent, {idToken}, ctx, info) {
 let userToken = null;
 try {
   userToken = await validateAndParseToken(idToken);
   console.log(userToken);
 } catch(err) {
   throw new Error(err.message)
 }
 
 const id = userToken.sub.split("|")[1];
 //this function needs to be a query, how do I do that?
 let currentUser = await ctx.prisma.user({authId: id});
 console.log(currentUser)
 if(!currentUser) {
   //error says that prisma is not defined, is this a binding issue?
   currentUser = await createUser(parent, userToken, ctx)
   console.log(currentUser);
 }
 return currentUser; 
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
        id: args.partOf,
      },
    },
  });
}

async function deleteTodo(parent, args, context, info) {
  return context.prisma.deleteTodo({ id: args.id });
//   return `Todo ${args.id} deleted`;
}

async function updateTodo(parent, args, context, info) {
  return context.prisma.updateTodo({
    where: { id: args.id },
    data: {
      description: args.description,
      completed: args.completed,
    },
  });
}

async function createTodoList(parent, args, context, info) {
  return context.prisma.createTodoList({
    description: args.description,
    ownedBy: {
      connect: {
        id: args.ownedBy,
      },
    },
    inTeam: {
      connect: {
        id: args.inTeam,
      },
    },
  });
}

async function deleteTodoList(parent, args, context, info) {
  return context.prisma.deleteTodoList({ id: args.id });
  // return `TodoList ${args.id} deleted`;
}

async function updateTodoList(parent, args, context, info) {
  return context.prisma.updateTodoList({
    where: { id: args.id },
    data: {
      description: args.description,
      completed: args.completed,
    },
  });
}

async function createTeam(parent, args, ctx, info) {
  return ctx.prisma.createTeam({
      teamName: args.teamName,
      members: {
        connect: {
          id: args.userId
        }
      }
  });
}

async function deleteTeam(parent, args, context, info) {
  return context.prisma.deleteTeam({ id: args.id });
  //return `Team ${args.id} deleted`
}

async function updateTeamName(parent, args, ctx, info) {
  return ctx.prisma.updateTeam({
    where: { id: args.id },
    data: {
      teamName: args.teamName,
    },
  });
}

function addUserToTeam(parent, args, context, info) {
  return context.prisma.updateTeam({
    where: { id: args.teamId },
    data: {
      members: {
        connect: {
          id: args.userId,
        },
      },
    },
  });
}

function addTodoListToTeam(parent, args, context, info) {
  return context.prisma.updateTeam({
    where: { id: args.teamId },
    data: {
      todoLists: {
        connect: {
          id: args.todoListId,
        },
      },
    },
  });
}

function removeTodoListFromTeam(parent, args, context, info) {
  return context.prisma.updateTeam({
    where: { id: args.teamId },
    data: {
      todoLists: {
        disconnect: {
          id: args.todoListId,
        },
      },
    },
  });
}

function removeUserFromTeam(parent, args, context, info) {
  return context.prisma.updateTeam({
    where: { id: args.teamId },
    data: {
      members: {
        disconnect: {
          id: args.userId,
        },
      },
    },
  });
}

function addUserToOwners(parent, args, context, info) {
  return context.prisma.updateTodoList({
    where: { id: args.todoListId },
    data: {
      ownedBy: {
        connect: {
          id: args.userId,
        },
      },
    },
  });
}

// TODO: need to send email and text to user when they are added as assignee to todoList
async function addUserToAssignees(parent, args, context, info) {
    const user = await context.prisma.user({ id: args.userId });
    console.log(user);
    if (user.email) {
        // send them an email using nodemailer
    }
    if (user.phone) {
        // send them a text using twilio
    }
    return context.prisma.updateTodoList({
        where: { id: args.todoListId },
        data: {
        assignedTo: {
            connect: {
            id: args.userId,
            },
        },
        },
    });
}

async function removeUserFromOwners(parent, args, context, info) {
  const todoList = await context.prisma
    .todoList({ id: args.todoListId })
    .ownedBy();
  if (todoList.length < 2) {
    throw new Error('You can not delete the original owner of the list');
  } else {
    return context.prisma.updateTodoList({
      where: { id: args.todoListId },
      data: {
        ownedBy: {
          disconnect: {
            id: args.userId,
          },
        },
      },
    });
  }
}

function removeUserFromAssignees(parent, args, context, info) {
  return context.prisma.updateTodoList({
    where: { id: args.todoListId },
    data: {
      assignedTo: {
        disconnect: {
          id: args.userId,
        },
      },
    },
  });
}

async function toggleTodoComplete(parent, args, context, info) {
  const todo = await context.prisma.todo({ id: args.todoId });
  return context.prisma.updateTodo({
    where: { id: args.todoId },
    data: {
      completed: !todo.completed,
    },
  });
}

// TODO: SEND EMAIL/TEXT TO LIST OWNERS IN THIS FUNCTION WHEN COMPLETE
// render button on front end when all todos are complete, then run this mutation on click
async function toggleTodoListComplete(parent, args, context, info) {
  const todoList = await context.prisma.todoList({ id: args.todoListId });
  console.log(todoList);
  return context.prisma.updateTodoList({
    where: { id: args.todoListId },
    data: {
      completed: !todoList.completed,
    },
  });
}

async function createMessage(parent, args, ctx, info) {
    return ctx.prisma.createMessage({
        title: args.title,
        inTeam: {
            connect: {
                id: args.teamId
            }
        },
        creator: {
            connect: {
                id: args.userId
            }
        },
        content: args.content,
    });
}

function updateMessage(parent, args, context, info) {
    return context.prisma.updateMessage({
        title: args.title,
        content: args.content,
    })
}

function deleteMessage(parent, args, context , info) {
    return context.prisma.deleteMessage({id: args.id,})
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

function addEvent(parent, args, context, info) {
    return context.prisma.createEvent({
        action_string: args.action_string,
        object_string: args.object_string,
        user: {
            connect: {
                id: args.userId
            }
        },
        team: {
            connect: {
                id: args.teamId
            }
        },
    })
}

function deleteEvent(parent, args, context, info) {
    return context.prisma.deleteEvent({ id: args.eventId });
}

function addTag(parent, args, context, info) {
    return context.prisma.createTag({
        name: args.name,
        team: {
            connect: {
                id: args.teamId
            }
        }
    })
}

function updateTag(parent, args, context, info) {
    return context.prisma.updateTag({
        where: { id: args.tagId },
        data: {
            name: args.name
        }
    })
}

function deleteTag(parent, args, context, info) {
    return context.prisma.deleteTag({ id: args.tagId })
}

function addMessageComment(parent, args, context, info) {
    return context.prisma.createMessageComment({
        content: args.content,
        image: args.image,
        message: {
            connect: {
                id: args.messageId
            }
        },
        user: {
            connect: {
                id: args.userId
            }
        }
    })
}

function updateMessageComment(parent, args, context, info) {
    return context.prisma.updateMessageComment({
        where: { id: args.commentId },
        data: {
            content: args.content,
            image: args.image
        }
    })
}

function deleteMessageComment(parent, args, context, info) {
    return context.prisma.deleteMessageComment({ id: args.commentId });
}

function likeMessageComment(parent, args, context, info) {
    return context.prisma.updateMessageComment({
        where: { id: args.commentId },
        data: {
            likes: {
                connect: {
                    id: args.userId
                }
            }
        }
    })
}

function unlikeMessageComment(parent, args, context, info) {
    return context.prisma.updateMessageComment({
        where: { id: args.commentId },
        data: {
            likes: {
                disconnect: {
                    id: args.userId
                }
            }
        }
    })
}

function addTagToMessage(parent, args, context, info) {
    return context.prisma.updateMessage({
        where: { id: args.messageId },
        data: {
            tag: {
                connect: {
                    id: args.tagId
                }
            }
        }
    })
}

function removeTagFromMessage(parent, args, context, info) {
    return context.prisma.updateMessage({
        where: { id: args.messageId },
        data: {
            tag: {
                disconnect: true
            }
        }
    })
}

function addTagToDocument(parent, args, context, info) {
    return context.prisma.updateDocument({
        where: { id: args.documentId },
        data: {
            tag: {
                connect: {
                    id: args.tagId
                }
            }
        }
    })
}

function removeTagFromDocument(parent, args, context, info) {
    return context.prisma.updateDocument({
        where: { id: args.documentId },
        data: {
            tag: {
                disconnect: true
            }
        }
    })
}

function createFolder(parent, args, context, info) {
  return context.prisma.createFolder({
    title: args.title,
    user: {
      connect: {
        id: args.userId
      }
    },
    team: {
      connect: {
        id: args.teamId
      }
    } 
  })
}


function updateFolderTitle(parent, args, context, info) {
  return context.prisma.updateFolder({
      where: { id: args.folderId },
      data: {
        title: args.title
      }
  })
}

function deleteFolder(parent, args, context, info) {
  return context.prisma.deleteFolder({id: args.folderId})
}

function addDocument(parent, args, context, info) {
    return context.prisma.addDocument({
        doc_url: args.doc_url,
        title: args.title,
        textContent: args.textContent,
        image: args.image,
        folder: {
            connect: {
                id: args.folderId
            }
        },
        team: {
            connect: {
                id: args.teamId
            }
        },
        tag: {
            connect: {
                id: args.tagId
            }
        }
    })
}

function updateDocument(parent, args, context, info) {
    return context.prisma.updateDocument({
        where: { id: args.documentId },
        data: {
            doc_url: args.doc_url,
            title: args.title,
            textContent: args.textContent,
            image: args.image,
        }
    })
}

function deleteDocument(parent, args, context, info) {
    return context.prisma.deleteDocument({ id: args.documentId })
}

function addDocumentComment(parent, args, context, info) {
    return context.prisma.createDocumentComment({
        content: args.content,
        document: {
            connect: {
                id: args.documentId
            }
        },
        user: {
            connect: {
                id: args.userId
            }
        }
    })
}

function deleteDocumentComment(parent, args, context, info) {
    return context.prisma.deleteDocumentComment({ id: args.documentCommentId });
}

function likeDocumentComment(parent, args, context, info) {
    return context.prisma.updateDocumentComment({
        where: { id: args.commentId },
        data: {
            likes: {
                connect: {
                    id: args.userId
                }
            }
        }
    })
}

function unlikeDocumentComment(parent, args, context, info) {
    return context.prisma.updateDocumentComment({
        where: { id: args.commentId },
        data: {
            likes: {
                disconnect: {
                    id: args.userId
                }
            }
        }
    })
}

function addDocumentToFolder(parent, args, context, info) {
    return context.prisma.updateDocument({
        where: { id: args.documentId },
        data: {
            folder: {
                connect: {
                    id: args.folderId
                }
            }
        }
    })
}

function removeDocumentFromFolder(parent, args, context, info) {
    return context.prisma.updateDocument({
        where: { id: args.documentId },
        data: {
            folder: {
                disconnect: true
            }
        }
    })
}
module.exports = {
  createUser,
  authenticateUser,
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
  removeUserFromAssignees,

  createMessage,
  updateMessage,
  deleteMessage,

  addEvent,
  deleteEvent,

  addTag,
  updateTag,
  deleteTag,
  addTagToMessage,
  addTagToDocument,
  removeTagFromMessage,
  removeTagFromDocument,

  addMessageComment,
  updateMessageComment,
  deleteMessageComment,
  likeMessageComment,
  unlikeMessageComment,

  createFolder,
  updateFolderTitle,
  deleteFolder,

  addDocument,
  updateDocument,
  deleteDocument,
  addDocumentToFolder,
  removeDocumentFromFolder,

  addDocumentComment,
  deleteDocumentComment,
  likeDocumentComment,
  unlikeDocumentComment
}

