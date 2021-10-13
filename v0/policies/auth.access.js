const roleAccessService = require('../services/role.access.service');

// usually: "Authorization: vyapari [token]" or "token: [token]"
const models = require('./../models');
module.exports = (req, res, next) => {
    let tokenToVerify;
    //req.token = thisToken;
    console.log("permisson-------------------------", req.token['id']);
    console.log("permisson-------------------------", req.method);
    console.log("permisson-------------------------", req.path);
    console.log("permisson-------------------------", req.url);
    console.log("permisson-------------------------", req.id);
    return roleAccessService().grandPermission(req.token, req.method, req.url, (err, thisToken) => {
        if (err) return res.status(401).json({ err });
        req.token = thisToken;
        return next();
    });
};