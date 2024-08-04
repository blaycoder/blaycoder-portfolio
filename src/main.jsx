import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "./contexts/theme.jsx";
import { ErrorBoundary } from "react-error-boundary";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
