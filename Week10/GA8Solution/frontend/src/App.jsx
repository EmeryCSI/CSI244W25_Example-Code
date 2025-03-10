import MovieList from "./Components/MovieList";
import MovieForm from "./Components/MovieForm";
import { useState } from "react";

function App() {
  // State to trigger MovieList refresh
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  // Handler for when a new movie is added
  const handleMovieAdded = () => {
    // Increment trigger to cause MovieList to reload
    setRefreshTrigger((prev) => prev + 1);
  };

  return (
    <div className="app">
      <h1>Movie Database</h1>
      <MovieForm onMovieAdded={handleMovieAdded} />
      {/* Key prop forces component to remount when refreshTrigger changes */}
      <MovieList key={refreshTrigger} />
    </div>
  );
}

export default App;
