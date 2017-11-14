const jwt = require('jsonwebtoken');

let isLogin = (req, res, next) => {
  let secret = process.env.SECRET_KEY
  jwt.verify(req.headers.token, secret, function(err, decoded) {
    if(!err){
      req.userLogged = decoded
      next()
    }else{
      res.status(401).send({
        message: 'You are not logged in..!!'
      })
    }
  });
}

let isAdmin = (req, res, next) => {
  // console.log(req.userLogged.is_admin);
  if (req.userLogged.is_admin === 'true'){
    next()
  }else{
    res.status(401).send({message: 'Permission denied!!'})
  }
}

let isAuthId = (req, res, next) => {
  if(req.userLogged.id == req.params.id || req.userLogged.is_admin === 'true'){
    next()
  }else{
    res.status(401).send({
      message: 'Permission denied!!'
    })
  }
}

module.exports = {
  isLogin,
  isAdmin,
  isAuthId
}
