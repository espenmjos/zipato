class Translation {

  constructor(cookie) {
    var request = require('request')
    this.translationReq = request.defaults({
      'json': true,
      'jar': cookie
    })

  }

  getMessages(callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/translation/messages')

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  getMessages(source, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/translation/messages/' + source)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  req(url, method, body, callback) {
    this.translationReq({
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

module.exports = Translation