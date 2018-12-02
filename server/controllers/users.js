const jwt = require('jsonwebtoken');

const User = require('../models/user');
const { jwt_secret } = require('../constants/secret');

signToken = user => {
    console.log(user.id, "user.id");
    return token = jwt.sign({ 
        iss: 'auth',
        sub: user.id,
        iat: new Date().getTime(),
        exp: new Date().setDate(new Date().getDate + 1)
     }, jwt_secret);
}

module.exports = {
    signUp: async (req, res, next) => {
        const { email, password } = req.value.body;

        const foundUser = await User.findOne({ email });
        if(foundUser) {
            return res.status(409).send({ error: "Email is already used." });
        }

        const newUser = new User({
            email,
            password
        });
        await newUser.save();

        const token = signToken(newUser);

        res.status(200).json({ token });
    },

    signIn: async (req, res, next) => {
        console.log('usersController.signIn called');
        const foundUser = User.findOne({ 
            email: req.value.body.email
         }).
         then((foundUser) => {
            const { _id } = foundUser;
            console.log(foundUser, 'foundUser in the signIn then statement');
            foundUser.isValidPassword(req.value.body.password);
            if(foundUser.isValidPassword(req.value.body.password)) {
                return res.status(200).send({ message: 'User validated, you are logged in.' });
            } else {
                return res.status(500).send({ error: 'nope' });
            };
            // const token = signToken(foundUser);
         }).
         catch((error) => {
            return res.status(500).send(error);
         });
    },
    
    nonAuthenticated: async (req, res, next) => {
        console.log('usersController.nonAuthenticated called');
    },

    authenticated: async (req, res, next) => {
        console.log('usersController.authenticated called');
        res.json({ secret: "Very Secret" });
    },
}