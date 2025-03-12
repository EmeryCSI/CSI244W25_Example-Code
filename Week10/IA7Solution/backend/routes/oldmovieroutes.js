const express = require("express");
const MovieController = require("../controllers/moviecontroller");

// Create a new router object
// Routing in Express refers to determining how an application responds to a client request to a particular endpoint
// The router will be used to define the routes for our movie API
const router = express.Router();

// Define routes for different HTTP methods and URL paths
// Each route is associated with a specific controller method

// GET all movies
// This route responds to GET requests at the root path '/'
// It uses the getAllMovies method from the MovieController
router.get("/", MovieController.getAllMovies);

// GET a movie by ID
// This route responds to GET requests at the path '/:id'
// The ':id' is a route parameter which will be passed to the getMovieById method
router.get("/:id", MovieController.getMovieById);

// POST a new movie
// This route responds to POST requests at the root path '/'
// It uses the createMovie method to add a new movie
router.post("/", MovieController.createMovie);

// PUT (update) a movie
// This route responds to PUT requests at the path '/:id'
// It uses the updateMovie method to modify an existing movie
router.put("/:id", MovieController.updateMovie);

// DELETE a movie
// This route responds to DELETE requests at the path '/:id'
// It uses the deleteMovie method to remove a movie from the database
router.delete("/:id", MovieController.deleteMovie);

// Export the router so it can be used in other parts of the application
module.exports = router;

// This router demonstrates the principle of separation of concerns
// It defines the routes (URLs and HTTP methods) that the API will respond to,
// but delegates the actual handling of requests to the MovieController
// This separation makes the code more modular and easier to maintain
