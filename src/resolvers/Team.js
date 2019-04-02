function members(parent, args, context) {
    return context.prisma.team({ id: parent.id }).members()
}

function todoLists(parent, args, context) {
    return context.prisma.team({ id: parent.id }).todoLists()
}

function messages(parent, args, context) {
    return context.prisma.team({ id: parent.id }).messages()
}

function events(parent, args, context) {
    return context.prisma.team({ id: parent.id }).events()
}

function tags(parent, args, context) {
    return context.prisma.team({ id: parent.id }).tags();
}

function folders(parent, args, context) {
    return context.prisma.team({ id: parent.id }).folders();
}

function documents(parent, args, context) {
    return context.prisma.team({ id: parent.id }).documents();
}

module.exports = {
    members,
    todoLists, 
    messages,
    events,
    tags,
    folders,
    documents,
}