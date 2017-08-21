class PowerConsumption {

  constructor(cookie) {
    var request = require('request')
    this.powerConsumptionReq = request.defaults({
      'json': true,
      'jar': cookie
    })

  }

  getLog(attribute, query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/power-consumption/' + attribute, query)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  req(url, method, body, callback) {
    this.powerConsumptionReq({
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

module.exports = PowerConsumption