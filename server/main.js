import express from "express"
import bp from "body-parser"
import cors from 'cors'
import "./db/dbconfig"

import FarmController from './controllers/farmController'
import AnimalController from './controllers/animalController'

let port = 3000

let server = express()

server.use(bp.json())
server.use(bp.urlencoded({
  extended: true
}))

var whitelist = ['http://localhost:8080', 'http://localhost:3000/api/questions'];
var corsOptions = {
  origin: function (origin, callback) {
    var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
    callback(null, originIsWhitelisted);
  },
  credentials: true
};
server.use(cors(corsOptions))

server.use('/api/farms', new FarmController().router)
server.use('/api/animals', new AnimalController().router)

server.use((error, req, res, next) => {
  res.status(error.status || 400).send({ error: { message: error.message } })
})

server.listen(port, () => {
  console.log("Server running on port:", port)
})