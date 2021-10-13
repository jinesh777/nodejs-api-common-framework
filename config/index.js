const privateRoutes = require('../v0/routes/privateRoutes');
const publicRoutes = require('../v0/routes/publicRoutes');
const v0_privateRoutes = require('../v0/routes/privateRoutes');
const v0_publicRoutes = require('../v0/routes/publicRoutes');
const v1_privateRoutes = require('../v1/routes/privateRoutes');
const v1_publicRoutes = require('../v1/routes/publicRoutes');
const config = {
	migrate: false,
	privateRoutes,
	publicRoutes,
	v0_privateRoutes,
	v0_publicRoutes,
	v1_privateRoutes,
	v1_publicRoutes
};

module.exports = config;
