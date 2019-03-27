function partOf(parent, args, context) {
    return context.db.mutation.todo({ id: parent.id }).partOf()
}

module.exports = {
    partOf
}