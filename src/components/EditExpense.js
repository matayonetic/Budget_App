import React from "react";
import ExpenseForm from "./ExpenseForm";
import { editExpense, removeExpense } from "../actions/expensesGen";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "../react-redux-hooks";

// Edit Expense Component
const EditExpense = () => {
  //
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Expense
  const expense = useSelector((state) =>
    state.expenses.find((expense) => expense.id === id)
  );

  // Reusable Dispatch
  const editExpenseData = (id, expense) => {
    dispatch(editExpense(id, expense));
  };

  const removeExpenseData = (id) => {
    dispatch(removeExpense({ id }));
  };

  // Edit Expense
  const editMyExpense = (expense) => {
    editExpenseData(id, expense);
    navigate("/");
  };

  // Remove Expense
  const removeMyExpense = () => {
    removeExpenseData(id);
    navigate("/");
  };

  // Render
  return (
    <div>
      <h2>Edit Expense</h2>
      <ExpenseForm expense={expense} formData={editMyExpense} />
      <p>
        <button onClick={removeMyExpense}>Remove</button>
      </p>
    </div>
  );
};

export default EditExpense;
