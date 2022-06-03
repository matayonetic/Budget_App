import React from "react";
import moment from "moment";
import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.changeDescription = this.changeDescription.bind(this);
    this.changeAmount = this.changeAmount.bind(this);
    this.state = {
      description: props.expense ? props.expense.description : "",
      note: props.expense ? props.expense.note : "",
      amount: props.expense ? (props.expense.amount / 100).toString() : "",
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: "",
    };
  }

  // Change Description
  changeDescription(e) {
    const description = e.target.value;
    this.setState(() => {
      return {
        description,
      };
    });
  }

  // Change Amount
  changeAmount(e) {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  }

  // Change Note
  changeNote = (e) => {
    const note = e.target.value;
    this.setState(() => ({
      note,
    }));
  };  

  // Change Date
  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };

  // Focus Change
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };

  // Submit Form
  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      this.setState(() => {
        return {
          error: "Please check description or amount",
        };
      });
    } else {
      this.setState(() => ({
        error: "",
      }));
      this.props.formData({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note,
      });
    }
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Enter description"
            autoFocus
            value={this.state.description}
            onChange={this.changeDescription}
          />
          <br />
          <br />
          <input
            type="number"
            placeholder="Enter amount"
            value={this.state.amount}
            onChange={this.changeAmount}
          />
          <br />
          <br />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <br />
          <br />
          <textarea
            placeholder="Add a note(optional)..."
            value={this.state.note}
            onChange={this.changeNote}
          ></textarea>
          <br />
          <br />
          <button>Add Expense</button>
        </form>
      </div>
    );
  }
}
