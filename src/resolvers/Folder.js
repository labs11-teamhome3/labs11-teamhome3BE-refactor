function documents(parent, args, context) {
    return context.prisma.folder({ id: parent.id }).documents();
}

module.exports = {
    documents
}