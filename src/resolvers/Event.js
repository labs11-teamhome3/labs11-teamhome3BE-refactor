function team(parent, args, context) {
    return context.prisma.event({ id: parent.id }).team();
}

function user(parent, args, context) {
    return context.prisma.event({ id: parent.id }).user();
}

module.exports = {
    team,
    user,
}