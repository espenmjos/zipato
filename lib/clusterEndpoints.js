class ClusterEndpoints {

  constructor(cookie) {
    var request = require('request')
    this.clusterEndpointsReq = request.defaults({
      'json': true,
      'jar': cookie
    })

  }

  findAll(query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/clusterEndpoints', query)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  applyAll(callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/clusterEndpoints/applyAll')

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  findFull(uuid, query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/clusterEndpoints/' + uuid, query)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  delete(uuid, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/clusterEndpoints/' + uuid)

    this.req(path, 'DELETE', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  listActions(uuid, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/clusterEndpoints/' + uuid + '/actions')

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  executeAction(uuid, action, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/clusterEndpoints/' + uuid + '/actions/' + action)

    this.req(path, 'POST', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  applyAttributes(uuid, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/clusterEndpoints/' + uuid + '/applyAttributes')

    this.req(path, 'POST', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  findOne(uuid, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/clusterEndpoints/' + uuid + '/config')

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  update(uuid, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/clusterEndpoints/' + uuid + '/config')

    this.req(path, 'PUT', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  postIcon(uuid, query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/clusterEndpoints/' + uuid + '/icon', query)

    this.req(path, 'POST', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  putIcon(uuid, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/clusterEndpoints/' + uuid + '/icon')

    this.req(path, 'PUT', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  req(url, method, body, callback) {
    this.clusterEndpointsReq({
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

module.exports = ClusterEndpoints