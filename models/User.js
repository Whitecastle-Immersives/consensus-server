const mongoose = require("mongoose");
const moment = require("monent");

const UserSchema = new mongoose.Schema({
  email: { type: String, lowercase: true },
  password: { type: String, default: "" },
  timestamp: {
    type: String,
    default: now.format("dddd, MMMM Do YYYY, kk:mm:ss")
  },
  firstName: { type: String, default: "" },
  lastName: { type: String, default: "" },
  gender: { type: String, default: "" },
  location: { type: String, default: "" },
  education: { type: String, default: "" },
  status: { type: String, default: "" }
});

module.exports = mongoose.model("user", UserSchema);
