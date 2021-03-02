require('dotenv').config()
const express = require('express')
const http = require('http')
const app = express()
const bodyParses = require('body-parser')
const cors = require('cors')
const routerUser = require('./src/routers/user')
const socket = require('./src/socket/socket')

app.use(cors())
app.use(bodyParses.json())

app.use(routerUser)
app.use('/image', express.static('./public/image/'))

const server = http.createServer(app)
socket(server)

server.listen(process.env.PORT, () => {
    console.log('server is running on port ' + process.env.PORT)
})

