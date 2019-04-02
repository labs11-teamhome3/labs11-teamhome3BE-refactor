function user(parent, args, context) {
    return context.prisma.folder({ id: parent.id }).user();
}

function team(parent, args, context) {
    return context.prisma.folder({ id: parent.id }).team();
}

module.exports = {
    team,
    user
}