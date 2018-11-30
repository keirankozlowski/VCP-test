const passport = require('passport');
const jwt_strategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const LocalStrategy = require('passport-local').Strategy;

const { jwt_secret } = require('./constants/secret');
const User = require('./models/user');

// JWT Strategy
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

// Local Strategy
passport.use(new LocalStrategy({
    usernameField: 'email'
}, async (email, password, done) => {
    try {
        const user = await User.findOne({ email });

        if(!user) return done(null, false);
    
        const isValid = await user.isValidPassword(password);
        if(!isValid) {
            return done(null, false);
        }
    
        done(null, user);
    } catch(error) {
        done(error, false);
    }
}));