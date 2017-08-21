class Sip {

  constructor(cookie) {
    var request = require('request')
    this.sipReq = request.defaults({
      'json': true,
      'jar': cookie
    })

  }

  createContact(body, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/sip/contacts')

    this.req(path, 'POST', body, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  getAllContacts(callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/sip/contacts')

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  deleteContact(body, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/sip/contacts')

    this.req(path, 'DELETE', body, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  updateContact(body, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/sip/contacts')

    this.req(path, 'PUT', body, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  updateContactShare(body, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/sip/contacts/share')

    this.req(path, 'PUT', body, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  getContact(id, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/sip/contacts/' + id)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  updateDevice(body, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/sip/devices')

    this.req(path, 'PUT', body, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  getAllDevices(callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/sip/devices')

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  deleteDevice(body, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/sip/devices')

    this.req(path, 'DELETE', body, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  createDevice(body, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/sip/devices')

    this.req(path, 'POST', body, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  updateDeviceShare(body, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/sip/devices/share')

    this.req(path, 'PUT', body, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  getDevice(id, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/sip/devices/' + id)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  getDevice(id, serial, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/sip/devices/' + id + '/' + serial)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  deleteServer(callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/sip/server')

    this.req(path, 'DELETE', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  createServer(body, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/sip/server')

    this.req(path, 'POST', body, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  getServer(callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/sip/server')

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  updateServer(body, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/sip/server')

    this.req(path, 'PUT', body, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  updateAditionalServer(body, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/sip/server/additional')

    this.req(path, 'PUT', body, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  deleteAditionalServer(body, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/sip/server/additional')

    this.req(path, 'DELETE', body, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  getAdditionalServers(callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/sip/server/additional')

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  addAditionalServer(query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/sip/server/additional', query)

    this.req(path, 'POST', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  bindServerGroup(body, query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/sip/server/additional/contacts', query)

    this.req(path, 'POST', body, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  deleteAditionalServerContact(body, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/sip/server/additional/contacts')

    this.req(path, 'DELETE', body, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  updateAditionalServerContact(body, query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/sip/server/additional/contacts', query)

    this.req(path, 'PUT', body, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  req(url, method, body, callback) {
    this.sipReq({
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

module.exports = Sip