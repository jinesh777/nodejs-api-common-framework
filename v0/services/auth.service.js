const jwt = require('jsonwebtoken');

const secret = process.env.NODE_ENV === 'production' ? process.env.JWT_SECRET : process.env.JWT_SECRET;
const refrshSecret =
    process.env.NODE_ENV === 'production' ? process.env.JWT_REFRESH_SECRET : process.env.JWT_REFRESH_SECRET;

const authService = () => {
    const issue = payload => jwt.sign(payload, secret, { expiresIn: 10800000 });
    const verify = (token, cb) => jwt.verify(token, secret, {}, cb);
    const refreshToken = payload => jwt.sign(payload, refrshSecret);
    return {
        issue,
        verify,
        refreshToken
    };
};

module.exports = authService;