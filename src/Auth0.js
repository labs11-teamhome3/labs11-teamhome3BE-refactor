const contextAuth = async (req, prisma) => {
    let currentUser;

    //req.headers.authorization
    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik1EbEdOamcwUlRnM00wUTRSakJCUmpORE5rVkZRVGM1UWpGRE56azROa0V4UkRKR1FUVTRNZyJ9.eyJpc3MiOiJodHRwczovL2Rldi00ZDI4dXA3cS5hdXRoMC5jb20vIiwic3ViIjoibWtVbkZobGFvM1VVUVcwSzFCeXl4bTNnbTJtcmxBMXRAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vbGFicy1tYW5hamUuaGVyb2t1YXBwLmNvbS8iLCJpYXQiOjE1NTM3OTAzMDUsImV4cCI6MTU1Mzg3NjcwNSwiYXpwIjoibWtVbkZobGFvM1VVUVcwSzFCeXl4bTNnbTJtcmxBMXQiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.vTzrQ2IGQigWhnv0jac6zT2ClM7_x1YxM9wh179XlAXxYVqdynEEwtvdGoby2D-0QF1h6DnBn2E-RVHdj6S_xZDfm35aLLnI4f-60KupZtbJA2BWngcvayYykoBli1rdGc4kMvvZ-OX3mBoRIMB0MvYAWMzkHSyMBWQl-jn2xaoWDEFdyypYxNgC64D0vPOVNcAsySaJzNozj_l8my_PZmpj1rmTj4wPMduvUZt2F9V0RWVMVg6CPY9ncfH8pt0y8CyPhh4G4HYF3oT4pUobIO2epySeDy9Rm7mTIcHjRs2ewrSslwt3elLuj6gf91EhHMndc7YIH-hjEX2gK6CXxw";

    const client = jwksClient({
      jwksUri: `${AUTH0_DOMAIN}/.well-known/jwks.json`
    });

    const getKey = (header, cb) =>
      client.getSigningKey(header.kid, (err, key) => 
        {
          let signingKey = key.publicKey || key.rsaPublicKey;
          cb(null, signingKey);
        }
      );
    
    const options = {
      aud: `http://localhost:4466`,
      iss: `${AUTH0_DOMAIN}/`,
      algorithms: ['RS256']
    };

    try {
      console.log('try')
      currentUser = await new Promise((resolve, reject) => 
        jwt.verify(token, getKey, options, (err, decoded) => {
          if (err) {
            reject(err);
          }
          return (
            decoded
            //find specific user in db and add token to that user

            // UserModel.findOne({ authId: decoded.sub }).then(
            //   existingUser =>
            //     existingUser
            //       ? resolve(existingUser) // adds user to Apollo context, giving all resolvers access to the user
            //       : resolve(decoded) // adds the decoded token to the Apollo context
            // )
          )
        })
      )
    } catch (err) {
      throw new AuthenticationError(`${err}`);
    }
    
    return { ...req, user: currentUser, prisma };
}

module.export = contextAuth; 