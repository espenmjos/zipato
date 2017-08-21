class Attributes {

  constructor(cookie) {
    var request = require('request')
    this.attributesReq = request.defaults({
      'json': true,
      'jar': cookie
    })

  }

  findAll(query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/attributes', query)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  findAllFull(query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/attributes/full', query)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  findAllValues(query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/attributes/values', query)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  findFull(uuid, query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/attributes/' + uuid, query)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  getChildren(uuid, query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/attributes/' + uuid + '/children', query)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  update(uuid, body, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/attributes/' + uuid + '/config')

    this.req(path, 'PUT', body, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  getConfig(uuid, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/attributes/' + uuid + '/config')

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  update0(uuid, body, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/attributes/' + uuid + '/config0')

    this.req(path, 'PUT', body, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  getDefinition(uuid, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/attributes/' + uuid + '/definition')

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  putIcon(uuid, body, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/attributes/' + uuid + '/icon')

    this.req(path, 'PUT', body, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  setParent(uuid, body, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/attributes/' + uuid + '/parent')

    this.req(path, 'PUT', body, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  getParent(uuid, query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/attributes/' + uuid + '/parent', query)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  deleteParent(uuid, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/attributes/' + uuid + '/parent')

    this.req(path, 'DELETE', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  putJson(uuid, body, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/attributes/' + uuid + '/value')

    this.req(path, 'PUT', body, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  getValue(uuid, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/attributes/' + uuid + '/value')

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  putPlain(uuid, body, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/attributes/' + uuid + '/value')

    this.req(path, 'PUT', body, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  req(url, method, body, callback) {
    this.attributesReq({
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

module.exports = Attributes