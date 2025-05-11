import React from "react";
import ReactDOM from "react-dom/client";
import LoginPage from "./LoginPage";
import "./index.css"; // Ensure Tailwind and global styles are imported

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LoginPage />
  </React.StrictMode>,
);
