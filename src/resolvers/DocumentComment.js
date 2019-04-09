function user(parent, args, context) {
    return context.prisma.documentComment({ id: parent.id }).user()
}

function document(parent, args, context) {
    return context.prisma.documentComment({ id: parent.id }).document()
}

function likes(parent, args, context) {
    return context.prisma.documentComment({ id: parent.id }).likes();
}

module.exports = {
    likes,
    user,
    document
}