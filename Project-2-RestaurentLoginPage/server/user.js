const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  uid: {
    type: String,
    required: true,
    unique: false,
  },
  // You can add more fields as needed, such as a profile picture URL, roles, etc.
});

// Create a User model using the schema
const User = mongoose.model('user', userSchema);

module.exports = User;
