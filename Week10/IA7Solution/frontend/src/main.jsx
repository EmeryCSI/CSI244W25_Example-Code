import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App.jsx";
import "./index.css";

/**
 * Application Entry Point
 *
 * Here we set up React Router by wrapping our App component with BrowserRouter.
 *
 * BrowserRouter:
 * - Creates a router context that enables client-side routing
 * - Uses the HTML5 History API to keep the UI in sync with the URL
 * - Allows for clean URLs without hash fragments (#)
 * - Provides the foundation for all routing functionality in the app
 *
 * By wrapping our entire application with BrowserRouter, we ensure that
 * all components have access to routing capabilities through hooks like
 * useNavigate, useParams, and useLocation.
 */
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
