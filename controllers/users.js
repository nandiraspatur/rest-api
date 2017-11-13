const bcrypt = require('bcrypt');
const Model = require('../models');

let findAll = (req, res) => {
  Model.User.findAll().then(users => {
    res.send(users)
  }).catch(err => {
    res.send(err)
  })
}

let findById = (req, res) => {
  Model.User.findById(req.params.id).then(user => {
    res.send(user)
  }).catch(err => {
    res.send(err)
  })
}

let create = (req, res) => {
  bcrypt.hash(req.body.password, 10, function(err, hash) {
    req.body.password = hash
    Model.User.create(req.body).then(() => {
      res.send('User Created!')
    }).catch(err => {
      res.send(err)
    })
  });
}

module.exports = {
  findAll,
  findById,
  create
}
