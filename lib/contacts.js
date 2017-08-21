class Contacts {

  constructor(cookie) {
    var request = require('request')
    this.contactsReq = request.defaults({
      'json': true,
      'jar': cookie
    })

  }

  createUser(body, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/contacts')

    this.req(path, 'POST', body, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  findAll(callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/contacts')

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  self(callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/contacts/self')

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  editUser(id, body, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/contacts/' + id)

    this.req(path, 'PUT', body, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  findOne(id, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/contacts/' + id)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  deleteContact(id, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/contacts/' + id)

    this.req(path, 'DELETE', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  req(url, method, body, callback) {
    this.contactsReq({
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

module.exports = Contacts