class Alarm {

  constructor(cookie) {
    var request = require('request')
    this.alarmReq = request.defaults({
      'json': true,
      'jar': cookie
    })

  }

  updateAlarmConfig(body, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/alarm/config')

    this.req(path, 'PUT', body, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  getAlarmConfig(callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/alarm/config')

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  describe(type, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/alarm/descriptions/' + type)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  fixNumbers(callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/alarm/fixNumbers')

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  flush(callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/alarm/flush')

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  full(query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/alarm/full', query)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  listMonitors(callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/alarm/monitors')

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  createMonitor(body, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/alarm/monitors')

    this.req(path, 'POST', body, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  deleteMonitor(monitor, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/alarm/monitors/' + monitor)

    this.req(path, 'DELETE', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  getMonitor(monitor, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/alarm/monitors/' + monitor)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  updateMonitorConfig(monitor, body, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/alarm/monitors/' + monitor + '/config')

    this.req(path, 'PUT', body, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  getMonitorConfig(monitor, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/alarm/monitors/' + monitor + '/config')

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  createPartition(body, query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/alarm/partitions', query)

    this.req(path, 'POST', body, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  listPartition(callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/alarm/partitions')

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  deletePartition(partition, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/alarm/partitions/' + partition)

    this.req(path, 'DELETE', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  getPartition(partition, query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/alarm/partitions/' + partition, query)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  findAttributes(partition, query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/alarm/partitions/' + partition + '/attributes', query)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  putPlain(partition, attribute, body, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/alarm/partitions/' + partition + '/attributes/' + attribute + '/value')

    this.req(path, 'PUT', body, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  getPartitionConfig(partition, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/alarm/partitions/' + partition + '/config')

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  updatePartitionConfig(partition, body, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/alarm/partitions/' + partition + '/config')

    this.req(path, 'PUT', body, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  getPartitionEvents(partition, query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/alarm/partitions/' + partition + '/events', query)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  acknowledgeEvent(partition, event, body, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/alarm/partitions/' + partition + '/events/' + event)

    this.req(path, 'POST', body, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  acknowledgeEventJson(partition, event, body, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/alarm/partitions/' + partition + '/events/' + event)

    this.req(path, 'POST', body, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  getPartitionEventsDate(partition, query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/alarm/partitions/' + partition + '/eventsByTime', query)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  info(partition, body, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/alarm/partitions/' + partition + '/refresh')

    this.req(path, 'POST', body, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  setArmMode(partition, body, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/alarm/partitions/' + partition + '/setMode')

    this.req(path, 'POST', body, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  listZones(partition, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/alarm/partitions/' + partition + '/zones')

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  createZone(partition, body, query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/alarm/partitions/' + partition + '/zones', query)

    this.req(path, 'POST', body, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  createZone(partition, body, query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/alarm/partitions/' + partition + '/zones', query)

    this.req(path, 'POST', body, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  getZoneStatuses(partition, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/alarm/partitions/' + partition + '/zones/statuses')

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  getZone(partition, zone, query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/alarm/partitions/' + partition + '/zones/' + zone, query)

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  deleteZone(partition, zone, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/alarm/partitions/' + partition + '/zones/' + zone)

    this.req(path, 'DELETE', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  updateZoneConfig(partition, zone, body, query, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/alarm/partitions/' + partition + '/zones/' + zone + '/config', query)

    this.req(path, 'PUT', body, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  getZoneConfig(partition, zone, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/alarm/partitions/' + partition + '/zones/' + zone + '/config')

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  getZoneStatus(partition, zone, callback) {
    let path = this.url('https://my.zipato.com/zipato-web/v2/alarm/partitions/' + partition + '/zones/' + zone + '/status')

    this.req(path, 'GET', null, function response(err, resp, body) {
      callback(err, resp, body)
    })
  }

  req(url, method, body, callback) {
    this.alarmReq({
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

module.exports = Alarm