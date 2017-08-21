var zipato = require('./index')

zipato.user.initialize(function(err, resp, body){
  console.log(body)
})