const mongoose = require("mongoose");

//Define an owner schema - one to many with property
const ownerSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
});

const model = mongoose.model("Owner", ownerSchema);
module.exports = model;
