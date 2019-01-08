const mongoose = require('mongoose');

const { Schema } = mongoose;

const NoteSchema = new Schema ({
  content: {
    type: String,
    required: [true, 'Please enter note'],
    minlength: [3, 'Note must contain at least 3 chars']
  }
}, { timestamps: true });

module.exports = mongoose.model('Note', NoteSchema);
