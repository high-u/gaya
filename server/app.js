'use strict'

const path = require('path')
const AutoLoad = require('fastify-autoload')
const fastifyCORS = require('fastify-cors')
const loki = require("lokijs")

module.exports = async function (fastify, opts) {
  // Place here your custom code!
  fastify.register(fastifyCORS)

  const db = new loki('gaya.db')
  const room = db.addCollection("room", { ttl: 86400000, ttlInterval: 3600000 })
  fastify.decorate('lokijs', {
    db: db,
    room: room
  })

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })

  // This loads all plugins defined in routes
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts)
  })
}
