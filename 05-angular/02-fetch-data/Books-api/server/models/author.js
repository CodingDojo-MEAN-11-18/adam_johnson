const mongoose = require('mongoose');

const { Schema } = mongoose;

const AuthorSchema = new Schema({
  firstName: {
    type: String,
    required: [true, 'Name required'],
    minlength: [2, 'Name must contain at least 2 chars']
  },
  lastName: {
    type: String,
    required: [true, 'Name required'],
    minlength: [2, 'Name must contain at least 2 chars']
  },
  country: {
    type: String,
    required: [true, 'Country of origin required'],
    minlength: [3, 'Country must contain at least 3 chars']
  },
  birthyear: {
    type: Number,
    required: [true, 'Birthyear of author required'],
    max: 2018
  },
  books: [{
    type: Schema.Types.ObjectId,
    ref: 'Book'
  }]
});
module.exports = mongoose.model('Author', AuthorSchema);
