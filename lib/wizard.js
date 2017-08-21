class Wizard {

  constructor(cookie) {
    var request = require('request')
    this.wizardReq = request.defaults({
      'json': true,
      'jar': cookie
    })

  }

  create(name, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/wizard/create/' + name)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  cancel(transaction, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/wizard/tx/' + transaction + '/cancel')

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  next(transaction, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/wizard/tx/' + transaction + '/next')

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  nextJson(transaction, body, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/wizard/tx/' + transaction + '/next')

    this.req(path, 'POST', body, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  poll(transaction, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/wizard/tx/' + transaction + '/poll')

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  repeat(transaction, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/wizard/tx/' + transaction + '/repeat')

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  req(url, method, body, callback) {
    this.wizardReq({
      url: url,
      method: method,
      body: body
    }, function (err, resp, body) {
      callback(err, resp, body)
    })
  }

  url() {
    let url = arguments[0]
    let query = arguments[1]
    if (query){
      if(Object.keys(query).length > 0) {
        url += "?"
        Object.keys(query).forEach(function(key) {
          url += key + "=" + query[key] + "&"
        })
        url = url.slice(0, -1)
      }
    }
    return url
  }

}

module.exports = Wizard