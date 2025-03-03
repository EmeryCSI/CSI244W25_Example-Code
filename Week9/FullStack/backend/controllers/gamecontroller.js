// Import the Game model
const Game = require("../models/game");

class GameController {
  // Get all games
  static getAllGames(req, res) {
    const games = Game.getAll();
    res.json(games);
  }

  // Get a game by ID
  static getGameById(req, res) {
    const id = parseInt(req.params.id);
    const game = Game.getById(id);

    if (game) {
      res.json(game);
    } else {
      res.status(404).json({ message: "Game not found" });
    }
  }

  // Create a new game
  static createGame(req, res) {
    const newGame = Game.create(req.body);
    res.status(201).json(newGame);
  }

  // Update a game
  static updateGame(req, res) {
    const id = parseInt(req.params.id);
    const updatedGame = Game.update(id, req.body);

    if (updatedGame) {
      res.json(updatedGame);
    } else {
      res.status(404).json({ message: "Game not found" });
    }
  }

  // Delete a game
  static deleteGame(req, res) {
    const id = parseInt(req.params.id);
    const deletedGame = Game.delete(id);

    if (deletedGame) {
      res.json({ message: "Game deleted successfully" });
    } else {
      res.status(404).json({ message: "Game not found" });
    }
  }
}

module.exports = GameController;
