class Cluster {

  constructor(cookie) {
    var request = require('request')
    this.clusterReq = request.defaults({
      'json': true,
      'jar': cookie
    })

  }

  list(callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/cluster')

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  create(callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/cluster')

    this.req(path, 'POST', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  add(serial, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/cluster/add/' + serial)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  join(serial, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/cluster/join/' + serial)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  getCluster(cluster, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/cluster/' + cluster)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  getActiveMembers(cluster, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/cluster/' + cluster + '/active')

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  getMembers(cluster, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/cluster/' + cluster + '/members')

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  setActive(cluster, member, body, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/cluster/' + cluster + '/members/' + member)

    this.req(path, 'PUT', body, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  leave(cluster, member, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/cluster/' + cluster + '/members/' + member)

    this.req(path, 'DELETE', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  req(url, method, body, callback) {
    this.clusterReq({
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

module.exports = Cluster