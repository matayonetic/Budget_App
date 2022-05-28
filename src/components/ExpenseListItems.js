import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const ExpenseListItems = ({ id, description, amount, note, createdAt }) => {
  return (
    <div>
      <Link to={`/edit/${id}`}>        
        <h3>{description}</h3>
      </Link>
      
      <p>Amount: {amount} </p>
      <p>Created At: {createdAt}</p>
      <p> Note: {note}</p>
    </div>
  );
};

export default connect()(ExpenseListItems);
