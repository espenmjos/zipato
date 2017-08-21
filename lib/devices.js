class Devices {

  constructor(cookie) {
    var request = require('request')
    this.devicesReq = request.defaults({
      'json': true,
      'jar': cookie
    })

  }

  findAll(query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/devices', query)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  applyAll(callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/devices/applyAll')

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  applyMissing(callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/devices/applyMissing')

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  query(query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/devices/find', query)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  getStatuses(query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/devices/statuses', query)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  findFull(uuid, query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/devices/' + uuid, query)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  delete(uuid, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/devices/' + uuid)

    this.req(path, 'DELETE', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  createEndpoint(uuid, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/devices/' + uuid + '/')

    this.req(path, 'POST', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  executeAction(uuid, action, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/devices/' + uuid + '/actions/' + action)

    this.req(path, 'POST', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  getConfig(uuid, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/devices/' + uuid + '/config')

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  update(uuid, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/devices/' + uuid + '/config')

    this.req(path, 'PUT', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  getConfigSchema(uuid, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/devices/' + uuid + '/config/schema')

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  getInfo(uuid, query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/devices/' + uuid + '/endpoints', query)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  postIcon(uuid, query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/devices/' + uuid + '/icon', query)

    this.req(path, 'POST', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  putIcon(uuid, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/devices/' + uuid + '/icon')

    this.req(path, 'PUT', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  getInfo(uuid, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/devices/' + uuid + '/info')

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  applyAttributes(uuid, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/devices/' + uuid + '/reapply')

    this.req(path, 'POST', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  renameJson(uuid, body, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/devices/' + uuid + '/rename')

    this.req(path, 'POST', body, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  rename(uuid, query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/devices/' + uuid + '/rename', query)

    this.req(path, 'POST', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  getStatus(uuid, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/devices/' + uuid + '/status')

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  req(url, method, body, callback) {
    this.devicesReq({
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

module.exports = Devices