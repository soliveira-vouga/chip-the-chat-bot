'use strict'

const messageHandler = require('./message-handler')

function getWebHook(req, res) {
  if (req.query['hub.verify_token'] === 'my_voice_is_my_password_verify_me') {
    res.send(req.query['hub.challenge'])
  }
  res.send('Error, wrong token')
}

function postWebHook(req, res) {
  let messagingEvents = req.body.entry[0].messaging
  for (let i = 0; i < messagingEvents.length; i++) {
    let event = req.body.entry[0].messaging[i]
    let sender = event.sender.id
    if (event.message && event.message.text) {
      messageHandler(sender, event.message.text)
    }
  }
  res.sendStatus(200)
}

module.exports = {
  getWebHook,
  postWebHook
}
