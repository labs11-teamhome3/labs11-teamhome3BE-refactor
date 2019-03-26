function partOf(parent, args, context) {
    return context.prisma.todo({ id: parent.id }).partOf()
}

module.exports = {
    partOf
}