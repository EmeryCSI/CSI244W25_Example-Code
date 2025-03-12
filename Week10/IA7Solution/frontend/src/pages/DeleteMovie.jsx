import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import MovieRepository from "../data/movieRepository";

function DeleteMovie() {
  const { id } = useParams();
  const navigate = useNavigate();
  const movieRepository = new MovieRepository();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMovie = async () => {
      try {
        setLoading(true);
        const data = await movieRepository.getMovieById(id);
        setMovie(data);
      } catch (error) {
        setError("Failed to load movie details");
      } finally {
        setLoading(false);
      }
    };

    loadMovie();
  }, [id]);

  const handleDelete = async () => {
    try {
      setDeleting(true);
      await movieRepository.deleteMovie(id);
      navigate("/");
    } catch (error) {
      setError("Failed to delete movie");
      setDeleting(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="error-message">{error}</div>;
  if (!movie) return <div>Movie not found</div>;

  return (
    <div className="delete-movie">
      <h2>Confirm Deletion</h2>

      <div className="confirmation-message">
        <p>
          Are you sure you want to delete this movie? This action cannot be
          undone.
        </p>
      </div>

      <div className="movie-details-confirm">
        <h3>{movie.title}</h3>
        <p>
          <strong>Director:</strong> {movie.director}
        </p>
        <p>
          <strong>Year:</strong> {movie.year}
        </p>
        <p>
          <strong>Genre:</strong> {movie.genre}
        </p>
      </div>

      <div className="confirmation-actions">
        <button
          className="delete-button"
          onClick={handleDelete}
          disabled={deleting}
        >
          {deleting ? "Deleting..." : "Delete Movie"}
        </button>
        <button
          className="cancel-button"
          onClick={() => navigate("/")}
          disabled={deleting}
        >
          Back to List
        </button>
      </div>
    </div>
  );
}

export default DeleteMovie;
