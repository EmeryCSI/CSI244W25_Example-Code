// Import required modules
const fs = require("fs");
const path = require("path");

// Define the path to the movies JSON file
const filePath = path.join(__dirname, "..", "data", "movies.json");

// Model: Represents the data and business logic of the application
// The Movie class encapsulates all operations related to movie data
class Movie {
  // Get all movies
  // This method returns all movies from the JSON file
  // In a real database, this might involve a SELECT * query
  static getAll() {
    const data = fs.readFileSync(filePath, "utf8");
    return JSON.parse(data);
  }

  // Get a movie by ID
  // This method finds a single movie in the array based on its ID
  // params:
  //   id: The ID of the movie to find
  // returns: The found movie object or undefined if not found
  static getById(id) {
    const movies = this.getAll();
    // The find method iterates through the array and returns the first element
    // that satisfies the provided testing function
    return movies.find((movie) => movie.id === parseInt(id));
  }

  // Create a new movie
  // This method adds a new movie to the JSON file and returns the new movie object
  // params:
  //   movie: An object containing the new movie's details
  // returns: The newly created movie object with an assigned ID
  static create(movie) {
    const movies = this.getAll();
    // Generate a new ID by finding the maximum ID in the current array and adding 1
    // If the array is empty, start with ID 1
    const newId =
      movies.length > 0 ? Math.max(...movies.map((m) => m.id)) + 1 : 1;
    // Create a new movie object, spreading the provided movie data and adding the new ID
    const newMovie = { id: newId, ...movie };
    // Add the new movie to the array
    movies.push(newMovie);
    // Write the updated movies array back to the JSON file
    //what does null, 2 do?
    //null is the placeholder for the space between the JSON object and the pretty-printing whitespace
    
    fs.writeFileSync(filePath, JSON.stringify(movies, null, 2));
    return newMovie;
  }

  // Update a movie
  // This method updates an existing movie's details in the JSON file
  // params:
  //   id: The ID of the movie to update
  //   updatedMovie: An object containing the updated movie details
  // returns: The updated movie object, or null if the movie wasn't found
  static update(id, updatedMovie) {
    const movies = this.getAll();
    // Find the index of the movie with the given ID
    const index = movies.findIndex((movie) => movie.id === parseInt(id));
    if (index !== -1) {
      // If found, update the movie by spreading the existing and new properties
      movies[index] = { ...movies[index], ...updatedMovie };
      // Write the updated movies array back to the JSON file
      fs.writeFileSync(filePath, JSON.stringify(movies, null, 2));
      return movies[index];
    }
    return null;
  }

  // Delete a movie
  // This method removes a movie from the JSON file
  // params:
  //   id: The ID of the movie to delete
  // returns: The deleted movie object, or null if the movie wasn't found
  static delete(id) {
    const movies = this.getAll();
    // Find the index of the movie with the given ID
    const index = movies.findIndex((movie) => movie.id === parseInt(id));
    if (index !== -1) {
      // If found, remove the movie from the array and return it
      // splice modifies the original array and returns an array of removed elements
      const deletedMovie = movies.splice(index, 1)[0];
      // Write the updated movies array back to the JSON file
      fs.writeFileSync(filePath, JSON.stringify(movies, null, 2));
      return deletedMovie;
    }
    return null;
  }
}

// Export the Movie class so it can be used in other parts of the application
module.exports = Movie;

// This Movie model demonstrates the 'M' in MVC (Model-View-Controller) architecture
// It encapsulates all the data-related logic and provides an interface for the controller to interact with the data
// In this implementation, these methods interact with a JSON file, which serves as a simple persistent storage
