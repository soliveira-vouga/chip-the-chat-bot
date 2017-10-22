'use strict'

const facebookService = require('./services/facebook-service')
const giphyService = require('./services/giphy-service')


module.exports = (sender, text) => {
  let messageData
  if (text.substring(0, 5) === 'giphy') {
    messageData = sendGiphy(text.substring(6).trim())
  } else {
    messageData = sendDefault()
  }

  return messageData
    .then((message) => {
      return facebookService.sendMessage(sender, message)
    })
}

function sendGiphy (text) {
  return giphyService.translate(text)
    .then((res) => {
      return {
        attachment: {
          type: 'image',
          payload: {
            url: res.url
          }
        }
      }
    })
}

function sendDefault () {
  return Promise.resolve({
    text: 'Sorry, I did not understand. Try `giphy <your-search-text>`'
  })
}
