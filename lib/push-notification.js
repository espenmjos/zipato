class PushNotification {

  constructor(cookie) {
    var request = require('request')
    this.pushNotificationReq = request.defaults({
      'json': true,
      'jar': cookie
    })

  }

  getApnsDevTokens(callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/push-notification/apns/dev-tokens')

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  addApnsDevTokens(query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/push-notification/apns/dev-tokens/add', query)

    this.req(path, 'POST', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  registerApns0(token, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/push-notification/apns/register/' + token)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  sendApnsNotification(query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/push-notification/apns/send', query)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  registerApns(token, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/push-notification/apns/token/' + token)

    this.req(path, 'PUT', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  unregisterApns(token, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/push-notification/apns/token/' + token)

    this.req(path, 'DELETE', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  registerGcm0(token, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/push-notification/gcm/register/' + token)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  sendGcmNotification(query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/push-notification/gcm/send', query)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  registerGcm(token, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/push-notification/gcm/token/' + token)

    this.req(path, 'PUT', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  unregisterGcm(token, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/push-notification/gcm/token/' + token)

    this.req(path, 'DELETE', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  sendAll(query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/push-notification/send', query)

    this.req(path, 'POST', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  req(url, method, body, callback) {
    this.pushNotificationReq({
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

module.exports = PushNotification