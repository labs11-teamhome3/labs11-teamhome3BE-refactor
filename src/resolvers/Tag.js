function team(parent, args, context) {
    return context.prisma.tag({ id: parent.id }).team();
}

module.exports = {
    team
}