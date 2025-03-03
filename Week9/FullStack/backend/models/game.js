// Import required modules
const fs = require("fs");
const path = require("path");

// Define the path to the games JSON file
const filePath = path.join(__dirname, "..", "data", "games.json");

// Model: Represents the data and business logic of the application
// The Game class encapsulates all operations related to game data
class Game {
  // Get all games
  // This method returns all games from the JSON file
  // In a real database, this might involve a SELECT * query
  static getAll() {
    const data = fs.readFileSync(filePath, "utf8");
    return JSON.parse(data);
  }

  // Get a game by ID
  // This method finds a single game in the array based on its ID
  // params:
  //   id: The ID of the game to find
  // returns: The found game object or undefined if not found
  static getById(id) {
    const games = this.getAll();
    return games.find((game) => game.id === parseInt(id));
  }

  // Create a new game
  // This method adds a new game to the JSON file and returns the new game object
  // params:
  //   game: An object containing the new game's details
  // returns: The newly created game object with an assigned ID
  static create(game) {
    const games = this.getAll();
    // Generate a new ID by finding the maximum ID in the current array and adding 1
    // If the array is empty, start with ID 1
    const newId =
      games.length > 0 ? Math.max(...games.map((g) => g.id)) + 1 : 1;
    // Create a new game object, spreading the provided game data and adding the new ID
    const newGame = { id: newId, ...game };
    // Add the new game to the array
    games.push(newGame);
    // Write the updated games array back to the JSON file
    fs.writeFileSync(filePath, JSON.stringify(games, null, 2));
    return newGame;
  }

  // Update a game
  // This method updates an existing game's details in the JSON file
  // params:
  //   id: The ID of the game to update
  //   updatedGame: An object containing the updated game details
  // returns: The updated game object, or null if the game wasn't found
  static update(id, updatedGame) {
    const games = this.getAll();
    // Find the index of the game with the given ID
    const index = games.findIndex((game) => game.id === parseInt(id));
    if (index !== -1) {
      // If found, update the game by spreading the existing and new properties
      games[index] = { ...games[index], ...updatedGame };
      // Write the updated games array back to the JSON file
      fs.writeFileSync(filePath, JSON.stringify(games, null, 2));
      return games[index];
    }
    return null;
  }

  // Delete a game
  // This method removes a game from the JSON file
  // params:
  //   id: The ID of the game to delete
  // returns: The deleted game object, or null if the game wasn't found
  static delete(id) {
    const games = this.getAll();
    // Find the index of the game with the given ID
    const index = games.findIndex((game) => game.id === parseInt(id));
    if (index !== -1) {
      // If found, remove the game from the array and return it
      // splice modifies the original array and returns an array of removed elements
      const deletedGame = games.splice(index, 1)[0];
      // Write the updated games array back to the JSON file
      fs.writeFileSync(filePath, JSON.stringify(games, null, 2));
      return deletedGame;
    }
    return null;
  }
}

// Export the Game class so it can be used in other parts of the application
module.exports = {
  getAll: Game.getAll,
  getById: Game.getById,
  create: Game.create,
  update: Game.update,
  delete: Game.delete,
};

// This Game model demonstrates the 'M' in MVC (Model-View-Controller) architecture
// It encapsulates all the data-related logic and provides an interface for the controller to interact with the data
// In this implementation, these methods interact with a JSON file, which serves as a simple persistent storage
