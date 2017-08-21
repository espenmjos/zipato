class Box {

  constructor(cookie) {
    var request = require('request')
    this.boxReq = request.defaults({
      'json': true,
      'jar': cookie
    })

  }

  getOne(callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/box')

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  update(body, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/box')

    this.req(path, 'PUT', body, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  update0(body, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/box/config')

    this.req(path, 'PUT', body, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  getConfig(callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/box/config')

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  getConfig(serial, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/box/config/' + serial)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  update(serial, body, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/box/config/' + serial)

    this.req(path, 'PUT', body, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  getOne0(callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/box/current')

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  list(callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/box/list')

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  reboot(callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/box/reboot')

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  reboot(serial, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/box/reboot/' + serial)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  register(query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/box/register', query)

    this.req(path, 'POST', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  getConfig(serial, query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/box/replace/' + serial, query)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  saveAll(callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/box/saveAll')

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  saveAndSync(query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/box/saveAndSynchronize', query)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  select(query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/box/select', query)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  sync(query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/box/synchronize', query)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  syncRules(query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/box/synchronizeRules', query)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  unregister(query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/box/unregister', query)

    this.req(path, 'POST', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  factory(query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/box/wipeAndUnregister', query)

    this.req(path, 'POST', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  req(url, method, body, callback) {
    this.boxReq({
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

module.exports = Box