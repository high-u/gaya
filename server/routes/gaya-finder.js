'use strict'
const loki = require("lokijs")
const { nanoid } = require("nanoid")

module.exports = async function (fastify, opts) {
  fastify.get('/message', async function (request, reply) {
    console.log(request.query)

    const gtTime = request.query["time.gt"];
    const roomKey = request.query.room;

    const room = fastify.lokijs.db.getCollection(roomKey)
    const results = room.find({"time": {"$gt": gtTime}})
    console.log(results)
    const response = results.map(e => {
      return {
        id: e.id,
        time: e.time,
        message: e.message
      }
    })

    return response
  })
}
