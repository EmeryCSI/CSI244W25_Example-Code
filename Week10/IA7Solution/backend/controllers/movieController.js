/**
 * Movie Controller
 *
 * This controller handles all CRUD operations for the Movie resource.
 * It interacts with the Movie model to perform database operations.
 * Each function is designed to handle a specific HTTP request related to movies.
 */

// Import the Movie model to interact with the MongoDB collection
const Movie = require("../models/movie");

/**
 * Get all movies from the database
 *
 * @route GET /api/movies
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Array} - JSON array of all movies or error message
 */
const getAllMovies = async (req, res) => {
  try {
    // Query the database for all movies
    const movies = await Movie.find();

    // Check if any movies were found
    if (!movies) {
      return res.status(404).json({ message: "No Movies found" });
    }

    // Return the movies as a JSON response
    res.json(movies);
  } catch (error) {
    // Handle any errors that occur during the database query
    res.status(500).json({ message: error.message });
  }
};

/**
 * Get a specific movie by its ID
 *
 * @route GET /api/movies/:id
 * @param {Object} req - Express request object (contains movie ID in params)
 * @param {Object} res - Express response object
 * @returns {Object} - JSON object of the requested movie or error message
 */
const getMovieById = async (req, res) => {
  try {
    // Find a movie by its ID from the request parameters
    const movie = await Movie.findById(req.params.id);

    // If no movie is found with that ID, return a 404 error
    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    // Return the movie as a JSON response
    res.json(movie);
  } catch (error) {
    // Handle any errors that occur during the database query
    res.status(500).json({ message: error.message });
  }
};

/**
 * Create a new movie in the database
 *
 * @route POST /api/movies
 * @param {Object} req - Express request object (contains movie data in body)
 * @param {Object} res - Express response object
 * @returns {Object} - JSON object of the newly created movie or error message
 */
const createMovie = async (req, res) => {
  // Create a new Movie instance with the data from the request body
  console.log(req.body);
  const movie = new Movie(req.body);
  console.log(movie);

  try {
    // Save the new movie to the database
    const newMovie = await movie.save();

    // Return the newly created movie with a 201 (Created) status code
    res.status(201).json(newMovie);
  } catch (err) {
    // Handle any errors that occur during the save operation
    res.status(404).json({ message: err.message });
  }
};

/**
 * Update an existing movie by its ID
 *
 * @route PUT /api/movies/:id
 * @param {Object} req - Express request object (contains movie ID in params and updated data in body)
 * @param {Object} res - Express response object
 * @returns {Object} - JSON object of the updated movie or error message
 */
const updateMovie = async (req, res) => {
  try {
    // Find a movie by ID and update it with the data from the request body
    const movie = await Movie.findByIdAndUpdate(req.params.id, req.body);

    // Return the updated movie as a JSON response
    res.json(movie);
  } catch (err) {
    // Handle any errors that occur during the update operation
    res.status(400).json({ message: err.message });
  }
};

/**
 * Delete a movie from the database by its ID
 *
 * @route DELETE /api/movies/:id
 * @param {Object} req - Express request object (contains movie ID in params)
 * @param {Object} res - Express response object
 * @returns {Object} - Success message or error message
 */
const deleteMovie = async (req, res) => {
  try {
    // Find a movie by ID and delete it from the database
    await Movie.findByIdAndDelete(req.params.id);

    // Return a success message
    res.json({ message: "Movie Deleted" });
  } catch (err) {
    // Handle any errors that occur during the delete operation
    res.status(500).json({ message: err.message });
  }
};

// Export all controller functions to be used in route definitions
module.exports = {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
};
