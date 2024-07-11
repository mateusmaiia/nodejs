import { fastify } from "fastify";
import {DatabaseMemory} from 'database-memory.js'

const server = fastify()
const database = new DatabaseMemory()

server.get('/videos', (req, res) => {
  
})

server.post('/videos', () => {
  database.create(
    {
      title: 'Primeiro video',
      description: 'lorem ipsum dolor sit amet, consectetur adip',
      duration: 180
    }
  )
})
server.put('/videos/:id', () => {

})
server.delete('/videos/:id', () => {

})

server.listen({
  port: 1889
})