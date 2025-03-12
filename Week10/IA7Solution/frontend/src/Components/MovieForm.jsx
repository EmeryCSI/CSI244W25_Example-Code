import { useState } from "react";
import MovieRepository from "../data/movieRepository";

function MovieForm({ onMovieAdded }) {
  const movieRepository = new MovieRepository();
  // State to store form data
  const [movie, setMovie] = useState({
    title: "",
    director: "",
    year: "",
  });

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      // Send movie data to API
      const newMovie = await movieRepository.createMovie(movie);
      // Notify parent component of new movie
      onMovieAdded(newMovie);
      // Reset form
      setMovie({ title: "", director: "", year: "" });
    } catch (error) {
      console.error("Error creating movie:", error);
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update state while preserving other fields
    setMovie((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Movie</h2>
      <div>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={movie.title}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Director:
          <input
            type="text"
            name="director"
            value={movie.director}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Year:
          <input
            type="number"
            name="year"
            value={movie.year}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <button type="submit">Add Movie</button>
    </form>
  );
}

export default MovieForm;
