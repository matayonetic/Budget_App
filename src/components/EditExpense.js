import React from "react";
import ExpenseForm from "./ExpenseForm";
import { startEditExpense, startRemoveExpense } from "../actions/expensesGen";
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

  // Edit Expense
  const editMyExpense = (expense) => {
    dispatch(startEditExpense(id, expense));
    navigate("/dashboard");
  };

  // Remove Expense
  const removeMyExpense = () => {
    dispatch(startRemoveExpense({ id }));
    navigate("/dashboard");
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
