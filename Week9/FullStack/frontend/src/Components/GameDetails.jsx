import { useState, useEffect } from "react";
import GameRepository from "../data/gameRepository";

// Component for displaying detailed information about a specific game
function GameDetails({ gameId }) {
  // State management for the component
  const [game, setGame] = useState(null); // Stores game details
  const [loading, setLoading] = useState(true); // Tracks loading state
  const [error, setError] = useState(null); // Stores any error messages
  const gameRepository = new GameRepository();

  // Effect hook to fetch game details when gameId changes
  useEffect(() => {
    const fetchGameDetails = async () => {
      try {
        const gameData = await gameRepository.getGameById(gameId);
        setGame(gameData);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch game details");
        setLoading(false);
      }
    };

    fetchGameDetails();
  }, [gameId]); // Dependency array includes gameId to refetch when it changes

  // Conditional rendering based on component state
  if (loading) return <div>Loading...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!game) return <div>Game not found</div>;

  return (
    <div className="game-details">
      <h1>{game.title}</h1>
      <div className="game-info">
        <div className="info-section">
          <h2>General Information</h2>
          <p>
            <strong>Release Year:</strong> {game.releaseYear}
          </p>
          <p>
            <strong>Developer:</strong> {game.developer}
          </p>
          <p>
            <strong>Publisher:</strong> {game.publisher}
          </p>
          <p>
            <strong>Age Rating:</strong> {game.ageRating}
          </p>
        </div>

        <div className="info-section">
          <h2>Game Details</h2>
          <p>
            <strong>Genres:</strong> {game.genre.join(", ")}
          </p>
          <p>
            <strong>Platforms:</strong> {game.platforms.join(", ")}
          </p>
          <p>
            <strong>Multiplayer:</strong> {game.multiplayer ? "Yes" : "No"}
          </p>
        </div>

        <div className="info-section">
          <h2>Performance</h2>
          <p>
            <strong>Review Score:</strong> {game.reviewScore}/100
          </p>
          <p>
            <strong>Total Sales:</strong> {game.totalSales} million copies
          </p>
        </div>
      </div>
    </div>
  );
}

export default GameDetails;
