//bring in mongoose
const mongoose = require("mongoose");

//This is an embedded review schema
const reviewSchema = new mongoose.Schema({
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  comment: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

//next we make a schema
const propertySchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
  },
  bedrooms: Number,
  price: Number,
  dateAdded: Date,
  //I want to add a collection of reviews in propertySchema
  reviews: [reviewSchema],
  //Reference to the owner table
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Owner",
    //owner is required - What does this mean for us?
    required: true,
  },
});

//Create the model
const model = mongoose.model("Property", propertySchema);
//export that model
module.exports = model;
