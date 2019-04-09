const info = () => `This is the API of Manaje`;

const users = (parent, args, context, info) => {
  return context.prisma.users();
};

const user = (parent, args, context, info) => {
  if (args.authId) {
    return context.prisma.user({ authId: args.authId})
  }
  return context.prisma.user({ id: args.id });
};

const todoLists = (parent, args, context, info) => {
  if (args.teamId) {
    return context.prisma.todoLists({ where: { inTeam: { id: args.teamId } } });
  }
  return context.prisma.todoLists();
};

const todoList = async (parent, args, context, info) => {
  return context.prisma.todoList({ id: args.id });
};

const todoes = (parent, args, context, info) => {
  if (args.todoListId) {
    return context.prisma.todoes({ where: { partOf: { id: args.todoListId } } });
  }
  return context.prisma.todoes();
};

const todo = (parent, args, context, info) => {
  return context.prisma.todo({ id: args.id });
};

const teamsByUser = (parent, args, context, info) => {
  if (args.userId) {
    return context.prisma.teams({ where: { members_some: { id: args.userId } } });
  }
  return context.prisma.teams();
};

const team = (parent, args, context, info) => {
  return context.prisma.team({ id: args.id });
};

const messages = (parent, args, context, info) => {
  if (args.teamId) {
    return context.prisma.messages({ where: { inTeam: { id: args.teamId } } });
  }
  return context.prisma.messages();
};

const message = async (parent, args, context, info) => {
  return context.prisma.message({ id: args.id });
};


const findEventById = (parent, args, context, info) => {
  return context.prisma.event({ id: args.id })
}

const findEventsByTeam = (parent, args, context, info) => {
  if (args.teamId) {
    return context.prisma.events({ where: { team: { id: args.teamId } } });
  }
  return context.prisma.events();
}

const findEventsByUser = (parent, args, context, info) => {
  return context.prisma.event({ where: { user: { id: args.userId } } });
}

const findTagsByTeam = (parent, args, context, info) => {
  if (args.teamId) {
    return context.prisma.tags({ where: { team : { id: args.teamId } } });
  }
  return context.prisma.tags();
}

const findTag = (parent, args, context, info) => {
  return context.prisma.tag({ id: args.tagId });
}

const findMessageCommentsByMessage = (parent, args, context, info) => {
  if (args.messageId) {
    return context.prisma.messageComments({ where: { message: { id: args.messageId } } });
  } 
  return context.prisma.messageComments();
}

const findMessageComment = (parent, args, context, info) => {
  return context.prisma.messageComment({ id: args.commentId });
}

const findDocument = (parent, args, context, info) => {
  return context.prisma.documents({id: args.id});
}

const findDocumentsByTeam = (parent, args, context, info) => {
  if (args.teamId) {
    return context.prisma.documents({ where: { team: { id: args.teamId } } });
  }
  return context.prisma.documents();
}

const findDocumentsByUser = (parent, args, context, info) => {
  return context.prisma.documents({ where: { user: { id: args.userId } } });
}

const findDocumentsByTag = (parent, args, context, info) => {
  return context.prisma.documents({ where: { tag: { id: args.tagId } } });
}

const findMessagesByTag = (parent, args, context, info) => {
  return context.prisma.Messages({ where: { tag: { id: args.tagId } } });
}

const documentComments = (parent, args, context, info) => {
  return context.prisma.documentComments();
}

const findDocumentComment = (parent, args, context, info) => {
  return context.prisma.documentComments({ id: args.id });
}

const findDocumentCommentsByTeam = (parent, args, context, info) => {
  return context.prisma.documentComments({ where: { team: { id: args.teamId } } });
}

const findDocumentCommentsByUser = (parent, args, context, info) => {
  return context.prisma.documentComments({ where: { user: { id: args.userId } } });
}

const findFolder = (parent, args, context, info) => {
  return context.prisma.folders({ id: args.id });
}

const findFoldersByTeam = (parent, args, context, info) => {
  if (args.teamId) {
    return context.prisma.folders({ where: { team: { id: args.teamId } } });
  }
  return context.prisma.folders();
}


module.exports = {
  info,
  todoes,
  todo,
  users,
  user,
  todoLists,
  todoList,
  teamsByUser,
  team,
  messages,
  message,
  findEventById,
  findEventsByTeam,
  findEventsByUser,
  findTagsByTeam,
  findTag,
  findMessageCommentsByMessage,
  findMessageComment,
  findDocument,
  findDocumentsByTag,
  findMessagesByTag,
  findDocumentsByTeam,
  findDocumentsByUser,
  documentComments,
  findDocumentComment,
  findDocumentCommentsByTeam,
  findDocumentCommentsByUser,
  findFolder,
  findFoldersByTeam,

};
