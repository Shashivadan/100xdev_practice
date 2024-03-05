const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/100xdevDatabase");

const newuser = mongoose.Schema({
  email: String,
  password: String,
  username: String,
  phone_number: Number,
});

module.exports = mongoose.model("userAccounts", newuser);
