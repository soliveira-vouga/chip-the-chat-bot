'use strict'

const request = require('superagent')
const token = process.env.FB_PAGE_ACCESS_TOKEN

const baseUrl = 'https://graph.facebook.com/v2.6'

module.exports = {
  sendMessage: (sender, message) => {
    return request
        .post(`${baseUrl}/me/messages`)
        .query({ access_token: token })
        .send({
          recipient: { id: sender },
          message: message
        })
        .then((res) => {
          if (res.body.error) {
            console.log('Error: ', res.body.error)
          }
        })
        .catch((err) => {
          console.log('Error sending messages: ', err)
          return Promise.resolve()
        })
  }
}
