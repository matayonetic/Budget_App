// Modules
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

// Files
import configureStore from "./store/configureStore";
import { startSetExpenses } from "./actions/expensesGen";
import { login, logout } from "./actions/auth";

// CSS
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";

// App Router
import AppRouter from "./routes/AppRouter";

// Firestore
import { auth } from "./firebase/firebase";

// Store
const store = configureStore();

// Loading Screen
const loading = <p>Loading...</p>;

// App (Linked to redux store)
const app = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

// Root
const root = ReactDOM.createRoot(document.getElementById("app"));

// Render 'Loading'
root.render(loading);

// Check Render
let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    root.render(app);
    hasRendered = true;
  }  
};

// Render Application
auth.onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid))    
    store.dispatch(startSetExpenses()).then(() => {      
      renderApp();
    });
  } else {
    store.dispatch(logout())
    renderApp();
  }
});
