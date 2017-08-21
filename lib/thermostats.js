class Thermostats {

  constructor(cookie) {
    var request = require('request')
    this.thermostatsReq = request.defaults({
      'json': true,
      'jar': cookie
    })

  }

  findAll(query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/thermostats', query)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  createThermostat(body, query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/thermostats/', query)

    this.req(path, 'POST', body, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  wrapThermostat(device, body, query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/thermostats/wrap/' + device, query)

    this.req(path, 'POST', body, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  delete(uuid, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/thermostats/' + uuid)

    this.req(path, 'DELETE', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  findFull(uuid, query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/thermostats/' + uuid, query)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  getConfig(uuid, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/thermostats/' + uuid + '/config')

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  update(uuid, body, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/thermostats/' + uuid + '/config')

    this.req(path, 'PUT', body, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  getActuatorConfig(uuid, operation, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/thermostats/' + uuid + '/config/' + operation)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  setActuatorConfig(uuid, operation, body, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/thermostats/' + uuid + '/config/' + operation)

    this.req(path, 'PUT', body, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  listInputs(uuid, operation, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/thermostats/' + uuid + '/config/' + operation + '/inputs/')

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  addInput(uuid, operation, endpoint, query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/thermostats/' + uuid + '/config/' + operation + '/inputs/' + endpoint, query)

    this.req(path, 'PUT', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  deleteInput(uuid, operation, endpoint, query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/thermostats/' + uuid + '/config/' + operation + '/inputs/' + endpoint, query)

    this.req(path, 'DELETE', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  listMeters(uuid, operation, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/thermostats/' + uuid + '/config/' + operation + '/meters/')

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  addMeter(uuid, operation, endpoint, query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/thermostats/' + uuid + '/config/' + operation + '/meters/' + endpoint, query)

    this.req(path, 'PUT', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  deleteMeter(uuid, operation, endpoint, query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/thermostats/' + uuid + '/config/' + operation + '/meters/' + endpoint, query)

    this.req(path, 'DELETE', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  listOutputs(uuid, operation, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/thermostats/' + uuid + '/config/' + operation + '/outputs')

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  deleteOutput(uuid, operation, endpoint, query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/thermostats/' + uuid + '/config/' + operation + '/outputs/' + endpoint, query)

    this.req(path, 'DELETE', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  addOutput(uuid, operation, endpoint, query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/thermostats/' + uuid + '/config/' + operation + '/outputs/' + endpoint, query)

    this.req(path, 'PUT', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  setValue(uuid, endpoint, attribute, body, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/thermostats/' + uuid + '/endpoints/' + endpoint + '/values/' + attribute)

    this.req(path, 'PUT', body, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  wrapThermostat(uuid, device, body, query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/thermostats/' + uuid + '/wrap/' + device, query)

    this.req(path, 'POST', body, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  req(url, method, body, callback) {
    this.thermostatsReq({
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

module.exports = Thermostats