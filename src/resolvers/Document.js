function tag(parent, args, context) {
    return context.prisma.document({ id: parent.id }).tag();
}

function folder(parent, args, context) {
    return context.prisma.document({ id: parent.id }).folder();
}

function team(parent, args, context) {
    return context.prisma.document({ id: parent.id }).team();
}

function comments(parent, args, context) {
    return context.prisma.document({ id: parent.id }).comments();
}

function user(parent, args, context) {
    return context.prisma.document({ id: parent.id }).user();
}


module.exports = {
    tag,
    folder,
    team,
    comments,
    user
}