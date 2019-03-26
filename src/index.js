//require('dotenv').config();
const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('../prisma/generated/prisma-client');
const resolvers = require('./resolvers/index');
const configMiddleware = require('./config/express-middleware');

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: {prisma}
})

configMiddleware(server); 

server.start(() => console.log(`Server is running on http://localhost:4000`));

