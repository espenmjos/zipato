class Networks {

  constructor(cookie) {
    var request = require('request')
    this.networksReq = request.defaults({
      'json': true,
      'jar': cookie
    })

  }

  findAll(query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/networks', query)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  create(callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/networks/')

    this.req(path, 'POST', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  findAvailable(callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/networks/available')

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  cleanDuplicates(callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/networks/clearDuplicates')

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  needFetch(callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/networks/needFetch')

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  getTrees(callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/networks/trees')

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  getByUuid(uuid, query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/networks/' + uuid, query)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  createDevice(uuid, query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/networks/' + uuid, query)

    this.req(path, 'POST', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  delete(uuid, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/networks/' + uuid)

    this.req(path, 'DELETE', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  listActions(uuid, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/networks/' + uuid + '/actions')

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  executeAction(uuid, action, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/networks/' + uuid + '/actions/' + action)

    this.req(path, 'POST', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  getConfig(uuid, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/networks/' + uuid + '/config')

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  update(uuid, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/networks/' + uuid + '/config')

    this.req(path, 'PUT', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  discoveryStart(uuid, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/networks/' + uuid + '/discovery/')

    this.req(path, 'POST', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  discoveryStatus(uuid, discovery, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/networks/' + uuid + '/discovery/' + discovery)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  discoveryStop(uuid, discovery, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/networks/' + uuid + '/discovery/' + discovery)

    this.req(path, 'DELETE', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  discoveryDevices(uuid, discovery, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/networks/' + uuid + '/discovery/' + discovery + '/devices')

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  flush(uuid, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/networks/' + uuid + '/flush')

    this.req(path, 'DELETE', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  getTrees(uuid, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/networks/' + uuid + '/tree')

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  req(url, method, body, callback) {
    this.networksReq({
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

module.exports = Networks