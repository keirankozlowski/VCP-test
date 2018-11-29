const User = require('../models/user');

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

        res.json({ user: 'created' });
    },

    signIn: async (req, res, next) => {
        console.log('usersController.signIn called');
    },
    
    nonAuthenticated: async (req, res, next) => {
        console.log('usersController.nonAuthenticated called');
    },

    authenticated: async (req, res, next) => {
        console.log('usersController.authenticated called');
    },
}