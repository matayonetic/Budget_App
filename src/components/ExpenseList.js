import React from "react";
import { useSelector } from "../react-redux-hooks";
import ExpenseListItems from "./ExpenseListItems";
import getVisibleExpenses from "../selectors/getVisibleExpenses";

const ExpenseList = () => {
  const expenses = useSelector((state) =>
    getVisibleExpenses(state.expenses, state.filters)
  );
  return (
    <div className="content-container">
      <div className="list__header">
        <div className="show-for-mobile">
          {expenses.length > 1 ? "Expenses" : "Expense"}
        </div>
        <div className="show-for-desktop">
          {expenses.length > 1 ? "Expenses" : "Expense"}
        </div>
        <div className="show-for-desktop">Amount</div>
      </div>
      <div className="list-body">
        {expenses.length > 0 ? (
          expenses.map((expense) => {
            return <ExpenseListItems key={expense.id} {...expense} />;
          })
        ) : (
          <div className="list-item list-item__message">
            <span>No data found</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExpenseList;
