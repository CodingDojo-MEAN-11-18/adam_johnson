const mongoose = require('mongoose');

const { Schema } = mongoose;

const ListingSchema = new Schema ({
  title: {
    type: String,
    required: [true, 'Title required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Description required'],
    trim: true,
    maxlength: [200, 'Description has a 200 chars max']
  },
  price: {
    type: Number,
    required: [true, 'Price required'],
    min: [1, '$1 minimum']
  },
  location: {
    type: String,
    required: [true, 'Location required'],
    trim: true
  },
  image: {
    type: String,
    required: [true, 'Image required'],
    trim: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Listing', ListingSchema);
