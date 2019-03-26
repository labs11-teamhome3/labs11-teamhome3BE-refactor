async function createUser(parent, args, ctx, info) {
    return ctx.prisma.createUser(args);
}

async function createTodo (parent, args, context, info) {
    return context.prisma.createTodo({
        description: args.description,
        ownedBy: args.input.owners,
        assignedTo: args.input.assignedTo
    })
}

module.exports = {
   createUser,
   createTodo
};