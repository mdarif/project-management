const mongoose = require('mongoose')

// Models are defined through the Schema interface.
const ClientSchema = new mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  phone: {
    type: String
  }
})

module.exports = mongoose.model('Client', ClientSchema)
