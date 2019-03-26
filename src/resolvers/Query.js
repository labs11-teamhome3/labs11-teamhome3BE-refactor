const info = () => `This is the API of Manaje`

const todoes = (parent, args, context, info) => {
        return context.prisma.todoes()
}
    
const users = (parent, args, context, info) => {
        return context.prisma.users();
}


module.exports = {
    info,
    todoes,
    users
}