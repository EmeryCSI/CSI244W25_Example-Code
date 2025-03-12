/**
 * Movie Model
 *
 * This file defines the schema and model for the Movie resource.
 * It uses Mongoose to create a schema that maps to a MongoDB collection.
 */

// Import mongoose to interact with MongoDB
const mongoose = require("mongoose");

/**
 * Movie Schema Definition
 *
 * Defines the structure of movie documents in the database with the following fields:
 * - title: The name of the movie (String)
 * - director: The director of the movie (String)
 * - year: The release year of the movie (Number)
 * - genre: The genre of the movie (String)
 */
const movieSchema = new mongoose.Schema({
  title: String,
  director: String,
  year: Number,
  genre: String,
});

/**
 * Movie Model
 *
 * Creates a Mongoose model from the schema.
 * The first argument 'Movie' defines the name of the collection in MongoDB (will be 'movies' in lowercase plural)
 * The second argument is the schema to use for documents in that collection
 */
const Movie = mongoose.model("Movie", movieSchema);

// Export the Movie model to be used in other parts of the application
module.exports = Movie;
