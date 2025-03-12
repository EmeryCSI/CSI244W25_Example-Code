import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import MovieRepository from "../data/movieRepository";

function MovieList() {
  const navigate = useNavigate();
  const movieRepository = new MovieRepository();
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
      setLoading(true);
      const data = await movieRepository.getAllMovies();
      console.log(data);
      setMovies(data);
    } catch (error) {
      setError("Failed to load movies");
    } finally {
      setLoading(false);
    }
  };

  // Function to handle movie deletion
  const handleDelete = (id) => {
    navigate(`/delete/${id}`);
  };

  // Function to view movie details
  const handleViewDetails = (id) => {
    navigate(`/movies/${id}`);
  };

  // Function to edit a movie
  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="movie-list">
      <h2>Movies</h2>
      {movies.length === 0 ? (
        <p>No movies found. Add a new movie to get started.</p>
      ) : (
        <ul>
          {movies.map((movie) => (
            <li key={movie._id} className="movie-item">
              <div className="movie-title">{movie.title}</div>
              <div className="movie-actions">
                <button onClick={() => handleViewDetails(movie._id)}>
                  View
                </button>
                <button onClick={() => handleEdit(movie._id)}>Edit</button>
                <button onClick={() => handleDelete(movie._id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MovieList;
