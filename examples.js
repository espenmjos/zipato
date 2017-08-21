var zipato = require('./index')
var crypto = require('crypto')

var password = "YOUR_PASSWORD"
var username = "YOUR_USERNAME"

zipato.user.initialize(function(err, resp, body){
  var nonce = body.nonce
  var passwordHash = crypto.createHash('sha1').update(password).digest('hex')
  var token = crypto.createHash('sha1').update(nonce + passwordHash).digest('hex')

  let query = {
    username: username,
    token: token
  }

  zipato.user.login(query, authenticated)
})

function authenticated(err, resp, body){
  zipato.devices.findAll(null, function(err, resp, body){
    console.log(body)
  })
}