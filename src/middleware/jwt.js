
/*== JWT MIDDLEWARE ============================================
  Checks the jwt against whe jwks endpoint keys.
*/

// NODE MODULES ==============================================
const jwt = require('express-jwt')
const jwksRsa = require('jwks-rsa')

//-- checkJwt --------------------------------
const checkJwt = jwt({
  // Dynamically provide a signing key based on the id in the header and signing keys provided by the JWKS endpoint.
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 1,
    jwksUri: `https://dev-4d28up7q.auth0.com/.well-known/jwks.json`
  }),
  // Validate the audience and the issuer.
  credentialsRequired: false,
  audience: 'https://localhost:4466',
  issuer: 'https://dev-4d28up7q.auth0.com',
  algorithms: [`RS256`]
})

module.exports = { checkJwt }