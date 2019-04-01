/*== validateIdToken ============================================
  Helper function the decodes and parses the jwt. 
*/

// NODE MODULES ==============================================
const jwksClient = require('jwks-rsa')
const jwt = require('jsonwebtoken')

//-- jwksClient config --------------------------------
const jwks = jwksClient({
  cache: true,
  rateLimit: true,
  jwksRequestsPerMinute: 1,
  jwksUri: `${process.env.AUTH_0_DOMAIN}/.well-known/jwks.json`
})

//-- validateIdToken --------------------------------
const validateIdToken = (idToken) => new Promise((resolve, reject) => {
  const { header, payload } = jwt.decode(idToken, {complete: true})
  if (!header || !header.kid || !payload) reject(new Error('Invalid Token'))
  jwks.getSigningKey(header.kid, (err, key) => {
    if (err) reject(new Error('Error getting signing key: ' + err.message))
    jwt.verify(idToken, key.publicKey, { algorithms: ['RS256'] }, (err, decoded) => {
      if (err) reject('jwt verify error: ' + err.message)
      resolve(decoded)
    })
  })
})

module.exports = validateIdToken