const API_BASE_URL = "http://localhost:5001/api/games";

class GameRepository {
  // Fetch all games
  async getAllGames() {
    try {
      const response = await fetch(API_BASE_URL);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching games:", error);
      throw error;
    }
  }

  // Fetch a single game by ID
  async getGameById(id) {
    try {
      const response = await fetch(`${API_BASE_URL}/${id}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return await response.json();
    } catch (error) {
      console.error(`Error fetching game with id ${id}:`, error);
      throw error;
    }
  }

  // Create a new game
  async createGame(gameData) {
    try {
      const response = await fetch(API_BASE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(gameData),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return await response.json();
    } catch (error) {
      console.error("Error creating game:", error);
      throw error;
    }
  }

  // Update an existing game
  async updateGame(id, gameData) {
    try {
      const response = await fetch(`${API_BASE_URL}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(gameData),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return await response.json();
    } catch (error) {
      console.error(`Error updating game with id ${id}:`, error);
      throw error;
    }
  }

  // Delete a game
  async deleteGame(id) {
    try {
      const response = await fetch(`${API_BASE_URL}/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return await response.json();
    } catch (error) {
      console.error(`Error deleting game with id ${id}:`, error);
      throw error;
    }
  }
}

export default GameRepository;
