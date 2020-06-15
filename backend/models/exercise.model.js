const mongoose = require('mongoose');

const Scheme = mongoose.Schema;

const exerciseScheme = new Scheme({
  username: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  data: {
    type: Date,
    required: true
  }
}, {
  timestamps: true,
});

const Exercise = mongoose.model('Exercise', exerciseScheme);

module.exports = Exercise;
