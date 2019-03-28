require('dotenv').config();
const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('../prisma/generated/prisma-client');
const resolvers = require('./resolvers/index');
const jwt = require('jsonwebtoken');
const jwksClient = require('jwks-rsa');

// testing some auth0 stuff below
const client = jwksClient({
    jwksUri: `${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
});

function getKey(header, cb) {
    client.getSigningKey(header.kid, function(err, key) {
        var signingKey = key.publicKey || key.rsaPublicKey;
        cb(null, signingKey);
    })
}

const options = {
    aud: `https://labs-manaje.herokuapp.com`,
    iss: `${process.env.AUTH0_DOMAIN}/`,
    algorithms: ['RS256']
};

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: async (req) => {
        // auth check on every request
        try {
            const token = req.request.headers.authorization;
            const user = await new Promise((resolve, reject) => {
                jwt.verify(token, getKey, options, (err, decoded) => {
                    if(err) {
                        console.log('****************');
                        reject(err);
                    } else {
                        console.log('decoded', decoded);
                        resolve(decoded)
                    }
                });
            });
            return {
                user,
                prisma
            };
        } catch (error) {
            console.log('Could not validate user');
        }
    },
})

server.start(() => console.log(`Server is running on http://localhost:4000`));

