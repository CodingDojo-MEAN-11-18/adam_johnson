const mongoose = require('mongoose');

const { Schema } = mongoose;

const NoteSchema = new Schema ({
  content: String
}, { timestamps: true });

module.exports = mongoose.model('Note', NoteSchema);
