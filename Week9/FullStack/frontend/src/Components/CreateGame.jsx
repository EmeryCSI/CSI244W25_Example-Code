import { useState } from "react";
import GameRepository from "../data/gameRepository";

// Component for creating new game entries
function CreateGame({ onGameCreated }) {
  // Initialize form state with default values using useState hook
  const [formData, setFormData] = useState({
    title: "",
    releaseYear: new Date().getFullYear(), // Default to current year
    developer: "",
    publisher: "",
    reviewScore: 0,
    totalSales: 0,
    ageRating: "",
    multiplayer: false,
  });

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      // Create new instance of GameRepository and save the game data
      const gameRepository = new GameRepository();
      await gameRepository.createGame(formData);
      onGameCreated(); // Callback to parent to refresh games list
      // Reset form to initial state after successful submission
      setFormData({
        title: "",
        releaseYear: new Date().getFullYear(),
        developer: "",
        publisher: "",
        reviewScore: 0,
        totalSales: 0,
        ageRating: "",
        multiplayer: false,
      });
    } catch (error) {
      console.error("Failed to create game:", error);
    }
  };

  return (
    <div>
      <h2>Create Game</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            required
          />
        </div>

        <div>
          <label htmlFor="releaseYear">Release Year:</label>
          <input
            type="number"
            id="releaseYear"
            value={formData.releaseYear}
            onChange={(e) =>
              setFormData({
                ...formData,
                releaseYear: parseInt(e.target.value),
              })
            }
            required
          />
        </div>

        <div>
          <label htmlFor="developer">Developer:</label>
          <input
            type="text"
            id="developer"
            value={formData.developer}
            onChange={(e) =>
              setFormData({ ...formData, developer: e.target.value })
            }
            required
          />
        </div>

        <div>
          <label htmlFor="publisher">Publisher:</label>
          <input
            type="text"
            id="publisher"
            value={formData.publisher}
            onChange={(e) =>
              setFormData({ ...formData, publisher: e.target.value })
            }
            required
          />
        </div>

        <div>
          <label htmlFor="reviewScore">Review Score:</label>
          <input
            type="number"
            id="reviewScore"
            min="0"
            max="100"
            value={formData.reviewScore}
            onChange={(e) =>
              setFormData({
                ...formData,
                reviewScore: parseInt(e.target.value),
              })
            }
            required
          />
        </div>

        <div>
          <label htmlFor="totalSales">Total Sales (millions):</label>
          <input
            type="number"
            step="0.01"
            id="totalSales"
            value={formData.totalSales}
            onChange={(e) =>
              setFormData({
                ...formData,
                totalSales: parseFloat(e.target.value),
              })
            }
            required
          />
        </div>

        <div>
          <label htmlFor="ageRating">Age Rating:</label>
          <select
            id="ageRating"
            value={formData.ageRating}
            onChange={(e) =>
              setFormData({ ...formData, ageRating: e.target.value })
            }
            required
          >
            <option value="">Select Rating</option>
            <option value="E">E</option>
            <option value="E10+">E10+</option>
            <option value="T">T</option>
            <option value="M">M</option>
          </select>
        </div>

        <div>
          <label htmlFor="multiplayer">Multiplayer:</label>
          <input
            type="checkbox"
            id="multiplayer"
            checked={formData.multiplayer}
            onChange={(e) =>
              setFormData({ ...formData, multiplayer: e.target.checked })
            }
          />
        </div>

        <button type="submit">Create Game</button>
      </form>
    </div>
  );
}

export default CreateGame;
