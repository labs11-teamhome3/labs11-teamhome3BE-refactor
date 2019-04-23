require('dotenv').config();
const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('../prisma/generated/prisma-client');
const resolvers = require('./resolvers/index');
const upload = require('./resolvers/Upload');
const formData = require('express-form-data')

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: { prisma },
});

server.use(formData.parse())
server.post('/upload', upload);

server.start(() => console.log(`Server is running on http://localhost:4000`));
