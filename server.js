import { fastify } from "fastify";

const server = fastify()

server.get('/videos', (req, res) => {
  console.log("/  route")
})

server.post('/videos', () => {
  console.log("/hello  route")
})
server.put('/videos/:id', () => {

})
server.delete('/videos/:id', () => {

})

server.listen({
  port: 1889
})