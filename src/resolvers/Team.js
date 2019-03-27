function members(parent, args, context) {
    return context.prisma.team({ id: parent.id }).members()
}

function todoLists(parent, args, context) {
    return context.prisma.team({ id: parent.id }).todoLists()
}

module.exports = {
    members,
    todoLists
}