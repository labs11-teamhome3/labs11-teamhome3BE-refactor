const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('./prisma/generated/prisma-client');
const resolvers = require('./resolvers/index');

const server = new GraphQLServer({
    typeDefs: './schema.graphql',
    resolvers,
    context: {prisma}
})
server.start(() => console.log(`Server is running on http://localhost:4000`));

// endpoint: https://manaje-be-8de8017c47.herokuapp.com/labs11-teamhome3BE-refactor/dev