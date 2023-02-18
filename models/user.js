const mongoose = require('../db/connection')

// define a schema
var schema = mongoose.Schema({

  email: String,
  password: String
})

// define model
var User = mongoose.model('User', schema)

module.exports = User