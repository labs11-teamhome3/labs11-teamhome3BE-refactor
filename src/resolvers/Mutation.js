async function createUser(parent, args, ctx, info) {
    return ctx.prisma.createUser(args);
}

module.exports = {
   createUser,
};