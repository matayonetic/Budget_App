import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment"
import numeral from "numeral"

export const ExpenseListItems = ({ id, description, amount, note, createdAt }) => {
  return (
    <div>
      <Link to={`/edit/${id}`}>        
        <h3>{description}</h3>
      </Link>
      
      <p>Amount: {numeral(amount / 100).format("$0,0.00")}</p>
      <p>Created At: {moment(createdAt).format('MMMM Do, YYYY' )}</p>
      <p> Note: {note}</p>
    </div>
  );
};

export default connect()(ExpenseListItems);
