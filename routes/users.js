const express = require('express');
const router = require('express-promise-router')();

//const { validateBody, schemas} = require('../helpers/routeHelpers');
const ValidateBody1 = require('../helpers/routeHelpers');
const schemas = require('../helpers/routeHelpers');


const UsersController = require('../controllers/users');

router.route('/signup')
    .post(ValidateBody1.validateBody(schemas.authSchema), UsersController.signUp);

 router.route('/signin').post(UsersController.signIn);

 router.route('/secret').post(UsersController.secret);

 module.exports = router;