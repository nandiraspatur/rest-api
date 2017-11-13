var express = require('express');
var router = express.Router();
const usersControl = require('../controllers/users');

router.post('/signup', function(req, res) {
  res.send(req.body)
});

router.post('/signin', function(req, res) {
  res.send(req.body)
});

router.get('/users', usersControl.findAll);

router.get('/users/:id', usersControl.findById);

router.post('/users', usersControl.create);

router.delete('/users/:id', function(req, res) {
  res.send('delete user')
});

router.put('/users/:id', function(req, res) {
  res.send('update user')
});

module.exports = router;
