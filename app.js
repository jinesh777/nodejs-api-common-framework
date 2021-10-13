const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const mapRoutes = require('express-routes-mapper');
const fileUpload = require('express-fileupload');
require('express-async-errors');
const config = require('./config/');
const auth = require('./v0/policies/auth.policy');
const authAccess = require('./v0/policies/auth.access');
var cors = require('cors');
//routes
const mappedOpenRoutes = mapRoutes(config.publicRoutes, './v0/controllers/');
const mappedAuthRoutes = mapRoutes(config.privateRoutes, './v0/controllers/');
const globalErrorController = require('./v0/controllers/globalErrorController');
//set up the express app
const app = express();
//parsing incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(fileUpload());
//SERVER_PORT value accessed from .env file
const port = 4001;
// secure your private routes with jwt authentication middleware
app.all('/vyp/*', (req, res, next) => auth(req, res, next));
app.use('/public/', mappedOpenRoutes);
app.use('/vyp/', mappedAuthRoutes);

//------------------------------------------------------------------------------v0 configuration
const v0_auth = require('./v0/policies/auth.policy');
const v0_authAccess = require('./v0/policies/auth.access');

const v0_mappedOpenRoutes = mapRoutes(config.publicRoutes, './v0/controllers/');
const v0_mappedAuthRoutes = mapRoutes(config.privateRoutes, './v0/controllers/');
const v0_globalErrorController = require('./v0/controllers/globalErrorController');
app.all('/v0/vyp/*', (req, res, next) => v0_auth(req, res, next));
app.use('/v0/public/', v0_mappedOpenRoutes);
app.use('/v0/vyp/', v0_mappedAuthRoutes);

//------------------------------------------------------------------------------v1 configuration
const v1_auth = require('./v1/policies/auth.policy');
const v1_authAccess = require('./v1/policies/auth.access');

const v1_mappedOpenRoutes = mapRoutes(config.v1_publicRoutes, './v1/controllers/');
const v1_mappedAuthRoutes = mapRoutes(config.v1_privateRoutes, './v1/controllers/');
const v1_globalErrorController = require('./v1/controllers/globalErrorController');
app.all('/v1/vyp/*', (req, res, next) => v1_auth(req, res, next));
app.use('/v1/public/', v1_mappedOpenRoutes);
app.use('/v1/vyp/', v1_mappedAuthRoutes);

//------------------------------------------------------------------------------v2 configuration
const v2_auth = require('./v2/policies/auth.policy');
const v2_authAccess = require('./v2/policies/auth.access');

const v2_mappedOpenRoutes = mapRoutes(config.v1_publicRoutes, './v2/controllers/');
const v2_mappedAuthRoutes = mapRoutes(config.v1_privateRoutes, './v2/controllers/');
const v2_globalErrorController = require('./v2/controllers/globalErrorController');
app.all('/v2/vyp/*', (req, res, next) => v2_auth(req, res, next));
app.use('/v2/public/', v2_mappedOpenRoutes);
app.use('/v2/vyp/', v2_mappedAuthRoutes);
//------------------------------------------------------------------------------v3 
app.post('/test', function(req, res) {
	const { body } = req;
	res.send({ email: body.email, test: 'Hello World!' });
});

app.listen(port);
console.log(`server listening on port ${port}`);

// Handling not found routes
app.all('*', (req, res, next) => {
	return res.status(404).json({
		status: 'fail',
		message: `Can't find the route ${req.originalUrl} on this server!`
	});
});

app.use(globalErrorController);

module.exports = app;
