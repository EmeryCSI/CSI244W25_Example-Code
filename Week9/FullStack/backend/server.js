// Import the Express framework, which simplifies the process of building web applications
const express = require("express");
// Import the cors middleware to enable Cross-Origin Resource Sharing
const cors = require("cors");

// Import the game routes from the gameroutes.js file
const gameRoutes = require("./routes/gameroutes");

// Create an instance of the Express application
const app = express();
// Set the port for the server to listen on, using an environment variable if available, or defaulting to 3000
const PORT = process.env.PORT || 5001;

// Middleware: Software that runs between the request and response cycle
// This middleware parses incoming JSON payloads in the request body
// It allows us to access the parsed data via req.body in our route handlers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Use the game routes for any requests that start with "/api/games"
app.use("/api/games", gameRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the API");
});

// Start the Express server and make it listen for incoming requests on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});

// This server.js file acts as the entry point for our application
// It sets up the Express app, configures middleware, defines routes, and starts the server
// The separation of routes into a separate file (movieroutes.js) follows the principle of modularity
// This makes our code more organized, easier to maintain, and scalable
