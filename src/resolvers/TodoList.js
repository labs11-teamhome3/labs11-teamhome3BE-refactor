function ownedBy(parent, args, context) {
    return context.prisma.todoList({ id: parent.id }).ownedBy()
}

function assignedTo(parent, args, context) {
    return context.prisma.todoList({ id: parent.id }).assignedTo()
}

function todos(parent, args, context) {
    return context.prisma.todoList({ id: parent.id }).todos();
}

function inTeam(parent, args, context) {
    return context.prisma.todoList({ id: parent.id }).inTeam();
}

module.exports = {
    ownedBy,
    assignedTo,
    todos,
    inTeam
}