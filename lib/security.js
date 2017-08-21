class Security {

  constructor(cookie) {
    var request = require('request')
    this.securityReq = request.defaults({
      'json': true,
      'jar': cookie
    })

  }

  changePin(secureSessionId, body, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/security/session/changePin/' + secureSessionId)

    this.req(path, 'POST', body, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  initSession(callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/security/session/init/')

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  initChangePin(secureSessionId, body, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/security/session/initPin/' + secureSessionId)

    this.req(path, 'POST', body, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  keepalive(secureSessionId, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/security/session/keepalive/' + secureSessionId)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  login(secureSessionId, query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/security/session/login/' + secureSessionId, query)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  logout(secureSessionId, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/security/session/logout/' + secureSessionId)

    this.req(path, 'DELETE', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  req(url, method, body, callback) {
    this.securityReq({
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

module.exports = Security