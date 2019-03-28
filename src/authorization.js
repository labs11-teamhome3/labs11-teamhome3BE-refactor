const jwt = require('express-jwt');
const jwks = require('jwks-rsa');

const jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://dev-4d28up7q.auth0.com/.well-known/jwks.json'
    }),
    audience: `https://localhost:3000`,
    issuer: `https://dev-4d28up7q.auth0.com`,
    algorithms: [`RS256`]
});

module.exports = jwtCheck; 