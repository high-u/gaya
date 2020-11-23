'use strict'
const minify = require('minify');

module.exports = async function (fastify, opts) {
  fastify.get('/bookmarklet', async function (request, reply) {
    const options = {
        html: {
            removeAttributeQuotes: false,
            removeOptionalTags: false
        },
    };
    const mnfy = await minify('./public/bookmarklet.js', options)
    const host = request.raw.headers.host
    const changedHostname = mnfy.replace(/localhost:3000/g, host)
    
    return { bookmarklet: `javascript:${changedHostname}` }
  })
}
