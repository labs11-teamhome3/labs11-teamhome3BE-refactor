<<<<<<< HEAD
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
=======
const {forwardTo} = require('prisma-binding')

const info = () => `This is the API of Manaje`

const users = (parent, args, context, info) => {
        return context.db.query.users({}, info);
}

const user = (parent, args, context, info) => {
        return context.db.query.user({where:{ id: args.id }}, info);
}

const todoLists = (parent, args, context, info) => {
        return context.db.query.todoLists({}, info);
}

const todoList = (parent, args, context, info) => {
        return context.db.query.todoList({where:{ id: args.id }}, info);
}

const todoes = (parent, args, context, info) => {
        return context.db.query.todoes({}, info);
}

const todo = (parent, args, context, info) => {
        return context.db.query.todo({where:{ id: args.id }}, info);
}

const teams = (parent, args, context, info) => {
        return context.db.query.teams({}, info);
}

const team = (parent, args, context, info) => {
        return context.db.query.team({where: {id: args.id }}, info);
}

>>>>>>> clint-kunz

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
};
