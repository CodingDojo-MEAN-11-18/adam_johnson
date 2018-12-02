const mongoose = require('mongoose');

const { Schema } = mongoose;

const wolfSchema = new Schema({
  name: String,
  age: Number,
  weight: Number
});

module.exports = mongoose.model('Wolf', wolfSchema);
