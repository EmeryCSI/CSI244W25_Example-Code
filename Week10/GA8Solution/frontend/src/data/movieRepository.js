// Define the base URL for our API endpoints
const API_URL = "http://localhost:3000/api/movies";
// Export an object containing all our API interaction methods
class MovieRepository {
  // Method to fetch all movies from the API
  async getAllMovies() {
    try {
      // Make GET request to the API
      const response = await fetch(API_URL);

      // Check if the response was successful
      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }

      // Parse and return the JSON response
      return await response.json();
    } catch (error) {
      // Log and re-throw any errors for handling in components
      throw error;
    }
  }
  // Method to fetch a single movie by its ID
  async getMovieById(id) {
    try {
      const response = await fetch(`${API_URL}/${id}`);
      if (!response.ok) {
        throw new Error("Movie not found");
      }
      return await response.json();
    } catch (error) {
      throw error;
    }
  }
  // Method to create a new movie
  async createMovie(movie) {
    try {
      const response = await fetch(API_URL, {
        method: "POST", // Specify HTTP method
        headers: {
          "Content-Type": "application/json", // Tell server we're sending JSON
        },
        body: JSON.stringify(movie), // Convert movie object to JSON string
      });

      if (!response.ok) {
        throw new Error("Failed to create movie");
      }

      return await response.json();
    } catch (error) {
      throw error;
    }
  }
  // Method to update an existing movie
  async updateMovie(id, movie) {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(movie),
      });

      if (!response.ok) {
        throw new Error("Failed to update movie");
      }

      return await response.json();
    } catch (error) {
      throw error;
    }
  }
  // Method to delete a movie
  async deleteMovie(id) {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete movie");
      }

      return await response.json();
    } catch (error) {
      throw error;
    }
  }
}

export default MovieRepository;
