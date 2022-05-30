import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "../react-redux-hooks";
import { addExpense } from "../actions/expensesGen";
import ExpenseForm from "./ExpenseForm.js";

// Add Expense
const AddExpense = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Reusable Dispatch
  const addExpenseData = (expense) => {
    dispatch(addExpense(expense));
  };

  // Dispatch
  const add_expense = (expense) => {
    addExpenseData(expense);
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
