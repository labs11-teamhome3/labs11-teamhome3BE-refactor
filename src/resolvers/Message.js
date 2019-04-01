function creator(parent, args, context) {
    return context.prisma.message({ id: parent.id }).creator();
}

function inTeam(parent, args, context) {
    return context.prisma.message({ id: parent.id }).inTeam();
}

function comments(parent, args, context) {
    return context.prisma.message({ id: parent.id }).comments();
}

module.exports = {
    creator,
    inTeam,
    comments
}