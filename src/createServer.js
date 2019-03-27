const { GraphQLServer, AuthenticationError } = require('graphql-yoga');
const jwt = require('jsonwebtoken');
const jwksClient = require('jwks-rsa');

const { AUTH0_DOMAIN } = process.env; 
const resolvers = require('./resolvers');
const db = require('./db');

// Create the GraphQL Yoga Server

function createServer() {
  return new GraphQLServer({
    typeDefs: 'src/schema.graphql',
    resolvers,
    resolverValidationOptions: {
      requireResolversForResolveType: false,
    }, context: req => ({...req, db})
  // Uncomment and replace context property when development is ready to pass token on headers
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
  //       aud: `https://labs-manaje.herokuapp.com`,
  //       iss: `${AUTH0_DOMAIN}/`,
  //       algorithms: ['RS256']
  //     };

  //     try {
  //       currentUser = await new Promise((resolve, reject) => 
  //         jwt.verify(token, getKey, options, (err, decoded) => {
  //           if (err) {
  //             reject(err);
  //           }
  //           return (
  //             decoded &&
  //             UserModel.findOne({ authId: decoded.sub }).then(
  //               existingUser =>
  //                 existingUser
  //                   ? resolve(existingUser) // adds user to Apollo context, giving all resolvers access to the user
  //                   : resolve(decoded) // adds the decoded token to the Apollo context
  //             )
  //           )
  //         })
  //       )
  //     } catch (err) {
  //       throw new AuthenticationError(`${err}`);
  //     }
      
  //     return { ...req, user: currentUser, db };
  // },
  });
}

module.exports = createServer;