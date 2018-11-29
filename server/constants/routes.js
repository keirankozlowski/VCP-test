const express = require('express');
const router = require('express-promise-router')();

const usersController = require('../controllers/users');
const { validateBody, schemas } = require('../helpers/routeHelpers');

router.route('/signup')
    .post(validateBody(schemas.auth), usersController.signUp);

router.route('/signin')
    .post(usersController.signIn);

router.route('/non-authenticated')
    .get(usersController.nonAuthenticated);

router.route('/authenticated')
    .get(usersController.authenticated);

module.exports = router;