// Modules
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

// Files
import configureStore from "./store/configureStore";

// CSS
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";

// App Router
import AppRouter from "./routes/AppRouter";

// Link to Database
import "./firebase/firebase"

// Store
const store = configureStore();

// Link App to Store
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

// Render Application
const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(jsx);
