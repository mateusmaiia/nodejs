import { createServer} from 'node:http'

const server = createServer((req, res) => {
  res.write('oi')

  return res.end()

})


server.listen(1889)