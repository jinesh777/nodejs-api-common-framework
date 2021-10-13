const { privateDecrypt } = require('../utils/rsa');

module.exports = (req, res, next) => {
	const { encryptedData } = req.body;

	if (!encryptedData) {
		return res.status(400).json({
			status: 'fail',
			message: 'Request body must have encryptedData field'
		});
	}

	req.body.decryptedData = privateDecrypt(encryptedData);

	next();
};
