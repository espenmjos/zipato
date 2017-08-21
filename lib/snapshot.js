class Snapshot {

  constructor(cookie) {
    var request = require('request')
    this.snapshotReq = request.defaults({
      'json': true,
      'jar': cookie
    })

  }

  factoryDefault(query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/snapshot/factoryDefault/restore', query)

    this.req(path, 'POST', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  create(serial, body, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/snapshot/' + serial)

    this.req(path, 'POST', body, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  list(serial, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/snapshot/' + serial)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  getInfo(serial, uuid, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/snapshot/' + serial + '/' + uuid)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  delete(serial, uuid, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/snapshot/' + serial + '/' + uuid)

    this.req(path, 'DELETE', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  restore(serial, uuid, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/snapshot/' + serial + '/' + uuid + '/restore')

    this.req(path, 'POST', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  req(url, method, body, callback) {
    this.snapshotReq({
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

module.exports = Snapshot