import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilter from "./ExpenseListFilter";

// Dashboard
const ExpenseDashboard = () => {
  return (
    <div>
      <ExpenseListFilter />
      <ExpenseList />
    </div>
  );
};

export default ExpenseDashboard;
