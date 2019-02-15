const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  first: { type: String, required: true },
  last: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isActive: { type: Boolean, default: true },
  createdOn: { type: Date, default: Date.now },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
