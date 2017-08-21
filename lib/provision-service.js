class ProvisionService {

  constructor(cookie) {
    var request = require('request')
    this.provisionServiceReq = request.defaults({
      'json': true,
      'jar': cookie
    })

  }

  getPackageServices(callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/provision-service/support/list')

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  upgradePackageService(callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/provision-service/support/upgrade')

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  req(url, method, body, callback) {
    this.provisionServiceReq({
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

module.exports = ProvisionService