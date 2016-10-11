const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    requred: true
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
});

userSchema.methods.comparePassword = function(toCompare, cb) {
  bcrypt.compare(toCompare, this.password, function(err, isMatch) {
    if (err) {
      return cb(err);
    }
    cb(err, isMatch);
  });
};

module.exports = mongoose.model('User', userSchema);
