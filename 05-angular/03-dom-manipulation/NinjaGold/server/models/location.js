const mongoose = require('mongoose');

const { Schema } = mongoose;

const LocationSchema = new Schema({
  name: String,
  Range: []
});

module.exports = mongoose.model('Location', LocationSchema);


