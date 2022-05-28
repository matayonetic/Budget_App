// Modules
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

// Files
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expensesGen";
import getVisibleExpenses from "./selectors/getVisibleExpenses";

// CSS
import "normalize.css/normalize.css";
import "./styles/styles.scss";

// App Router
import AppRouter from "./routes/AppRouter";

// Store
const store = configureStore();

// Subscribe
store.subscribe(() => {
  const state = store.getState()
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
  console.log(visibleExpenses);  
});

// Sample Expenses
const e1 = store.dispatch(
  addExpense({
    description: "Item One",
    amount: 22,
    createdAt: 1653555600000
  })
);

const e2 = store.dispatch(
  addExpense({
    description: "Item Two",
    amount: 18,
    createdAt: 1653705599156
  })
);

// Link App to Store
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

// Render Application
const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(jsx);
