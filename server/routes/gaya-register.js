'use strict'
const loki = require("lokijs")
const { customAlphabet } = require("nanoid")
const nanoid = customAlphabet('1234567890abcdefghijklmnopqrstuvwxyz', 16)

module.exports = async function (fastify, opts) {
  fastify.get('/room', async function (request, reply) {
    const roomKey = nanoid()
    console.log(roomKey)
    fastify.lokijs.room.insert({key: roomKey});

    const x = fastify.lokijs.db.addCollection(roomKey, { ttl: 86400000, ttlInterval: 3600000 })
    return { roomKey: roomKey }
  })
}
