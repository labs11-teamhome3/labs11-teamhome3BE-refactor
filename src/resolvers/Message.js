function creator(parent, args, context) {
    return context.prisma.message({ id: parent.id }).creator();
}

function inTeam(parent, args, context) {
    return context.prisma.message({ id: parent.id }).inTeam();
}

function comments(parent, args, context) {
    return context.prisma.message({ id: parent.id }).comments();
}

function tag(parent, args, context) {
    return context.prisma.message({ id: parent.id }).tag();
}

function subscribedUsers(parent, args, context) {
    return context.prisma.message({ id: parent.id }).subscribedUsers();
}

function likes(parent, args, context) {
    return context.prisma.message({ id: parent.id }).likes();
}

module.exports = {
    creator,
    inTeam,
    comments,
    tag,
    subscribedUsers,
    likes
}