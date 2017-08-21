class Firmware {

  constructor(cookie) {
    var request = require('request')
    this.firmwareReq = request.defaults({
      'json': true,
      'jar': cookie
    })

  }

  findAll(callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/firmware')

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  upgradeTo(query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/firmware/upgrade', query)

    this.req(path, 'POST', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  beta(callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/firmware/upgrade/beta')

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  old(callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/firmware/upgrade/old')

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  release(callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/firmware/upgrade/release')

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  upgradeTo(serial, query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/firmware/upgrade/' + serial, query)

    this.req(path, 'POST', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  beta(serial, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/firmware/upgrade/' + serial + '/beta')

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  release(serial, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/firmware/upgrade/' + serial + '/release')

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  req(url, method, body, callback) {
    this.firmwareReq({
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

module.exports = Firmware