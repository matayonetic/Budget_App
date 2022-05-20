import React from "react";
import { useParams } from "react-router-dom";

// Edit Expense
const EditExpense = () => {
  let { id } = useParams();
  return (
    <div>
      <h2>Edit Expense Page</h2>
      <p>You are editing an expense with id of: {id}</p>
    </div>
  );
};

export default EditExpense;
