function creator(parent, args, context) {
    return context.prisma.message({ id: parent.id }).creator();
}

function inTeam(parent, args, context) {
    return context.prisma.message({ id: parent.id }).inTeam();
}

module.exports = {
    creator,
    inTeam
}