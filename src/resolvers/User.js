function todoListsAssigned(parent, args, context) {
    return context.prisma.user({ id: parent.id }).todoListsAssigned()
}

function todoListsOwned(parent, args, context) {
    return context.prisma.user({ id: parent.id }).todoListsOwned()
}

module.exports = {
    todoListsAssigned,
    todoListsOwned
}