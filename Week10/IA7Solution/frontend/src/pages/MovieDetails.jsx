import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import MovieRepository from "../data/movieRepository";

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const movieRepository = new MovieRepository();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMovie = async () => {
      try {
        setLoading(true);
        const data = await movieRepository.getMovieById(id);
        console.log(data);
        setMovie(data);
      } catch (error) {
        setError("Failed to load movie details");
      } finally {
        setLoading(false);
      }
    };

    loadMovie();
  }, [id]);

  const handleEdit = () => {
    navigate(`/edit/${id}`);
  };

  const handleDelete = () => {
    navigate(`/delete/${id}`);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!movie) return <div>Movie not found</div>;

  return (
    <div className="movie-details">
      <h2>{movie.title}</h2>
      <p>Director: {movie.director}</p>
      <p>Year: {movie.year}</p>
      <p>Genre: {movie.genre}</p>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete} className="delete-button">
        Delete
      </button>
      <button onClick={() => navigate("/")} className="back-button">
        Back to List
      </button>
    </div>
  );
}

export default MovieDetails;
