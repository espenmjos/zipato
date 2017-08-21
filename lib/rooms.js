class Rooms {

  constructor(cookie) {
    var request = require('request')
    this.roomsReq = request.defaults({
      'json': true,
      'jar': cookie
    })

  }

  getAll(callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/rooms/')

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  create(body, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/rooms/')

    this.req(path, 'POST', body, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  flush(callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/rooms/flush')

    this.req(path, 'POST', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  delete(room, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/rooms/' + room)

    this.req(path, 'DELETE', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  update(room, body, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/rooms/' + room)

    this.req(path, 'PUT', body, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  req(url, method, body, callback) {
    this.roomsReq({
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

module.exports = Rooms