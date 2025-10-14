const mongoose = require('mongoose');

const aboutSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('About', aboutSchema);
