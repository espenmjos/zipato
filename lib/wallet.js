class Wallet {

  constructor(cookie) {
    var request = require('request')
    this.walletReq = request.defaults({
      'json': true,
      'jar': cookie
    })

  }

  current(callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/wallet')

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  box(callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/wallet/box')

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  box(serial, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/wallet/box/' + serial)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  trx(query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/wallet/transactions', query)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  trxBox(query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/wallet/transactions/box', query)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  trxBox(serial, query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/wallet/transactions/box/' + serial, query)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  trxUser(query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/wallet/transactions/user', query)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  trxUserSerial(serial, query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/wallet/transactions/user/' + serial, query)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  transferToBox(query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/wallet/transfer/box', query)

    this.req(path, 'POST', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  transfrerToUser(query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/wallet/transfer/user', query)

    this.req(path, 'POST', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  user(callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/wallet/user')

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  sendWarningByWalletBalance(callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/wallet/user/credit-warning')

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  req(url, method, body, callback) {
    this.walletReq({
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

module.exports = Wallet