import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import GameRepository from "./data/gameRepository";
import GameDetails from "./Components/GameDetails";
import CreateGame from "./Components/CreateGame";

function App() {
  // State management for the application
  const [games, setGames] = useState([]); // Stores all games
  const [selectedGameId, setSelectedGameId] = useState(null); // Tracks selected game for detailed view
  const gameRepository = new GameRepository(); // Repository instance for data operations
  const [showCreateForm, setShowCreateForm] = useState(false); // Controls create form visibility

  // Effect hook to fetch games when component mounts
  useEffect(() => {
    const fetchGames = async () => {
      try {
        const allGames = await gameRepository.getAllGames();
        setGames(allGames);
      } catch (error) {
        console.error("Failed to fetch games:", error);
      }
    };

    fetchGames();
  }, []); // Empty dependency array means this runs once on mount

  // Callback handler for when a new game is created
  const handleGameCreated = async () => {
    const allGames = await gameRepository.getAllGames();
    setGames(allGames); // Refresh games list
    setShowCreateForm(false); // Hide create form
  };

  return (
    <>
      <div>
        <h1>Games List</h1>
        {selectedGameId ? (
          <>
            <button onClick={() => setSelectedGameId(null)}>
              Back to List
            </button>
            <GameDetails gameId={selectedGameId} />
          </>
        ) : (
          <>
            <button onClick={() => setShowCreateForm(!showCreateForm)}>
              {showCreateForm ? "Cancel" : "Create New Game"}
            </button>

            {showCreateForm ? (
              <CreateGame onGameCreated={handleGameCreated} />
            ) : (
              <div className="games-container">
                {games.map((game) => (
                  <div
                    key={game.id}
                    className="game-card"
                    onClick={() => setSelectedGameId(game.id)}
                  >
                    <h2>{game.title}</h2>
                    <p>{game.description}</p>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default App;
