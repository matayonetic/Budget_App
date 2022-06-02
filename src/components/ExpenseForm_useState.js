import React, { useState } from "react";
import moment from "moment";
import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

const ExpenseForm = (props) => {
  //
  // Tracking Form Inputs
  const [calenderFocused, setFocus] = useState(false);
  const [error, setError] = useState("");
  const [note, setNote] = useState(props.expense ? props.expense.note : "");

  const [amount, setAmount] = useState(
    props.expense ? (props.expense.amount / 100).toString() : ""
  );

  const [createdAt, setDate] = useState(moment());

  const [description, setDescription] = useState(
    props.expense ? props.expense.description : ""
  );

  // Change Description
  const changeDescription = (e) => {
    setDescription(e.target.value);
  };

  // Change Note
  const changeNote = (e) => {
    setNote(e.target.value);
  };

  // Change Amount
  const changeAmount = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      setAmount(amount);
    }
  };

  // Change Date
  const onDateChange = (createdAt) => {
    if (createdAt) {
      setDate(createdAt);
    }
  };

  // Change Focus
  const onFocusChange = ({ focused }) => {
    setFocus(focused);
  };

  // Submit Form
  const onSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount) {
      setError("Please check description or amount");
    } else {
      setError("");

      // Destructure "expense" argument
      props.formData({
        description,
        amount: parseFloat(amount, 10) * 100,
        createdAt: createdAt.valueOf(),
        note,
      });
    }
  };

  return (
    <div>
      {error && <p>{error}</p>}
      <form onSubmit={onSubmit}>
        <input
          placeholder="Description"
          type="text"
          value={description}
          onChange={changeDescription}
          autoFocus
        />
        <br />
        <br />
        <input
          placeholder="Amount"
          type="number"
          value={amount}
          onChange={changeAmount}
        />
        <br />
        <br />
        <SingleDatePicker
          date={createdAt}
          onDateChange={onDateChange}
          focused={calenderFocused}
          onFocusChange={onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
        <br />
        <br />
        <textarea
          placeholder="Additional notes"
          value={note}
          onChange={changeNote}
        ></textarea>
        <br />
        <br />
        <button>Add Expense</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
