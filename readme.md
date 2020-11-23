# GAYA

## Run on local machine

Run server.

```bash
docker-compose up
```

Get room key.

```bash
curl http://localhost:3000/room
```

Get bookmarklet.  
Bookmark it in your browser.

```bash
cd bookmarklet
npm run bookmarklet:minify
cat dist/bookmarklet
```

## Note

```bash
npm install fastify-cli --global

fastify generate server
```
