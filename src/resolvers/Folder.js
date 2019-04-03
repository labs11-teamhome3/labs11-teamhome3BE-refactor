
function documents(parent, args, context) {
    return context.prisma.folder({ id: parent.id }).documents();
}

function user(parent, args, context) {
    return context.prisma.folder({ id: parent.id }).user();
}

function team(parent, args, context) {
    return context.prisma.folder({ id: parent.id }).team();
}

function documents(parent, args, context) {
    return context.prisma.folder({ id: parent.id }).documents();
}

module.exports = {
    documents,
    team,
    user, 
    documents
}