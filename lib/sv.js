class Sv {

  constructor(cookie) {
    var request = require('request')
    this.svReq = request.defaults({
      'json': true,
      'jar': cookie
    })

  }

  listFiles(uuid, query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/sv/camera/' + uuid, query)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  delete(body, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/sv/deleteBatch')

    this.req(path, 'POST', body, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  delete(id, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/sv/' + id)

    this.req(path, 'DELETE', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  getFileInfo(id, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/sv/' + id)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  get(id, query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/sv/' + id + '/dl', query)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  req(url, method, body, callback) {
    this.svReq({
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

module.exports = Sv