function members(parent, args, context) {
    return context.prisma.team({ id: parent.id }).members()
}

function todoLists(parent, args, context) {
    return context.prisma.team({ id: parent.id }).todoLists()
}

function messages(parent, args, context) {
    return context.prisma.team({ id: parent.id }).messages()
}

module.exports = {
    members,
    todoLists, 
    messages
}