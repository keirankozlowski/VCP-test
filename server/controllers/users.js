module.exports = {
    signUp: async (req, res, next) => {
        console.log('usersController.signUp called');
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