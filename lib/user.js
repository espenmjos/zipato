class User {

  constructor(cookie) {
    var request = require('request')
    this.userReq = request.defaults({
      'json': true,
      'jar': cookie
    })

  }

  changePassword(query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/user/changePassword', query)

    this.req(path, 'POST', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  initialize(callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/user/init')

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  login(query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/user/login', query)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  logout(callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/user/logout')

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  nop(callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/user/nop')

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  register(callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/user/register')

    this.req(path, 'POST', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  restore(query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/user/restore', query)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  verify(query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/user/verify', query)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  req(url, method, body, callback) {
    this.userReq({
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

module.exports = User