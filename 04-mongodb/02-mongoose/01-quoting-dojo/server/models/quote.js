const mongoose = require('mongoose');
const { Schema } = mongoose;

const quoteSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name']
  },
  quote: {
    type: String,
    required: [true, 'Please provide a quote']
  }
}, { timestamps: true });

module.exports = mongoose.model('Quote', quoteSchema);
