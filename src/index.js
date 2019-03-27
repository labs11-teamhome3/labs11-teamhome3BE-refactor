require('dotenv').config({ path: '../.env'});
const createServer = require('./createServer');
const configMiddleware = require('./config/express-middleware');

const server = createServer();

configMiddleware(server); 

server.start(() => console.log(`Server is running on http://localhost:4000`));

