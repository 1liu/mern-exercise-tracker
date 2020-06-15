const mongoose = require('mongoose');

const Scheme = mongoose.Schema;

const userScheme  = new Scheme({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
},{
  timestamps:true,
});

const User = mongoose.model('User', userScheme);

module.exports = User;
