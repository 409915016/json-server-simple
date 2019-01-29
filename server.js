const port = 3000

const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
//const middlewares = jsonServer.defaults()
let middlewares = require('./middlewares')

server.post('/api/user/login_by_phone', (req, res) =>{
  res.jsonp({
    body: res.locals.data
  })
})

server.use((req, res, next) => {
  next()
})

server.use(middlewares)
server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})