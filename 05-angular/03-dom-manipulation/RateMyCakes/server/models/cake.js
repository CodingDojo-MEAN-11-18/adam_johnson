const mongoose = require('mongoose');

const { Schema } = mongoose;

const CakeSchema = new Schema({
  baker: {
    type: String,
    required: [true, 'Baker name required'],
  },
  reviews: [{
    type: Schema.Types.ObjectId,
    ref: 'Review'
  }],
  image: {
    type: String,
    required: [true, 'Image required']
  }
});

module.exports = mongoose.model('Cake', CakeSchema);
