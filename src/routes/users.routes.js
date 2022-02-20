const { Router } = require('express');
const { renderSignUpForm, signin, signup, renderSigninForm, logout } = require('../controllers/users.controller');
const router = Router();

router.get('/users/signup', renderSignUpForm);
router.post('/users/signup', signup);

router.get('/users/signin', renderSigninForm);
router.post('/users/signin', signin);

router.get('/users/logout', logout);

module.exports = router;