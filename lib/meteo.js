class Meteo {

  constructor(cookie) {
    var request = require('request')
    this.meteoReq = request.defaults({
      'json': true,
      'jar': cookie
    })

  }

  create(body, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/meteo')

    this.req(path, 'POST', body, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  findAll(callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/meteo')

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  findAllValues(query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/meteo/attributes/values', query)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  findFull(uuid, query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/meteo/attributes/' + uuid, query)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  searchLocation(query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/meteo/city', query)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  searcWeather(query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/meteo/weather', query)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  delete(uuid, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/meteo/' + uuid)

    this.req(path, 'DELETE', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  conditions(uuid, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/meteo/' + uuid + '/conditions')

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  forecast(uuid, day, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/meteo/' + uuid + '/forecast/' + day)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  req(url, method, body, callback) {
    this.meteoReq({
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

module.exports = Meteo