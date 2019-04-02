function tag(parent, args, context) {
    return context.prisma.document({ id: parent.id }).tag();
}



module.exports = {
    tag
}