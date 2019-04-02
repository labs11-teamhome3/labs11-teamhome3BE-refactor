function user(parent, args, context) {
    return context.prisma.messageComment({ id: parent.id }).user()
}

function message(parent, args, context) {
    return context.prisma.messageComment({ id: parent.id }).message()
}

function likes(parent, args, context) {
    return context.prisma.messageComment({ id: parent.id }).likes();
}

module.exports = {
    user,
    message,
    likes
}