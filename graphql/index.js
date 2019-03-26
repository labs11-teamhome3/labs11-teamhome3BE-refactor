require('dotenv').config();
const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('../prisma/generated/prisma-client');

const resolvers = {
    Query: {
        info: () => `This is the API of a Hackernews clone`,
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
    },
};

const server = new GraphQLServer ({
    typeDefs: './graphql/src/schema.graphql',
    resolvers,
    context: {prisma},
});

server.start(() => console.log('Server is running on http://localhost:4000'));




