require('dotenv').config();
const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('../prisma/generated/prisma-client');

const resolvers = {
    Query: {
        info: () => `This is the API of Manaje`,
        todoes: (root, args, context, info) => {
            return context.prisma.todoes()
        },
        users: (root, args, context, info) => {
            return context.prisma.users();
        }
    },
    Mutation: {
        createTodo: (root, args, context) => {
            return context.prisma.createTodo({
                description: args.description,
                ownedBy: args.input.owners,
                assignedTo: args.input.assignedTo
            })
        },
        createTeam: (root, args, context) => {
            return context.prisma.createTeam({
                name: args.name,
                creator: args.input.creator
            })
        },
    },
};

const server = new GraphQLServer ({
    typeDefs: './graphql/src/schema.graphql',
    resolvers,
    context: {prisma},
});

server.start(() => console.log('Server is running on http://localhost:4000'));




