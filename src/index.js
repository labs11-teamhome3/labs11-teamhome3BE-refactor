<<<<<<< HEAD
//require('dotenv').config();
const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('../prisma/generated/prisma-client');
const resolvers = require('./resolvers/index');
const contextAuth = require('./Auth0');

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: {prisma},
});


=======
require('dotenv').config({ path: '../.env'});
const createServer = require('./createServer');
const configMiddleware = require('./config/express-middleware');
//const request = require('./Auth0Test');

const server = createServer();

configMiddleware(server); 

>>>>>>> clint-kunz
server.start(() => console.log(`Server is running on http://localhost:4000`));

