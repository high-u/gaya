'use strict'
const minify = require('minify');

module.exports = async function (fastify, opts) {
  fastify.get('/bookmarklet', async function (request, reply) {
    console.log(request)
    const options = {
        html: {
            removeAttributeQuotes: false,
            removeOptionalTags: false
        },
    };
    const mnfy = await minify('./public/bookmarklet.js', options)
    const host = process.env.APPLICATION_URL
    const changedHostname = mnfy.replace(/http:\/\/localhost:3000/g, host)
    
    return { bookmarklet: `javascript:${changedHostname}` }
  })
}
