function ownedBy(parent, args, context) {
    return context.prisma.todoList({ id: parent.id }).ownedBy();
}

function assignedTo(parent, args, context) {
    return context.prisma.todoList({ id: parent.id }).assignedTo();
}

function todos(parent, args, context) {
    return context.prisma.todoList({ id: parent.id }).todos();
}

module.exports = {
    ownedBy,
    assignedTo,
    todos
}