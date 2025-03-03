// Import the Express router
const express = require("express");
const router = express.Router();

// Import the GameController
const GameController = require("../controllers/gamecontroller");

// Define routes for games
// Each route is associated with a controller method that handles the business logic

// GET /api/games
// Retrieve all games
router.get("/", GameController.getAllGames);

// GET /api/games/:id
// Retrieve a specific game by ID
router.get("/:id", GameController.getGameById);

// POST /api/games
// Create a new game
router.post("/", GameController.createGame);

// PUT /api/games/:id
// Update an existing game
router.put("/:id", GameController.updateGame);

// DELETE /api/games/:id
// Delete a game
router.delete("/:id", GameController.deleteGame);

// Export the router for use in the main application
module.exports = router;

// These routes follow REST conventions:
// GET    /api/games     - Get all games
// GET    /api/games/:id - Get a specific game
// POST   /api/games     - Create a new game
// PUT    /api/games/:id - Update a game
// DELETE /api/games/:id - Delete a game
