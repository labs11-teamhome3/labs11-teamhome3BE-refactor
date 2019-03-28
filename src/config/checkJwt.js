const jwt = require('jsonwebtoken');
const jwksRsa = require('jwks-rsa');

const checkJwt = jwt({
    // Dynamically provide a signing key
    // based on the kid in the header and
    // the signing keys provided by the JWKS endpoint.
    secret: jwksRsa.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 1,
      jwksUri: `${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
    }),
  
    // Validate the audience and the issuer.
    credentialsRequired: false,
    audience: `https://labs-manaje.herokuapp.com`,
    issuer: `${process.env.AUTH0_DOMAIN}/`,
    algorithms: [`RS256`]
  })

  module.exports = checkJwt;