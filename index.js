'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./lib/routes')
const app = express()

app.set('port', (process.env.PORT || 5000))

// Process application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

// Process application/json
app.use(bodyParser.json())

// Index route
app.get('/', function (req, res) {
  res.send('Hello world, I am a chat bot')
})

// for Facebook verification
app.get('/webhook/', routes.getWebHook)
app.post('/webhook/', routes.postWebHook)

// Spin up the server
app.listen(app.get('port'), function () {
  console.log('running on port', app.get('port'))
})
