var request = require('request')

var Alarm = require('./alarm.js')
var Announcements = require('./announcements.js')
var Attributes = require('./attributes.js')
var Bindings = require('./bindings.js')
var Box = require('./box.js')
var Brands = require('./brands.js')
var Cameras = require('./cameras.js')
var Cluster = require('./cluster.js')
var ClusterEndpoints = require('./clusterEndpoints.js')
var Contacts = require('./contacts.js')
var Dealer = require('./dealer.js')
var Devices = require('./devices.js')
var Endpoints = require('./endpoints.js')
var Firmware = require('./firmware.js')
var Groups = require('./groups.js')
var Log = require('./log.js')
var Meteo = require('./meteo.js')
var Multibox = require('./multibox.js')
var Nest = require('./nest.js')
var Networks = require('./networks.js')
var PowerConsumption = require('./power-consumption.js')
var ProvisionPackage = require('./provision-package.js')
var ProvisionService = require('./provision-service.js')
var PushNotification = require('./push-notification.js')
var Realm = require('./realm.js')
var Rooms = require('./rooms.js')
var Rules = require('./rules.js')
var Scenes = require('./scenes.js')
var Schedules = require('./schedules.js')
var Security = require('./security.js')
var Sip = require('./sip.js')
var Snapshot = require('./snapshot.js')
var Sv = require('./sv.js')
var Thermostats = require('./thermostats.js')
var Translation = require('./translation.js')
var Types = require('./types.js')
var User = require('./user.js')
var Users = require('./users.js')
var VirtualEndpoints = require('./virtualEndpoints.js')
var Wallet = require('./wallet.js')
var Wizard = require('./wizard.js')

class Zipato {

  constructor () {
    this._cookieJar = request.jar()
    this._alarm = new Alarm(this._cookieJar)
    this._announcements = new Announcements(this._cookieJar)
    this._attributes = new Attributes(this._cookieJar)
    this._bindings = new Bindings(this._cookieJar)
    this._box = new Box(this._cookieJar)
    this._brands = new Brands(this._cookieJar)
    this._cameras = new Cameras(this._cookieJar)
    this._cluster = new Cluster(this._cookieJar)
    this._clusterEndpoints = new ClusterEndpoints(this._cookieJar)
    this._contacts = new Contacts(this._cookieJar)
    this._dealer = new Dealer(this._cookieJar)
    this._devices = new Devices(this._cookieJar)
    this._endpoints = new Endpoints(this._cookieJar)
    this._firmware = new Firmware(this._cookieJar)
    this._groups = new Groups(this._cookieJar)
    this._log = new Log(this._cookieJar)
    this._meteo = new Meteo(this._cookieJar)
    this._multibox = new Multibox(this._cookieJar)
    this._nest = new Nest(this._cookieJar)
    this._networks = new Networks(this._cookieJar)
    this._powerConsumption = new PowerConsumption(this._cookieJar)
    this._provisionPackage = new ProvisionPackage(this._cookieJar)
    this._provisionService = new ProvisionService(this._cookieJar)
    this._pushNotification = new PushNotification(this._cookieJar)
    this._realm = new Realm(this._cookieJar)
    this._rooms = new Rooms(this._cookieJar)
    this._rules = new Rules(this._cookieJar)
    this._scenes = new Scenes(this._cookieJar)
    this._schedules = new Schedules(this._cookieJar)
    this._security = new Security(this._cookieJar)
    this._sip = new Sip(this._cookieJar)
    this._snapshot = new Snapshot(this._cookieJar)
    this._sv = new Sv(this._cookieJar)
    this._thermostats = new Thermostats(this._cookieJar)
    this._translation = new Translation(this._cookieJar)
    this._types = new Types(this._cookieJar)
    this._user = new User(this._cookieJar)
    this._users = new Users(this._cookieJar)
    this._virtualEndpoints = new VirtualEndpoints(this._cookieJar)
    this._wallet = new Wallet(this._cookieJar)
    this._wizard = new Wizard(this._cookieJar)
  }

  get alarm() {
    return this._alarm
  }

  get announcements() {
    return this._announcements
  }

  get attributes() {
    return this._attributes
  }

  get bindings() {
    return this._bindings
  }

  get box() {
    return this._box
  }

  get brands() {
    return this._brands
  }

  get cameras() {
    return this._cameras
  }

  get cluster() {
    return this._cluster
  }

  get clusterEndpoints() {
    return this._clusterEndpoints
  }

  get contacts() {
    return this._contacts
  }

  get dealer() {
    return this._dealer
  }

  get devices() {
    return this._devices
  }

  get endpoints() {
    return this._endpoints
  }

  get firmware() {
    return this._firmware
  }

  get groups() {
    return this._groups
  }

  get log() {
    return this._log
  }

  get meteo() {
    return this._meteo
  }

  get multibox() {
    return this._multibox
  }

  get nest() {
    return this._nest
  }

  get networks() {
    return this._networks
  }

  get powerConsumption() {
    return this._powerConsumption
  }

  get provisionPackage() {
    return this._provisionPackage
  }

  get provisionService() {
    return this._provisionService
  }

  get pushNotification() {
    return this._pushNotification
  }

  get realm() {
    return this._realm
  }

  get rooms() {
    return this._rooms
  }

  get rules() {
    return this._rules
  }

  get scenes() {
    return this._scenes
  }

  get schedules() {
    return this._schedules
  }

  get security() {
    return this._security
  }

  get sip() {
    return this._sip
  }

  get snapshot() {
    return this._snapshot
  }

  get sv() {
    return this._sv
  }

  get thermostats() {
    return this._thermostats
  }

  get translation() {
    return this._translation
  }

  get types() {
    return this._types
  }

  get user() {
    return this._user
  }

  get users() {
    return this._users
  }

  get virtualEndpoints() {
    return this._virtualEndpoints
  }

  get wallet() {
    return this._wallet
  }

  get wizard() {
    return this._wizard
  }

}

module.exports = Zipato