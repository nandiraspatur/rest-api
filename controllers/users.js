const bcrypt = require('bcrypt');
const Model = require('../models');
const jwt = require('jsonwebtoken');
var dotenv = require('dotenv').config()

let findAll = (req, res) => {
  Model.User.findAll().then(users => {
    res.send(users)
  }).catch(err => {
    res.status(500).send(err)
  })
}

let findById = (req, res) => {
  Model.User.findById(req.params.id).then(user => {
    res.send(user)
  }).catch(err => {
    res.status(500).send(err)
  })
}

let create = (req, res) => {
  bcrypt.hash(req.body.password, 10, function(err, hash) {
    req.body.password = hash
    Model.User.create(req.body).then(() => {
      res.send('User Created!')
    }).catch(err => {
      res.status(500).send(err)
    })
  });
}

let update = (req, res) => {
  bcrypt.hash(req.body.password, 10, function(err, hash) {
    if(req.body.password){
      req.body.password = hash
    }
    Model.User.update(req.body,{where:req.params}).then(() => {
      res.send('User Updated!')
    }).catch(err => {
      res.status(500).send(err)
    })
  });
}

let destroy = (req, res) => {
  Model.User.destroy({where:req.params}).then(() => {
    res.send('User Deleted!')
  }).catch(err => {
    res.status(500).send(err)
  })
}

let signin = (req, res) => {
  Model.User.findOne({where:{username:req.body.username}}).then(user => {
    bcrypt.compare(req.body.password, user.password, function(err, resp) {
      if(!err){
        let payload = {
                        id: user.id,
                        username:user.username,
                        is_admin: user.is_admin
                      }
        let secret = process.env.SECRET_KEY
        jwt.sign(payload, secret, function(err, token) {
          if(!err){
            req.headers.token = token
            res.send(req.headers);
          }else{
            res.status(401).send(err)
          }
        });
      }else{
        res.status(401).send({
          message: 'Incorrect username/password!!'
        })
      }
    });
  }).catch(err => {
    res.status(401).send(err)
  })
}

let signup = (req, res) => {
  bcrypt.hash(req.body.password, 10, function(err, hash) {
    req.body.password = hash
    req.body.is_admin = false
    Model.User.create(req.body).then(() => {
      res.send('Signup Success!')
    }).catch(err => {
      res.status(500).send(err)
    })
  });
}

module.exports = {
  findAll,
  findById,
  create,
  update,
  destroy,
  signin,
  signup
}
