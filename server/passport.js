const passport = require('passport');
const jwt_strategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');

const { jwt_secret } = require('./constants/secret');
const User = require('./models/user');

passport.use(new jwt_strategy({  
        jwtFromRequest: ExtractJwt.fromHeader('authorization'),
        secretOrKey: jwt_secret
    }, 
    async (payload, done) => {
        try {
            const user = await User.findById(payload.sub);

            if(!user) {
                return done(null, false);
            }

            done(null, user);
        } catch(error) {
            done(error, false);
        }
    })
);