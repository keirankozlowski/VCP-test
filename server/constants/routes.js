const express = require('express');
const router = require('express-promise-router')();
const passport = require('passport');
const passportConfig = require('../passport');

const usersController = require('../controllers/users');
const { validateBody, schemas } = require('../helpers/routeHelpers');

router.route('/signup')
    .post(validateBody(schemas.auth), usersController.signUp);

router.route('/signin')
    .post(usersController.signIn);

router.route('/non-authenticated')
    .get(usersController.nonAuthenticated);

router.route('/authenticated')
    .get(passport.authenticate('jwt', { session: false }), usersController.authenticated);

module.exports = router;