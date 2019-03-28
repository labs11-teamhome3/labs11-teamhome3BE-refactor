//require('dotenv').config();
const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('../prisma/generated/prisma-client');
const resolvers = require('./resolvers/index');
const contextAuth = require('./Auth0');

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: { contextAuth },
});

server.start(() => console.log(`Server is running on http://localhost:4000`));

