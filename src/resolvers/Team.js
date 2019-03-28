function members(parent, args, context) {
    return context.db.mutation.team({ id: parent.id }).members()
}

function todoLists(parent, args, context) {
    return context.db.mutation.team({ id: parent.id }).todoLists()
}

module.exports = {
    members,
    todoLists
}