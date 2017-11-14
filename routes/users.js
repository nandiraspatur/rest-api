const express = require('express');
const router = express.Router();
const usersControl = require('../controllers/users');
const checkAuth = require('../middleware/checkAuth')

router.post('/signup', usersControl.signup);

router.post('/signin', usersControl.signin);

router.get('/users', checkAuth.isLogin, checkAuth.isAdmin, usersControl.findAll);

router.get('/users/:id', checkAuth.isLogin, checkAuth.isAuthId, usersControl.findById);

router.post('/users', checkAuth.isLogin, checkAuth.isAdmin, usersControl.create);

router.delete('/users/:id', checkAuth.isLogin, checkAuth.isAdmin, usersControl.destroy);

router.put('/users/:id', checkAuth.isLogin, checkAuth.isAuthId, usersControl.update);

module.exports = router;
