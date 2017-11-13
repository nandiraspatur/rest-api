const jwt = require('jsonwebtoken');

let isLogin = (req, res, next) => {
  let secret = 'RahAsia109283@7#847@&%QWERTY'
  jwt.verify(req.headers.token, secret, function(err, decoded) {
    if(!err){
      req.userLogged = decoded
      next()
    }else{
      res.send({
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
    res.send({message: 'Permission denied!!'})
  }
}

let authenticated = (req, res, next) => {
  if(req.userLogged.id == req.params.id || req.userLogged.is_admin === 'true'){
    next()
  }else{
    res.send({
      message: 'Permission denied!!'
    })
  }
}

module.exports = {
  isLogin,
  isAdmin,
  authenticated
}
