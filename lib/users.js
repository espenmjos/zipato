class Users {

  constructor(cookie) {
    var request = require('request')
    this.usersReq = request.defaults({
      'json': true,
      'jar': cookie
    })

  }

  findAll(callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/users')

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  create(callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/users/')

    this.req(path, 'POST', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  me(callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/users/current')

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  createMember(query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/users/member', query)

    this.req(path, 'PUT', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  roleCount(role, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/users/roles/' + role + '/count')

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  save(id, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/users/' + id)

    this.req(path, 'PUT', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  delete(id, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/users/' + id)

    this.req(path, 'DELETE', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  getBoxUser(id, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/users/' + id + '/boxUser')

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  modify(id, query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/users/' + id + '/modify', query)

    this.req(path, 'PUT', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  req(url, method, body, callback) {
    this.usersReq({
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

module.exports = Users