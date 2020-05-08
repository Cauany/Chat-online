const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes')
const cors = require('cors')

const server = express()

//Configurando o server corpo da req e url
server.use(bodyParser.json())
server.use(cors())
server.use(routes)
server.use(bodyParser.urlencoded({ extended: true }))



server.listen('3000', function() {
    console.log('It is runnning!')
})