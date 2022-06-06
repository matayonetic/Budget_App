import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilter from "./ExpenseListFilter";
import ExpensesSummary from "./ExpensesSummary";

// Dashboard
const ExpenseDashboard = () => {
  return (
    <div>
      <ExpensesSummary />
      <ExpenseListFilter />
      <ExpenseList />
    </div>
  );
};

export default ExpenseDashboard;
