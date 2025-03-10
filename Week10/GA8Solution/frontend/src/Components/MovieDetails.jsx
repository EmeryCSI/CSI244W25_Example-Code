import { useState, useEffect } from "react";
import MovieRepository from "../data/movieRepository";

function MovieDetails({ movieId, onBack }) {
  const movieRepository = new MovieRepository();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMovie = async () => {
      try {
        setLoading(true);
        const data = await movieRepository.getMovieById(movieId);
        console.log(data);
        setMovie(data);
      } catch (error) {
        setError("Failed to load movie details");
      } finally {
        setLoading(false);
      }
    };
    loadMovie();
  }, [movieId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return movie ? (
    <div className="movie-details">
      <h2>{movie.title}</h2>
      <div className="movie-info">
        <p>
          <strong>Director: </strong>
          {movie.director}
        </p>
        <p>
          <strong>Year: </strong>
          {movie.year}
        </p>
      </div>
      <button onClick={onBack}>Back to List</button>
    </div>
  ) : null;
}

export default MovieDetails;
