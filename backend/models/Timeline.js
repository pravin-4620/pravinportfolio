const mongoose = require('mongoose');

const timelineSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['Education', 'Experience'],
    required: true
  },
  company: {
    type: String,
    required: true
  },
  role: String,
  period: String,
  description: String,
  hasCertificate: {
    type: Boolean,
    default: false
  },
  certificatePath: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Timeline', timelineSchema);
