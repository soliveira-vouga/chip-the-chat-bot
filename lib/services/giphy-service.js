'use strict'

const giphy = require('giphy-api')

module.exports = {
  translate: (text) => {
    return giphy.translate(text)
      .then((res) => {
        return res.data.images.original
      })
  }
}
