class Cameras {

  constructor(cookie) {
    var request = require('request')
    this.camerasReq = request.defaults({
      'json': true,
      'jar': cookie
    })

  }

  getAll(query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/cameras', query)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  createOnDevice(body, query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/cameras', query)

    this.req(path, 'POST', body, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  createStatic(body, query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/cameras', query)

    this.req(path, 'POST', body, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  proxy(query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/cameras/proxy', query)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  findFull(uuid, query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/cameras/' + uuid, query)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  delete(uuid, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/cameras/' + uuid)

    this.req(path, 'DELETE', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  update(uuid, body, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/cameras/' + uuid + '/config')

    this.req(path, 'PUT', body, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  configure(uuid, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/cameras/' + uuid + '/configure')

    this.req(path, 'POST', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  ptzPatrol(uuid, patrol, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/cameras/' + uuid + '/ptz/patrol/' + patrol)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  ptzPreset(uuid, preset, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/cameras/' + uuid + '/ptz/preset/' + preset)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  ptzAction(uuid, action, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/cameras/' + uuid + '/ptz/' + action)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  recording(uuid, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/cameras/' + uuid + '/takeRecording')

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  snapshot(uuid, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/cameras/' + uuid + '/takeSnapshot')

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  req(url, method, body, callback) {
    this.camerasReq({
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

module.exports = Cameras