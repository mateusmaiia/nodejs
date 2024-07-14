import { fastify } from "fastify";
import 'dotenv/config'
import { DatabasePostgres } from "./database-postgres.js";


const database = new DatabasePostgres()
const server = fastify()

server.get('/videos', (req, res) => {
  const search  = req.query.search
  const videos = database.list(search)
  
  return videos
})

server.post('/videos', (req, reply) => {
  const {title, description, duration} = req.body

  database.create(
    {
      title,
      description,
      duration
    }
  )

  return reply.status(201).send()
})
server.put('/videos/:id', (req, res) => {
  const videoId = req.params.id
  const {title, description, duration} = req.body
  
  database.update(
    videoId,
    {
      title,
      description,
      duration
    }
  )

  return res.status(204).send()
})
server.delete('/videos/:id', (req, res) => {
  const id = req.params.id

  database.delete(id)

  return res.status(204).send()
})

server.listen({
  port: 1889
})