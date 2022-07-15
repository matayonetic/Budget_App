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
      <div className="page-header">
        <div className="content-container">
          <h2 className="page-header__title">Edit Expense</h2>
        </div>
      </div>
      <div className="content-container">
        <ExpenseForm expense={expense} formData={editMyExpense} />
        <button className="button button__secondary" onClick={removeMyExpense}>
          Remove Expense
        </button>
      </div>
    </div>
  );
};

export default EditExpense;
