function likes(parent, args, context) {
    return context.prisma.documentComment({ id: parent.id }).likes();
}

module.exports = {
    likes
}