const info = () => `This is the API of Manaje`;

const users = (parent, args, context, info) => {
  return context.prisma.users();
};

const user = (parent, args, context, info) => {
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
  return context.prisma.todoes();
};

const todo = (parent, args, context, info) => {
  return context.prisma.todo({ id: args.id });
};

const teams = (parent, args, context, info) => {
  return context.prisma.teams();
};

const team = (parent, args, context, info) => {
  return context.prisma.team({ id: args.id });
};

const messages = (parent, args, context, info) => {
  if (args.teamId) {
    return context.prisma.messages({ where: { inTeam: { id: args.teamId } } });
  }
  return context.prisma.todoLists();
};

const message = async (parent, args, context, info) => {
  return context.prisma.message({ id: args.id });
};

const events = (parent, args, context, info) => {
  return context.prisma.events();
}

const findEventById = (parent, args, context, info) => {
  return context.prisma.event({ id: args.id })
}

const findEventsByTeam = (parent, args, context, info) => {
  return context.prisma.event({ where: { team: { id: args.teamId } } });
}

const findEventsByUser = (parent, args, context, info) => {
  return context.prisma.event({ where: { user: { id: args.userId } } });
}

const tags = (parent, args, context, info) => {
  return context.prisma.tags();
}

const findTagsByTeam = (parent, args, context, info) => {
  return context.prisma.tags({ where: { team : { id: args.teamId } } });
}

const findTag = (parent, args, context, info) => {
  return context.prisma.tag({ id: args.tagId });
}

const messageComments = (parent, args, context, info) => {
  return context.prisma.messageComments();
}

const findMessageCommentsByMessage = (parent, args, context, info) => {
  return context.prisma.messageComments({ where: { message: { id: args.messageId } } });
}

const findMessageComment = (parent, args, context, info) => {
  return context.prisma.messageComment({ id: args.commentId });
}


module.exports = {
  info,
  todoes,
  todo,
  users,
  user,
  todoLists,
  todoList,
  teams,
  team,
  messages,
  message,
  events,
  findEventById,
  findEventsByTeam,
  findEventsByUser,
  tags,
  findTagsByTeam,
  findTag,
  messageComments,
  findMessageCommentsByMessage,
  findMessageComment,
};
