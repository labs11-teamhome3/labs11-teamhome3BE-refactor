var request = require("request");

var opts = { method: 'POST',
url: 'https://dev-4d28up7q.auth0.com/oauth/token',
headers: { 'content-type': 'application/json' },
body: '{"client_id":"mkUnFhlao3UUQW0K1Byyxm3gm2mrlA1t","client_secret":"5jdM_a3dCgaRUwhtudouLWkaR3sbIXexFgm1BtnQbQ_r4n9GuSTcyqTMaW7rcV15","audience":"https://labs-manaje.herokuapp.com/","grant_type":"client_credentials"}' };

request(opts, function (error, response, body) {
if (error) throw new Error(error);

console.log(body);
});

module.exports = request; 