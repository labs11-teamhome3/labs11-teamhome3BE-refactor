//require('dotenv').config();
const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('../prisma/generated/prisma-client');

const jwtCheck = require('./authorization');
const resolvers = require('./resolvers/index');

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: { prisma },
});

server.express.use(jwtCheck);

server.start(() => console.log(`Server is running on http://localhost:4000`));
