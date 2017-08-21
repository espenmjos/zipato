class VirtualEndpoints {

  constructor(cookie) {
    var request = require('request')
    this.virtualEndpointsReq = request.defaults({
      'json': true,
      'jar': cookie
    })

  }

  findAll(query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/virtualEndpoints', query)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  create(body, query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/virtualEndpoints', query)

    this.req(path, 'POST', body, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  findFull(uuid, query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/virtualEndpoints/' + uuid, query)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  delete(uuid, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/virtualEndpoints/' + uuid)

    this.req(path, 'DELETE', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  update(uuid, body, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/virtualEndpoints/' + uuid + '/config')

    this.req(path, 'PUT', body, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  getConfig(uuid, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/virtualEndpoints/' + uuid + '/config')

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  req(url, method, body, callback) {
    this.virtualEndpointsReq({
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

module.exports = VirtualEndpoints