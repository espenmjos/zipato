class Rules {

  constructor(cookie) {
    var request = require('request')
    this.rulesReq = request.defaults({
      'json': true,
      'jar': cookie
    })

  }

  findAll(query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/rules', query)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  create(callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/rules/')

    this.req(path, 'POST', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  getByUuid(id, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/rules/' + id)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  delete(id, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/rules/' + id)

    this.req(path, 'DELETE', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  update(id, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/rules/' + id)

    this.req(path, 'PUT', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  getCode(id, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/rules/' + id + '/code')

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  updateCode(id, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/rules/' + id + '/code')

    this.req(path, 'PUT', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  req(url, method, body, callback) {
    this.rulesReq({
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

module.exports = Rules