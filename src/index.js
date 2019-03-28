//require('dotenv').config();
const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('../prisma/generated/prisma-client');
const cors = require('cors');

const { checkJwt } = require('./middleware/jwt');
const { getUser } = require('./middleware/getUser');
const validateAndParseIdToken = require('./helpers/validateAndParseIdToken');
const { directives } = require('./directives');

const resolvers = require('./resolvers');

//white list and cors config
const whitelist = ['http://localhost:3000', 'http://localhost:4000'  ]

const corsOptions = {
  credentials: true,
  origin: function (origin, callback) {
   if (whitelist.indexOf(origin) !== -1 || !origin) {
     callback(null, true)
   } else {
     callback(new Error('Not allowed by CORS'))
   }
 }};

//server config
const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  directives,
  context: request => {
    return {
      ...request,
      prisma
    }
  }
})

server.express.options('*', cors(corsOptions))

//jwt check middleware
server.express.post(
  server.options.endpoint,
  checkJwt,
  (err, req, res, next) => {
    if (err) {
      return res.status(401).send(err.message)
    }
    next()
  }
);

//getUser added to request
server.express.post(server.options.endpoint, (req, res, done ) => {
  return getUser(req, res, done, prisma)
})

//-- Repackage CORS options for easy use by the server --------------------------------
const opts = {
  cors: corsOptions
}
//-- Start Server ---------------------------------------
server.start(opts => console.log(`Server is running on http://localhost:4000`));

