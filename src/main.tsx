import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

// Get the root element
const rootElement = document.getElementById("root");

// Check if element exists (TypeScript safety)
if (!rootElement) {
  throw new Error("Root element not found");
}

// Create root and render
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);