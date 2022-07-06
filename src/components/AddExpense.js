import React from "react";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "../react-redux-hooks";

import { startAddExpense } from "../actions/expensesGen";
import ExpenseForm from "./ExpenseForm.js";


// Add Expense
export const AddExpense = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Dispatch
  const add_expense = (expense) => {
    dispatch(startAddExpense(expense));
    navigate("/");
  };

  return (
    <div>
      <h2>Add Expense</h2>
      <ExpenseForm formData={add_expense} />
    </div>
  );
};

// Default Export
export default AddExpense;
