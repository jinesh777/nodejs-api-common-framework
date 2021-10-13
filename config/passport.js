const Sequelize = require('sequelize');
const passport = require('passport');
const FacebookTokenStrategy = require('passport-facebook-token');
const models = require('./../models');
const jwt=require('jsonwebtoken');
const JwtStrategy=require('passport-jwt').Strategy;
const ExtractJwt=require('passport-jwt').ExtractJwt;


//facebookToken is the custom name of facebookstrategy
//FACEBOOK_APP_ID and FAEBOOK_APP_SECRET are set in .env file
passport.use(
  'facebookToken',
  new FacebookTokenStrategy(
    {
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
    },
    async (accessToken, refreshToken, profile, done, res) => {
      //log to view the profile emai
      //check if there is a existing user in database either
      //with the user email or corresponding facebookid
      const existingUser = await models.user.findOne({
        where: {
          [Sequelize.Op.or]: [
            { email: { [Sequelize.Op.eq]: profile.emails[0].value } },
            { facebookid: { [Sequelize.Op.eq]: profile.id } },
          ],
        },
        attributes: ['id', 'email', 'facebookid'],
      });
      //if user exists, then return the existing user
      if (existingUser) {
        return done(null, existingUser);
      }

      //if user does not exist, then create a new record in database
      //with user email and facebookid.
      const newuser = await models.user.create({
        email: profile.emails[0].value,
        facebookid: profile.id !== null ? profile.id : null,
        name:profile.displayName,
        profile_pic:profile.photos[0].value
      });

      if (typeof newuser !== 'undefined' && newuser !== null) {
        done(null, newuser);
      }
    }
  )
);



exports.getToken=function(user){
  return jwt.sign(user,'12345-6262626-2888827',{expiresIn:3600});
};

var opts={};
opts.jwtFromRequest=ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey="12345-6262626-2888827";
exports.jwtPassort=passport.use(new JwtStrategy(opts, (jwt_payload,done)=>{
  models.user.findOne({
    where: {
         id: { [Sequelize.Op.eq]: jwt_payload.id },
    }
  }).then(function(data){
    //req.user=data;
    return done(null, data);
  }).catch(function(err){
    return done(null,false);
  });
  

}));

exports.verifyUser=passport.authenticate('jwt',{session:false});