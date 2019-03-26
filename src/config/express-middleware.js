const { json, static } = require('express');
const cors = require('cors');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');

module.exports = app => {
	app.express.use(cors());
	app.express.use(helmet());
	app.express.use(json());
	app.express.use(cookieParser());
	app.express.use(static('docs'));
};