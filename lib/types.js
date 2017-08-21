class Types {

  constructor(cookie) {
    var request = require('request')
    this.typesReq = request.defaults({
      'json': true,
      'jar': cookie
    })

  }

  findByType(query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/types/search', query)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  findAll(query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/types/search/all', query)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  findByRoom(room, query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/types/search/rooms/' + room, query)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  listAvailableTypes(query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/types/system/', query)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  getSystemType(name, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/types/system/' + name)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  listAvailableUserTypes(query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/types/user/', query)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  getUserType(name, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/types/user/' + name)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  req(url, method, body, callback) {
    this.typesReq({
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

module.exports = Types