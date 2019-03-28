const { GraphQLServer, AuthenticationError } = require('graphql-yoga');
const jwt = require('jsonwebtoken');
const jwksClient = require('jwks-rsa');


const { AUTH0_DOMAIN } = process.env; 
const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');
const resolvers = require('./resolvers');
const db = require('./db');

// Create the GraphQL Yoga Server

function createServer() {
  return new GraphQLServer({
    typeDefs: 'src/schema.graphql',
    resolvers: {
      Mutation,
      Query
    },
    resolverValidationOptions: {
      requireResolversForResolveType: false,
    },context: req => ({...req, db})})
    
  //   context: async req => {
  //     let currentUser;

  //     const token = req.headers.authorization;

  //     const client = jwksClient({
  //       jwksUri: `${AUTH0_DOMAIN}/.well-known/jwks.json`
  //     });

  //     const getKey = (header, cb) =>
  //       client.getSigningKey(header.kid, (err, key) => 
  //         {
  //           let signingKey = key.publicKey || key.rsaPublicKey;
  //           cb(null, signingKey);
  //         }
  //       );
      
  //     const options = {
  //       aud: `http://localhost:4466`,
  //       iss: `${AUTH0_DOMAIN}/`,
  //       algorithms: ['RS256']
  //     };

  //     try {
  //       console.log('try')
  //       currentUser = await new Promise((resolve, reject) => 
  //         jwt.verify(token, getKey, options, (err, decoded) => {
  //           if (err) {
  //             reject(err);
  //           }
  //           return (
  //             decoded
  //             //find specific user in db and add token to that user

  //             // UserModel.findOne({ authId: decoded.sub }).then(
  //             //   existingUser =>
  //             //     existingUser
  //             //       ? resolve(existingUser) // adds user to Apollo context, giving all resolvers access to the user
  //             //       : resolve(decoded) // adds the decoded token to the Apollo context
  //             // )
  //           )
  //         })
  //       )
  //     } catch (err) {
  //       throw new AuthenticationError(`${err}`);
  //     }
      
  //     return { ...req, user: currentUser, db };
  // },
  // });
}

module.exports = createServer;