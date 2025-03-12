import { Routes, Route, Link } from "react-router";
import MovieList from "./pages/MovieList";
import MovieDetails from "./pages/MovieDetails";
import CreateMovie from "./pages/CreateMovie";
import EditMovie from "./pages/EditMovie";
import DeleteMovie from "./pages/DeleteMovie";
import "./App.css";

/**
 * Main App Component
 *
 * This component sets up React Router to handle client-side routing in our single-page application.
 *
 * React Router allows us to:
 * 1. Create a multi-page feel in a single-page application without full page reloads
 * 2. Keep the UI in sync with the URL - users can bookmark specific states of the app
 * 3. Enable browser history navigation (back/forward buttons work as expected)
 * 4. Organize code by routes/pages, making the application more maintainable
 * 5. Enable deep linking - users can navigate directly to specific content
 *
 * How React Router works:
 * - <BrowserRouter> (set up in main.jsx) creates a router context for the application
 * - <Routes> defines a container for all route definitions
 * - <Route> components define path-to-component mappings
 * - <Link> components create navigation links that update the URL without page reloads
 * - Route parameters (like :id) capture dynamic segments of the URL
 *
 * Benefits of using React Router:
 * - Improved user experience with faster page transitions
 * - Better code organization by separating concerns into different page components
 * - SEO benefits from having distinct URLs for different content
 * - Enables complex navigation patterns like nested routes
 * - Maintains application state between "page" changes
 */
function App() {
  return (
    <div className="app">
      <h1>Movie Database</h1>
      {/* Navigation menu with Link components that change the URL without page reload */}
      <nav>
        <ul>
          <li>
            <Link to="/">Movie List</Link>
          </li>
          <li>
            <Link to="/create">Add New Movie</Link>
          </li>
        </ul>
      </nav>

      {/* Routes define which component to render for each URL path */}
      <Routes>
        {/* Root path shows the movie list */}
        <Route path="/" element={<MovieList />} />

        {/* Dynamic route with :id parameter to show details for a specific movie */}
        <Route path="/movies/:id" element={<MovieDetails />} />

        {/* Route for creating a new movie */}
        <Route path="/create" element={<CreateMovie />} />

        {/* Dynamic route for editing a specific movie */}
        <Route path="/edit/:id" element={<EditMovie />} />

        {/* Dynamic route for confirming deletion of a specific movie */}
        <Route path="/delete/:id" element={<DeleteMovie />} />
      </Routes>
    </div>
  );
}

export default App;
