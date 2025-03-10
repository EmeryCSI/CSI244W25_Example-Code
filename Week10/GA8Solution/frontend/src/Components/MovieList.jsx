import { useState, useEffect } from "react";
import MovieRepository from "../data/movieRepository";
import MovieDetails from "./MovieDetails";

function MovieList() {
  const movieRepository = new MovieRepository();
  const [selectedMovie, setSelectedMovie] = useState(null);
  // State for storing our list of movies
  const [movies, setMovies] = useState([]);
  // State for tracking loading status
  const [loading, setLoading] = useState(true);
  // State for storing any error messages
  const [error, setError] = useState(null);

  // useEffect hook to load movies when component mounts
  useEffect(() => {
    loadMovies();
  }, []); // Empty dependency array means this runs once on mount

  // Function to load movies from the API
  const loadMovies = async () => {
    try {
      setLoading(true); // Start loading
      const data = await movieRepository.getAllMovies();
      setMovies(data); // Update movies state with API data
    } catch (err) {
      setError("Failed to load movies"); // Set error message if request fails
    } finally {
      setLoading(false); // Stop loading whether request succeeded or failed
    }
  };

  // Function to handle movie deletion
  const handleDelete = async (id) => {
    try {
      await movieRepository.deleteMovie(id);
      // Update local state to remove deleted movie
      setMovies(movies.filter((movie) => movie.id !== id));
    } catch (err) {
      setError("Failed to delete movie");
    }
  };

  if (selectedMovie) {
    return (
      <MovieDetails
        movieId={selectedMovie}
        onBack={() => setSelectedMovie(null)}
      />
    );
  }

  // Show loading state
  if (loading) return <div>Loading...</div>;

  // Show error state
  if (error) return <div>Error: {error}</div>;

  // Render movie list
  return (
    <div>
      <h2>Movies</h2>
      <div className="movie-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <h3>{movie.title}</h3>
            <p>{movie.director}</p>
            <p>{movie.year}</p>
            <div className="card-buttons">
              {/* Button to view movie details */}
              <button
                onClick={() => setSelectedMovie(movie.id)}
                className="details-button"
              >
                View Details
              </button>
              {/* Button to delete movie */}
              <button
                onClick={() => handleDelete(movie.id)}
                className="delete-button"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
