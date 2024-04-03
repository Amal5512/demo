const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  phoneNo: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("users", userModel);
