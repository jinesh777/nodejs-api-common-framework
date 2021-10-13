const express = require('express');
const routes = express.Router();
const passport = require('passport');

//reference to passport.js file in config folder
const passportConf = require('./../config/passport');
const loginController = require('./../controllers/loginController');

const models=require('./../models');
const deliveryUser = models.deliveryUser;



routes.get('/login', function (req, res) {
  res.send('Hello World!')
})
//'get /api/random-quote': 'QuoteController.getQuote',
// routes.get('/category', passportConf.verifyUser,(req,res)=>{
//     models.category.findAll().then(function (users) {
//         res.status(200).json({status:"success","data":users});
//     }).catch(function(err) {
//         res.status(401).json({status:"fail"});
//     });
// });

// routes.get('/tags', passportConf.verifyUser,(req,res)=>{
//     models.tag.findAll().then(function (users) {
//         res.status(200).json({status:"success","data":users});
//     }).catch(function(err) {
//         res.status(401).json({status:"fail"});
//     });
// });



module.exports = routes;
