// Modules
import React from "react";
import ReactDOM from "react-dom/client";

// CSS
import "normalize.css/normalize.css";
import "./styles/styles.scss";

// App Router
import AppRouter from "./routes/AppRouter";

// Render Application
const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<AppRouter />);
