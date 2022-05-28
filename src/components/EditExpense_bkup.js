import React from "react";
import ExpenseForm from "./ExpenseForm";
import { editExpense, removeExpense } from "../actions/expensesGen";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

class EditExpenseClass extends React.Component {
  //
  // Edit Expense
  editExpense = (expense) => {
    const { navigate } = this.props;
    const id = this.props.id;
    this.props.editExpenseData(id, expense);
    navigate("/");
  };

  // Remove Expense
  removeExpense = (id) => {
    const { navigate } = this.props;
    id = this.props.id;
    this.props.removeExpenseData(id);
    navigate("/");
  };

  // Render
  render() {
    return (
      <div>
        <h2>Edit Expense</h2>
        <ExpenseForm expense={this.props.expense} formData={this.editExpense} />
        <p>
          <button onClick={this.removeExpense}>Remove</button>
        </p>
      </div>
    );
  }
}

// Edit Expense Component
const EditExpense = (props) => {
  //
  // Expense ID
  const { id } = useParams();

  // Expense
  const expense = useSelector((state) =>
    state.expenses.find((expense) => expense.id === id)
  );

  // Navigation
  let navigate = useNavigate();

  // Dispatch
  const dispatch = useDispatch();

  // Dispatch Edit
  const editExpenseData = (id, expense) => {
    dispatch(editExpense(id, expense));
  };

  // Dispatch Remove
  const removeExpenseData = (id) => {
    dispatch(removeExpense({ id }));
  };

  // Render
  return (
    <EditExpenseClass
      {...props}
      id={id}
      expense={expense}
      navigate={navigate}
      editExpenseData={editExpenseData}
      removeExpenseData={removeExpenseData}
    />
  );
};

// const matchDispatchToProps = (dispatch) => {
//   return {
//     editExpenseData: (id, expense) => {
//       dispatch(editExpense(id, expense));
//     },
//     removeExpenseData: (id) => {
//       dispatch(removeExpense({ id }));
//     },
//   };
// };

export default EditExpense;
