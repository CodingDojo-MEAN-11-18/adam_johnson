const mongoose = require('mongoose');

const { Schema } = mongoose;

const PlayerSchema = new Schema ({
  name: {
    type: String,
    required: [true, 'Player name required'],
    minlength: [2, 'Name must contain at least 2 chars']
  },
  position: String
});

module.exports = mongoose.model('Player', PlayerSchema);
