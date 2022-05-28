import React from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

import { addExpense } from "../actions/expensesGen";
import ExpenseForm from "./ExpenseForm.js";

// Class
class AddExpenseClass extends React.Component {
  //
  addExpense = (expense) => {
    const { navigate } = this.props;
    this.props.addExpenseData(expense);
    navigate("/");
  };

  render() {
    return (
      <div>
        <h2>Add Expense</h2>
        <ExpenseForm formData={this.addExpense} />
      </div>
    );
  }
}

// Add Expense
export const AddExpense = (props) => {
  let navigate = useNavigate();
  return <AddExpenseClass {...props} navigate={navigate} />;
};

// Map Dispatch to Props
const mapDispatchToProps = (dispatch) => ({
  addExpenseData: (expense) => {
    dispatch(addExpense(expense));
  },
});

// Default Export
export default connect(undefined, mapDispatchToProps)(AddExpense);
