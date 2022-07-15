import React from "react";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "../react-redux-hooks";

import { startAddExpense } from "../actions/expensesGen";
import ExpenseForm from "./ExpenseForm.js";

// Add Expense
const AddExpense = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Dispatch
  const add_expense = (expense) => {
    dispatch(startAddExpense(expense));
    navigate("/dashboard");
  };

  return (
    <div>
      <div className="page-header">
        <div className="content-container">
          <h2 className="page-header__title">Add Expense</h2>          
        </div>
      </div>
      <div className="content-container">
      <ExpenseForm formData={add_expense} />
      </div>
    </div>
  );
};

// Default Export
export default AddExpense;
