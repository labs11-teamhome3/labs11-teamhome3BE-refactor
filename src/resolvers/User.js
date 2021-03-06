function todoListsAssigned(parent, args, context) {
    return context.prisma.user({ id: parent.id }).todoListsAssigned()
}

function todoListsOwned(parent, args, context) {
    return context.prisma.user({ id: parent.id }).todoListsOwned()
}

function inTeam(parent, args, context) {
    return context.prisma.user({ id: parent.id }).inTeam()
}

function events(parent, args, context) {
    return context.prisma.user({id: parent.id}).events()
}


module.exports = {
    todoListsAssigned,
    todoListsOwned,
    inTeam,
    events
}