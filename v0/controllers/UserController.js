const fetch = require('node-fetch');
const Sequelize = require('sequelize');
const models = require('./../models');
const authService = require('../services/auth.service');
const bcryptService = require('../services/bcrypt.service');
const md5CryptService = require('../services/md5crypt.service');

const UserController = () => {
	const login = async (req, res) => {
		const { fullName, phoneNumber, deviceId, iP, fcm_id, os } = req.body;

		if (fullName && phoneNumber && deviceId && iP && fcm_id && os) {
			try {
				const [newShop, created] = await models.users.findOrCreate({
					where: { phone: phoneNumber },
					defaults: {
						fullName: fullName,
						phoneNumber: phoneNumber,
						user_id: generateUniqueID()
					}
				});

				if (created == false) {
					let userDevices = await models.usersdevices.create({
						user_id: newShop.id,
						device_id: deviceId,
						fcm_id: fcm_id,
						device_os: os,
						device_ip: iP
					});
					return res.status(200).json({
						status: 'success',
						user_id: newShop.user_id,
						details: newShop,
						type: 'existing_user',
						msg: 'H01',
						description: 'sms send to you please check'
					});
				} else {
					let userDevices = await models.usersdevices.create({
						user_id: newShop.id,
						device_id: deviceId,
						fcm_id: fcm_id,
						device_os: os,
						device_ip: iP
					});
					return res.status(200).json({
						status: 'success',
						user_id: newShop.user_id,
						details: newShop,
						type: 'new_user',
						msg: 'H02',
						description: 'sms send to you please check'
					});
				}

				return res.status(401).json({ msg: 'H04' });
			} catch (err) {
				console.log(err);
				return res.status(500).json({ msg: 'H03' });
			}
		}

		return res.status(400).json({ msg: 'Bad Request: Username or password is wrong' });
	};

	const validate = (req, res) => {
		const { token } = req.body;

		authService().verify(token, err => {
			if (err) {
				return res.status(401).json({ isvalid: false, err: 'Invalid Token!' });
			}

			return res.status(200).json({ isvalid: true });
		});
	};

	function generateUniqueID() {
		return Math.random()
			.toString(36)
			.substr(2, 13)
			.toUpperCase();
	}

	return {
		login
	};
};

module.exports = UserController;
