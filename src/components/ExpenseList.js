import React from "react";
import { useSelector } from "../react-redux-hooks";
import ExpenseListItems from "./ExpenseListItems";
import getVisibleExpenses from "../selectors/getVisibleExpenses";

const ExpenseList = () => {
  const expenses = useSelector((state) =>
    getVisibleExpenses(state.expenses, state.filters)
  );
  return (
    <div>
      <h2>Expense List</h2>
      {expenses.length > 0 ? (
        expenses.map((expense) => {
          return <ExpenseListItems key={expense.id} {...expense} />;
        })
      ) : (
        <p>No data found</p>
      )}
    </div>
  );
};

export default ExpenseList;
