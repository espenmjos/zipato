class ProvisionPackage {

  constructor(cookie) {
    var request = require('request')
    this.provisionPackageReq = request.defaults({
      'json': true,
      'jar': cookie
    })

  }

  findAll(callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/provision-package')

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  activateCode(code, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/provision-package/activate-code/' + code)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  findByRole(query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/provision-package/by-role', query)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  checkActivationCode(code, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/provision-package/check-code/' + code)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  findCreditPackages(query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/provision-package/credit', query)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  findActivations(callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/provision-package/my-activations')

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  req(url, method, body, callback) {
    this.provisionPackageReq({
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

module.exports = ProvisionPackage