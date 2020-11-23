'use strict'
const loki = require("lokijs")
const { nanoid } = require("nanoid")

module.exports = async function (fastify, opts) {
  fastify.post('/xxx', async function (request, reply) {
    console.log(request.body)

    const roomKey = request.body.roomKey
    const message = request.body.message

    const room = fastify.lokijs.db.getCollection(roomKey)
    const id = nanoid(24)
    room.insert({
      id: id,
      time: new Date().getTime(),
      message: message,
      user: ""
    });
    const results = room.find({ id: id });
    console.log({results});

    return { room: roomKey, message: message }
  })
}
