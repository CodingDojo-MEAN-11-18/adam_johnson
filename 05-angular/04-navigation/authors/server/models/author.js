const mongoose = require('mongoose');

const { Schema } = mongoose;

const AuthorSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name required'],
    minlength: [3, 'Name must contain at least 3 chars']
  }

});

module.exports = mongoose.model('Author', AuthorSchema);
