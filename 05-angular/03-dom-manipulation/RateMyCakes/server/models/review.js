const mongoose = require('mongoose');

const { Schema } = mongoose;

const ReviewSchema = new Schema({
  comment: String,
  rating: Number,
  cake: {
    type: Schema.Types.ObjectId,
    ref: 'Cake'
  }
});

module.exports = mongoose.model('Review', ReviewSchema);

