// Import the Movie model
// The controller uses the model to interact with the movie data
const Movie = require("../models/movie");

// MovieController class
// This class acts as an intermediary between the Model and the View (in this case, the API response)
// It contains methods that handle the business logic for each route
class MovieController {
  // Get all movies
  // This method handles GET requests for all movies
  static getAllMovies(req, res) {
    console.log("All Movies Hit");
    // Use the Movie model to get all movies
    const movies = Movie.getAll();
    // Send the movies as a JSON response
    res.json(movies);
  }

  // Get a movie by ID
  // This method handles GET requests for a specific movie
  static getMovieById(req, res) {
    console.log("Movie by ID hit");
    // Extract the id from the request parameters
    const id = req.params.id;
    // Use the Movie model to find the movie by id
    const movie = Movie.getById(id);
    if (movie) {
      // If the movie is found, send it as a JSON response
      res.json(movie);
    } else {
      // If the movie is not found, send a 404 (Not Found) status with an error message
      res.status(404).json({ message: "Movie not found" });
    }
  }

  // Create a new movie
  // This method handles POST requests to create a new movie
  static createMovie(req, res) {
    console.log("Create Movie Hit");
    // Use the Movie model to create a new movie with the data from the request body
    const newMovie = Movie.create(req.body);
    // Send the newly created movie as a JSON response with a 201 (Created) status
    res.status(201).json(newMovie);
  }

  // Update a movie
  // This method handles PUT requests to update an existing movie
  static updateMovie(req, res) {
    console.log("Update Movie Hit");
    // Extract the id from the request parameters
    const id = req.params.id;
    // Use the Movie model to update the movie with the given id and the data from the request body
    const updatedMovie = Movie.update(id, req.body);
    if (updatedMovie) {
      // If the movie was successfully updated, send the updated movie as a JSON response
      res.json(updatedMovie);
    } else {
      // If the movie was not found, send a 404 (Not Found) status with an error message
      res.status(404).json({ message: "Movie not found" });
    }
  }

  // Delete a movie
  // This method handles DELETE requests to remove a movie
  static deleteMovie(req, res) {
    console.log("Delete Movie Hit");
    // Extract the id from the request parameters
    const id = req.params.id;
    // Use the Movie model to delete the movie with the given id
    const deletedMovie = Movie.delete(id);
    if (deletedMovie) {
      // If the movie was successfully deleted, send a success message as a JSON response
      res.json({ message: "Movie deleted successfully" });
    } else {
      // If the movie was not found, send a 404 (Not Found) status with an error message
      res.status(404).json({ message: "Movie not found" });
    }
  }
}

// Export the MovieController so it can be used in other parts of the application
module.exports = MovieController;

// This MovieController demonstrates the 'C' in MVC (Model-View-Controller) architecture
// It handles the application's business logic, processing requests, interacting with the Model,
// and preparing data to be sent back to the client
// By separating these concerns, we create a more modular and maintainable application structure
